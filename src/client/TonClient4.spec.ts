import { Address, beginCell } from 'ton-core';
import { TonClient } from './TonClient';
import { TonClient4 } from './TonClient4';

let describeConditional = process.env.TEST_CLIENTS ? describe : describe.skip;

describeConditional('TonClient', () => {
    let client = new TonClient4({
        endpoint: 'https://mainnet-v4.tonhubapi.com',
    });
    const testAddress = Address.parse('EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N');

    let seqno!: number;
    beforeAll(async () => {
        let last = await client.getLastBlock();
        seqno = last.last.seqno;
    });

    it('should get account with transactions', async () => {
        let account = await client.getAccount(seqno, testAddress);
        let accountLite = await client.getAccountLite(seqno, testAddress);

        let transactions = await client.getAccountTransactions(testAddress, BigInt(accountLite.account.last!.lt), Buffer.from(accountLite.account.last!.hash, 'base64'));
        let result = await client.isAccountChanged(seqno, testAddress, BigInt(accountLite.account.last!.lt));
        console.log(transactions, result);

        console.log(account, accountLite);
    });

    it('should get config', async () => {
        let config = await client.getConfig(seqno);
        console.log(config);
    });

    it('should get block', async () => {
        let result = await client.getBlock(seqno);
        console.log(result);
    });

    it('should run method', async () => {
        let result = await client.runMethod(seqno, testAddress, 'seqno');
        console.log(result);
    });
});
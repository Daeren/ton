# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [13.4.0] - 2023-03-01

## Added
- `MultisigWallet`, `MultisigOrder` and `MultisigOrderBuilder`

## [13.3.0] - 2023-01-05

## Added
- `getTransaction` to `TonClient4` to get a single transaction by id

## [13.2.0] - 2022-12-31

## Changed
- Updaded `ton-core` and renambed `AccountState` to `ContractState`
- Replaced internal usafe of a `openContract` with `ton-core` one

## [13.1.0] - 2022-12-31

## Changed
- Upgraded `ton-core` and removed legacy usage of `Message` type

## [13.0.0] - 2022-12-29

## Changed
- Large refactoring, removing a lot of obsolete features and replacing low level classes like `Cell` with `ton-core` implementation
- New way to work with contracts
- Explicit work with wallet contracts
- Unify stack operations in `TonClient` and `TonClient4`
- Merged `TupleSlice` and `TupleSlice4` into `TupleReader` from `ton-core`

## Removed
- Removed magical `Wallet` operations

## [12.3.3] - 2022-12-22
# Changed
- Improved BOC serialization

## [12.3.2]
- Fix unicode symbols in `readString` function

## [10.4.0]
- `TonClient4` - client for new API

## [10.0.0]-[10.3.0]
- Exotic Cells parsing
- `readBitString`
- VM Stack parsing

## [9.2.0]
- Builder and dict builder

## [9.1.0]
- Support for API token

## [9.0.0]
- Synchronous Cell's `hash` and a lot of related functions like `contractAddress`.

## [6.10.0]
- Better compatibility with webpack

## [6.8.0]
- Allow large comments

## [6.7.0]
- Exported all parsing methods and `contractAddress`

## [6.6.0]
- ADNL address

## [6.5.2]
- Improve Internal/External messages typings

## [6.5.0-6.5.1]
- Ability to include first transaction in getTransactions method

## [6.4.0]
- Better webpack support

## [6.3.0]

- Added dictionary serialization
- Added `equals` to Cell

## [6.1.0-6.2.1]

- Added parsing of int (as addition to uint) in `BitStreamReader` and `Slice`

## [6.0.0]

- [BREAKING] Change `RawMessage` to `CellMessage` and use `RawMessage` in parseTransaction
- Improve parseTransaction typings. Added:
    - RawAccountStatus
    - RawCurrencyCollection
    - RawCommonMessageInfo
    - RawStateInit
    - RawMessage
    - RawHashUpdate
    - RawAccountStatusChange
    - RawStorageUsedShort
    - RawStoragePhase
    - RawComputePhase
    - RawActionPhase
    - RawBouncePhase
    - RawTransactionDescription
    - RawTransaction

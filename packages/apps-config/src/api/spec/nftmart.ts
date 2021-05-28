// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */
/* eslint-disable camelcase */

import { OverrideBundleDefinition } from '@polkadot/types/types';

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],

      types : {
        Properties: 'u8',
        NFTMetadata: 'Vec<u8>',
        BlockNumber: 'u32',
        BlockNumberOf: 'BlockNumber',
        BlockNumberFor: 'BlockNumber',
        GlobalId: 'u64',
        CurrencyId: 'u32',
        CurrencyIdOf: 'CurrencyId',
        Amount: 'i128',
        AmountOf: 'Amount',
        CategoryId: 'u32',
        CategoryIdOf: 'CategoryId',
        ClassId: 'u32',
        ClassIdOf: 'ClassId',
        TokenId: 'u64',
        TokenIdOf: 'TokenId',
    
        OrmlAccountData: {
          free: 'Balance',
          reserved: 'Balance',
          frozen: 'Balance',
        },
        
        OrmlBalanceLock: {
          amount: 'Balance',
          id: 'LockIdentifier'
        },
        
        ClassInfoOf: {
          metadata: 'NFTMetadata',
          totalIssuance: 'Compact<TokenId>',
          owner: 'AccountId',
          data: 'ClassData'
        },
    
        ClassData: {
          deposit: 'Compact<Balance>',
          properties: 'Properties',
          name: 'Vec<u8>',
          description: 'Vec<u8>',
          createBlock: 'Compact<BlockNumberOf>'
        },
    
        TokenInfoOf: {
          metadata: 'NFTMetadata',
          data: 'TokenData',
          quantity: 'Compact<TokenId>',
        },
    
        TokenData: {
          deposit: 'Compact<Balance>',
          createBlock: 'Compact<BlockNumberOf>',
          royalty: 'bool',
          creator: 'AccountId',
          royalty_beneficiary: 'AccountId',
        },

        AccountToken: {
          quantity: 'Compact<TokenId>',
          reserved: 'Compact<TokenId>',
        },
    
        CategoryData: {
          metadata: 'NFTMetadata',
          nftCount: 'Compact<Balance>'
        },
    
        OrderItem: {
          classId: 'Compact<ClassId>',
          tokenId: 'Compact<TokenId>',
          quantity: 'Compact<TokenId>',
        },
    
        OrderOf: {
          currencyId: 'Compact<CurrencyId>',
          deposit: 'Compact<Balance>',
          price: 'Compact<Balance>',
          deadline: 'Compact<BlockNumberOf>',
          categoryId: 'Compact<CategoryId>',
          items: 'Vec<OrderItem>',
        },
    
        OfferOf: {
          currencyId: 'Compact<CurrencyId>',
          price: 'Compact<Balance>',
          deadline: 'Compact<BlockNumberOf>',
          categoryId: 'Compact<CategoryId>',
          items: 'Vec<OrderItem>',
        },

        BritishAuctionOf: {
          currencyId: 'Compact<CurrencyId>',
          hammerPrice: 'Compact<Balance>',
          minRaise: 'Compact<PerU16>',
          deposit: 'Compact<Balance>',
          initPrice: 'Compact<Balance>',
          deadline: 'Compact<BlockNumberOf>',
          allowDelay: 'bool',
          categoryId: 'Compact<CategoryId>',
          items: 'Vec<OrderItem>',
        },
    
        BritishAuctionBidOf: {
          lastBidPrice: 'Compact<Balance>',
          lastBidAccount: 'Option<AccountId>',
          lastBidBlock: 'Compact<BlockNumberOf>',
        },
    
        DutchAuctionOf: {
          currencyId: 'Compact<CurrencyId>',
          categoryId: 'Compact<CategoryId>',
          deposit: 'Compact<Balance>',
          minPrice: 'Compact<Balance>',
          maxPrice: 'Compact<Balance>',
          deadline: 'Compact<BlockNumberOf>',
          createdBlock: 'Compact<BlockNumberOf>',
          items: 'Vec<OrderItem>',
          allowBritishAuction: 'bool',
          minRaise: 'Compact<PerU16>',
        },
    
        DutchAuctionBidOf: 'BritishAuctionBidOf',
      }

    }
  ]
};

export default definitions;

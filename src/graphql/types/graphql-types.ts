import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/* tslint:disable */


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  UUID: any,
  /** 
 * TODO: Fix timezone handling
   * valid format: '2019-01-01T00:00:00Z'
 */
  DateTime: any,
  /** valid format: YYYY-MM-DD */
  Date: any,
  /** valid format: '00:00:00Z' or '00:00:00+00:00' */
  Time: any,
};

export type Address = {
   __typename?: 'Address',
  id: Scalars['UUID'],
  companyId: Scalars['String'],
  name: Scalars['String'],
  address1: Scalars['String'],
  address2?: Maybe<Scalars['String']>,
  city: Scalars['String'],
  state: Scalars['String'],
  zip: Scalars['String'],
  create?: Maybe<Scalars['DateTime']>,
  update?: Maybe<Scalars['DateTime']>,
};

export type AddressEdit = {
  name?: Maybe<Scalars['String']>,
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  zip?: Maybe<Scalars['String']>,
};

export type AddressesQueryOptions = {
  searchTerm?: Maybe<Scalars['String']>,
};

export type AddressInput = {
  companyId: Scalars['String'],
  name: Scalars['String'],
  address1: Scalars['String'],
  address2?: Maybe<Scalars['String']>,
  city: Scalars['String'],
  state: Scalars['String'],
  zip: Scalars['String'],
};



export type Mutation = {
   __typename?: 'Mutation',
  createAddress: Address,
  deleteAddress: Scalars['UUID'],
  editAddress: Address,
};


export type MutationCreateAddressArgs = {
  addressInput: AddressInput
};


export type MutationDeleteAddressArgs = {
  id: Scalars['UUID']
};


export type MutationEditAddressArgs = {
  id: Scalars['UUID'],
  addressEdit: AddressEdit
};

export type Query = {
   __typename?: 'Query',
  Address: Address,
  Addresses: Array<Address>,
};


export type QueryAddressArgs = {
  id: Scalars['ID']
};


export type QueryAddressesArgs = {
  companyId: Scalars['String'],
  options?: Maybe<AddressesQueryOptions>
};



export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Address: ResolverTypeWrapper<Address>,
  UUID: ResolverTypeWrapper<Scalars['UUID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  AddressesQueryOptions: AddressesQueryOptions,
  Mutation: ResolverTypeWrapper<{}>,
  AddressInput: AddressInput,
  AddressEdit: AddressEdit,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Time: ResolverTypeWrapper<Scalars['Time']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  ID: Scalars['ID'],
  Address: Address,
  UUID: Scalars['UUID'],
  String: Scalars['String'],
  DateTime: Scalars['DateTime'],
  AddressesQueryOptions: AddressesQueryOptions,
  Mutation: {},
  AddressInput: AddressInput,
  AddressEdit: AddressEdit,
  Boolean: Scalars['Boolean'],
  Date: Scalars['Date'],
  Time: Scalars['Time'],
}>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>,
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  address1?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  create?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  update?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationCreateAddressArgs, 'addressInput'>>,
  deleteAddress?: Resolver<ResolversTypes['UUID'], ParentType, ContextType, RequireFields<MutationDeleteAddressArgs, 'id'>>,
  editAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationEditAddressArgs, 'id' | 'addressEdit'>>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  Address?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<QueryAddressArgs, 'id'>>,
  Addresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<QueryAddressesArgs, 'companyId'>>,
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time'
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID'
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Address?: AddressResolvers<ContextType>,
  Date?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Time?: GraphQLScalarType,
  UUID?: GraphQLScalarType,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

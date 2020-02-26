import { QueryResolvers, MutationResolvers, Resolvers } from "./types/graphql-types";
import { Context } from "../shared/context";

export type AppQueryResolvers = QueryResolvers<Context>;
export type AppMutationResolvers = MutationResolvers<Context>;
export type GatherResolvers = Resolvers<Context>;

import { IncomingHttpHeaders } from "http";
import e from "express";
// import { GatherRoles } from "@/graphql/permissions/access";
// import { GatherClaims } from "@/graphql/types/graphql-types";
// import { userLoader } from "@/graphql/loaders/UserLoader";
// import { locationLoader } from "@/graphql/loaders/LocationLoader";
// import { accountLoader } from "@/graphql/loaders/AccountLoader";
// import { orderItemLoader } from "@/graphql/loaders/OrderItemLoader";
// import {
//     itemLoader,
//     orderLoader,
//     packableLoader,
//     roomLoader,
//     contactLoader,
//     eventLoader,
//     fileLoader
// } from "@/graphql/loaders";

// export interface GatherAuth {
//     readonly credentials: Readonly<{
//         User: string;
//         Company: string;
//         permissions: { [locations: string]: GatherRoles };
//         superadmin: boolean;
//         company_owner: boolean;
//         expires: string;
//         roles: Readonly<{ [P in GatherRoles]: string[] }>;
//     }>;
// }

interface GatherRequest {
    readonly headers: IncomingHttpHeaders;
}

export type Context = Readonly<{
    request: GatherRequest;
    response: e.Response;
}>;

import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";
import GraphQLUUID from "graphql-type-uuid";
// import { File } from "@/orm/repository/rethink/rethinkTypes";
import { AppQueryResolvers, AppMutationResolvers, GatherResolvers } from "../context";
// import {
//     orderRepository,
//     eventRepository,
//     orderItemRepository,
//     itemRepository,
//     packableRepository
// } from "@/orm";

// import { LocationsQueryResolvers } from "./location/locationResolver";
// import { BookingsQueryResolvers } from "./booking/bookingResolver";
// import { LeadsQueryResolvers } from "./lead/leadResolver";
// import { RoomsQueryResolvers } from "./room/roomResolver";
// import { UsersQueryResolvers } from "./user/userResolver";
// import { FilterQueryResolver, FilterMutationResolver } from "./filter/filterResolver";
// import { ContactsQueryResolvers } from "./contact/contactResolver";
// import { EventsQueryResolver, EventMutationResolver } from "./event/eventResolver";
// import { OrdersQueryResolver, OrderMutationResolver } from "./order/orderResolver";
// import { OrderItemsQueryResolver, OrderItemMutationResolver } from "./orderItem/orderItemResolver";
// import { ActivityQueryResolver, ActivityMutationResolver } from "./activity/activityResolver";
// import {
//     OrderFeeDiscountQueryResolver,
//     OrderFeeDiscountMutationResolver
// } from "./orderFeeDiscount/orderFeeDiscountResolver";
// import {
//     ReservationsQueryResolver,
//     ReservationMutationResolver
// } from "./reservation/reservationResolver";
// import {
//     EventContactMutationResolver,
//     EventContactsQueryResolver
// } from "./eventContact/eventContactResolver";
// import { getOrderSubtotal, getOrderTotal } from "./order/orderService";
// import { ItemsQueryResolver, ItemMutationResolver } from "./item/itemResolver";
// import { PackableQueryResolver, PackableMutationResolver } from "./packable/packableResolver";
// import {
//     ItemPackableQueryResolver,
//     ItemPackableMutationResolver
// } from "./itemPackable/itemPackableResolver";
// import {
//     OrderPackableQueryResolver,
//     OrderPackableMutationResolver
// } from "./orderPackable/orderPackableResolver";
// import { AuthMutationResolver } from "./auth/authResolver";
import { AddressQueryResolver, AddressMutationResolver } from "./address/addressResolver";
// import { AccountTestQueryResolver, AccountTestMutationResolver } from "./accountTest/accountTestResolver";

const Query: AppQueryResolvers = {
    // ...EventsQueryResolver,
    // ...OrdersQueryResolver,
    // ...OrderItemsQueryResolver,
    // ...LocationsQueryResolvers,
    // ...RoomsQueryResolvers,
    // ...ContactsQueryResolvers,
    // ...UsersQueryResolvers,
    // ...ActivityQueryResolver,
    // ...OrderFeeDiscountQueryResolver,
    // ...ReservationsQueryResolver,
    // ...EventContactsQueryResolver,
    // ...FilterQueryResolver,
    // ...BookingsQueryResolvers,
    // ...LeadsQueryResolvers,
    // ...ItemsQueryResolver,
    // ...PackableQueryResolver,
    // ...ItemPackableQueryResolver,
    // ...OrderPackableQueryResolver,
    ...AddressQueryResolver,
    // ...AccountTestQueryResolver
};

const Mutation: AppMutationResolvers = {
    // ...EventMutationResolver,
    // ...FilterMutationResolver,
    // ...OrderMutationResolver,
    // ...OrderItemMutationResolver,
    // ...ActivityMutationResolver,
    // ...OrderFeeDiscountMutationResolver,
    // ...ReservationMutationResolver,
    // ...EventContactMutationResolver,
    // ...ItemMutationResolver,
    // ...PackableMutationResolver,
    // ...ItemPackableMutationResolver,
    // ...OrderPackableMutationResolver,
    // ...AuthMutationResolver,
    ...AddressMutationResolver,
    // ...AccountTestMutationResolver
};

const resolvers: GatherResolvers = {
    Query,
    Mutation,
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime,
    UUID: GraphQLUUID
};

export default resolvers;

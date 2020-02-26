import { AppQueryResolvers, AppMutationResolvers } from "../../context";
import { Address } from "@/orm/entity";
import { addressRepository } from "@/orm";
import { AddressEdit, AddressInput, AddressesQueryOptions } from "../../types/graphql-types";

export const AddressQueryResolver: Partial<AppQueryResolvers> = {
    Address: async (_, args: { id: string }, ctx) => {
        return addressRepository.findOneById(args.id);
    },
    Addresses: async (
        _,
        args: {
            companyId: string;
            options?: AddressesQueryOptions;
        }
    ) => {
        return addressRepository.findAddresses(args.companyId, args.options || {});
    }
};

export const AddressMutationResolver: Partial<AppMutationResolvers> = {
    createAddress: async (_, args: { addressInput: AddressInput }, ctx) => {
        const address = Address.createAddress({
            ...args.addressInput
        });
        return addressRepository.create(address);
    },
    editAddress: async (_, args: { id: string; addressEdit: AddressEdit }, ctx) => {
        return addressRepository.update(args.id, args.addressEdit);
    },
    deleteAddress: async (_, args: { id: string }, ctx) => {
        return addressRepository.deleteOneById(args.id);
    }
};

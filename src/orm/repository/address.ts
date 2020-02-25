import { EntityManager } from "typeorm";
import { BaseEntityRepository } from "./base";
import { Address } from "../entity";
// import { AddressesQueryOptions } from "../../graphql/types/graphql-types";

export class AddressRepository extends BaseEntityRepository<Address> {
    constructor(transactionalEntityManager?: EntityManager) {
        super(Address, transactionalEntityManager);
    }

    public async findAddresses(companyId: string) {
        // , options?: AddressesQueryOptions
        const query = this.createQueryBuilder("address");

        query.where("address.companyId = :companyId", { companyId });
        // if (options && options.searchTerm) {
        //     const searchTermParam = { name: `%${options.searchTerm}%` };
        //     query.andWhere(
        //         "(address.name ILIKE :name OR address1 ILIKE :name OR address2 ILIKE :name OR city ILIKE :name OR address.state ILIKE :name OR zip ILIKE :name)",
        //         searchTermParam
        //     );
        // }

        return query.getMany();
    }
}

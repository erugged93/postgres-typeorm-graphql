import { Entity, Column, TableInheritance, Index } from "@gather/typeorm";
import { Base, Input, WithoutId } from "./BaseEntity";

@Entity()
export class Address extends Base {
    public static createAddress(activity: Input<Address>) {
        return new Address(activity) as WithoutId<Address>;
    }

    @Index()
    @Column()
    public readonly companyId: string;

    @Column()
    public readonly name: string;

    @Column()
    public readonly address1: string;

    @Column({ nullable: true })
    public readonly address2?: string;

    @Column()
    public readonly city: string;

    @Column()
    public readonly state: string;

    @Column()
    public readonly zip: string;

    protected constructor(activity: Input<Address>) {
        super();
        this.companyId = activity.companyId;
        this.name = activity.name;
        this.address1 = activity.address1;
        this.address2 = activity.address2;
        this.city = activity.city;
        this.state = activity.state;
        this.zip = activity.zip;
    }
}

export type AddressInput = Input<Address>;

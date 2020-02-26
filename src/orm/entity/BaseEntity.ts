import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from "@gather/typeorm";

export abstract class Base {
    @PrimaryGeneratedColumn("uuid")
    public readonly id!: string;

    @CreateDateColumn()
    @Index()
    public readonly create!: Date;

    @UpdateDateColumn()
    public readonly update!: Date;
}

export type Input<T extends Base> = Omit<T, keyof Base>;
export type WithoutId<T extends Base> = Input<T>;

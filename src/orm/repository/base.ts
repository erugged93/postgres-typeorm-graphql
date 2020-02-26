import {
    Repository,
    FindOneOptions,
    FindManyOptions,
    EntitySchema,
    EntityManager,
    getRepository
} from "@gather/typeorm";
import { QueryDeepPartialEntity } from "@gather/typeorm/query-builder/QueryPartialEntity";

import { Base, WithoutId } from "../entity/BaseEntity";
import { EntityNotFoundError } from "../errors";

export const DEFAULT_TAKE = 50;
export const DEFAULT_SKIP = 0;

export const DefaultFindOptions = {
    skip: DEFAULT_SKIP,
    take: DEFAULT_TAKE
};

export interface WhereClause {
    readonly query: string;
    readonly params: {};
}

export abstract class BaseEntityRepository<T extends Base> {
    protected repository: Repository<T>;
    protected tableName: string;

    constructor(
        // tslint:disable-next-line:ban-types
        protected entity: string | Function | EntitySchema<T> | (new () => T),
        protected entityManager?: EntityManager
    ) {
        this.repository = entityManager
            ? entityManager.getRepository(entity)
            : getRepository(entity);
        this.tableName = this.repository.metadata.tableName;
    }

    public createQueryBuilder(alias?: string) {
        return this.repository.createQueryBuilder(alias);
    }

    public async findOneById(id: string, options: FindOneOptions<T> = {}): Promise<T> {
        const result = await this.repository.findOne(id, options);

        if (!result) throw new EntityNotFoundError(`${this.tableName} with id ${id} not found`);

        return result;
    }

    public async findOne(options: FindOneOptions<T> = {}): Promise<T> {
        const result = await this.repository.findOne(undefined, options);

        if (!result) throw new EntityNotFoundError(`${this.tableName} not found`);

        return result;
    }

    public async findManyByIds(
        ids: ReadonlyArray<string>,
        options: FindManyOptions<T> = {}
    ): Promise<T[]> {
        return this.repository.findByIds(ids as string[], options);
    }

    public async findAll(options: FindManyOptions<T> = {}): Promise<T[]> {
        options = { ...DefaultFindOptions, ...options };
        return this.repository.find(options);
    }

    public async count(options: FindManyOptions<T> = {}): Promise<number> {
        return this.repository.count(options);
    }

    public async deleteOneById(id: string): Promise<string> {
        const deleteResults = await this.repository.delete(id);

        if (deleteResults.affected === 0) {
            throw new EntityNotFoundError(`${this.tableName} with id ${id} not found`);
        }

        return id;
    }

    public async deleteManyByIds(ids: string[]): Promise<string[]> {
        const deleteResults = await this.repository.delete(ids);

        if (deleteResults.affected === 0) {
            throw new EntityNotFoundError(`${this.tableName} with ids ${ids.join(", ")} not found`);
        }

        return ids;
    }

    public async update(id: string, entityUpdates: QueryDeepPartialEntity<T>): Promise<T> {
        const fullEntity = await this.findOneById(id);

        if (!fullEntity) throw new EntityNotFoundError(`${this.tableName} with id ${id} not found`);

        const updatedEntity = { ...fullEntity, ...entityUpdates };
        console.log("updatedEntity", updatedEntity);

        await this.repository.update(id, { ...entityUpdates } as any);

        return updatedEntity;
    }

    public async create(entity: WithoutId<T>) {
        return this.repository.save(entity as any) as Promise<T>;
    }
}

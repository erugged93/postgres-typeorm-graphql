import { createConnection, ConnectionOptions } from "typeorm";
// tslint:disable-next-line:no-var-requires
const ormConfig = require("../../ormconfig");

import {
    AddressRepository
} from "./repository";

export let addressRepository: AddressRepository;

const getConnectionOptionsByName = (config: ConnectionOptions[], name: string) => {
    let connectionOptions = config.find((options) => options.name === name);

    if (!connectionOptions) {
        connectionOptions = config.find((options) => options.name === "default");
    }

    if (!connectionOptions) throw new Error("Default connection options not found.");

    return connectionOptions;
};

export const getConnectionOptions = (config: ConnectionOptions | ConnectionOptions[]) => {
    const connectionName = process.env.TYPEORM_CONNECTION || "default";

    if (Array.isArray(config)) return getConnectionOptionsByName(config, connectionName);

    return config;
};

export async function initPgConnection() {
    try {
        const connectionOptions = await getConnectionOptions(ormConfig);
        await createConnection({ ...connectionOptions, name: "default" });
        addressRepository = new AddressRepository();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

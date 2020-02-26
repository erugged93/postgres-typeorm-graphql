const SnakeNamingStrategy = require("./src/orm/snake-naming.strategy").SnakeNamingStrategy;

module.exports = {
    type: "postgres",
    name: "default",
    host: process.env.POSTGRES_HOST || "localhost",
    port: process.env.POSTGRES_PORT || 54320,
    username: process.env.POSTGRES_USERNAME || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DATABASE || "postgres",
    synchronize: false,
    entities: ["src/orm/entity/Address.ts"],
    migrations: ["src/orm/migration/**/*.ts"],
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
    cli: {
        entitiesDir: "src/orm/entity/",
        migrationsDir: "src/orm/migration/"
    }
};

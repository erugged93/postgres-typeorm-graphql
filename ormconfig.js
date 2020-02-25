const fs = require("fs");
const SnakeNamingStrategy = require("./src/orm/snake-naming.strategy").SnakeNamingStrategy;
const host = process.env.POSTGRES_HOST || "localhost";

module.exports = [
    {
        type: "postgres",
        name: "default",
        host,
        port: process.env.POSTGRES_PORT || 54320,
        username: process.env.POSTGRES_USERNAME || "postgres",
        password: process.env.POSTGRES_PASSWORD || "postgres",
        database: process.env.POSTGRES_DATABASE || "postgres",
        synchronize: false,
        entities: ["src/orm/entity/**/*.ts"],
        migrations: ["src/orm/migration/**/*.ts"],
        logging: false,
        namingStrategy: new SnakeNamingStrategy(),
        cli: {
            entitiesDir: "src/orm/entity/",
            migrationsDir: "src/orm/migration/"
        },
        ssl:
            host === "localhost"
                ? null
                : {
                      sslmode: "verify-full",
                      ca: fs.readFileSync("src/orm/certificates/rds-ca-2019-root.pem").toString()
                  }
    },
    {
        type: "postgres",
        name: "test",
        host: "localhost",
        port: 5433,
        username: process.env.POSTGRES_USERNAME || "postgres",
        password: process.env.POSTGRES_PASSWORD || "postgres",
        database: process.env.POSTGRES_DATABASE || "postgres",
        synchronize: false,
        entities: ["src/orm/entity/**/*.ts"],
        migrations: ["src/orm/migration/**/*.ts"],
        logging: false,
        namingStrategy: new SnakeNamingStrategy()
    }
];


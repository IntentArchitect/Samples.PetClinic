"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const env_var_1 = require("env-var");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const commonConf = {
    ENTITIES: [__dirname + '/domain/entities/*.entity{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    MIGRATIONS_RUN: (0, env_var_1.get)('DB_MIGRATIONS_RUN').asBool(),
    SYNCHRONIZE: (0, env_var_1.get)('DB_SYNCHRONIZE').asBool(),
};
const typeOrmConfig = {
    name: 'default',
    type: 'sqlite',
    database: './target/sqlite-dev-db.sql',
    logging: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
    synchronize: commonConf.SYNCHRONIZE,
};
exports.typeOrmConfig = typeOrmConfig;
if (process.env.NODE_ENV === 'prod') {
}
if (process.env.NODE_ENV === 'test') {
}
//# sourceMappingURL=orm.config.js.map
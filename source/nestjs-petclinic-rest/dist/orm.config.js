"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormconfig = void 0;
const commonConf = {
    SYNCRONIZE: false,
    ENTITIES: [__dirname + '/domain/entities/*.entity{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    CLI: {
        migrationsDir: 'src/migrations'
    },
    MIGRATIONS_RUN: true
};
let ormconfig = {
    name: 'default',
    type: 'sqlite',
    database: './target/sqlite-dev-db.sql',
    logging: true,
    synchronize: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN
};
exports.ormconfig = ormconfig;
if (process.env.NODE_ENV === 'prod') {
}
if (process.env.NODE_ENV === 'test') {
}
//# sourceMappingURL=orm.config.js.map
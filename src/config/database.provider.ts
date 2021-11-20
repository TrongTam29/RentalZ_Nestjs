import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig } from "src/config/database.config";
import { UserComment } from "src/user-comment/user-comment.model";
import { House } from "../house/house.model";
import { User } from "../user/user.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: DatabaseConfig.dialect,
                host: DatabaseConfig.host.toString(),
                port: Number(DatabaseConfig.port),
                username: DatabaseConfig.username.toString(),
                password: DatabaseConfig.password.toString(),
                database: DatabaseConfig.database.toString(),
                ssl: true,
                dialectOptions: {
                    // ssl: {
                    //     require: true,
                    //     rejectUnauthorized: false,
                    // },
                },
                logging: (...msg) => console.log(msg),
            });
            sequelize.addModels([
                User,
                House,
                UserComment
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];

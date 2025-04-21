import { EntitySchema } from "typeorm";
import { User } from "@context/user/domain/User";
import { ValueObjectTransformer } from "@context/shared/infrastructure/persistance/typeorm/ValueObjectTransform";
import { UserId } from "@context/user/domain/UserId";
import { UserName } from "@context/user/domain/UserName";
import { UserEmail } from "@context/user/domain/UserEmail";
import { UserPhone } from "@context/user/domain/UserPhone"; 

export const UserEntity = new EntitySchema<User>({
    name: "User",
    tableName: "users",
    target: User,
    columns: {
        id: {
            type: String,
            primary: true,
            transformer: ValueObjectTransformer(UserId),
        },
        name: {
            type: String,
            transformer: ValueObjectTransformer(UserName),
        },
        email: {
            type: String,
            transformer: ValueObjectTransformer(UserEmail),
        },
        phone: {
            type: String,
            transformer: ValueObjectTransformer(UserPhone),
        },
    },
});
import { TypeOrmRepository } from "@context/shared/infrastructure/persistance/typeorm/TypeOrmRepository";
import { UserRepository } from "@context/user/domain/contracts/UserRepository";
import { User } from "@context/user/domain/User";
import { EntitySchema } from "typeorm";
import { UserEntity } from "@context/user/infrastructure/typeorm/UserEntity";
export class TypeOrmUserRepository extends TypeOrmRepository<User> implements UserRepository {
    protected entitySchema(): EntitySchema<User> {
        return UserEntity;
    }

    async add(user: User): Promise<void> {
        return this.persist(user);
    }
} 
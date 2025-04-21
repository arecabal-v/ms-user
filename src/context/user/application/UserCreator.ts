import { UserRepository } from "../domain/contracts/UserRepository";
import { User } from "../domain/User";

export class UserCreator {
    constructor(private repository: UserRepository) {}

    async run(user: User): Promise<void> {
        return this.repository.add(user);
    }
}

import { CreateUserCommand } from "../domain/CreateUserCommand";

export class UserCreator {
    constructor() {}

    async run(command: CreateUserCommand): Promise<void> {
        console.log(`User created: ${command.id} - ${command.name} - ${command.email} - ${command.phone}`);
    }
}

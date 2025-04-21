import { CommandHandler } from "@context/shared/domain/cqrs/CommandHandler";
import { CreateUserCommand } from "../domain/CreateUserCommand";
import { Command } from "@context/shared/domain/cqrs/Command";
import { UserCreator } from "./UserCreator";
import { User } from "../domain/User";

export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand> {
    constructor(private userCreator: UserCreator) {}

    subscribedTo(): Command {
        return CreateUserCommand;
    }

    async handle(command: CreateUserCommand): Promise<void> {
        const user = User.fromPrimitives(command.id, command.name, command.email, command.phone);
        return this.userCreator.run(user);
    }

}

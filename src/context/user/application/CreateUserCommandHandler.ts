import { CommandHandler } from "@context/shared/domain/cqrs/CommandHandler";
import { CreateUserCommand } from "../domain/CreateUserCommand";
import { Command } from "@context/shared/domain/cqrs/Command";
import { UserCreator } from "./UserCreator";

export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand> {
    constructor(private userCreator: UserCreator) {}

    subscribedTo(): Command {
        return CreateUserCommand;
    }

    async handle(command: CreateUserCommand): Promise<void> {
        return this.userCreator.run(command);
    }

}

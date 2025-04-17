import { Command } from "@context/shared/domain/cqrs/Command";

export class CreateUserCommand extends Command {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly phone: string
    ) {
        super();
    }
}
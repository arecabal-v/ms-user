import { NextFunction, Request, Response } from "express";
import { BaseController } from "../BaseController";
import { CommandBus } from "@context/shared/domain/cqrs/CommandBus";
import { CreateUserCommand } from "@context/user/domain/CreateUserCommand";
import httpStatus from "http-status";

export class CreateUserController implements BaseController {
    constructor(private commandBus: CommandBus) {}

    async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
        const id = req.params.id;
        const { name, email, phone } = req.body;

        const createUserCommand = new CreateUserCommand(id, name, email, phone);
        await this.commandBus.dispatch(createUserCommand);

        res.status(httpStatus.CREATED).send();
    }
}

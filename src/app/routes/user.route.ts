import { CreateUserController } from "@app/controllers/user/CreateUserController";
import container from "@app/dependency-injection";
import { NextFunction, Request, Response, Router } from "express";

export const register = (router: Router) => {
    const createUserController: CreateUserController = container.get('Controller.Create.User');

    router.put('/user/:id', (req: Request, res: Response, next: NextFunction) => {
        return createUserController.run(req, res, next);
    });
};


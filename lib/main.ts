import "reflect-metadata";

import {createKoaServer} from "routing-controllers";

import {UserController} from "./control/users";
import {FamilyController} from "./control/family";
import {ErrorMiddleware} from "./middleware/error";
import {ServerConfig} from "./common/config";
import {auth} from "./middleware/auth";
import {IAMController} from "./control/iam";



const app = createKoaServer({
    authorizationChecker: auth,
    middlewares: [ErrorMiddleware],
    controllers: [UserController, FamilyController, IAMController],
    defaultErrorHandler: false,
    classTransformer: true
});

app.listen(ServerConfig.PORT);

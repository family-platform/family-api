import {Exception} from "../model/exception";
import {KoaMiddlewareInterface, Middleware} from "routing-controllers";
import {AuthorizationRequiredError} from "routing-controllers/error/AuthorizationRequiredError";

@Middleware({ type: "before" })
export class ErrorMiddleware implements KoaMiddlewareInterface { // interface implementation is optional

    async use(ctx: any, next: (err?: any) => Promise<any>): Promise<any> {
        try {
            return await next();
        } catch (err) {
            if (err instanceof AuthorizationRequiredError) {
                err = new Exception(401, "Unauthorized");
            }
            if (err.hasOwnProperty("httpCode")) {
                ctx.status = err.httpCode;
                ctx.body = {
                    ...err,
                    code: err.httpCode
                };

                delete ctx.body.httpCode;

            } else if (err instanceof Exception) {
                ctx.body = err.toObject();
                ctx.status = err.code;
            } else {
                ctx.body = { message: 'Unexpected error.', code: 500 };
                ctx.status = 500;
            }
        }
    }

}

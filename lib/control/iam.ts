import {Controller, Param, Body, Get, Post, Put, Delete, Authorized} from "routing-controllers";
import {IAM} from "../model/iam";

@Controller()
export class IAMController {

    @Get("/iam")
    @Authorized()
    self() {
        return "user";
    }

    @Post("/iam/auth/sign-in")
    signIn(@Body({ required: true }) auth: IAM.SignIn) {
        return auth;
    }


}

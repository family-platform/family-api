import {IsEmail, IsNotEmpty} from "class-validator";

export namespace IAM {
    export class SignIn {

        @IsNotEmpty()
        @IsEmail()
        email: string;

        @IsNotEmpty()
        password: string;
    }
}

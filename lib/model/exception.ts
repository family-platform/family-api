export class Exception extends Error {

    constructor(public code: number, public message: string) {
        super(message);
    }

    toObject(): Object {
        return {
            code: this.code,
            message: this.message
        }
    }
}

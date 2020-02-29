import {DatabaseConfig} from "../common/config";

const mongoose = require('mongoose');

export class Store {

    static async connect() {
        await mongoose.connect(DatabaseConfig.URI, {useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 2000});
    }

}

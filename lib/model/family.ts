import * as mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String
});

export const Family = mongoose.model('Family', schema);
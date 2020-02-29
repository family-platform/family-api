import {Controller, Get, QueryParam} from "routing-controllers";
import {Family} from "../model/family";

@Controller()
export class FamilyController {

    @Get("/family")
    async get(@QueryParam("id", {required: true}) id: number) {
        const families = await Family.find({});
        return families;
    }


}

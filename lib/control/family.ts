import {Controller, Param, Body, Get, Post, Put, Delete, QueryParam} from "routing-controllers";

@Controller()
export class FamilyController {

    @Get("/family")
    getOne(@QueryParam("id", {required: true}) id: number) {
        return "This action returns user #" + id;
    }



}

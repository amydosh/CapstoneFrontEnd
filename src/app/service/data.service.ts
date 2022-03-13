import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";

@Injectable()
export class DataService{
    public products:Product[] = [
        {
            id:101,
            name:"apple macbook",
            description:"2022 apple macbook air pink",
            price:1005.21,
            pquant:45
        },
        {
            id:102,
            name:"dell book",
            description:"2022 dell book laptop black",
            price:957.21,
            pquant:12
        },
        {
            id:103,
            name:"lenovo slimbook",
            description:"2022 lenovo slimbook silver",
            price:845.21,
            pquant:45
        },
        {
            id:104,
            name:"samsung chromebook",
            description:"2022 samsung chromebook white",
            price:305.21,
            pquant:56
        }
    ]
}


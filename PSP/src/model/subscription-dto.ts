import { MethodDto } from "./payment-method-dto";

export class SubscriptionDto {
    webShopURI: string;
    methods: MethodDto[];
    apiKey: string;
    id: number;

    constructor(obj?:any) {
        this.webShopURI = obj && obj.webShopURI || "";
        this.methods = obj && obj.methods && 
        obj.methods.map((elem: any) => new MethodDto(elem)) || [];
        this.apiKey = obj && obj.apiKey || "";
        this.id = obj && obj.id || 0;
    }
}
import { MethodDto } from "./payment-method-dto";

export class SubscriptionDto {
    webShopURI: string;
    successUrl: string;
    failedUrl: string;
    errorUrl: string;
    methods: MethodDto[];
    apiKey: string;
    id: number;

    constructor(obj?:any) {
        this.webShopURI = obj && obj.webShopURI || "";
        this.successUrl = obj && obj.successUrl || "";
        this.errorUrl = obj && obj.errorUrl || "";
        this.failedUrl = obj && obj.failedUrl || "";
        this.methods = obj && obj.methods && 
        obj.methods.map((elem: any) => new MethodDto(elem)) || [];
        this.apiKey = obj && obj.apiKey || "";
        this.id = obj && obj.id || 0;
    }
}
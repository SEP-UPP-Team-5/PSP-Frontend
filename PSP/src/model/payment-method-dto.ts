export class MethodDto {
    methodName: string;
    merchant: string;

    constructor(obj?:any) {
        this.methodName = obj && obj.methodName || "";
        this.merchant = obj && obj.merchant || "";
    }
}
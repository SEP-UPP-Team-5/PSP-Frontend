export class MethodDto {
    id: number;
    methodName: string;
    merchant: string;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.methodName = obj && obj.methodName || "";
        this.merchant = obj && obj.merchant || "";
    }
}
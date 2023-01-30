export class MethodDto {
    id: number;
    methodName: string;
    methodServiceName: string;
    merchant_id: string;
    merchant_password: string;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.methodName = obj && obj.methodName || "";
        this.merchant_id = obj && obj.merchant_id || "";
        this.methodServiceName = obj && obj.methodServiceName || "";
        this.merchant_password = obj && obj.merchant_password || "";
    }

}
import { APIGatewayEventRequestContext, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { ContainerInterface } from "./ContainerInterface";

export default interface LambdaKernelInterface {

    bootstrap(): void
    handle(event: APIGatewayProxyEventV2, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResultV2>
    terminate(): void
    getContainer(): ContainerInterface

}
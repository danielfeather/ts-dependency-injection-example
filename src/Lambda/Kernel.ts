import LambdaKernelInterface from "../Interface/LambdaKernelInterface";
import {APIGatewayEventRequestContext, APIGatewayProxyEventV2, APIGatewayProxyResultV2} from "aws-lambda";
import Container from "../Container/Container";
import {ContainerInterface} from "../Interface/ContainerInterface";

export default class Kernel implements LambdaKernelInterface {

    container: ContainerInterface

    constructor(container: ContainerInterface) {
        this.container = container;
    }

    bootstrap() {

    }

    async handle(event: APIGatewayProxyEventV2, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResultV2> {

        // 1.

        return {
            statusCode: 200
        }

    }

    terminate() {

    }

    getContainer(): ContainerInterface {
        return this.container
    }
}
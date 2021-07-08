import { FactoryInterface } from "../../Interface/FactoryInterface";
import { ContainerInterface } from "../../Interface/ContainerInterface";
import Kernel from "../../Lambda/Kernel";

export default class KernelFactory implements FactoryInterface {

    invoke(container: ContainerInterface, name: string, options = []){

        return new Kernel(container)

    }

}
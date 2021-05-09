import { FactoryInterface } from "../../Interface/FactoryInterface";
import { ContainerInterface } from "../../Interface/ContainerInterface";
import DummyService from "../../Service/DummyService";

export default class DummyServiceFactory implements FactoryInterface {

  invoke(container: ContainerInterface, name: string, options: any[]) {

    return new DummyService()

  }

}
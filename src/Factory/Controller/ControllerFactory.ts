import { FactoryInterface } from "../../Interface/FactoryInterface";
import { ContainerInterface } from "../../Interface/ContainerInterface";
import DummyController from "../../Controller/DummyController";

export default class ControllerFactory implements FactoryInterface {

  invoke(container: ContainerInterface, name: string, options: any[]) {

    return new DummyController();

  }

}
import { FactoryInterface } from "../../Interface/FactoryInterface";
import { ContainerInterface } from "../../Interface/ContainerInterface";
import DummyController from "../../Controller/DummyController";

export default class ControllerFactory implements FactoryInterface {

  async invoke(container: ContainerInterface, name: string, options: any[]) {

    const dummyService = await container.get('\\Service\\DummyService');

    return new DummyController(dummyService);

  }

}
import { ApplicationInterface } from "../Interface/ApplicationInterface";
import { ContainerInterface } from "../Interface/ContainerInterface";

export default class Application implements ApplicationInterface {

  container: ContainerInterface

  constructor(container: ContainerInterface) {
    this.container = container;
  }

  async run() {
    const controller = await this.container.get('\\Controller\\DummyController');

    console.log(controller.index());
  }

}
import ServiceProviderInterface from "../Interface/ServiceProviderInterface";
import { ContainerInterface } from "../Interface/ContainerInterface";

export default class AbstractServiceProvider implements ServiceProviderInterface {

  container: ContainerInterface;

  constructor(container: ContainerInterface) {

    this.container = container;

  }

  register(): void {

    return;

  }

}
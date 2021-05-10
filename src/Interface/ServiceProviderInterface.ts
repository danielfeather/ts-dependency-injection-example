import { ContainerInterface } from "./ContainerInterface";

export default interface ServiceProviderInterface {

  register(container: ContainerInterface): void

}
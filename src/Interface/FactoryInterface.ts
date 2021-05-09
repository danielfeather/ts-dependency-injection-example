export interface FactoryInterface {
  invoke(container: ContainerInterface, name: string, options: any[]);
}
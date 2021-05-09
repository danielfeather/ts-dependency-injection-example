export interface ContainerInterface {
  get(binding: string): any
  set(binding: string, factory: string): void
}
import {ContainerInterface} from "../Interface/ContainerInterface";
import BindingResolutionError from "../Exception/BindingResolutionError";
import * as path from "path";
import bindings from "../../config/bindings";

export default class Container implements ContainerInterface {

  bindings: object

  constructor(bindings: object) {

    this.bindings = bindings;

  }


  /**
   * Retrieve a binding from the container
   * @param binding
   * @throws BindingResolutionError
   */
  get(binding: string): Promise<any> {
    if (!this.bindings[binding]){
      throw new BindingResolutionError(`Could not find a binding for ${binding} in the container`)
    }
    return this.invokeFactory(binding)
  }

  set(binding: string, value: any): void {
    this.bindings[binding] = value
  }

  async invokeFactory(name: string){

    const factoryName = bindings[name];

    if (factoryName.startsWith('\\')){
      name = name.slice(1);
    }

    const parts = factoryName.trim().split('\\');

    const factoryPath = path.resolve('./src', (path.join(...parts)));

    const factoryClass = await import(factoryPath);

    const factory = new factoryClass.default();

    return factory.invoke(this, name, [])

  }

}
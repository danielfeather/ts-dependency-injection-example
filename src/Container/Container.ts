import {ContainerInterface} from "../Interface/ContainerInterface";
import * as path from "path";
import bindings from "../../config/bindings";

export default class Container implements ContainerInterface {

  bindings: object

  constructor(bindings: object) {

    this.bindings = bindings;

  }

  get(binding: string){
    return this.invokeFactory(binding)
  }

  set(binding: string, factory: string){

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
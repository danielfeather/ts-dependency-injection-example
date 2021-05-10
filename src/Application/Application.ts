import { ApplicationInterface } from "../Interface/ApplicationInterface";
import { ContainerInterface } from "../Interface/ContainerInterface";
import * as path from "path";
import app from "../../config/app";
import bindings from "../../config/bindings";

export default class Application implements ApplicationInterface {

  container: ContainerInterface

  constructor(container: ContainerInterface) {
    this.container = container;
  }

  async run() {
    await this.registerServiceProviders();
    const controller = await this.container.get('\\Controller\\DummyController');
    console.log(controller.index());
  }

  async registerServiceProviders() {

    const serviceProviderFolder = path.resolve('./src', 'ServiceProvider');

    for (let provider of app.providers) {
      if (provider.startsWith('\\')){
        provider = provider.slice(1);
      }

      const parts = provider.trim().split('\\');

      const providerPath = path.resolve('./src', (path.join(...parts)));

      const providerClass = await import(providerPath);

      const providerInstance = new providerClass.default(this.container);

      providerInstance.register()
    }

  }

}
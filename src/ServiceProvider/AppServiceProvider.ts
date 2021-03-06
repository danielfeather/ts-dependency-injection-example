import AbstractServiceProvider from "./AbstractServiceProvider";

export default class AppServiceProvider extends AbstractServiceProvider {

  register() {
    this.container.set('\\Lambda\\Kernel', '\\Factory\\Lambda\\KernelFactory')
    this.container.set('\\Service\\DummyService', '\\Factory\\Service\\DummyServiceFactory')
  }

}
import DummyService from "../Service/DummyService";

export default class DummyController {

  dummyService: DummyService

  constructor(
    dummyService: DummyService
  ) {
    this.dummyService = dummyService;
  }

  index(){
    return this.dummyService.foo();
  }

}
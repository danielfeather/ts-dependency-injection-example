import DummyService from "../Service/DummyService";

export default class DummyController {

  dummyService: DummyService

  constructor(
    dummyService: DummyService
  ) {
    this.dummyService = dummyService;
  }

  index(){
    console.log(this.dummyService.foo());
  }

}
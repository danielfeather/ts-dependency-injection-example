import Bindings from '../../config/bindings';
import Container from '../../src/Container/Container';
import DummyController from "../../src/Controller/DummyController";
import Application from "../../src/Application/Application";

test('Dummy controller logs to the console',async () => {

    const container = new Container(Bindings);

    const application = new Application(container);

    await application.registerServiceProviders()

    const controller: DummyController = await application.container.get('\\Controller\\DummyController');

    expect(controller).toBeInstanceOf(DummyController);

    expect(controller.index()).toBe('bar')

})
import Application from "../../src/Application/Application";
import Container from "../../src/Container/Container";
import Bindings from '../../config/bindings';

test('Application returns bar', async () => {

    const container = new Container(Bindings);

    const app = new Application(container);

    console.log = jest.fn();

    await app.run()

    expect(console.log).toHaveBeenCalledWith('bar');

})
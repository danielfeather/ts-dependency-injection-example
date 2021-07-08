import Application from "./src/Application/Application";
import Container from "./src/Container/Container";

import Bindings from './config/bindings';
import Kernel from "./src/Lambda/Kernel";

(async function () {
    const container = new Container(Bindings);

    const app = new Application(container);
    await app.registerServiceProviders();

    const kernel: Kernel = await app.container.get('\\Lambda\\Kernel');

})()

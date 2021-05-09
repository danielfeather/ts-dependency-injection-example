import Application from "./src/Application/Application";
import Container from "./src/Container/Container";

import Bindings from './config/bindings';

const container = new Container(Bindings);

const app = new Application(container);

app.run()
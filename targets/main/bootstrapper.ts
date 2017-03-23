import "reflect-metadata";
import {Application} from "ninjagoat";
import {ProjectionsModule} from "ninjagoat-projections";
import AppModule from "../../scripts/AppModule";

let app = new Application();
app.register(new ProjectionsModule());
app.register(new AppModule());
app.run();
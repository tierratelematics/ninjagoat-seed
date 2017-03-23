import "reflect-metadata";
import {Application} from "ninjagoat";
import Module from "../../scripts/Module";
import {ProjectionsModule} from "ninjagoat-projections";
import {DashboardModule} from "ninjagoat-dashboard";

let app = new Application();
app.register(new ProjectionsModule());
app.register(new DashboardModule());
app.register(new Module());
app.run();
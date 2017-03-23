import {IModule, IViewModelRegistry, IServiceLocator} from "ninjagoat";
import {interfaces} from "inversify";
import {ISocketConfig, IModelRetriever} from "ninjagoat-projections";
import IndexViewModel from "./IndexViewModel";
import RootViewModel from "./RootViewModel";
import {Observable} from "rx";
import SeedProductsViewModel from "./SeedProductsViewModel";
import SeedEditViewModel from "./SeedEditViewModel";
import {WidgetModel, WidgetViewModel} from "./dashboard/WidgetViewModel";
import {IWidgetEntry, DashboardViewModel, DashboardModelRetriever} from "ninjagoat-dashboard";

class Module implements IModule {

    modules = (container: interfaces.Container) => {
        container.bind<ISocketConfig>("ISocketConfig").toConstantValue({
            endpoint: "http://localhost:8000",
            path: "/notifications"
        });
        container.bind<any>("Views").toConstantValue(require("../views/export"));
        container.bind<IWidgetEntry<WidgetModel>>("IWidgetEntry").toConstantValue({
            construct: WidgetViewModel,
            observable: (context) => Observable.just({counter: context.parameters.counter || 0}),
            name: "counter",
            sizes: ["small", "large"]
        });
    };

    register(registry: IViewModelRegistry, serviceLocator?: IServiceLocator, overrides?: any): void {
        let modelRetriever = serviceLocator.get<IModelRetriever>("IModelRetriever");
        let dashboardModelRetriever = serviceLocator.get<DashboardModelRetriever>("DashboardModelRetriever");
        registry.master(RootViewModel, () => Observable.empty());
        registry.index(IndexViewModel, () => Observable.empty());
        registry
            .add(SeedProductsViewModel, context => modelRetriever.modelFor(context))
            .add(SeedEditViewModel, context => modelRetriever.modelFor(context), ":id")
            .forArea("Seed");

        registry.add(DashboardViewModel, context => dashboardModelRetriever.modelFor(context))
            .forArea("Dashboard");
    }

}

export default Module
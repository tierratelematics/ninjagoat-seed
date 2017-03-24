import {IModule, IViewModelRegistry, IServiceLocator} from "ninjagoat";
import {interfaces} from "inversify";
import {ISocketConfig, IModelRetriever} from "ninjagoat-projections";
import IndexViewModel from "./viewmodels/IndexViewModel";
import {Observable} from "rx";
import AccountsViewModel from "./viewmodels/AccountsViewModel";
import AccountsListViewModel from "./viewmodels/AccountsListViewModel";
import MasterViewModel from "./viewmodels/MasterViewModel";

class AppModule implements IModule {

    modules = (container: interfaces.Container) => {
        container.bind<any>("Views").toConstantValue(require("../views/export"));
        let config = require("../settings/config.json");
        container.bind<ISocketConfig>("ISocketConfig").toConstantValue(config.socket);
    };

    register(registry: IViewModelRegistry, serviceLocator?: IServiceLocator, overrides?: any): void {
        let modelRetriever = serviceLocator.get<IModelRetriever>("IModelRetriever");
        registry.master(MasterViewModel, () => Observable.just({appTitle: "Ninjagoat seed"}));
        registry.index(IndexViewModel, () => Observable.empty());
        registry
            .add(AccountsListViewModel, context => modelRetriever.modelFor(context))
            .add(AccountsViewModel, context => modelRetriever.modelFor(context), ":id")
            .forArea("Accounts");
    }

}

export default AppModule
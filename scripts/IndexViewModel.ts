import {ObservableViewModel, ViewModel, IHttpClient} from "ninjagoat";
import {inject} from "inversify";

@ViewModel("Index")
class IndexViewModel extends ObservableViewModel<any> {

    constructor() {
        super();
    }

    protected onData(item: any): void {
    }
}

export default IndexViewModel;

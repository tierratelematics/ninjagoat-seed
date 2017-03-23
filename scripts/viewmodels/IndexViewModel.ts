import {ObservableViewModel, ViewModel} from "ninjagoat";
import {IndexModel} from "../Types";

@ViewModel("Index")
class IndexViewModel extends ObservableViewModel<IndexModel> {

    protected onData(item: IndexModel): void {
    }
}

export default IndexViewModel;

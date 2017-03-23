import {ObservableViewModel, ViewModel} from "ninjagoat";
import {MasterModel} from "../Types";

@ViewModel("Master")
class MasterViewModel extends ObservableViewModel<MasterModel> {

    appTitle: string;

    protected onData(data: MasterModel): void {
        this.appTitle = data.appTitle;
    }
}

export default MasterViewModel;

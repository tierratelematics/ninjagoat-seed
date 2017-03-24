import {ObservableViewModel, ViewModel} from "ninjagoat";
import {ModelState, ModelPhase} from "ninjagoat-projections";
import {Account} from "../Types";

@ViewModel("List")
class AccountsListViewModel extends ObservableViewModel<ModelState<Account[]>> {
    accounts: Account[] = [];

    protected onData(data: ModelState<Account[]>): void {
        if (data.phase === ModelPhase.Ready) {
            this.accounts = data.model;
        }
    }

}

export default AccountsListViewModel
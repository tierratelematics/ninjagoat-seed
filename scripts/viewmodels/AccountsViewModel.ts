import {ObservableViewModel, ViewModel} from "ninjagoat";
import {ModelState, ModelPhase} from "ninjagoat-projections";
import {Account} from "../Types";

@ViewModel("Detail")
class AccountsViewModel extends ObservableViewModel<ModelState<Account>> {
    account: Account;

    protected onData(data: ModelState<Account>): void {
        if (data.phase === ModelPhase.Ready) {
            this.account = data.model;
        }
    }

}

export default AccountsViewModel
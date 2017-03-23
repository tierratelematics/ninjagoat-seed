import * as React from "react";
import {View} from "ninjagoat";
import AccountsViewModel from "../../scripts/viewmodels/AccountsViewModel";

class Detail extends View<AccountsViewModel> {

    render() {
        if (this.viewModel.account) {
            return <div>
                <h2>{this.viewModel.account.name}</h2>
                <span>Status: {this.viewModel.account.status}</span>
            </div>
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default Detail
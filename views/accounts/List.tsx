import * as React from "react";
import {View} from "ninjagoat";
import AccountsListViewModel from "../../scripts/viewmodels/AccountsListViewModel";
import {Link} from "react-router";

class List extends View<AccountsListViewModel> {

    render() {
        return <ul>
            {this.viewModel.accounts.map(account => <li key={account.id}><Link
                to={"/accounts/detail/" + account.id}>{account.name}</Link></li>)}
        </ul>
    }
}

export default List
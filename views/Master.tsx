import {View} from "ninjagoat";
import * as React from "react";
import RootViewModel from "../scripts/viewmodels/MasterViewModel";

export default class Master extends View<RootViewModel> {

    render() {
        return (
            <div>
                <h1>{this.viewModel.appTitle}</h1>
                {this.props.children}
            </div>
        );
    }
}
import {View} from "ninjagoat";
import * as React from "react";
import RootViewModel from "../scripts/RootViewModel";

export default class Master extends View<RootViewModel> {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
import {View} from "ninjagoat";
import IndexViewModel from "../scripts/viewmodels/IndexViewModel";
import * as React from "react";
import {Link} from "react-router";

export default class Index extends View<IndexViewModel> {

    render() {
        return (
            <div>
                <Link to={"/accounts/list"}>Go to accounts list</Link>
            </div>
        );
    }
}

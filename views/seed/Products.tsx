import * as React from "react";
import {View} from "ninjagoat";
import SeedProductsViewModel from "../../scripts/SeedProductsViewModel";

class Products extends View<SeedProductsViewModel> {
    render() {
        if (this.viewModel.model) {
            return (<ul>
                {this.viewModel.model.map(crop => <li key={crop.id}>{crop.name}</li>)}
            </ul>)
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default Products
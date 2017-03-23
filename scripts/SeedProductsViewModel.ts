import {ObservableViewModel, ViewModel} from "ninjagoat";
import {ModelState, ModelPhase} from "ninjagoat-projections";

@ViewModel("Products")
class SeedProductsViewModel extends ObservableViewModel<ModelState<any[]>> {
    model: any[] = null;

    protected onData(data: ModelState<any[]>): void {
        if (data.phase === ModelPhase.Ready) {
            this.model = data.model;
        }
    }

}

export default SeedProductsViewModel
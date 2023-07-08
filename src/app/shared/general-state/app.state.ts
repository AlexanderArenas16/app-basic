import { ActionReducerMap } from "@ngrx/store";
import { CustomerState } from "src/app/core/interfaces/customer";
import { customerReducer } from "src/app/modules/customers/store/customer.reducer";

export interface AppState {
    customers: CustomerState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    customers: customerReducer
}
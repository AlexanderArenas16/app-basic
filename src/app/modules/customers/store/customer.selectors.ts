import { createSelector } from "@ngrx/store";
import { CustomerState } from "src/app/core/interfaces/customer";
import { AppState } from "src/app/shared/general-state/app.state";

export const selectCustomersFeature = (state: AppState) => state.customers;

export const selectListCustomers = createSelector(
    selectCustomersFeature,
    (state: CustomerState) => state.customers
)
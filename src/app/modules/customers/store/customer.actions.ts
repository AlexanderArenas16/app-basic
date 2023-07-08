import { createAction, props } from "@ngrx/store";
import { Customer } from "src/app/core/interfaces/customer";


export const loadCustomers = createAction('[Customer] load');
export const loadedCustomers = createAction('[Customer] loaded', props<{ customers: Customer[]}>());
export const createCustomer = createAction('[Customer] create', props<{ customer: Customer}>());
export const editCustomer = createAction('[Customer] edit', props<{ customer: Customer}>());
export const deleteCustomer = createAction('[Customer] delete', props<{ id: string}>());
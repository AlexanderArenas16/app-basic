import { createReducer, on } from "@ngrx/store";
import { createCustomer, deleteCustomer, editCustomer, loadCustomers, loadedCustomers } from "./customer.actions";
import { CustomerState } from "src/app/core/interfaces/customer";


export const initialState: CustomerState = {
    loading: false,
    customers: []
}

export const customerReducer = createReducer (
    initialState,
    on(loadCustomers, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedCustomers, (state, { customers }) => {
        return { ...state, customers: customers, loading: false }
    }),
    on(createCustomer, (state, { customer }) => {
        return { ...state, customers: [...state.customers, ...[customer]], loading: false }
    }),
    on(editCustomer, (state, { customer }) => {
        return { ...state, customers: state.customers.map(c => c.id === customer.id ? { ...c, ...customer} : c), loading: false }
        
    }),
    on(deleteCustomer, (state, { id }) => {
        return { ...state, customers: state.customers.filter(c => c.id !== id), loading: false}
    })
)
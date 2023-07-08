export interface Customer {
    id: '',
    name: '',
    lastName: '',
    personalId: '',
}

export interface CustomerState {
    loading: boolean,
    customers: ReadonlyArray<Customer>
}
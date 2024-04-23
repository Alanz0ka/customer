import { Customer } from "../customer";


export interface CustomerRepository{
    save(customer: Customer): Promise<void>
    getAll(): Promise<Array<Customer>>
}
import { Uuid } from "../../../model/Uuid";
import { Customer } from "../../../model/customer";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";


export class CustomerRepositoryInMemory implements CustomerRepository{
    

    private customerCollection: Array<Customer> = []

    async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer)
    } 

    async getAll(): Promise<Customer[]> {
        return this.customerCollection
    }

    getById(id: Uuid): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
}
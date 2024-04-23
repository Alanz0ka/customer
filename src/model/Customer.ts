import { Document } from "./Document"
import { DocumentFactory } from "./DocumentFactory"
import { Uuid } from "./Uuid"


export class Customer{
    private id: Uuid
    private name: string
    private document: Document

    constructor(id: Uuid, name: string, document: Document){
        this.id = id
        this.name = name
        this.document = document
    }

    static create(id: string, name: string, document: string): Customer{
        const uuid = new Uuid(id)
        const documentInstance = DocumentFactory.create(document)

        return new Customer(uuid, name, documentInstance)
    }

}
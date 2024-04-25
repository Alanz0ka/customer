import { Router, Request, Response } from "express"
import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory"
import { CustomerCreate } from "./controller/CustomerCreate"
import { CustomerList } from "./controller/CustomerList"
import { CustomerRepositoryDatabase } from "./infra/repository/database/CustomerRepositoryDatabase"
import { CustomerRepository } from "./model/repository/CustomerRepository"
import { CustomerById } from "./controller/CustomerGetById"

const router = Router()

// const repository= new CustomerRepositoryInMemory()
const repository = new CustomerRepositoryDatabase
const customerCreate = new CustomerCreate(repository)
const customerList = new CustomerList(repository)
const customerById = new CustomerById(repository)


router.post("/customer", (request: Request, response: Response) =>{
    customerCreate.execute(request, response)
})

router.get("/customer", (request: Request, response: Response) =>{
    customerList.execute(request, response)
})

router.get("/customer/:id", (request: Request, response: Response) =>{
    customerById.execute(request, response)
})


export {router}
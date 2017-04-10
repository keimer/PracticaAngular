import { Injectable } from "@angular/core";
import { TICKETS } from "./mocks/tickets.mocks"

//Con servicios se aplica el patrón de diseño SINGLETON
@Injectable()
export class ticketServicio {
    variableGlobal:string = 'esto es una variables global';

    getVariableGlobar():string{
        return this.variableGlobal;
    }

    getTickets(){
        //en teoria este método busca datos en la BDD, en este ejempllo retorna una lista de datos de un Array
        return TICKETS;
    }
}
import { PageCards } from "./PageCards";
import {AppoimentCards} from "./AppoimentCards";
import { ClientsCards } from "./ClientsCards";

export const ViewComponents = ({dataSelected}) => {
    
    switch(dataSelected){
        case "my Appointments":
            return <AppoimentCards
            />
        case "my Clients":
            return <ClientsCards/>
        case "Barbers":
            return <PageCards/> 
         default:
             return <div></div>                 
    }
}
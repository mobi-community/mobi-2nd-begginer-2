import { BrowserRouter } from "react-router-dom";
import Pagination from "./pagenation";


export default {
    component : Pagination,
    title : 'Pagination',
    tags:['autodocs'],
    // decorators:[
    //     (Story)=>(
    //         <BrowserRouter>
    //             <Story/>
    //         </BrowserRouter>
    //     )
    // ]
}

export const primary={
    args:{
        variant:"primary"
    }
}

export const secondary={
    args:{
        variant:"secondary"
        
    }
}
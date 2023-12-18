import { Pagination } from "./Pagination";
import { PAGINATE_LIST } from '../pages/datalist/pagination'

export default {
    component: Pagination,
};

// export const NumberButton =  {
//     args: {
//         children: index + 1,
//     }
// };

export const Paginate_Buttons = () => {
    return (
        <>
        {PAGINATE_LIST.map((button, idx) => (
            <button key={idx}>{button}</button>
            ))}
        </>
    )
};


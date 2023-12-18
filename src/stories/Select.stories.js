import { Select } from './Select';
import { BIRTHDAY_YEAR_LIST,BIRTHDAY_MONTH_LIST, BIRTHDAY_DAY_LIST } from '../pages/datalist/birthday_list';

export default {
    component: Select,
};

/* default */
export const Default = {
    args: {
        label: "default"
    }
}

export const Birthday = () => {
    return (
        <>
        <label>Birthday</label>
        <Select>
            <option value="year" >YYYY</option>
            {BIRTHDAY_YEAR_LIST.map((year, index) => (
                <option key={index}>{year}</option>
            ))}
        </Select>
        <Select>
            <option value="month" >MM</option>
            {BIRTHDAY_MONTH_LIST.map((month, index) => (
                <option key={index}>{month}</option>
            ))}
        </Select>
        <Select>
            <option value="day" >DD</option>
            {BIRTHDAY_DAY_LIST.map((day, index) => (
                <option key={index}>{day}</option>
            ))} 
        </Select>
    </>        
    );
}

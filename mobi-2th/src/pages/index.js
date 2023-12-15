import SSButton from "../components/button"
import SSInput from "../components/input";
import SSSelect from "../components/select";
import SSCheckBox from "../components/checkbox";
import SSModal from "../components/modal";
import { userList } from "../mock/mock-data";


const HomePage = () =>{

    const arrayForSelect = ["아이브", "트와이스", "블랙핑크", "르세라핌", "뉴진스"]
    const userList = userList;
    const totalLength = userList.length;

    return  (<> 
        <SSButton variant={"primary"} size={"large"} shape={"normal"} >
        얍
        </SSButton>
        <SSButton variant={"secondary"} size={"large"} shape={"normal"} >
        얍
        </SSButton>
        <SSInput label={"라벨"} size={"large"}/>
        <SSSelect variant={"primary"} label={"걸그룹"} data={arrayForSelect}/>
        <SSCheckBox size={"small"}/>
        <SSModal variant={"secondary"} size={"medium"} label={"마이크첵원투"}/>
        </>
         );
}

export default HomePage
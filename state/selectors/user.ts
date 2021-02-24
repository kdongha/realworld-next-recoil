import {selector} from "recoil";
import user from "../atoms/user";

const userSelector = selector({
    key: 'userSelector',
    get: ({get}) => {
        return get(user)
    }
})
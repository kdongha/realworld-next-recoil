import {atom} from "recoil";
import User from "../../types/User";

const user = atom<User>({
    key: 'user',
    default: null
})

export default user;
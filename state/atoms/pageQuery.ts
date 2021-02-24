import {atom} from "recoil";

const pageQuery = atom({
    key: 'pageQuery',
    default: {
        page: 1
    },
});

export default pageQuery
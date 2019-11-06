import { LOGGING_IN } from "my-redux/actions";

const initState = {

}

function loginReducer(state=initState, action) {
    switch (action.type) {
        case LOGGING_IN:
            return state;
    
        default:
            return state;
    }
}

export default loginReducer
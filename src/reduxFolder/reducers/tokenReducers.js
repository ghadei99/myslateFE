
const initialState = {
    data: [],
    modalFlags: {
        "flag": false
    },
    tokens: {
        "token": ""
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'modalflag':
            return {
                modalFlags: action.flag
            }
        case 'token':
            return {
                tokens: action.token
            }

        default: return state;
    }
}


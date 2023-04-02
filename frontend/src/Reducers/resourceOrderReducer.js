const user = { user: null };

const resourceOrderReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_RESOURCE_ORDER':
            return action.payload;
        case 'ADD_RESOURCE':
            return state;
        case 'DELETE_RESOURCE':
            return state;
        case 'EDIT_RESOURCE':
            return state;
        default:
            return state;
    }
};

export default resourceOrderReducer;

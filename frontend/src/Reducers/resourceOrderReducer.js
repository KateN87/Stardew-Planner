const resourceOrderReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_RESOURCE_ORDER':
            return action.payload;
        case 'ADD_RESOURCE':
            return state;
        case 'DELETE_ONE_RESOURCE':
            return state;
        case 'DELETE_ALL_RESOURCE':
            return action.payload;
        case 'EDIT_RESOURCE':
            return state;
        default:
            return state;
    }
};

export default resourceOrderReducer;

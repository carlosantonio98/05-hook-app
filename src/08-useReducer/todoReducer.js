
export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');
    
        default:
            return initialState;
    }
}
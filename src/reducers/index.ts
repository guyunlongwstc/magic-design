import {handleActions} from 'redux-actions';

export const ast = handleActions({
    'SET_AST'(state, action) {
        return action.payload;
    }
}, {});
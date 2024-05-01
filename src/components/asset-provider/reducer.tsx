import { actionTypes } from '../constants';
import { ActionInterface, stateInterface } from './types';

const reducer = (state: stateInterface, action: ActionInterface) => {
    switch(action.type) {
        case actionTypes.SET_DATA: {
            return {
                ...state,
                assetsData: action.payload
            }
        }
        
        default:
            return state;
    }
}

export default reducer

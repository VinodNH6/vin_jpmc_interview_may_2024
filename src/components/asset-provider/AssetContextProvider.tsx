
import { createContext, useReducer } from 'react';
import { ActionInterface, stateInterface } from './types';
import reducer from './reducer';


export interface StateContextInterface {
    state: stateInterface;
    dispatch: React.Dispatch<ActionInterface>
};

export const AssetsContext = createContext<StateContextInterface>({
    state: {
        assetsData: []
    },
    dispatch: () => {},
});




interface ContextProviderProps {
    children: React.ReactNode;
};

const initialState = {
    assetsData: []
}

const AssetContextProvider = ({ children }: ContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AssetsContext.Provider value={{ state, dispatch }}>
            {children}
        </AssetsContext.Provider>
    )
}

export default AssetContextProvider

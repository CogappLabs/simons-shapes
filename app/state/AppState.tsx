'use client';
import React, { createContext, useState } from 'react';

export interface AppStateContextType {
    loggedAnswers: string[];
    setLoggedAnswers: React.Dispatch<React.SetStateAction<string[]>>;
    simonsInstructions: string[];
    setSimonsInstructions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AppStateContext = createContext<AppStateContextType>({
    loggedAnswers: [],
    setLoggedAnswers: () => {},
    simonsInstructions: [], 
    setSimonsInstructions: () => {},
});

const AppStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [loggedAnswers, setLoggedAnswers] = useState<string[]>([]);
    const [simonsInstructions, setSimonsInstructions] = useState<string[]>([]);


    return (
        <AppStateContext.Provider
            value={{
                loggedAnswers,
                setLoggedAnswers,
                simonsInstructions,
                setSimonsInstructions,
            }}
        >
            {children}
        </AppStateContext.Provider>
    );
};

export { AppStateProvider };

export default AppStateContext;

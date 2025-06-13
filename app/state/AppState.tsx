'use client';
import React, { createContext, useState } from 'react';

export interface AppStateContextType {
    loggedAnswers: string[];
    setLoggedAnswers: React.Dispatch<React.SetStateAction<string[]>>;
    simonsInstructions: string[];
    setSimonsInstructions: React.Dispatch<React.SetStateAction<string[]>>;
    roundCount: number;
    setRoundCount: React.Dispatch<React.SetStateAction<number>>;
}

export const AppStateContext = createContext<AppStateContextType>({
    loggedAnswers: [],
    setLoggedAnswers: () => {},
    simonsInstructions: [], 
    setSimonsInstructions: () => {},
    roundCount: 1,
    setRoundCount: () => {},
});

const AppStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [loggedAnswers, setLoggedAnswers] = useState<string[]>([]);
    const [simonsInstructions, setSimonsInstructions] = useState<string[]>([]);
    const [roundCount, setRoundCount] = useState<number>(1);


    return (
        <AppStateContext.Provider
            value={{
                loggedAnswers,
                setLoggedAnswers,
                simonsInstructions,
                setSimonsInstructions,
                roundCount, 
                setRoundCount, 
            }}
        >
            {children}
        </AppStateContext.Provider>
    );
};

export { AppStateProvider };

export default AppStateContext;

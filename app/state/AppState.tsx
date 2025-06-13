'use client';
import React, { createContext, useState } from 'react';

export interface AppStateContextType {
    loggedAnswers: string[];
    setLoggedAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AppStateContext = createContext<AppStateContextType>({
    loggedAnswers: [],
    setLoggedAnswers: () => {},
});

const AppStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [loggedAnswers, setLoggedAnswers] = useState<string[]>([]);


    return (
        <AppStateContext.Provider
            value={{
                loggedAnswers,
                setLoggedAnswers,
            }}
        >
            {children}
        </AppStateContext.Provider>
    );
};

export { AppStateProvider };

export default AppStateContext;

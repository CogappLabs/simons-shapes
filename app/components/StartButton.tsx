import React, { useContext } from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';
import getSimonsInstructions from '../utilities/getSimonsInstructions';

export const StartButton: React.FC = () => {
    const { simonsInstructions, setSimonsInstructions } = useContext(AppStateContext as React.Context<AppStateContextType>);

    const handleSubmit = () => {
        setSimonsInstructions(getSimonsInstructions(1));
    }

    return (
        <button onClick={handleSubmit}>Start</button>
    )
}
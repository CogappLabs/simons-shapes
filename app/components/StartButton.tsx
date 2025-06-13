import React, { useContext } from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';
import getSimonsInstructions from '../utilities/getSimonsInstructions';

export const StartButton: React.FC = () => {
    const { setSimonsInstructions } = useContext(AppStateContext as React.Context<AppStateContextType>);
    const { roundCount } = useContext(AppStateContext as React.Context<AppStateContextType>)

    const handleSubmit = () => {
        setSimonsInstructions(getSimonsInstructions(roundCount));
    }

    return (
        <button onClick={handleSubmit}>Start</button>
    )
}
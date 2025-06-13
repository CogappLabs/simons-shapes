import React, { useContext } from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';
import getSimonsInstructions from '../utilities/getSimonsInstructions';

export const StartButton: React.FC = () => {
    const { setSimonsInstructions, isStartButtonDisabled, setIsStartButtonDisabled, roundCount, level, setNumOfShapes } = useContext(AppStateContext as React.Context<AppStateContextType>);

    const handleSubmit = () => {
        setSimonsInstructions([]);
        setNumOfShapes(4);
        setSimonsInstructions(getSimonsInstructions(level, roundCount));
        setIsStartButtonDisabled(true);
    }

    return (
        <button disabled={isStartButtonDisabled} onClick={handleSubmit} className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:text-white">Start</button>
    )
}
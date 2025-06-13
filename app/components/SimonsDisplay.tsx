import React, {useContext} from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';


export const SimonsDisplay: React.FC = () => {
    const { simonsInstructions, setSimonsInstructions } = useContext(AppStateContext as React.Context<AppStateContextType>);

    return (
        <div id="scroll-container" className="w-full">
            <div id="scroll-text">Simon says: {simonsInstructions.join(', ')}</div>
        </div>
    );
}
import React, {useContext} from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';


export const SimonsDisplay: React.FC = () => {
    const { simonsInstructions } = useContext(AppStateContext as React.Context<AppStateContextType>);

    return (
        <div className="grid grid-cols-5 gap-4">
            <div key={simonsInstructions.join(', ')} id="scroll-container" className="w-[100px] h-[24px] col-start-3 col-end-4">
                {simonsInstructions.length > 0 && (
                    <p id="scroll-text">Simon says: {simonsInstructions.join(', ')}</p>
                )}
            </div>
        </div>
    );
}
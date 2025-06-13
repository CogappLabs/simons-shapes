'use client';
import React, { useContext } from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';
import getSimonsInstructions from '../utilities/getSimonsInstructions';

export interface ShapeButtonProps {
    shape: 'square' | 'circle' | 'star' | 'triangle';
    color: 'red' | 'blue' | 'yellow' | 'green' | 'purple';
}

export const ShapeButton: React.FC<ShapeButtonProps> = ({ shape, color}) => {
    const { loggedAnswers, setLoggedAnswers, simonsInstructions, roundCount, setRoundCount, setSimonsInstructions, setIsStartButtonDisabled, level, setLevel } = useContext(AppStateContext as React.Context<AppStateContextType>);

    let fill: string = '';

    if (color === 'red') {
        fill = '#FF0900';
    } else if (color === 'blue') {
        fill = '#1A00FF';
    } else if (color === 'green') {
        fill = '#00FF0D';
    } else if (color === 'yellow') {
        fill = '#FFDD00';
    } else if (color === 'purple') {
        fill = '#8400FF';
    }

    const checkAnswers = (answers: string[]): boolean => { 
        
        if (answers.join(', ') !== simonsInstructions.join(', ')) {
            console.log('Game lost');
            setLoggedAnswers([]);
            setSimonsInstructions(['Game over!']);
            setRoundCount(1);
            setIsStartButtonDisabled(false);
            setLevel(1);
            return false;
        }
    
        console.log('Round won');
        const updatedRoundCount = roundCount + 1;
        setRoundCount(updatedRoundCount);
        setSimonsInstructions(getSimonsInstructions(level, updatedRoundCount, answers));
        setLoggedAnswers([]);

        if (updatedRoundCount > 3 && updatedRoundCount <= 6) {
            setLevel(2);
            // setNumOfShapes(13);
            console.log('New level reached: 2');
        } else if (updatedRoundCount > 6 && updatedRoundCount <= 9) {
            setLevel(3);
            // setNumOfShapes(17);
            console.log('New level reached: 3');
        }
        return true;
    }

    const handleClick = (): void => {
        const updatedLoggedAnswers = [...loggedAnswers, `${color} ${shape}`];

        console.log(updatedLoggedAnswers);

        setLoggedAnswers(updatedLoggedAnswers);

        if (updatedLoggedAnswers.length === simonsInstructions.length) {
            // TODO: Can I pass loggedAnswers?
            checkAnswers(updatedLoggedAnswers);
        }
    }

    return (
        <button onClick={handleClick}>
            {shape === 'square' && (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="10" fill={fill}/>
                </svg>
            )}

            {shape === 'circle' && (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill={fill}/>
                </svg>
            )}

            {shape === 'star' && (
                <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.1468 2.78114C23.0449 0.017212 26.9551 0.0172199 27.8532 2.78115L31.5109 14.0385C31.9125 15.2746 33.0644 16.1115 34.3641 16.1115H46.2008C49.1069 16.1115 50.3153 19.8303 47.9641 21.5385L38.388 28.4959C37.3366 29.2599 36.8966 30.614 37.2982 31.85L40.956 43.1074C41.854 45.8713 38.6906 48.1697 36.3394 46.4615L26.7634 39.5041C25.7119 38.7401 24.2881 38.7401 23.2366 39.5041L13.6606 46.4615C11.3094 48.1697 8.14599 45.8713 9.04404 43.1074L12.7018 31.85C13.1034 30.614 12.6634 29.2599 11.612 28.4959L2.03588 21.5385C-0.31526 19.8303 0.893071 16.1115 3.79924 16.1115H15.6359C16.9356 16.1115 18.0875 15.2746 18.4891 14.0385L22.1468 2.78114Z" fill={fill}/>
                </svg>
            )}
        </button>
    )
}
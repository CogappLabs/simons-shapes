'use client';
import React, { useContext } from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';
import getSimonsInstructions from '../utilities/getSimonsInstructions';

export interface ShapeButtonProps {
    shape: 'square' | 'circle' | 'star' | 'triangle';
    color: 'red' | 'blue' | 'yellow' | 'green' | 'purple';
    rotation?: 'upright' | 'side-left' | 'upside-down' | 'side-right';
}

export const ShapeButton: React.FC<ShapeButtonProps> = ({ shape, color, rotation}) => {
    const { loggedAnswers, setLoggedAnswers, simonsInstructions, roundCount, setRoundCount, setSimonsInstructions, setIsStartButtonDisabled, level, setLevel, setNumOfShapes } = useContext(AppStateContext as React.Context<AppStateContextType>);

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
            setLoggedAnswers([]);
            setSimonsInstructions(['Game over!']);
            setRoundCount(1);
            setIsStartButtonDisabled(false);
            setLevel(1);     
            return false;
        }
    
        const updatedRoundCount = roundCount + 1;
        setRoundCount(updatedRoundCount);
        setSimonsInstructions(getSimonsInstructions(level, updatedRoundCount, answers));
        setLoggedAnswers([]);

        if (updatedRoundCount > 2 && updatedRoundCount <= 4) {
            setLevel(2);
            setNumOfShapes(9);
        } else if (updatedRoundCount > 4 && updatedRoundCount <= 6) {
            setLevel(3);
            setNumOfShapes(13);
        } else if (updatedRoundCount > 6 && updatedRoundCount <= 8) {
            setLevel(4);
            setNumOfShapes(17);
        }
        return true;
    }

    const handleClick = (): void => {
        const updatedLoggedAnswers = [...loggedAnswers, `${color} ${shape}`];

        setLoggedAnswers(updatedLoggedAnswers);

        if (updatedLoggedAnswers.length === simonsInstructions.length) {
            // TODO: Why can't I pass loggedAnswers?
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

            {shape === 'triangle' && rotation === 'upright' && (
                <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5359 2C23.0755 -0.666669 26.9245 -0.666667 28.4641 2L49.2487 38C50.7883 40.6667 48.8638 44 45.7846 44H4.21539C1.13619 44 -0.788312 40.6667 0.751289 38L21.5359 2Z" fill={fill}/>
                </svg>
            )}

            {shape === 'triangle' && rotation === 'side-left' && (
                <svg width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.34648 28.316C-0.301267 26.7441 -0.254469 22.8954 2.43072 21.3883L38.6808 1.04292C41.3659 -0.464145 44.6756 1.50074 44.6382 4.57972L44.1328 46.1459C44.0954 49.2248 40.7389 51.1087 38.0911 49.5368L2.34648 28.316Z" fill={fill}/>
                </svg>
            )}

            {shape === 'triangle' && rotation === 'side-right' && (
                <svg width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.5285 21.604C45.213 23.1124 45.258 26.9611 42.6095 28.5318L6.8547 49.7354C4.2062 51.3061 0.850614 49.4207 0.814647 46.3417L0.329101 4.77528C0.293135 1.69629 3.60376 -0.26701 6.28823 1.24134L42.5285 21.604Z" fill={fill}/>
                </svg>
            )}

            {shape === 'triangle' && rotation === 'upside-down' && (
                <svg width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.1328 42.6487C27.6063 45.3229 23.7573 45.3418 22.2047 42.6827L1.24385 6.785C-0.308805 4.12591 1.59934 0.783191 4.6785 0.768098L46.2472 0.564341C49.3264 0.549248 51.2672 3.87311 49.7407 6.54729L29.1328 42.6487Z" fill={fill}/>
                </svg>
            )}
        </button>
    )
}
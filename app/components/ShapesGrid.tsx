import React, { useContext } from 'react';
import { AppStateContext, AppStateContextType } from '../state/AppState';
import { CentralShapesGrid } from './CentralShapesGrid';
import { ShapeButton } from './ShapeButton';

export const ShapesGrid: React.FC = () => {
    const { numOfShapes } = useContext(AppStateContext as React.Context<AppStateContextType>);
    console.log('Num of shapes', numOfShapes);

    return (
        <div>
            { numOfShapes === 4 && (
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <ShapeButton shape='square' color='red' />
                    <ShapeButton shape='square' color='yellow' />
                    <ShapeButton shape='square' color='green' />
                    <ShapeButton shape='square' color='blue' />
                </div>
            ) }

            { numOfShapes === 9 && (
                <CentralShapesGrid />
            )}

            { (numOfShapes === 13 || numOfShapes === 17) && (
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <ShapeButton shape='star' color='yellow'/>
                        )}
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='triangle' color='green' rotation='upright'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <ShapeButton shape='star' color='blue'/>
                        )}
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="col-start-2 col-end-5 row-start-2 row-end-5"> 
                        <CentralShapesGrid />
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='triangle' color='blue' rotation='side-left'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='triangle' color='red' rotation='side-right'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <ShapeButton shape='star' color='red'/>
                        )}
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='triangle' color='yellow' rotation='upside-down'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <ShapeButton shape='star' color='green'/>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
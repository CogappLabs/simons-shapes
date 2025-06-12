import React from "react";
import { CentralShapesGrid } from './CentralShapesGrid';

export interface ShapesGridProps {
    numOfShapes: 4 | 9 | 13 | 17;
}

export const ShapesGrid: React.FC<ShapesGridProps> = ({numOfShapes}) => {
    return (
        <div>
            { numOfShapes === 4 && <p>Grid with 4 shapes</p> }

            { numOfShapes === 9 && (
                <CentralShapesGrid />
            )}

            { numOfShapes === 13 || numOfShapes === 17 && (
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <p>S</p>
                        )}
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <p>T</p>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <p>S</p>
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
                        T
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        T
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <p>S</p>
                        )}
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <p>T</p>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        {numOfShapes === 17 && (
                            <p>S</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
import React from "react";
import { ShapeButton } from './ShapeButton';

export interface ShapesGridProps {
    numOfShapes: 4 | 9 | 13 | 17;
}

export const ShapesGrid: React.FC<ShapesGridProps> = ({numOfShapes}) => {
    return (
        <div>
            { numOfShapes === 4 && <p>Grid with 4 shapes</p> }
            { numOfShapes === 9 && (
                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='rectangle' color='red'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='circle' color='blue'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='rectangle' color='yellow'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='circle' color='yellow'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='star' color='purple'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='circle' color='green'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='rectangle' color='green'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='circle' color='red'/>
                    </div>
                    <div className="w-16 h-16 flex justify-center items-center">
                        <ShapeButton shape='rectangle' color='blue'/>
                    </div>
                </div>
            )}
            { numOfShapes === 13 && <p>Grid with 13 shapes</p> }
            { numOfShapes === 17 && <p>Grid with 17 shapes</p> }
        </div>
    );
}
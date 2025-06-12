import React from 'react';
import { ShapeButton } from './ShapeButton';

type ShapeObject = { 
    id: string;
    shape: 'rectangle' | 'circle' | 'star' | 'triangle';
    color: 'red' | 'blue' | 'yellow' | 'green' | 'purple';
}[];


export const CentralShapesGrid: React.FC = () => {
    const centralShapes: ShapeObject = [
        { 
            id: crypto.randomUUID(),
            shape: 'rectangle', 
            color: 'red', 
        }, 
        { 
            id: crypto.randomUUID(),
            shape: 'circle',
            color: 'blue',
        },
        { 
            id: crypto.randomUUID(),
            shape: 'rectangle', 
            color: 'yellow', 
        },
        { 
            id: crypto.randomUUID(),
            shape: 'circle',
            color: 'yellow',
        },
        { 
            id: crypto.randomUUID(),
            shape: 'star',
            color: 'purple',
        },
        { 
            id: crypto.randomUUID(),
            shape: 'circle',
            color: 'green',
        },
        { 
            id: crypto.randomUUID(),
            shape: 'rectangle', 
            color: 'green', 
        }, 
        { 
            id: crypto.randomUUID(),
            shape: 'circle',
            color: 'red',
        },
        { 
            id: crypto.randomUUID(),
            shape: 'rectangle', 
            color: 'blue', 
        }
    ];

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4"> 
            {centralShapes.map((shape) => (
                <div key={shape.id} className="w-16 h-16 flex justify-center items-center">
                    <ShapeButton shape={shape.shape} color={shape.color}/>
                </div>
            ))}
        </div>
    )
}
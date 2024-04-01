import React from 'react';
import Cell from './Cell';

const Board = (props) => {
    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell 
                    key={index} 
                    value={item}
                    className={item === 'X' ? 'isX' : item === 'O' ? 'isO' : ''}
                    onClick={() => props.onClick(index)}
                ></Cell>        
            ))}
        </div>
    );
};

export default Board;
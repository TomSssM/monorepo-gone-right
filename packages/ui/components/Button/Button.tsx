import React, { FC, useState, useCallback } from 'react';
import './Button.css';

export const Button: FC = () => {
    const [clicked, setClicked] = useState(false);
    const onClick = useCallback(() => {
        setClicked(v => !v);
    }, [setClicked]);

    return (
        <button
            className="Button"
            style={{
                color: clicked ? 'red' : 'blue',
            }}
            onClick={onClick}
        >
            button
        </button>
    );
};

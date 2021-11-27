import React from 'react';

import './ClearButton.scss';

interface ClearButtonProps {
    first: string
    second: string

    clear(): void
}

const ClearButton: React.FC<ClearButtonProps> = ({first, second, clear}) => {
    const display = !((first === "") && (second === ""));
    return (
        <div className="menu__clear_container">
            <span
                style={(display) ? {} : {display: 'none'}}
                className="menu__clear_button"
                onClick={() => {
                    clear();
                    document.getElementById('from_input')!.focus();
                }}
            >Очистить маршрут</span>
        </div>
    );
};

export default ClearButton;
import React from 'react';

import './SelectMenu.scss';

interface SelectMenuProps {
    station: string
}

const SelectMenu: React.FC<SelectMenuProps> = ({station}) => {
    return (
        <div className="menu__select_content">
        </div>
    );
};

export default SelectMenu;
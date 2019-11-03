import React from 'react';

const ClickItem = (props) => {
    return (
        <div
            onClick={() => props.handleClick(props.id)}
            style={{ backgroundImage: `url('${props.image}')` }}
            id={props.id}
        />


    );
};

export default ClickItem;
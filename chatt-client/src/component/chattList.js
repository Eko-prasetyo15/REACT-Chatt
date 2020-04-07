import React from 'react';
import ChattItem from './chattItem'

export default function chattList(props) {
    const listItem = props.data.map((item, index) =>
        <ChattItem key={index} chatt={item} deletechatt={() => props.delete(item.id)} />
    );
    return (

    <ol>{listItem}</ol>
    )
}


import React from 'react';
import ChattItem from './chattItem'

export default function chattList(props) {
    console.log(props.data,'jjjjjjjjjjjjjjjjjjjjj')
    const listItems = props.data.map((item, index) =>
    <ChattItem key={index} chatt={item} delete={() => props.delete(item.id)}  resend={() => props.resend(item)} />
);

return (
    <ol>
        {listItems}
    </ol>
            )
}


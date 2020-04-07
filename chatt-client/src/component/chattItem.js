import React from 'react';

export default function chattItem(props) {
    return (
    <li><button onClick = {props.deletechatt}>x</button> {props.chatt.name} <br>
    </br>{props.chatt.content}</li>
    )
}
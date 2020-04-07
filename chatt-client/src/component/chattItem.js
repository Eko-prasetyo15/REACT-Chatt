import React from 'react';

export default function chattItem(props) {
    return (
    <li>{props.chatt.name} <br></br>{props.chatt.content}
    <button onClick={props.chatt.sent ? props.delete : props.resend}>{props.chatt.sent ? 'x' : 'kirim ulang'}</button>
    </li>)
}
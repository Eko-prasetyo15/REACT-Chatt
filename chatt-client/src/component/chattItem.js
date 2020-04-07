import React from 'react';

export default function chattItem(props) {
    const timestamp = props.chatt.id
    return (
        <div className="col-md-12 col-lg-6">
            <div className="panel">

                <div className="">
                    <div className="">
                        <ul className="list-unstyled media-block">
                            <li className="mar-btm">
                                <div className="media-left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-circle img-sm" alt="Profile Picture" />
                                </div>
                                <div className="media-body pad-hor">
                                    <div className="speech">
                                        <p className="speech-time">
                                            <i className="fa fa-clock-o fa-fw"></i>{Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)}
                                        </p>
                                        {props.chatt.name} <br></br> {props.chatt.content}
                                        <button onClick={props.chatt.sent ? props.delete : props.resend}>{props.chatt.sent ? 'x' : 'kirim ulang'}</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
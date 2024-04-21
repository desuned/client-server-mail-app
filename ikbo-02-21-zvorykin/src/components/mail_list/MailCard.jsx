import React from "react";
import {Link} from "react-router-dom";

export default function MailCard(props) {
    let path = "/mail/" + props.mailid;
    return (
        <Link to={path}>
            <div>
                {props.name}
                <b>{props.text}</b>
            </div>
        </Link>
    )
}
import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.information}</p>
            <a href={props.link} target="_blank">{props.link_name}</a>
        </Fragment>
    )
}

export default DescriptionWithLink;
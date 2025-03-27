import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    if (props.link) {

        return (
            <Fragment>
                <p>{props.information}</p>
                <a href={props.link} target="_blank">{props.link_name}</a>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.information}</u></p>
            </Fragment>
        )

    }
}

export default DescriptionWithLink;
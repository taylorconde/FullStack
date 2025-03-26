import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/DescriptionWithLink";

const Planet = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <GrayImg img_url={props.img_url} />
            <DescriptionWithLink information={props.information} link={props.link} link_name={props.link_name} />
        </div>

    )
}
export default Planet;
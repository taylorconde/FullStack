import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/DescriptionWithLink";


const Planet = (props) => {
    let title;
    if (props.title_with_underline) title = <h4><u>{props.title}</u></h4>
    else title = <h4>{props.title}</h4>


    return (
        <div>
            {title}
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <DescriptionWithLink information={props.information} link={props.link} link_name={props.link_name} />
        </div>

    )
}
export default Planet;
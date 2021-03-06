import React, {Fragment} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface ExternalLinkProp {
    href: string;
    text: string;
    icon?: IconProp;
}

export const ExternalLink: React.FC<ExternalLinkProp> = ({href, text, icon}) => {
    return (
        <a href={href}
           target="_blank"
           rel="noopener noreferrer"
           className="text-light">
            {
                icon ?
                    <Fragment>
                        <FontAwesomeIcon icon={icon}/>&nbsp;
                    </Fragment>
                    :
                    null
            }
            {text}
        </a>
    )
}

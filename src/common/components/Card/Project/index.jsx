// @flow
import { CardProjectBody } from "common/components/Card/Project/Body";
import { CardProjectHeader } from "common/components/Card/Project/Header";
import React from "react";
import "./index.less";

type TProps = {
    additionalInfo?: Array<any>,
    description: string,
    features: Array<any>,
    git: string,
    imgAlt: string,
    imgSrc: string,
    link: string,
    title: string,
};

export const CardProject = ({
    additionalInfo,
    description,
    features,
    git,
    imgAlt,
    imgSrc,
    link,
    title,
}: TProps): React$Node => {
    return (
        <div className="card-project">
            <CardProjectHeader
                additionalInfo={additionalInfo}
                description={description}
                git={git}
                imgAlt={imgAlt}
                imgSrc={imgSrc}
                link={link}
                title={title}
            />
            <div className="card-project__body-container">
                <CardProjectBody features={features} />
            </div>
        </div>
    );
};

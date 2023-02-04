// @flow
import aboutList from "data/about.json";
import { getAge, getWorkExperience } from "common/helpers/personalData";
import { getRandomString } from "common/helpers/random";
import { AboutItem } from "main/Home/Content/TabsContent/About/Item";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const ageData = {
    descriptionList: [
        {
            description: getAge(),
            useIntl: false,
        },
    ],
    title: "about.age.title",
};

const productionExperience = {
    descriptionList: [
        {
            description: "about.useInProd.value1",
            title: "about.useInProd.value1Title",
        },
        {
            description: "about.useInProd.value2",
            title: "about.useInProd.value2Title",
        },
        {
            description: "about.useInProd.value3",
            title: "about.useInProd.value3Title",
        },
        {
            description: "about.useInProd.value4",
            title: "about.useInProd.value4Title",
        },
        {
            description: "about.useInProd.value5",
            title: "about.useInProd.value5Title",
        },
    ],
    title: "about.useInProd.title",
};

const workExperienceData = {
    descriptionList: [
        {
            description: getWorkExperience(),
            descriptionIntlPostfix: "main.workExperience.measure",
            isBold: true,
            useIntl: false,
        },
    ],
    title: "about.workExperienceFrontend.title",
};

export const About = (): React$Node => {
    return (
        <div className="main-page-content-about">
            <AboutItem
                descriptionDataList={workExperienceData.descriptionList}
                title={workExperienceData.title}
            />
            <AboutItem
                descriptionDataList={productionExperience.descriptionList}
                title={productionExperience.title}
            />
            <AboutItem
                descriptionDataList={ageData.descriptionList}
                title={ageData.title}
            />
            {aboutList.map(({ descriptionList, title }) => {
                return (
                    <AboutItem
                        descriptionDataList={descriptionList}
                        key={getRandomString()}
                        title={title}
                    />
                );
            })}
        </div>
    );
};

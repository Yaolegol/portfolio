// @flow
import aboutList from "data/about.json";
import { getAge, getWorkExperience } from "common/helpers/personalData";
import { getRandomString } from "common/helpers/random";
import { AboutItem } from "main/Home/Content/TabsContent/About/Item";
import React from "react";
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

const workExperienceData = {
    descriptionList: [
        {
            description: getWorkExperience(),
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

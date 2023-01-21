// @flow
import aboutList from "data/about.json";
import { getRandomString } from "common/helpers/random";
import { AboutItem } from "main/Home/Content/TabsContent/About/Item";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const birthdayMilliseconds = new Date(1989, 0, 16).getTime();
const startWorkMilliseconds = new Date(2019, 9, 21).getTime();
const currentMilliseconds = Date.now();

const age = (currentMilliseconds - birthdayMilliseconds) / 31536000000;
const formattedAge = Math.trunc(age).toString();
const workExperience =
    (currentMilliseconds - startWorkMilliseconds) / 31536000000;
const formattedWorkExperience = Math.trunc(workExperience).toString();

const ageData = {
    descriptionList: [
        {
            description: formattedAge,
            useIntl: false,
        },
    ],
    title: "about.age.title",
};

const workExperienceData = {
    descriptionList: [
        {
            description: formattedWorkExperience + "+",
            isBold: true,
            useIntl: false,
        },
        {
            description: "about.workExperience.value1",
        },
        {
            description: "about.workExperience.value2",
        },
    ],
    title: "about.workExperience.title",
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

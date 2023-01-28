// @flow
import { CardProject } from "common/components/Card/Project";
import { Slider as CommonSlider } from "common/components/Slider";
import { SliderControls } from "main/Home/Content/TabsContent/Projects/Slider/Controls";
import projectsList from "data/projects.json";
import React, { useMemo, useState } from "react";
import "./index.less";

export const Slider = (): React$Node => {
    const [swiper, setSwiper] = useState();

    const content = useMemo(() => {
        return projectsList.map(
            ({ additionalInfo, features, git, header, image, link }) => {
                const { description, title } = header;
                const { alt, src } = image;
                return (
                    <div
                        className="home-page-content-tabs-content-projects-slider__project-card-slide"
                        key={git}
                    >
                        <div className="home-page-content-tabs-content-projects-slider__project-card-container">
                            <CardProject
                                additionalInfo={additionalInfo}
                                description={description}
                                features={features}
                                git={git}
                                imgAlt={alt}
                                imgSrc={src}
                                link={link}
                                title={title}
                            />
                        </div>
                    </div>
                );
            }
        );
    }, []);

    return (
        <div className="home-page-content-tabs-content-projects-slider">
            <SliderControls swiper={swiper} />
            <div className="home-page-content-tabs-content-projects-slider__slider-container">
                <CommonSlider onSwiper={setSwiper}>{content}</CommonSlider>
            </div>
        </div>
    );
};

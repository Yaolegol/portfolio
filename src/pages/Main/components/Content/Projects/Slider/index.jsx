// @flow
import { Slider as CommonSlider } from "common/components/Slider";
import ArrowIcon from "images/arrow-right.svg";
import { Slide } from "pages/Main/components/Content/Projects/Slider/Slide";
import projectsList from "config/projects.json";
import React, { useCallback, useMemo, useState } from "react";
import "./index.less";
import {FormattedMessage} from "react-intl";

export const Slider = (): React$Node => {
    const [swiper, setSwiper] = useState();

    const content = useMemo(() => {
        return projectsList.map(
            ({ additionalInfo, features, git, header, image, link }) => {
                const { description, title } = header;
                const { alt, src } = image;
                return (
                    <Slide
                        additionalInfo={additionalInfo}
                        description={description}
                        features={features}
                        git={git}
                        imgAlt={alt}
                        imgSrc={src}
                        key={git}
                        link={link}
                        title={title}
                    />
                );
            }
        );
    }, []);

    const slideNext = useCallback(() => {
        if (swiper) {
            swiper.slideNext(700);
        }
    }, [swiper]);

    const slidePrev = useCallback(() => {
        if (swiper) {
            swiper.slidePrev(700);
        }
    }, [swiper]);

    return (
        <div className="project-slider">
            <CommonSlider onSwiper={setSwiper}>{content}</CommonSlider>
            <div className="project-slider__controls">
                <button
                    className="project-slider__control-button"
                    onClick={slidePrev}
                >
                    <ArrowIcon className="project-slider__control-icon project-slider__control-icon_left" />
                    <span className="project-slider__controls-description project-slider__controls-description_prev">
                        <FormattedMessage id="main.slider.prevControlTitle" />
                    </span>
                </button>
                <button
                    className="project-slider__control-button"
                    onClick={slideNext}
                >
                    <span className="project-slider__controls-description project-slider__controls-description_next">
                        <FormattedMessage id="main.slider.nextControlTitle" />
                    </span>
                    <ArrowIcon className="project-slider__control-icon" />
                </button>
            </div>
        </div>
    );
};

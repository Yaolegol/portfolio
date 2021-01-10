// @flow
import { Slider as CommonSlider } from "common/components/Slider";
import ArrowIcon from "images/arrow-right.svg";
import { Slide } from "pages/Main/components/Content/Projects/Slider/Slide";
import projectsList from "config/projects.json";
import React, { useCallback, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import "./index.less";

export const Slider = (): React$Node => {
    const [swiper, setSwiper] = useState();

    const intl = useIntl();

    const content = useMemo(() => {
        return projectsList.map(({ features, git, header, image }) => {
            const { description, title } = header;
            const { alt, src } = image;
            return (
                <Slide
                    description={description}
                    features={features}
                    git={git}
                    imgAlt={alt}
                    imgSrc={src}
                    key={git}
                    title={title}
                />
            );
        });
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
                </button>
                <button
                    className="project-slider__control-button"
                    onClick={slideNext}
                >
                    <ArrowIcon className="project-slider__control-icon" />
                </button>
            </div>
        </div>
    );
};

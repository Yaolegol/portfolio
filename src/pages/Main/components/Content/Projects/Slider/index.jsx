// @flow
import { Slider as CommonSlider } from "common/components/Slider";
import ArrowIcon from "images/arrow-right.svg";
import { Slide } from "pages/Main/components/Content/Projects/Slider/Slide";
import React, { useState, useCallback } from "react";
import { useIntl } from "react-intl";
import "./index.less";

export const Slider = (): React$Node => {
    const [swiper, setSwiper] = useState();

    const intl = useIntl();

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
            <CommonSlider onSwiper={setSwiper}>
                <Slide
                    buttonText={intl.formatMessage({
                        id: "common.buttons.shopNow.title",
                    })}
                    description={intl.formatMessage({
                        id: "hero.slide.description",
                    })}
                    imgAlt="Hero"
                    imgSrc="images/concrete.png"
                    onClick={() => console.log("click")}
                    title={intl.formatMessage({
                        id: "hero.slide.title",
                    })}
                />
                <Slide
                    buttonText={intl.formatMessage({
                        id: "common.buttons.shopNow.title",
                    })}
                    description={intl.formatMessage({
                        id: "hero.slide.description",
                    })}
                    imgAlt="Hero"
                    imgSrc="images/takeoff.png"
                    onClick={() => console.log("click")}
                    title={intl.formatMessage({
                        id: "hero.slide.title",
                    })}
                />
                <Slide
                    buttonText={intl.formatMessage({
                        id: "common.buttons.shopNow.title",
                    })}
                    description={intl.formatMessage({
                        id: "hero.slide.description",
                    })}
                    imgAlt="Hero"
                    imgSrc="images/cats.jpg"
                    onClick={() => console.log("click")}
                    title={intl.formatMessage({
                        id: "hero.slide.title",
                    })}
                />
            </CommonSlider>
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

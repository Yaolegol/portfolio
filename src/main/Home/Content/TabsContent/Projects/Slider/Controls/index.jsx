// @flow
import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import "icons/arrow-right.svg";
import "./index.less";

type TProps = {
    swiper: any,
};

export const SliderControls = ({ swiper }: TProps): React$Node => {
    const slideNext = useCallback(() => {
        if (!swiper) {
            return;
        }

        swiper.slideNext(700);
    }, [swiper]);

    const slidePrev = useCallback(() => {
        if (!swiper) {
            return;
        }

        swiper.slidePrev(700);
    }, [swiper]);

    return (
        <div className="home-page-content-tabs-content-projects-slider-controls">
            <button
                className="home-page-content-tabs-content-projects-slider-controls__button"
                onClick={slidePrev}
            >
                <svg className="home-page-content-tabs-content-projects-slider-controls__icon home-page-content-tabs-content-projects-slider-controls__icon_left">
                    <use href="/sprite.svg#arrow-right" />
                </svg>
                <span className="home-page-content-tabs-content-projects-slider-controls__description home-page-content-tabs-content-projects-slider-controls__description_prev">
                    <FormattedMessage id="main.slider.prevControlTitle" />
                </span>
            </button>
            <button
                className="home-page-content-tabs-content-projects-slider-controls__button"
                onClick={slideNext}
            >
                <span className="home-page-content-tabs-content-projects-slider-controls__description home-page-content-tabs-content-projects-slider-controls__description_next">
                    <FormattedMessage id="main.slider.nextControlTitle" />
                </span>
                <svg className="home-page-content-tabs-content-projects-slider-controls__icon">
                    <use href="/sprite.svg#arrow-right" />
                </svg>
            </button>
        </div>
    );
};

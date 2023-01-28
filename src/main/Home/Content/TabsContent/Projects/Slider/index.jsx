// @flow
import { CardProject } from "common/components/Card/Project";
import { SliderButtonNavigation } from "common/components/Slider/ButtonNavigation";
import projectsList from "data/projects.json";
import React, { useCallback, useMemo, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.less";
import "./index.less";

SwiperCore.use([Navigation]);

export const Slider = (): React$Node => {
    const controlNextRef = useRef(null);
    const controlPrevRef = useRef(null);

    const content = useMemo(() => {
        return projectsList.map(
            ({ additionalInfo, features, git, header, image, link }) => {
                const { description, title } = header;
                const { alt, src } = image;
                return (
                    <SwiperSlide key={git}>
                        <div className="home-page-content-tabs-content-projects-slider__project-card-slide">
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
                    </SwiperSlide>
                );
            }
        );
    }, []);

    const onSwiperInit = useCallback(
        (swiper) => {
            swiper.params.navigation.prevEl = controlPrevRef.current;
            swiper.params.navigation.nextEl = controlNextRef.current;
            swiper.navigation.update();
        },
        [controlNextRef, controlPrevRef]
    );

    const isSliderControlsRefsSet = useMemo(() => {
        return Boolean(controlNextRef) && Boolean(controlPrevRef);
    }, [controlNextRef, controlPrevRef]);

    return (
        <div className="home-page-content-tabs-content-projects-slider">
            <div className="home-page-content-tabs-content-projects-slider__navigation-container">
                <SliderButtonNavigation isPrev ref={controlPrevRef} />
                <SliderButtonNavigation ref={controlNextRef} />
            </div>
            <div className="home-page-content-tabs-content-projects-slider__slider-container">
                {isSliderControlsRefsSet ? (
                    <Swiper autoHeight onInit={onSwiperInit}>
                        {content}
                    </Swiper>
                ) : null}
            </div>
        </div>
    );
};

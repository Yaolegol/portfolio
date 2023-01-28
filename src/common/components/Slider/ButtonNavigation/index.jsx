// @flow
import { stylesConcat } from "common/helpers/styles";
import React, { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import "icons/arrow-right.svg";
import "./index.less";

type TProps = {
    isPrev?: boolean,
};

export const SliderButtonNavigation: any = forwardRef(
    ({ isPrev }: TProps, ref: any) => {
        return (
            <button
                className={stylesConcat([
                    "slider-button-navigation",
                    isPrev ? "slider-button-navigation_prev" : "",
                ])}
                ref={ref}
                type="button"
            >
                <span className="slider-button-navigation__description">
                    <FormattedMessage
                        id={
                            isPrev
                                ? "main.slider.prevControlTitle"
                                : "main.slider.nextControlTitle"
                        }
                    />
                </span>
                <svg className="slider-button-navigation__icon">
                    <use href="/sprite.svg#arrow-right" />
                </svg>
            </button>
        );
    }
);

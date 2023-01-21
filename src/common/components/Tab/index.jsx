// @flow
import cn from "classnames";
import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    descriptionId: string,
    iconName: string,
    isActive: boolean,
    onClick: (id: string) => void,
    tabId: string,
};

export const Tab = ({
    descriptionId,
    iconName,
    isActive,
    onClick,
    tabId,
}: TProps): React$Node => {
    const handleClick = useCallback(() => {
        onClick(tabId);
    }, [onClick, tabId]);

    return (
        <button
            className={cn("tab", isActive ? "active" : "")}
            onClick={handleClick}
            type="button"
        >
            <svg className="tab__icon">
                <use href={`/sprite.svg#${iconName}`} />
            </svg>
            <span className="tab__description">
                <FormattedMessage id={descriptionId} />
            </span>
        </button>
    );
};

// @flow
const getLocaleState = ({ locale }) => locale;

export const selectCurrentLocale: any = (state) => {
    const { currentLocale } = getLocaleState(state);

    return currentLocale;
};

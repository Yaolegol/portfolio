const millisecondsInYear = 31536000000;

const getYearsCount = (dateMilliseconds) => {
    const currentMilliseconds = Date.now();

    return (currentMilliseconds - dateMilliseconds) / millisecondsInYear;
};

const truncAndStringifyNumber = (number) => {
    return Math.trunc(number).toString();
};

export const getAge = () => {
    const birthdayMilliseconds = new Date(1989, 0, 16).getTime();
    const age = getYearsCount(birthdayMilliseconds);

    return truncAndStringifyNumber(age);
};

export const getWorkExperience = () => {
    const startWorkMilliseconds = new Date(2019, 9, 21).getTime();
    const workExperience = getYearsCount(startWorkMilliseconds);

    return truncAndStringifyNumber(workExperience) + "+";
};

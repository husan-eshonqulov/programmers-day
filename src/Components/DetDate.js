import React, { useState, useEffect } from 'react';

function Date(props) {
    const [date, setDate] = useState(null);
    const [month, setMonth] = useState(null);
    const [Year, setYear] = useState(null);
    const [weekDay, setWeekDay] = useState(null);

    useEffect(() => {
        const infoAboutProgDay = detDate(props.year);

        if (infoAboutProgDay != null) {
            setDate(infoAboutProgDay.date);
            setMonth(infoAboutProgDay.month);
            setYear(infoAboutProgDay.year);
            setWeekDay(infoAboutProgDay.weekDay);
        }
    });

    if (date != null) {
        return (
            <h2 className="mt-5 text-secondary">
                {date} {month} , &nbsp; {Year} <span className="d-block mt-3">{weekDay}</span>
            </h2>
        );
    }
    else {
        return (<h2></h2>);
    }
}

export default Date;



function isLeapYear(year) {
    if (((year % 100) % 4 === 0 && year % 100 !== 0) ||
        ((year / 100) % 4 === 0)) {
        return true;
    }

    return false;
}


function detFirstDayOfYear(year) {
    const extraYears = year - 2020;

    if (isLeapYear(year)) {
        // const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const adders = (year >= 2020) ? [0, -2, 3, 1, -1, 4, 2] : [0, 2, 4, -1, 1, 3, -2];
        const fixExtYears = (year >= 2020) ? extraYears : ((-1) * extraYears);
        const wholeLeaps = fixExtYears / 4;
        const restWeeks = wholeLeaps % 7;
        const adder = adders[restWeeks];
        // const firstDay = weekDays[2 + adder];

        return 2 + adder;
    }
    else {
        // const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let index = 2;
        if (year > 2020) {
            for (let i = 2020; i < year; i++) {
                index = isLeapYear(i) ? index + 2 : index + 1;
                if (index > 6) {
                    index %= 7;
                }
            }
        }
        else {
            for (let i = 2019; i >= year; i--) {
                if (index === 0) {
                    index = 7;
                }

                index = isLeapYear(i) ? index - 2 : index - 1;

                if (index === -1) {
                    index = 6;
                }
            }
        }
        // const firstDay = weekDays[index];

        return index;
    }
}


function detDate(year) {
    if (year === null) return;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let indexOfWeeks = detFirstDayOfYear(year);
    const extraDay = isLeapYear(year) ? 1 : 0;
    const daysOfMonths = [31, 28 + extraDay, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let indexOfMonths = 0;
    let date = 1;

    for (let i = 1; i < 256; i++) {
        if (indexOfWeeks === 6) {
            indexOfWeeks = -1;
        }

        if (date === daysOfMonths[indexOfMonths]) {
            date = 0;
            indexOfMonths++;
        }

        indexOfWeeks++; // 5 6
        date++; // 2 3
    }

    return {
        date: date,
        month: months[indexOfMonths],
        year: year,
        weekDay: weekDays[indexOfWeeks],
    };
}

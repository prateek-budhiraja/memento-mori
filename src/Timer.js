import React, { useState } from "react";

const Timer = ({ dob }) => {
    const countDown = dob.getTime() + 80 * 12 * 30 * 24 * 60 * 60 * 1000;

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    setInterval(() => {
        const now = new Date();
        const milliSecLeft = countDown - now.getTime();
        setTimeLeft({
            days: Math.floor(milliSecLeft / (1000 * 60 * 60 * 24)),
            hours: Math.floor((milliSecLeft / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((milliSecLeft / 1000 / 60) % 60),
            seconds: Math.floor((milliSecLeft / 1000) % 60)
        })
    }, 1000)

    return (
        <>
            <h1>{timeLeft.days}</h1>
            <h2>
                {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </h2>
        </>
    )

}

export default Timer;
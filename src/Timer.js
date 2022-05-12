import React, { useEffect, useState } from "react";

const Timer = ({ dob }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {
        const myInterval = setInterval(() => {
            const countDown = dob.getTime() + 80 * 12 * 30 * 24 * 60 * 60 * 1000;
            const now = new Date();
            const milliSecLeft = countDown - now.getTime();
            setTimeLeft({
                days: Math.floor(milliSecLeft / (1000 * 60 * 60 * 24)),
                hours: Math.floor((milliSecLeft / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((milliSecLeft / 1000 / 60) % 60),
                seconds: Math.floor((milliSecLeft / 1000) % 60),
            })
        }, 1000)
        return () => { clearInterval(myInterval) }
    }, [dob]);



    return (
        <>
            <h1>{timeLeft.days}</h1>
            <h2>
                {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}:{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}:{timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}
            </h2>
        </>
    )


}

export default Timer;
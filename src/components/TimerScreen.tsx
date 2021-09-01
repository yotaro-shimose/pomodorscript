import React, { FC } from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from '@material-ui/core';



interface TimerScreenProp {
    name: string,
    duration: number,
    onDone?: (event: Event) => void,
}

interface Event {
    name: string,
    start: Date,
    end: Date,
}



function padding(value: number, len: number): string {
    return (Array(len).join('0') + value).slice(-len);
}

const TimerScreen: FC<TimerScreenProp> = ({ name, duration, onDone = null }) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + duration)
    const createEvent = () => {
        const end = new Date();
        const elapsed = duration;
        const start = new Date();
        start.setSeconds(end.getSeconds() - elapsed);

        return {
            name: name,
            start: start,
            end: end
        };
    };

    const onExpire = () => {
        if (onDone !== null) {
            const event = createEvent();
            onDone(event);
        }
    };

    const timer = useTimer({
        expiryTimestamp: time as unknown as number,
        autoStart: false,
        onExpire: onExpire,
    });

    const onClickExpire = () => {
        if (onDone === null) {
            return;
        }
        const end = new Date();
        const elapsed = duration - timer.minutes * 60 - timer.seconds;
        const start = new Date();
        start.setSeconds(end.getSeconds() - elapsed);

        const event = {
            name: name,
            start: start,
            end: end
        };
        onDone(event);
    }



    return (
        <div style={{ textAlign: "center" }}>
            <h1>{name}</h1>
            <div style={{ fontSize: "100px" }}>
                <span>{padding(timer.minutes, 2)}</span>:<span>{padding(timer.seconds, 2)}</span>
            </div>
            {!timer.isRunning ? <Button onClick={timer.resume}>Start</Button> : <Button onClick={timer.pause}>Pause</Button>}
            <Button onClick={onClickExpire}>Done</Button>

        </div>
    )

}

export default TimerScreen;
export type { Event };
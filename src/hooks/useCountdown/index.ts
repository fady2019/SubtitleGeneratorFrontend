import { useRef, useState } from 'react';

const useCountdown = (initCount: number = 0) => {
    const countTimerRef = useRef<NodeJS.Timeout>();
    const [count, setCount] = useState<number>(initCount);

    const startCount = (initCount: number) => {
        if (initCount <= 0) {
            throw new Error('initCount must be positive number');
        }

        clearInterval(countTimerRef.current);

        setCount(initCount);

        countTimerRef.current = setInterval(() => {
            setCount((curr) => {
                if (curr == 1) {
                    clearInterval(countTimerRef.current);
                    countTimerRef.current = undefined;
                }

                return curr - 1;
            });
        }, 1000);
    };

    return { count, startCount };
};

export default useCountdown;

import { useEffect, useState, VFC } from 'react';
import {
    convertDayNumberToString,
    convertMonthNumberToString,
} from '../../utils/date-times';

function formatDateForHeader(currentDate: Date): string {
    const day = convertDayNumberToString(currentDate.getDay()).slice(0, 3);
    const month = convertMonthNumberToString(currentDate.getMonth()).slice(
        0,
        3
    );
    const date = currentDate.getDate();
    const min = currentDate.getMinutes();
    const hour = currentDate.getHours();
    return `${day} ${month} ${date}  ${hour}:${min}`;
}

export const TheHeader: VFC = () => {
    const [currentDate, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <header className='bg-gray-100 top-0 w-full h-8 opacity-80'>
                <div className='flex flex-row'>
                    <p className='mx-5 mt-1 text-black font-bold'>⚫</p>
                    <p className='mt-1 text-black font-semibold'>Menu</p>
                    {/* TODO 時刻と日付を表示 */}
                    <p className='mt-1 text-black font-semibold ml-auto mr-5'>
                        {formatDateForHeader(currentDate)}
                    </p>
                </div>
            </header>
        </>
    );
};

import { useEffect, useState } from 'react';
import ShowSeason from './ShowSeason';

const CalendarCard = () => {
    const [season, setSeason] = useState('Spring');
    const [calendarData, setCalendarData] = useState([]);

    useEffect(
        () => {
            const fetchCalendar = async () => {
                const response = await fetch('/api/calendar');
                const json = await response.json();

                if (response.ok) {
                    setCalendarData(json);
                }

                /* if (user) {
            fetchWorkouts();
        } */
            };
            fetchCalendar();
        },
        [
            /* season, */
            /* dispatch, user */
        ]
    );

    if (calendarData.length === 0) {
        return <div>Loading...</div>;
    }
    const SeasonComponent = (props) => {
        return (
            <li className='nav-item' key={props.season}>
                <button
                    className={`nav-link ${
                        season === props.season ? 'active' : ''
                    }`}
                    onClick={() => setSeason(props.season)}
                >
                    {props.season}
                </button>
            </li>
        );
    };

    return (
        <div className='card card-container'>
            <div className='card-header'>
                <ul className='nav nav-tabs card-header-tabs'>
                    <SeasonComponent season='Spring' />
                    <SeasonComponent season='Summer' />
                    <SeasonComponent season='Fall' />
                    <SeasonComponent season='Winter' />
                </ul>
            </div>
            <ShowSeason season={season} calendarData={calendarData} />
        </div>
    );
};

export default CalendarCard;

const ShowSeason = ({ season, calendarData }) => {
    const seasonEvents = calendarData.filter((s) => s.Season === season);

    return (
        <div className='card-body'>
            <h5 className='card-title'>{season}</h5>
            {seasonEvents.map((seasons, idx) => (
                <div className='list-container' key={`${seasons.Name}-${idx}`}>
                    <p className='container-left'>{seasons.Date}:</p>
                    <p className='container-right'>
                        <img
                            className='list-img'
                            src={`${seasons.Image}`}
                        ></img>{' '}
                        {seasons.Name} {seasons.Event}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ShowSeason;

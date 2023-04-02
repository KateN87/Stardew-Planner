import ProjectCard from '../Components/ProjectCard';
import CalendarCard from '../Components/CalendarCard';

const Home = () => {
    return (
        <div className='page-container row'>
            <CalendarCard />
            <ProjectCard />
        </div>
    );
};

export default Home;

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    /* const findResourceList = useSelector((state) => state.userReducer);
    console.log(findResourceList); */
    return (
        <div className='card card-container'>
            <div className='card-header'>
                Resources to Find
                <Link to='/findResource'>
                    <button>Add</button>
                </Link>
            </div>
            <div className='card-body'>
                {/*                 {findResourceList.map((resource) => (
                    <div className='calendar-list'>
                        <p className='container-left'>{resource.amount}</p>
                        <p className='container-right'>
                            <img
													className='calendar-img'
													src={`${season.image}`}
												></img>
                            {resource.item}
                        </p>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default ProjectCard;

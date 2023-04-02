import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);
    const resourceOrderList = useSelector(
        (state) => state.resourceOrderReducer
    );

    useEffect(() => {
        const fetchResourceOrders = async () => {
            const response = await fetch(`/api/user/resourceorders`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'GET_RESOURCE_ORDER', payload: json });
                console.log('FRONT JSON', json);
            }
        };
        fetchResourceOrders();
        console.log('FRONT resourceOrderList', resourceOrderList);
    }, []);

    return (
        <div className='card card-container'>
            <div className='card-header'>
                Resources to Find
                <Link to='/findResource'>
                    <button>Add</button>
                </Link>
            </div>
            {resourceOrderList.length > 0 && (
                <div className='card-body'>
                    {resourceOrderList.map((resource) => (
                        <div className='calendar-list' key={resource.itemId}>
                            <p className='container-left'>
                                {resource.quantity}
                            </p>
                            <p className='container-right'>
                                {resource.itemName}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;

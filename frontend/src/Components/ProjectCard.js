import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);
    const resourceOrderList = useSelector(
        (state) => state.resourceOrderReducer
    );

    console.log(resourceOrderList);

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
            }
        };
        if (user.token) {
            fetchResourceOrders();
        }
    }, [user.token]);

    const handleRemove = async (id) => {
        const response = await fetch(`api/user/resourceorders/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'GET_RESOURCE_ORDER', payload: json });
        }
    };

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
                        <div className='list-container' key={resource._id}>
                            <p className='container-left'>
                                <img
                                    className='list-img'
                                    src={`${resource.Image}`}
                                ></img>
                            </p>
                            <p className='container-left'>
                                {resource.quantity}
                            </p>
                            <p className='container-right'>{resource.Name}</p>
                            <span
                                className='material-symbols-outlined'
                                /* onClick={() => handleEdit(item._id)} */
                            >
                                edit
                            </span>
                            <span
                                className='material-symbols-outlined'
                                onClick={() => handleRemove(resource._id)}
                            >
                                delete
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;

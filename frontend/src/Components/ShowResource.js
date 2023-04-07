import { useDispatch, useSelector } from 'react-redux';

const ShowResource = ({ resource, resourceList }) => {
    const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleAdd = async (e, _id) => {
        e.preventDefault();

        const newResource = {
            itemId: _id,
            quantity: e.target.qty.value,
        };
        try {
            const response = await fetch(`/api/user/resourceorders`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${user.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newResource }),
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'GET_RESOURCE_ORDER', payload: json });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='card-body'>
            <h5 className='card-title'>{resource}</h5>
            {resourceList.map((resource) => (
                <form
                    className='list-container'
                    key={resource.Name}
                    onSubmit={(e) => handleAdd(e, resource._id)}
                >
                    <p className='container-left'>
                        <img
                            className='list-img'
                            src={`${resource.Image}`}
                        ></img>
                    </p>
                    <p className='container-right'>{resource.Name}</p>{' '}
                    <input
                        name='qty'
                        className='small-input'
                        type='number'
                        placeholder='Qty'
                        min='0'
                        max='999'
                    />
                    <button type='submit' className='btnRight'>
                        Add
                    </button>
                </form>
            ))}
        </div>
    );
};

export default ShowResource;

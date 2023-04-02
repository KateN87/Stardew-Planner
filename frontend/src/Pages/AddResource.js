import { useEffect, useState } from 'react';

import ProjectCard from '../Components/ProjectCard';
import getresourceList from '../Hooks/useResourceList';

const ResourceList = () => {
    const [resource, setResource] = useState('Animals');
    const [resourceList, setResourceList] = useState('');

    useEffect(() => {
        const fetchResources = async () => {
            let url = getresourceList(resource);

            const response = await fetch(`/api/resources/${url}`);
            const json = await response.json();

            if (response.ok) {
                setResourceList(json);
            }
        };
        fetchResources();
    }, [resource]);

    const handleAdd = (name) => {
        console.log(name);
    };

    const ShowResource = () => {
        return (
            <div className='card-body'>
                <h5 className='card-title'>{resource}</h5>
                {resourceList.map((item) => (
                    <div
                        className='calendar-list resourcesList'
                        key={item.Name}
                    >
                        <p className='container-left'>
                            <img
                                className='calendar-img'
                                src={`${item.Image}`}
                            ></img>
                        </p>
                        <p className='container-right'>{item.Name}</p>{' '}
                        <input
                            className='small-input'
                            type='number'
                            placeholder='Qty'
                            min='0'
                            max='999'
                        />
                        <button
                            className='btnRight'
                            onClick={() => handleAdd(item.Name)}
                        >
                            Add
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    const ResourceHeader = (props) => {
        return (
            <li className='nav-item' key={props.resource}>
                <button
                    id='resource'
                    className={`nav-link  ${
                        resource === props.resource ? 'active' : ''
                    }`}
                    onClick={() => setResource(props.resource)}
                >
                    {props.resource}
                </button>
            </li>
        );
    };
    if (resourceList.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='page-container row'>
            <div className='card card-container resource-container'>
                <div className='card-header'>
                    <ul className='nav nav-tabs card-header-tabs'>
                        <ResourceHeader resource='Crops' />
                        <ResourceHeader resource='Fish' />
                        <ResourceHeader resource='Animals' />
                        <ResourceHeader resource='Minerals' />
                        <ResourceHeader resource='Artifacts' />
                        <ResourceHeader resource='Forage' />
                    </ul>
                </div>
                <ShowResource />
            </div>
            <ProjectCard />
        </div>
    );
};

export default ResourceList;

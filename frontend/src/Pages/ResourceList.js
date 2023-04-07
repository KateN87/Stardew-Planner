import { useEffect, useState } from 'react';

import ProjectCard from '../Components/ProjectCard';
import ShowResource from '../Components/ShowResource';

const ResourceList = () => {
    const [resource, setResource] = useState('Animals');
    const [resourceList, setResourceList] = useState('');

    useEffect(() => {
        const fetchResources = async () => {
            const response = await fetch(`/api/resources/${resource}`);
            const json = await response.json();

            if (response.ok) {
                setResourceList(json);
            }
        };
        fetchResources();
    }, [resource]);

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
                <ShowResource
                    setResource={setResource}
                    resourceList={resourceList}
                />
            </div>
            <ProjectCard />
        </div>
    );
};

export default ResourceList;

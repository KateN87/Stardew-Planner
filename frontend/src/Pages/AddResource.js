import { useState } from 'react';
/* import Crops from '../database/Crops.js';
import Animals from '../database/Animals.js';
import Fish from '../database/Fish.js';
import Minerals from '../database/Minerals.js';
import Artifacts from '../database/Artifacts.js';
import Forage from '../database/Forage.js'; */

/* const ShowList = () => {
    return (
        <div className='card card-container'>
            <div className='card-header'>
                Resources to Find
                <button>Save</button>
            </div>
            <div className='card-body'>
                <div className='calendar-list'>
                    <input
                        className='container-left small-input'
                        type='number'
                        min='0'
                        max='999'
                    />
                    <p className='container-right'>
                        <img
                        className='calendar-img'
                        src={`${season.image}`}
                    ></img>
                        wood
                    </p>
                </div>
            </div>
        </div>
    );
}; */

const AddResource = () => {
    const [resource, setResource] = useState('Animals');
    /* const resources = { Crops, Animals, Fish, Minerals, Artifacts, Forage }; */

    /* const handleAdd = (name) => {
        console.log(name);
    }; */

    /*     const ShowResource = () => {
        const selected = resources[resource];
        return (
            <div className='card-body'>
                <h5 className='card-title'>{resource}</h5>
                {selected.map((item) => (
                    <div className='calendar-list' key={item.Name}>
                        <p className='container-left'>
                            <img
                                className='calendar-img'
                                src={`${item.Image}`}
                            ></img>
                                                        <button onClick={() => handleAdd(item.Name)}>
                                Add
                            </button>
                        </p>
                        <p className='container-right'>{item.Name}</p>
                    </div>
                ))}
            </div>
        );
    }; */

    const ResourceComponent = (props) => {
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

    return (
        <div className='page-container row'>
            <div className='card card-container resource-container'>
                <div className='card-header'>
                    <ul className='nav nav-tabs card-header-tabs'>
                        <ResourceComponent resource='Crops' />
                        <ResourceComponent resource='Fish' />
                        <ResourceComponent resource='Animals' />
                        <ResourceComponent resource='Minerals' />
                        <ResourceComponent resource='Artifacts' />
                        <ResourceComponent resource='Forage' />
                    </ul>
                </div>
                {/* <ShowResource /> */}
            </div>
            {/* <ShowList /> */}
        </div>
    );
};

export default AddResource;

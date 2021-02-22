import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import './style.css';

interface Props {
    data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({data}) => {
    if(!data.launch){
        return<div>Launch unavailable!</div>
    }

    return(
        <div className="LaunchProfile">
            <div className="LaunchProfile__status">
                {/* <span>Flight {data.launch.flight_number}:</span> */}
                {data.launch.launch_success ? (
                    <span className="LaunchProfile__success">Success</span>
                ) : (
                        <span className="LaunchProfile__failed">Failure</span>
                    )}
            </div>
            <h1 className="LaunchProfile__title">
                {data.launch.mission_name}
                {data.launch.rocket &&
                    ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
            </h1>
            <p className={`LaunchProfile__description`}>{data.launch.details}</p>

            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div className="LaunchProfile__image-list">
                    {data.launch.links.flickr_images.map(image =>
                        image ? <img src={image} className="LaunchProfile__image" key={image} alt="a"/> : null,
                    )}
                </div>
            )}

        </div>
    )
}

export default LaunchDetails;
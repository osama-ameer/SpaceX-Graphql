import { type } from 'os';
import React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import './style.css'

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
    data: LaunchesQuery;
}
const Launch: React.FC<Props> = ({data,  handleIdChange}) => (
    <div className="LaunchList">
        <h3>SpaceX Launches</h3>
        <ol className="LaunchList_list">
            {!!data.launches && data.launches.map((launch, i) => !!launch && (
                <li key={i} className="LaunchList_item" onClick={() => handleIdChange(launch.flight_number!)}>
                    {launch.mission_name} {launch.launch_year}
                </li>
            ),
            )}
        </ol>
    </div>
)


export default Launch;
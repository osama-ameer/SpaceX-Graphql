import { useLaunchesQuery } from '../../generated/graphql';
import React from 'react';
import Launch,{ OwnProps }  from './Launch';


const LaunchContainer = (props: OwnProps) => {
  
    const { data, error, loading } = useLaunchesQuery();

    if(loading){
        return <div>Loading..</div>
    }

    if(error || !data){
        return<div>There was an error</div>
    }

    return <Launch data={data} {...props} />


}


export default LaunchContainer;
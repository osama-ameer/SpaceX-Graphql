import gql from 'graphql-tag';

export const GET_LAUNCH_INFO = gql `
    query LaunchInfo($id: String){
        launch(id: $id){
        mission_id
        mission_name
        launch_year
        launch_success
        launch_site {
            site_name
        }
        rocket {
            rocket_name
            rocket_type
        }
        details
        links {
            flickr_images
        }
        
        }
        
    }

`;
import {useQuery} from "@apollo/client";
import {GetMovieDocument} from "../../generated/graphql";



export interface StarWarsMovieDetailsProps {
    id: string
}

const StarWarsMovieDetails = ({ id }: StarWarsMovieDetailsProps) => {
    // See here for adding variable to query
    // https://www.apollographql.com/docs/react/api/react/hooks#usequery
    const { loading, error, data } = useQuery(GetMovieDocument, {

    })

    return (
        <div>
        </div>
    )
}

export default StarWarsMovieDetails

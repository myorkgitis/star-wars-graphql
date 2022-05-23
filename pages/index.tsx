import type {NextPage} from 'next'
import StarWarsMovies from "../components/StarWarsMovies";

const Home: NextPage = () => {
    return (
        <div className={"content-inner"}>
            <StarWarsMovies/>
        </div>
    )
}

export default Home

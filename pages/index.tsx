import type {NextPage} from 'next'
import StarWarsMovies from "../components/StarWarsMovies";
import {Breadcrumb} from "antd";

const Home: NextPage = () => {
    // TODO add breadcrumbs if more time
    return (
        <div className={"content-inner"}>
            <StarWarsMovies/>
        </div>
    )
}

export default Home

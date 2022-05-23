import StarWarsMovieDetails from "../../components/StarWarsMovieDetails";
import {useRouter} from "next/router";
import Link from "next/link";
import {Button} from "antd";
import Icon, {LeftOutlined} from "@ant-design/icons";

export interface MovieDetailPageProps {
}

const MovieDetailPage = (props: MovieDetailPageProps) => {
    const router = useRouter()
    const id = router.query["id"]

    return (
        <>
            <Link href={"/"} passHref>
                <Button href={"/"}><LeftOutlined /> Return to Movie List</Button>
            </Link>
            <br/><br/>
            <div className={"content-inner"}>
                <StarWarsMovieDetails id={id as string} />
            </div>
        </>
    )
}

export default MovieDetailPage

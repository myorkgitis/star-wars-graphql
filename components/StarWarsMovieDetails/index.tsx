import {useGetMovieQuery} from "../../generated/graphql";
import {ThreeDots} from "react-loader-spinner";
import {Alert, Col, Descriptions, Row, Tag} from "antd";
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import Paragraph from "antd/lib/typography/Paragraph";
import moment from "moment";
import {atomOneDark, CopyBlock} from "react-code-blocks";

export interface StarWarsMovieDetailsProps {
    id: string
}

const StarWarsMovieDetails = ({ id }: StarWarsMovieDetailsProps) => {
    // See here for adding variable to query
    // https://www.apollographql.com/docs/react/api/react/hooks#usequery
    const { loading, error, data } = useGetMovieQuery({
        variables: { id }
    })

    if (loading) return <ThreeDots color="#00BFFF" height={40} width={40} visible={loading} />
    if (error) return <Alert type={"error"} message={error.message} />

    if (data && data.films.results.length === 0) {
        return (
            <Alert type={"error"} message={<span>Invalid movie, please go back to the <Link href={"/"}>movie list</Link>.</span>} />
       )
    }

    const film = data!.films.results[0]

    return (
        <div>
            <Title>{film.title}</Title>

            <Descriptions bordered>
                <Descriptions.Item label="Release Date">{moment(film.releaseDate).format("l")}</Descriptions.Item>
                <Descriptions.Item label="Director(s)">{film.director}</Descriptions.Item>
                <Descriptions.Item label="Producer(s)">{film.producer}</Descriptions.Item>
                <Descriptions.Item label={`Characters (${film.characters.count})`} span={3}>
                    <Paragraph>
                        {film.characters.results.map(character => <Tag style={{margin: "4px"}} color="geekblue" key={character.name}>{character.name}</Tag>)}
                    </Paragraph>
                </Descriptions.Item>
                <Descriptions.Item label={`Planets (${film.planets.count})`} span={3}>
                    <Paragraph>
                        {film.planets.results.map(planet => <Tag style={{margin: "4px"}} color="green" key={planet.name}>{planet.name}</Tag>)}
                    </Paragraph>
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default StarWarsMovieDetails

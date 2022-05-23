import {useGetMovieQuery} from "../../generated/graphql";
import {ThreeDots} from "react-loader-spinner";
import {Alert, Tag} from "antd";
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import Paragraph from "antd/lib/typography/Paragraph";
import moment from "moment";
import {atomOneDark, CopyBlock} from "react-code-blocks";

const code = `
    # getMovie.graphql
    
    query GetMovie($id: String!) {
        films (where: { id: { equalTo: $id } }) {
            results {
                id
                releaseDate
                title
                director
                openingCrawl
                producer
                characters {
                    count
                    results {
                        name
                        birthYear
                        eyeColor
                        hairColor
                        gender
                        height
                    }
                }
                planets {
                    count
                    results {
                        name
                        diameter
                        gravity
                        orbitalPeriod
                        population
                    }
                }
            }
        }
    }
    
`

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
            <Paragraph type={"secondary"} style={{fontSize: "1.2em"}}>Released on {moment(film.releaseDate).format("l")}</Paragraph>

            <Title level={4}>{film.characters.count} Characters In Movie</Title>
            <Paragraph>
                {film.characters.results.map(character => <Tag style={{margin: "4px"}} color="geekblue" key={character.name}>{character.name}</Tag>)}
            </Paragraph>

            <Title level={4}>{film.planets.count} Planets Visited</Title>
            <Paragraph>
                {film.planets.results.map(planet => <Tag style={{margin: "4px"}} color="green" key={planet.name}>{planet.name}</Tag>)}
            </Paragraph>

            <Paragraph strong>TODO List out more information about the movie including planets, director, and producer information. See the query in `getMovie.graphql`.</Paragraph>

            <CopyBlock
                text={code}
                language={"graphql"}
                showLineNumbers={false}
                theme={atomOneDark}
                wrapLines
            />
        </div>
    )
}

export default StarWarsMovieDetails

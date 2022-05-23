import {Button, Table, Tag} from "antd";
import {ColumnsType} from "antd/es/table";
import Title from "antd/lib/typography/Title";
import {SearchMoviesQuery} from "../../generated/graphql";
import {IterableElement} from "type-fest";
import Paragraph from "antd/lib/typography/Paragraph";
import Link from "next/link";

type FilmResult = SearchMoviesQuery["all"]["results"]

export interface StarWarsMovieTableProps {
    films: FilmResult
}

const StarWarsMovieTable = ({ films }: StarWarsMovieTableProps) => {
    const columns: ColumnsType<IterableElement<FilmResult>> = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (value, record, index) => {
                return (
                    <>
                        <Title level={4}>{value}</Title>
                        <br/>
                        <Link href={`/movies/${record.id}`} passHref>
                            <Button type={"primary"} href={`/movies/${record.id}`}>View Details</Button>
                        </Link>
                    </>

                )
            },
            width: "20%",
        },
        {
            title: 'Characters',
            dataIndex: 'characters',
            key: 'characters',
            render: (value, record, index) => {
                return (
                    <Paragraph>
                        <strong>{record.characters.count} Characters</strong>
                        <br/>
                        {record.characters.results.map(character => <Tag style={{margin: "4px"}} color="geekblue" key={character.name}>{character.name}</Tag>)}
                    </Paragraph>
                )
            }
        },
        {
            title: 'Planets',
            dataIndex: 'planets',
            key: 'planets',
            render: (value, record, index) => {
                return (
                    <Paragraph>
                        <strong>{value.count} Planets Visited</strong>
                        <br/>
                        {record.planets.results.map(planet => <Tag style={{margin: "4px"}} color="green" key={planet.name}>{planet.name}</Tag>)}
                    </Paragraph>
                )
            }
        }
    ]

    return (
        <>
            <Table bordered style={{verticalAlign: "baseline"}} columns={columns} dataSource={films} />
        </>
    )
}

export default StarWarsMovieTable

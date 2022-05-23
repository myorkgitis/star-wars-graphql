import {Alert, Button, Col, Form, Input, Row, Space, Timeline} from 'antd';
import StarWarsMovieTable from "./StarWarsMovieTable";
import {ThreeDots} from "react-loader-spinner";
import {
    useSearchMoviesLazyQuery
} from "../../generated/graphql";
import moment from "moment";
import Title from "antd/lib/typography/Title";
import {useMemo} from "react";

const StarWarsMovies = () => {
    // Make call to SW API here
    // Use lazy query to delay fetching
    // https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery
    //
    // If there is data, show the table, otherwise show a loader
    const [ getMovies, { loading, error, data, called, variables } ] = useSearchMoviesLazyQuery()

    const films = useMemo(() => {
        // If the query was called and has data pick off the correct property
        if (called && data) {
            // If there was a search term, we want the search results,
            // otherwise we want all results
            return variables?.hasTerm ? data.search.results : data.all.results
        }
        return []
    }, [ data, variables ])

    return (
        <div>
            <Space>
                <Form
                    name="basic"
                    layout={"inline"}
                    initialValues={{ search: "" }}
                    onFinish={({ search }) => getMovies({ variables: { search, hasTerm: search.length > 0 }}) }
                    autoComplete="off"
                >
                    <Form.Item
                        label="Search"
                        name="search"
                        help={"Enter a search term or leave blank to retrieve all movies."}
                    >
                        <Input style={{width: "500px"}} />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType={"submit"} type={"primary"}>Search Movies</Button>
                    </Form.Item>
                    <Form.Item>
                        <ThreeDots color="#00BFFF" height={40} width={40} visible={loading} />
                    </Form.Item>
                </Form>
            </Space>
            {!loading &&
                <div style={{paddingTop: "50px"}}>
                    {films.length ?
                        <Row gutter={50}>
                            <Col md={18}>
                                <StarWarsMovieTable films={films} />
                            </Col>
                            <Col md={6} style={{padding: "0px 50px"}}>
                                <Title level={4}>Star Wars Release Date Timeline</Title>
                                <Timeline>
                                    {films.map(film => {
                                        return (
                                            <Timeline.Item key={film.id}>
                                                {film.title}
                                                <br/>
                                                <small style={{color: "gray"}}>Released in {moment(film.releaseDate).format("y")}</small>
                                            </Timeline.Item>
                                        )
                                    })}
                                </Timeline>
                            </Col>
                        </Row>
                        :
                        <>
                            {called ?
                                <Alert type={"error"} message={`There were no results for your search term "${variables?.search}".`} />
                                :
                                <Alert message={"Enter a search term above and click \"Load Movies\" find some films."} />
                            }
                        </>
                    }
                </div>
            }

        </div>
    )
}

export default StarWarsMovies

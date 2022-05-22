import {Button, Col, Form, Input, Row, Space, Timeline} from 'antd';
import StarWarsMovieTable from "./StarWarsMovieTable";
import {ThreeDots} from "react-loader-spinner";
import {
    useFetchMoviesLazyQuery
} from "../../generated/graphql";
import Paragraph from 'antd/lib/typography/Paragraph';
import moment from "moment";
import Title from "antd/lib/typography/Title";

const StarWarsMovies = () => {
    // Make call to SW API here
    // Use lazy query to delay fetching
    // https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery
    //
    // If there is data, show the table, otherwise show a loader
    const [ getMovies, { loading, error, data } ] = useFetchMoviesLazyQuery({
        variables: { }
    })

    return (
        <div>
            <Space>
                <Form
                    name="basic"
                    layout={"inline"}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Search"
                        name="search"
                        rules={[{ required: true, message: 'Search for your favorite Star Wars movies...' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Button type={"primary"} onClick={() => getMovies()}>Load Movies</Button>
                <ThreeDots color="#00BFFF" height={80} width={80} visible={loading} />
            </Space>
            <div style={{paddingTop: "50px"}}>
                {data ?
                    <Row gutter={50}>
                        <Col md={18}>
                            <StarWarsMovieTable films={data.films.results} />
                        </Col>
                        <Col md={6} style={{backgroundColor: "white", padding: "50px"}}>
                            <Title level={4}>Star Wars Film Release Dates</Title>
                            <Timeline>
                                {data.films.results.map(film => {
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
                    <Paragraph>
                        Click "Load Movies" to see some films.
                    </Paragraph>
                }
            </div>

        </div>
    )
}

export default StarWarsMovies

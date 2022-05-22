import {Button, Form, Input, Pagination} from 'antd';
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import StarWarsMovieTable from "./StarWarsMovieTable";
import {ThreeDots} from "react-loader-spinner";

// TODO add search variable to query to filter on the movie titles
const FETCH_MOVIES_QUERY = gql`
    query FetchMovies {
        films(order: releaseDate_ASC) {
            results {
                id
                releaseDate
                title
                characters {
                    count
                }
                planets {
                    count
                }
            }
        }
    }
`

const StarWarsMovies = () => {

    // https://parseapi.back4app.com/graphql

    // Make call to SW API here
    // Use lazy query to delay fetching
    // https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery
    //
    // If there is data, show the table, otherwise show a loader
    const [ getMovies, { loading, error, data } ] = useLazyQuery(FETCH_MOVIES_QUERY, {
        variables: {
            search: ""
        }
    })

    console.log(data)

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
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

            <Button type={"primary"} onClick={() => getMovies()}>Load Data</Button>
            {loading ?
                <ThreeDots color="#00BFFF" height={80} width={80} />
                :
                <StarWarsMovieTable data={data} />
            }

        </div>
    )
}

export default StarWarsMovies

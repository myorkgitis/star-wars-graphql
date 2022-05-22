import {Button, Form, Input, Pagination} from 'antd';
import {gql, useQuery} from "@apollo/client";
import StarWarsMovieTable from "./StarWarsMovieTable";
import {ThreeDots} from "react-loader-spinner";

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
    // If there is data, show the table, otherwise show a loader
    const { loading, error, data } = useQuery(FETCH_MOVIES_QUERY)

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
            <Pagination defaultCurrent={1} total={50} />
            <Button type={"primary"}>Load Data</Button>
            {loading ?
                <ThreeDots color="#00BFFF" height={80} width={80} />
                :
                <StarWarsMovieTable data={data} />
            }

        </div>
    )
}

export default StarWarsMovies

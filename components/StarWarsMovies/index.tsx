import {Button, Form, Input, Pagination} from 'antd';

const StarWarsMovies = () => {

    // Make call to SW API here
    // If there is data, show the table, otherwise show a loader

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

        </div>
    )
}

export default StarWarsMovies

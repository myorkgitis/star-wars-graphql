import {Table} from "antd";
import {ColumnsType} from "antd/es/table";

export interface StarWarsMovieTableProps {
    data: any
}

// https://ant.design/components/table/

const StarWarsMovieTable = (props: StarWarsMovieTableProps) => {
    const columns: ColumnsType<any> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }
    ]

    return (
        <>
            <Table columns={columns} dataSource={[]} />
        </>
    )
}

export default StarWarsMovieTable

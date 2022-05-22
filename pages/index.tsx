import type {NextPage} from 'next'
import StarWarsMovies from "../components/StarWarsMovies";

import {Layout, Typography} from 'antd';

const {Header, Footer, Content} = Layout;
const {Title, Paragraph, Link} = Typography;

const Home: NextPage = () => {

    // TODO fix the header title spacing
    return (
        <>
            <Layout>
                <Header>
                    <Title style={{color: "white"}}>Star Wars Movies 🚀💥🍿</Title>
                </Header>
                <Content style={{padding: '50px'}}>
                    <StarWarsMovies/>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    <Paragraph>Built by Matt Yorkgitis</Paragraph>
                    <Paragraph>Uses the <Link href={"https://www.back4app.com/database/davimacedo/swapi-star-wars-api"}>StarWars GraphQL API</Link></Paragraph>
                </Footer>
            </Layout>
        </>
    )
}

export default Home

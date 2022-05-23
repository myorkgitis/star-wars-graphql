import '../styles/globals.css'
import type {AppProps} from 'next/app'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Link from "next/link";

const client = new ApolloClient({
    uri: 'https://parseapi.back4app.com/graphql',
    headers: {
        /**
         * Normally we would not be exposing the API keys publicly like this
         * as it could lead to people abusing endpoints.
         * Instead, you could use session based authentication.
         *
         * For this app I just look at the GraphQL requests here:
         * https://www.back4app.com/database/davimacedo/swapi-star-wars-api/graphql-playground
         * and scooped the keys from the header.
         *
         */
        "X-Parse-Application-Id": process.env.NEXT_PUBLIC_SW_APP_ID!,
        "X-Parse-Master-Key": process.env.NEXT_PUBLIC_SW_MASTER_KEY!,
    },
    cache: new InMemoryCache()
});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ApolloProvider client={client}>
                <Layout>
                    <Header>
                        <Title style={{color: "white"}}><Link href={"/"} passHref><a href={"/"} className={"header-title"}>Star Wars Movies 🚀💥🍿</a></Link></Title>
                    </Header>
                    <Content style={{padding: '50px'}}>
                        <Component {...pageProps} />
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        <Paragraph>Built by Matt Yorkgitis</Paragraph>
                        <Paragraph>Uses the <Link href={"https://www.back4app.com/database/davimacedo/swapi-star-wars-api"}>StarWars GraphQL API</Link></Paragraph>
                    </Footer>
                </Layout>
            </ApolloProvider>
        </>
    )
}

export default MyApp

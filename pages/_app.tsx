import '../styles/globals.css'
import type {AppProps} from 'next/app'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";

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
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    )
}

export default MyApp

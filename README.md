This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes on Hooking up GraphQL Schema to autogenerate Typescript Types and work with Webstorm
Here is the quickstart tool where you can dump graphql schemas and documents to quickly generate TS files
https://www.graphql-code-generator.com/

### Step 1: Install the GraphQL Codegen
Install the graphql codegen tool from here: https://github.com/dotansimha/graphql-code-generator
```
yarn add graphql
yarn add -D @graphql-codegen/cli
```
GraphQL Code Generator lets you setup everything by simply running the following command:
```
yarn graphql-codegen init
```
Question by question, it will guide you through the whole process of setting up a schema, selecting plugins, picking a destination of a generated file, and a lot more.

After initializing, make sure you tun `yarn install` as new deps will be added to `package.json` 

### Step 2: Connect to the Back4App API with the Codegen tool in Watch mode.
For this project, the Star Wars API at https://www.back4app.com/database/davimacedo/swapi-star-wars-api/graphql-playground
can be connected to directly. Simply go to the GraphQL playground and then open the Chrome dev tools Network panel. 
Next make a query and execute. Then look for the `graphql` request and pull out the two auth headers `x-parse-application-id` and 
`x-parse-master-key`. Put these into a `.env` file and save for later. In this project we used `NEXT_PUBLIC_SW_APP_ID` and `NEXT_PUBLIC_SW_MASTER_KEY`
respectively as we will need these in the Next.js front-end and need to prefix with `NEXT_PUBLIC`. 

The graphql endpoint URL is:
```
https://parseapi.back4app.com/graphql
```
Back4App uses the provided `x-parse-application-id` and `x-parse-master-key` to know what schema is being accessed.

In Step 1 above, `codegen.yml` will be created. We want to modify it to look like this.
```
# codegen.yml

overwrite: true
schema:
  - https://parseapi.back4app.com/graphql:
      headers:
        "X-Parse-Application-Id": "${NEXT_PUBLIC_SW_APP_ID}"
        "X-Parse-Master-Key": "${NEXT_PUBLIC_SW_MASTER_KEY}"
documents: "components/**/*.graphql"
generates:
  generated/graphql.tsx:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
  ./schema.graphql:
    plugins:
      - "schema-ast"
  ./graphql.schema.json:
    plugins:
      - "introspection"
```
Things to note about the `codegen.yml`:
- Notice the values in the headers property of the schema configuration where we are adding the headers `X-Parse-Application-Id` and `X-Parse-Master-Key` which point to `NEXT_PUBLIC_SW_APP_ID` and `NEXT_PUBLIC_SW_MASTER_KEY` respectively.
  - Read more on adding headers and schema config to `codegen.yml` here https://www.graphql-code-generator.com/docs/config-reference/schema-field#headers
- The `generated/graphql.tsx` file and associated plugins. This file contains TS Types generated from the schema for use in front-end.
- The `./schema.graphql`. This schema file will be consumed by the WebStorm graphql plugin to provide intellisense help.

Then make sure you have this in `package.json` scripts.
```
"gql-codegen": "graphql-codegen -r dotenv/config --watch --config codegen.yml"
```

For the `.env` file we created early to load, you must have `dotenv` install in the project. Read more here: https://www.graphql-code-generator.com/docs/config-reference/codegen-config#environment-variables

Then run this script with 
```
npm run gql-codegen
```
If you get an error because documents aren't loading, this should go away one you start adding `.graphql` files to the project



### Step 3: Create the .graphqlconfig file for WebStorm
If you haven't already creating a .graphqlconfig file, do so now with this template below.
```
// .graphqlconfig

{
  "name": "Star Wars API",
  "schemaPath": "./schema.graphql",
  "extensions": {
    "endpoints": {
      "Star Wars API": {
        "url": "https://parseapi.back4app.com/graphql",
        "headers": {
          "X-Parse-Application-Id": "${env:NEXT_PUBLIC_SW_APP_ID}",
          "X-Parse-Master-Key": "${env:NEXT_PUBLIC_SW_MASTER_KEY}"
        },
        "introspect": true
      }
    }
  }
}
```
A few things to note:
- The `schemaPath` prop points to the generated `schema.graphql` from the codegen tool
- The `extensions.endpoints."Star Wars API".url` prop points to the Back4App graphql endpoint
- The same headers used previously for authenticating to the graphql endpoint.
  - Note we need to add `env:` before the env var


**And that's it! Now the schema files being generated by the GraphQL codegen will be piped into the schema for 


Other resources:
- https://dev.to/xcanchal/automatically-generate-typescript-types-for-your-graphql-api-1fah

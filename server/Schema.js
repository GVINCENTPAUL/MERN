//schema.js
//create a schema using GQL
const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User{ 
    id:ID!,
    name:String!,
    email:String!,
    }
    type Query{
        getUser(id:ID):User
        getUsers:[User]
        searchUsers(name:String!):[User]
    }
    type createUserInput{
        name:String,
        email:String,
    }
    type Mutation{
        createUser(input:createUserInput!):User
    }
`;
module.exports=typeDefs;
const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID
        name: String
        username: String
        email: String
        password: String
        createAt: String
    }
    type Token {
        token: String
    }

    type Search {
        id: ID
        idUser: ID
        label: String
        codprov: String
        idpob: String
    }

    input UserInput {
        name: String!
        username: String!
        email: String!
        password: String!
    }
    input LoginInput {
        email: String!
        password: String!
    }

    input UserSearchInput {
        idUser: String
        label: String
        codprov: String
        idpob: String
    }

    type Query {
        # User
        getUser: User
    }

    type Mutation {
        # User
        register(input: UserInput): User
        login(input: LoginInput): Token
        userSearch(input: UserSearchInput): Search
    }
`;

module.exports = typeDefs;
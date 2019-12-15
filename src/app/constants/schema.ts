import { gql } from 'apollo-boost'

export const typeDefs = gql`
    # -----------------------------------------------
    # !!! THIS FILE WAS GENERATED BY TYPE-GRAPHQL !!!
    # !!!   DO NOT MODIFY THIS FILE BY YOURSELF   !!!
    # -----------------------------------------------

    type Ad {
        id: ID!
        title: String!
        description: String!
        assessedValue: Float!
        phoneNumber: String!
        currency: CurrencyType!
        type: AdType!
        city: City!
        status: AdStatus!
        category: AdCategory!
        interests: [AdCategory!]!
        images: [Image!]!
    }

    type AdCategory {
        id: ID!
        name: String!
        parent: AdCategory
    }

    input AdCategoryCreateInput {
        name: String!
        parentId: String
    }

    input AdCategoryUpdateInput {
        id: ID!
        name: String!
        parentId: String
    }

    input AdCreateFirstStepInput {
        categoryId: String!
    }

    input AdCreateFourthStepInput {
        id: ID!
        interestCategoryIds: [String!]!
    }

    input AdCreateSecondStepInput {
        id: ID!
        type: AdType!
        title: String!
        description: String!
        images: [String!]
    }

    input AdCreateThirdStepInput {
        id: ID!
        assessedValue: Float
        currency: CurrencyType
        city: City!
        phoneNumber: String
    }

    """Ad statuses"""
    enum AdStatus {
        approved
        banned
        underConsideration
        deleted
        closed
        firstStepCreated
        secondStepCreated
        thirdStepCreated
    }

    """Ad types"""
    enum AdType {
        service
        product
    }

    input AdUpdateOneInput {
        id: ID!
        title: String
        description: String
        assessedValue: Float
        phoneNumber: String
        currency: CurrencyType
        type: AdType
        city: City
        status: AdStatus
        categoryId: [String!]
        interestCategoryIds: [String!]
        imageIds: [String!]
    }

    type AuthJwtTokesQuery {
        accessToken: String!
        refreshToken: String!
    }

    input AuthLoginByCredentialsQuery {
        email: String!
        password: String!
    }

    type AuthLoginByCredentialsResponseQuery {
        user: UserQuery!
        tokens: AuthJwtTokesQuery!
    }

    input AuthRefreshTokenInput {
        refreshToken: String!
    }

    """All possible cities"""
    enum City {
        bishkek
    }

    """All possible currency"""
    enum CurrencyType {
        dollar
        som
    }

    """Email statuses"""
    enum EmailStatus {
        FREE
        EXISTS
        NOT_CONFIRMED
    }

    type EmailStatusQuery {
        status: String!
    }

    type Image {
        id: ID!
        path: String!
    }

    type Mutation {
        adCreateFirstStep(ad: AdCreateFirstStepInput!): Ad!
        adCreateSecondStep(ad: AdCreateSecondStepInput!): Ad!
        adCreateThirdStep(ad: AdCreateThirdStepInput!): Ad!
        adCreateForthStep(ad: AdCreateFourthStepInput!): Ad!
        adUpdateOne(ad: AdUpdateOneInput!): Ad!
        adSetApprovedStatus(id: String!): Ad!
        adSetBannedStatus(id: String!): Ad!
        adSetClosedStatus(id: String!): Ad!
        adAddToFavorite(id: String!): [Ad!]!
        adRemoveFromFavorite(id: String!): [Ad!]!
        adRemoveOne(id: String!): Boolean!
        adCategoryCreateOne(adCategory: AdCategoryCreateInput!): AdCategory!
        adCategoryUpdateOne(adCategory: AdCategoryUpdateInput!): AdCategory!
        adCategoryRemoveOne(id: String!): Boolean!
        userCreate(user: UserCreateInput!): UserCreateResponseQuery!
        userUpdate(user: UserUpdateInput!): UserQuery!
        userChangePassword(passwords: UserChangePasswordInput!): UserQuery!
        userRemove(id: String!): Boolean!
    }

    type Query {
        ad(id: String!): Ad!
        adCategoryFindAll: [AdCategory!]!
        adCategoryFindOneById(id: String!): AdCategory!
        adCategoryFindManyByParentId(id: String!): [AdCategory!]!
        userFindById(id: String!): UserQuery!
        userMe: UserQuery!
        userGetEmailStatus(email: String!): UserEmailStatusQuery!
        authLoginByCredentials(auth: AuthLoginByCredentialsQuery!): AuthLoginByCredentialsResponseQuery!
        authRefreshToken(auth: AuthRefreshTokenInput!): AuthJwtTokesQuery!
    }

    input UserChangePasswordInput {
        previousPassword: String!
        newPassword: String!
    }

    input UserCreateInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        photo: String
    }

    type UserCreateResponseQuery {
        user: UserQuery!
        tokens: AuthJwtTokesQuery!
    }

    type UserEmailStatusQuery {
        status: EmailStatus!
    }

    type UserQuery {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        isEmailVerified: Boolean!
        phoneNumber: String
        isPhoneVerified: Boolean!
        photo: String
    }

    input UserUpdateInput {
        id: ID!
        firstName: String
        lastName: String
        email: String
        photo: String
    }

`

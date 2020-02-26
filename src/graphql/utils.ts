import { GraphQLError } from "graphql";
import { ApolloError } from "apollo-server";
import uuid from "uuid";

import { EntityNotFoundError } from "@/orm/errors";
import { HttpNotFoundError } from "./errors";

export const INTERNAL_SERVER_ERROR = "Internal server error";

const isClientError = (error: GraphQLError) => error instanceof ApolloError;

const createInternalServerError = (error: Error) => {
    const errorId = uuid.v4();
    const errorMessage = `${error.message}: ${errorId}`;
    const errorCopy = {
        ...error,
        message: errorMessage
    };

    logError(errorCopy);

    return new Error(`${INTERNAL_SERVER_ERROR}: ${errorId}`);
};

const logError = (error: Error) => console.error(JSON.stringify(error, null, 2));

const processOriginalError = (originalError: Error) => {
    if (originalError instanceof EntityNotFoundError) {
        return new HttpNotFoundError(originalError.message);
    }

    return createInternalServerError(originalError);
};

export const formatError = (error: GraphQLError): GraphQLError => {
    const originalError = error.originalError as GraphQLError;

    if (isClientError(error)) return error;

    if (!originalError) return createInternalServerError(error) as GraphQLError;

    if (isClientError(originalError)) return originalError;

    return processOriginalError(originalError) as GraphQLError;
};

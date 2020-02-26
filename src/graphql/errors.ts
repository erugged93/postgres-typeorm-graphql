import { ApolloError } from "apollo-server";

export class HttpNotFoundError extends ApolloError {
    constructor(message: string, properties = {}) {
        super(message, "NOT_FOUND", { ...properties, statusCode: 404 });
        this.message = message;
    }
}

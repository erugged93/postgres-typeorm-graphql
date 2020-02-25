export class EntityNotFoundError extends Error {
    constructor(message?: string) {
        super();
        this.name = "EntityNotFoundError";
        this.message = message || "Entity not found";
    }
}

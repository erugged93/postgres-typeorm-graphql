import { UserInputError } from "apollo-server";

export const validateTimeInput = (time: string) => {
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(time)) {
        throw new UserInputError("Invalid time - must be HH:MM");
    }
};

export const validateDateInput = (date: string) => {
    const dateRegex = /^[12][0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!dateRegex.test(date)) {
        throw new UserInputError("Invalid date - must be YYYY-MM-DD");
    }
};

export const validateEndAfterStart = (input: {
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
}) => {
    const startDateTime = `${input.startDate} ${input.startTime}`;
    const endDateTime = `${input.endDate} ${input.endTime}`;
    if (startDateTime > endDateTime) {
        throw new UserInputError("Invalid date/time - start cannot be after end");
    }
};

export const validateStringJson = (input: string) => {
    const errorMessage = "Invalid JSON value";
    try {
        const inputAsJson = JSON.parse(input);
        if (inputAsJson && typeof inputAsJson === "object") return;
    } catch (err) {
        throw new UserInputError(errorMessage);
    }
    throw new UserInputError(errorMessage);
};

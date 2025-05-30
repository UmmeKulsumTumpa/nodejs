// filepath: /knex-practice-ts/knex-practice-ts/src/shared/types/index.ts
export type ResponseMessage = {
    message: string;
};

export type ErrorResponse = {
    error: string;
};

export type Pagination<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
};
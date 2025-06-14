export interface IRepository<T> {
    create(item: T): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    update(id: string, item: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}
// filepath: /knex-practice-ts/knex-practice-ts/src/modules/user/user.repository.ts
import db from '../../database/knexfile';
import { IRepository } from '../../shared/interfaces/repository.interface';
import { IUser } from './user.interface';
import { UserDTO } from './types/user.types';

export class UserRepository implements IRepository<UserDTO> {
    async create(user: UserDTO): Promise<IUser> {
        const [newUser] = await db('users').insert(user).returning('*');
        return newUser;
    }

    async findById(id: number): Promise<IUser | null> {
        const user = await db('users').where({ id }).first();
        return user || null;
    }

    async findAll(): Promise<IUser[]> {
        return await db('users').select('*');
    }

    async update(id: number, user: Partial<UserDTO>): Promise<IUser | null> {
        const [updatedUser] = await db('users').where({ id }).update(user).returning('*');
        return updatedUser || null;
    }

    async delete(id: number): Promise<void> {
        await db('users').where({ id }).del();
    }
}
// filepath: /knex-practice-ts/knex-practice-ts/src/modules/user/user.service.ts
import { IUser } from './user.interface';
import { IUserRepository } from '../../shared/interfaces/repository.interface';

export class UserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData: IUser): Promise<IUser> {
        return await this.userRepository.create(userData);
    }

    async getUserById(id: number): Promise<IUser | null> {
        return await this.userRepository.findById(id);
    }

    async updateUser(id: number, userData: Partial<IUser>): Promise<IUser | null> {
        return await this.userRepository.update(id, userData);
    }

    async deleteUser(id: number): Promise<boolean> {
        return await this.userRepository.delete(id);
    }

    async getAllUsers(): Promise<IUser[]> {
        return await this.userRepository.findAll();
    }
}
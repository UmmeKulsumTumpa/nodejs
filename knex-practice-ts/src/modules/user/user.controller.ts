import { Request, Response } from 'express';
import UserService from './user.service';
import { IUser } from './user.interface';

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const userData: IUser = req.body;
            const userId = await this.userService.createUser(userData);
            return res.status(201).json({ id: userId });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    public async getUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const userData: IUser = req.body;
            const updatedUser = await this.userService.updateUser(userId, userData);
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const deleted = await this.userService.deleteUser(userId);
            if (!deleted) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(204).send();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default UserController;
export interface UserDTO {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
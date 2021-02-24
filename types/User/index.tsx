type User = {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string | null;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

export default User;
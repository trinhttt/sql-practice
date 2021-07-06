interface IAuthInput {
    email: string,
    password: string,
    confirmPassword: string
}

interface IUser {
    email: string;
    password: string;
}

export { IAuthInput, IUser }

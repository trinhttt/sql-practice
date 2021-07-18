import UserRepository from "../repositories/userRepo"
import { IAuthInput, IUser } from '../interfaces/authInterface'
import InvalidException from '../exceptions/invalidException'
import User from '../entities/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default class UserService {
    private readonly userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository()
    }

    public createUser = async (data: IAuthInput) => {
        const hashedPassword = bcrypt.hashSync(data.password, 10)

        const user = await this.userRepository.findUserByEmail(data.email)
        if (user !== undefined) {
            throw new InvalidException("This user existed")
        }

        const userData: IUser = {
            ...data,
            password: hashedPassword
        }
        const newUser: User = await this.userRepository.createUser(userData)

        return newUser
    }

    public login = async (data: IUser) => {
        const user = await this.userRepository.findUserByEmail(data.email)
        new InvalidException("User not found")
        if (!user) {
            throw new InvalidException("User not found")
        }
        const isCorrectPass = await bcrypt.compare(data.password, user.password)
        if (!isCorrectPass) {
            throw new InvalidException("Password is invalid")
        }

        return this.generateJWTToken(data)
    }

    public getAllUsers = async () => {
        let users = await this.userRepository.getAllUser()
        return users
    }

    public getUserById = async (id: string) => {
        let users = await this.userRepository.getUserById(id)
        return users
    }

    private generateJWTToken = async (user: IUser) => {
        return jwt.sign(
            { ...user },
            process.env.SECRET || "trinh_zz_qtqd",
            { expiresIn: "1h" }
        )
    }
}


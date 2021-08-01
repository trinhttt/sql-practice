import { getRepository } from 'typeorm'
import User from '../entities/user'
import { IUser } from '../interfaces/authInterface'

export default class UserRepository {
    private readonly userRepo = getRepository(User)

    createUser(data: IUser) {
        // const user = this.userRepo.create(data)//?? for what?
        return this.userRepo.save(data)
    }

    findUserByEmail(email: string) {
        return this.userRepo.findOne({ where: { email } })
    }

    getAllUser() {
        return this.userRepo.find()
    }

    getUserById(id: number) {
        return this.userRepo.findOne(id)//or: { where: { id } })
    }

    findByEmail(email: string, relations: string[] = []) {
        return this.userRepo.findOne({ where: { email }, relations })
    }

    updateUser(user: User) {
        return this.userRepo.save(user)
    }
}

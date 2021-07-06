import { Repository, EntityRepository, getRepository } from 'typeorm'
import User from '../entities/user'
import { IUser} from '../interfaces/authInterface'

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
    createUser(data: IUser) {
        const user = getRepository(User).create(data)
        return getRepository(User).save(data)
    }

    findUserByEmail(email: string) {
        return getRepository(User).findOne({ where: { email } })
    }
}

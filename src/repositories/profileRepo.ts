// create
// updateById
// findById

import { getRepository } from 'typeorm'
import { Profile } from '../entities/profile'
import IProfile from '../interfaces/profileInterface'

export default class UserProfileRepository {
    private readonly profileRepo = getRepository(Profile)

    create(data: IProfile) {
        return this.profileRepo.save(data)
    }

    findById(id: number) {
        return this.profileRepo.findOne({ where: { id } })
    }

    updateById(id: number, data: IProfile) {
        return this.profileRepo.update({ id }, { ...data })
    }
}

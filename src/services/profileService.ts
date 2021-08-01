import UserProfileRepository from "../repositories/profileRepo"
import UserRepository from "../repositories/userRepo"
import IProfile from '../interfaces/profileInterface'
import User from '../entities/user'

export default class ProfileService {
    private readonly profileRepository: UserProfileRepository
    private readonly userRepository: UserRepository

    constructor() {
        this.profileRepository = new UserProfileRepository()
        this.userRepository = new UserRepository()

    }

    public findById = async (id: number) => {
        let profile = await this.profileRepository.findById(id)
        return profile
    }

    public updateOrCreate = async (user: User, data: IProfile) => {
        const fullHDUser = await this.userRepository.findUserByEmail(user.email)

        // Just update profile
        if (fullHDUser.profileId) {
            return await this.profileRepository.updateById(fullHDUser.profileId, data)
        }
        // Create profile and save to user
        else {
            const newProfile = await this.profileRepository.create(data)
            // fullHDUser.profile = newProfile//??wrong
            fullHDUser.profileId = newProfile.id
            return await this.userRepository.updateUser(fullHDUser)
        }
    }
}


import Profile from "./profile";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    email: string

    @Column({
        comment: "At least 6 chars",
        unique: true
    })
    password: string

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at'
    })
    createdAt: Date

    @CreateDateColumn({
        type: 'timestamp',
        name: 'updated_at'
    })
    updatedAt: Date

    @CreateDateColumn({
        type: 'timestamp',
        name: 'deleted_at'
    })
    deletedAt: Date

    // @OneToOne(() => Profile)
    @OneToOne(type => Profile, profile => profile.user)

    @JoinColumn()
    profile: Profile

    //important, if nullable = false, an error will be occur: ALTER TABLE `users` CHANGE `profileId` `profileId` int NOT NULL
    @Column({ nullable: true })
    profileId: number
    // @Column()
    // otp: string

    // @Column()
    // otpExpiredTime: Date
}

export default User
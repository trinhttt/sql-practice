import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm'
export enum ProfileGender {
    male = 0,
    female
}
import User from "./user";

@Entity('profiles')
export default class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phone: string

    @Column()
    gender: number

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

    // @OneToOne(() => User)
    @OneToOne(type => User, user => user.profile)
    @JoinColumn()
    user: User

    @Column({ nullable: true })
    imageUrl: string

    // @Column({
    //     length: 50
    // })
    // firstName: string

    // @Column()
    // lastName: string
}

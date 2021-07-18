import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

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
    // @Column({
    //     length: 50
    // })
    // firstName: string

    // @Column()
    // lastName: string

    // @Column()
    // age: number

    // @Column()
    // createAt: string

    // @Column()
    // imageUrl: string

    // @Column()
    // otp: string

    // @Column()
    // otpExpiredTime: Date
}

export default User
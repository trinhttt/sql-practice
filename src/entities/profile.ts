import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'
export enum ProfileGender {
    male,
    female
}

@Entity('profiles')
export class Profile {
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
}

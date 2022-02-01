import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "tblusers"
})
export class UserModel extends Model {

    @Column({
        primaryKey:true
    })
    id?: number

    @Column
    email: string

    @Column
    password: string
}
import { Entity, Column } from "@iaminfinity/express-cassandra";

@Entity({
    table_name: 'users',
    key: ['id']
})
export class UserEntity {
    @Column({
        type: 'uuid',
        default: { $db_function: 'uuid()' }
    })
    id: any;

    @Column({
        type: 'text',
    })
    name: string;

    @Column({
        type: 'text'
    })
    password: string;

    @Column({
        type: 'text'
    })
    email: string;
}
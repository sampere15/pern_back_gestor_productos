import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'products',
    timestamps: true,
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    name: string

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price: number

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    available: boolean
}

export default Product
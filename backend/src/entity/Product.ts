import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

// collection => table
@Entity()
export class Product {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  price: number;
}

import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pet_type')
export class PetType {
  
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 80 })
  name: string;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  createdDate?: Date;

  @Column({ nullable: true })
  lastModifiedBy?: string;

  @Column({ nullable: true })
  lastModifiedDate?: Date;
}
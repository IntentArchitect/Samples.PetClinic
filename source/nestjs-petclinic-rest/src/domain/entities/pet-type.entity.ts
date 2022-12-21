import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity('pet_type')
export class PetType {
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
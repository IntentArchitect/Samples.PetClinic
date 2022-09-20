import { Specialty } from './specialty.entity';
import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn } from 'typeorm';

@Entity('vet')
export class Vet {
  
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 30 })
  firstName: string;
  
  @Column({ length: 30 })
  lastName: string;
  
  @ManyToMany(() => Specialty, { cascade: ['insert', 'update'] })
  @JoinTable()
  specialties: Specialty[];

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  createdDate?: Date;

  @Column({ nullable: true })
  lastModifiedBy?: string;

  @Column({ nullable: true })
  lastModifiedDate?: Date;
}
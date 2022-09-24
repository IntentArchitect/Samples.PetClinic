import { PetType } from './pet-type.entity';
import { Visit } from './visit.entity';
import { Owner } from './owner.entity';
import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('pet')
export class Pet {
  
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 30 })
  name: string;
  
  @Column()
  birthDate: Date;
  
  @ManyToOne(() => PetType, { cascade: ['insert', 'update'], nullable: false })
  petType: PetType;
  
  @OneToMany(() => Visit, visits => visits.pet, { cascade: true, eager: true })
  visits: Visit[];
  
  @ManyToOne(() => Owner, owner => owner.pets, { cascade: ['insert', 'update'], nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
  owner: Owner;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  createdDate?: Date;

  @Column({ nullable: true })
  lastModifiedBy?: string;

  @Column({ nullable: true })
  lastModifiedDate?: Date;
}
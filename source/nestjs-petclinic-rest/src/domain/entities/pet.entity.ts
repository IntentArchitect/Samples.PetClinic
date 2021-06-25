import { PetType } from './pet-type.entity';
import { Visit } from './visit.entity';
import { Owner } from './owner.entity';
import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';


@Entity('pet')
export class Pet {
  
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  birthDate: Date;
  
  @ManyToOne(() => PetType)
  petType: PetType;
  
  @OneToMany(() => Visit, visits => visits.pet)
  visits: Visit[];
  
  @ManyToOne(() => Owner, owner => owner.pets)
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
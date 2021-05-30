import { Pet } from './pet.entity';
import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('visit')
export class Visit {
  
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  visitDate: Date;
  
  @Column()
  description: string;
  
  @ManyToOne(() => Pet, pet => pet.visits)
  pet: Pet;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  createdDate?: Date;

  @Column({ nullable: true })
  lastModifiedBy?: string;

  @Column({ nullable: true })
  lastModifiedDate?: Date;
}
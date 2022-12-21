import { Pet } from './pet.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ObjectIdColumn } from 'typeorm';

@Entity('visit')
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  visitDate: Date;

  @Column()
  description: string;

  @ManyToOne(() => Pet, (pet) => pet.visits, { cascade: ['insert', 'update'], nullable: false, onDelete: 'CASCADE', orphanedRowAction: 'delete' })
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
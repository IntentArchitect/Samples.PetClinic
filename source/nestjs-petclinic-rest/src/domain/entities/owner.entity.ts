import { Pet } from './pet.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ObjectIdColumn } from 'typeorm';

@Entity('owner')
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 80 })
  city: string;

  @Column({ length: 20 })
  telephone: string;

  @OneToMany(() => Pet, (pets) => pets.owner, { cascade: ['insert', 'update'] })
  pets: Pet[];

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  createdDate?: Date;

  @Column({ nullable: true })
  lastModifiedBy?: string;

  @Column({ nullable: true })
  lastModifiedDate?: Date;
}
import { Pet } from './pet.entity';
import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('owner')
export class Owner {
  
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @Column()
  address: string;
  
  @Column()
  city: string;
  
  @Column()
  telephone: string;
  
  @OneToMany(() => Pet, pets => pets.owner)
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
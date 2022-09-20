import { Repository, EntityRepository } from "typeorm";
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Pet } from './../domain/entities/pet.entity';

@CustomRepository(Pet)
export class PetRepository extends Repository<Pet>
{

}
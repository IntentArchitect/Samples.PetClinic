import { Repository, EntityRepository } from "typeorm";
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { PetType } from './../domain/entities/pet-type.entity';

@CustomRepository(PetType)
export class PetTypeRepository extends Repository<PetType>
{

}
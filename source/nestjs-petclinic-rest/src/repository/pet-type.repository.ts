import { EntityRepository, Repository } from "typeorm";
import { PetType } from './../domain/entities/pet-type.entity';

@EntityRepository(PetType)
export class PetTypeRepository extends Repository<PetType>
{

}
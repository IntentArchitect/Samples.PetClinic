import { EntityRepository, Repository } from "typeorm";
import { Specialty } from './../domain/entities/specialty.entity';

@EntityRepository(Specialty)
export class SpecialtyRepository extends Repository<Specialty>
{

}
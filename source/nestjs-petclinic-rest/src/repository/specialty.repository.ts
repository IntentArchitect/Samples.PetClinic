import { Repository, EntityRepository } from "typeorm";
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Specialty } from './../domain/entities/specialty.entity';

@CustomRepository(Specialty)
export class SpecialtyRepository extends Repository<Specialty>
{

}
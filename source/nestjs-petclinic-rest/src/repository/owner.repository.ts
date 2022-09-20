import { Repository, EntityRepository } from "typeorm";
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Owner } from './../domain/entities/owner.entity';

@CustomRepository(Owner)
export class OwnerRepository extends Repository<Owner>
{

}
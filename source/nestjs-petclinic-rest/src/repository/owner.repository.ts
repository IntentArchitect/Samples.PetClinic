import { EntityRepository, Repository } from "typeorm";
import { Owner } from './../domain/entities/owner.entity';

@EntityRepository(Owner)
export class OwnerRepository extends Repository<Owner> {}
{

}
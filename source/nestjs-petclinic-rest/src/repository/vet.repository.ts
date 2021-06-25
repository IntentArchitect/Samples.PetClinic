import { EntityRepository, Repository } from "typeorm";
import { Vet } from './../domain/entities/vet.entity';

@EntityRepository(Vet)
export class VetRepository extends Repository<Vet>
{

}
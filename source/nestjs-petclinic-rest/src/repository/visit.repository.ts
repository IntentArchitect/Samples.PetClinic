import { EntityRepository, Repository } from "typeorm";
import { Visit } from './../domain/entities/visit.entity';

@EntityRepository(Visit)
export class VisitRepository extends Repository<Visit>
{

}
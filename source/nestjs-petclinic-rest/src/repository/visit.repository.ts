import { Repository, EntityRepository } from 'typeorm';
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Visit } from './../domain/entities/visit.entity';
import { IntentMerge } from './../intent/intent.decorators';

@IntentMerge()
@CustomRepository(Visit)
export class VisitRepository extends Repository<Visit> {
}
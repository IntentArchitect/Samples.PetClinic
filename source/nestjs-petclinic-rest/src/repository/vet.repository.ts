import { Repository, EntityRepository } from 'typeorm';
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Vet } from './../domain/entities/vet.entity';
import { IntentMerge } from './../intent/intent.decorators';

@IntentMerge()
@CustomRepository(Vet)
export class VetRepository extends Repository<Vet> {
}
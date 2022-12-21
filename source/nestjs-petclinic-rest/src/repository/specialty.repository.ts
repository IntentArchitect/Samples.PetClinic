import { Repository, EntityRepository } from 'typeorm';
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Specialty } from './../domain/entities/specialty.entity';
import { IntentMerge } from './../intent/intent.decorators';

@IntentMerge()
@CustomRepository(Specialty)
export class SpecialtyRepository extends Repository<Specialty> {
}
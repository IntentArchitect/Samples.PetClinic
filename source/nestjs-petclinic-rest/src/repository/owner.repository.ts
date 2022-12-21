import { Repository, EntityRepository } from 'typeorm';
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Owner } from './../domain/entities/owner.entity';
import { IntentMerge } from './../intent/intent.decorators';

@IntentMerge()
@CustomRepository(Owner)
export class OwnerRepository extends Repository<Owner> {
}
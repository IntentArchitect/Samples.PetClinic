import { Repository, EntityRepository } from 'typeorm';
import { CustomRepository } from './../typeorm/typeorm-ex.decorator';
import { Pet } from './../domain/entities/pet.entity';
import { IntentMerge } from './../intent/intent.decorators';

@IntentMerge()
@CustomRepository(Pet)
export class PetRepository extends Repository<Pet> {
}
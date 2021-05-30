import { PetVisitDTO } from './pet-visit.dto';
import { Pet } from './../../domain/entities/pet.entity';
export declare class PetDTO {
    id: number;
    name: string;
    birthDate: Date;
    petTypeId: number;
    petTypeName: string;
    ownerId: number;
    ownerFirstName: string;
    ownerLastName: string;
    visits: PetVisitDTO[];
    static fromPet(pet: Pet): PetDTO;
    static requiredRelations: string[];
}

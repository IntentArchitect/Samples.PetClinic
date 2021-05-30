import { PetDTO } from './pet.dto';
import { Owner } from './../../domain/entities/owner.entity';
export declare class OwnerDTO {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
    pets: PetDTO[];
    static fromOwner(owner: Owner): OwnerDTO;
    static requiredRelations: string[];
}

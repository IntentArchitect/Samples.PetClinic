import { PetType } from './../../domain/entities/pet-type.entity';
export declare class PetTypeDTO {
    id?: number;
    name: string;
    static fromPetType(petType: PetType): PetTypeDTO;
    static requiredRelations: string[];
}

import { SpecialtyDTO } from './specialty.dto';
import { Vet } from './../../domain/entities/vet.entity';
export declare class VetDTO {
    id: number;
    firstName: string;
    lastName: string;
    specialties: SpecialtyDTO[];
    static fromVet(vet: Vet): VetDTO;
    static requiredRelations: string[];
}

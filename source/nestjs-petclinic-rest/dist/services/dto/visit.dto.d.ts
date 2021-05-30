import { PetDTO } from './pet.dto';
import { Visit } from './../../domain/entities/visit.entity';
export declare class VisitDTO {
    id: number;
    visitDate: Date;
    description: string;
    pet: PetDTO;
    ownerId: number;
    static fromVisit(visit: Visit): VisitDTO;
    static requiredRelations: string[];
}

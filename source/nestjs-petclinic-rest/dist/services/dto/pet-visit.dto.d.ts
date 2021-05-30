import { Visit } from './../../domain/entities/visit.entity';
export declare class PetVisitDTO {
    id: number;
    visitDate: Date;
    description: string;
    static fromVisit(visit: Visit): PetVisitDTO;
    static requiredRelations: string[];
}

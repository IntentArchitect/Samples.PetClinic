import { Specialty } from './../../domain/entities/specialty.entity';
export declare class SpecialtyDTO {
    id?: number;
    name: string;
    static fromSpecialty(specialty: Specialty): SpecialtyDTO;
    static requiredRelations: string[];
}

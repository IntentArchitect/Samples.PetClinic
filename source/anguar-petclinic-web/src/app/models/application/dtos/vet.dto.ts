import { SpecialtyDTO } from './specialty.dto';

export interface VetDTO {
    id: number;
    firstName: string;
    lastName: string;
    specialties: SpecialtyDTO[];
}

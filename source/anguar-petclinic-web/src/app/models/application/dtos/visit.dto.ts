import { PetDTO } from './pet.dto';

export interface VisitDTO {
    id: number;
    visitDate: Date;
    description: string;
    pet: PetDTO;
    ownerId: number;
}

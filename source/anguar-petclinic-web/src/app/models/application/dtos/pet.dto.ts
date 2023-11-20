import { PetVisitDTO } from './pet-visit.dto';

export interface PetDTO {
    id: number;
    name: string;
    birthDate: Date;
    petTypeId: number;
    petTypeName: string;
    ownerId: number;
    ownerFirstName: string;
    ownerLastName: string;
    visits: PetVisitDTO[];
}

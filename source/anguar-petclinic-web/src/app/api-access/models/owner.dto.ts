import { PetDTO } from './pet.dto';
export interface OwnerDTO {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
    pets: PetDTO[];
}

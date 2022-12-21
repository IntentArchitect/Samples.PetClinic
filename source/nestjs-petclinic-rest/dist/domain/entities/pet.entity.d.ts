import { PetType } from './pet-type.entity';
import { Visit } from './visit.entity';
import { Owner } from './owner.entity';
export declare class Pet {
    id: number;
    name: string;
    birthDate: Date;
    petType: PetType;
    visits: Visit[];
    owner?: Owner;
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
}

import { Pet } from './pet.entity';
export declare class Visit {
    id: number;
    visitDate: Date;
    description: string;
    pet: Pet;
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
}

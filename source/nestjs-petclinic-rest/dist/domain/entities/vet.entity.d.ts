import { Specialty } from './specialty.entity';
export declare class Vet {
    id: number;
    firstName: string;
    lastName: string;
    specialties: Specialty[];
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
}

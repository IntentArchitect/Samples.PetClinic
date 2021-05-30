import { OwnerDTO } from './dto/owner.dto';
import { OwnerCreateDTO } from './dto/owner-create.dto';
import { OwnerUpdateDTO } from './dto/owner-update.dto';
import { OwnerRepository } from './../repository/owner.repository';
export declare class OwnerRestService {
    private ownerRepository;
    constructor(ownerRepository: OwnerRepository);
    getOwners(): Promise<OwnerDTO[]>;
    addOwner(dto: OwnerCreateDTO): Promise<void>;
    getOwner(ownerId: number): Promise<OwnerDTO>;
    updateOwner(ownerId: number, dto: OwnerUpdateDTO): Promise<void>;
    deleteOwner(ownerId: number): Promise<void>;
    getOwnersList(lastName: string): Promise<OwnerDTO[]>;
}

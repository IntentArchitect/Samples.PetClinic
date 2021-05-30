import { PetDTO } from './dto/pet.dto';
import { PetCreateDTO } from './dto/pet-create.dto';
import { PetUpdateDTO } from './dto/pet-update.dto';
import { PetRepository } from './../repository/pet.repository';
import { OwnerRepository } from 'src/repository/owner.repository';
import { PetTypeRepository } from 'src/repository/pet-type.repository';
export declare class PetRestService {
    private petRepository;
    private ownerRepository;
    private petTypeRepository;
    constructor(petRepository: PetRepository, ownerRepository: OwnerRepository, petTypeRepository: PetTypeRepository);
    getPet(petId: number): Promise<PetDTO>;
    addPet(dto: PetCreateDTO): Promise<void>;
    updatePet(petId: number, dto: PetUpdateDTO): Promise<void>;
    deletePet(petId: number): Promise<void>;
}

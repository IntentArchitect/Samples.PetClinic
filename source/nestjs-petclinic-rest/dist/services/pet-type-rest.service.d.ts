import { PetTypeDTO } from './dto/pet-type.dto';
import { PetTypeRepository } from './../repository/pet-type.repository';
export declare class PetTypeRestService {
    private petTypeRepository;
    constructor(petTypeRepository: PetTypeRepository);
    getAllPetTypes(): Promise<PetTypeDTO[]>;
    getPetType(petTypeId: number): Promise<PetTypeDTO>;
    addPetType(dto: PetTypeDTO): Promise<number>;
    updatePetType(petTypeId: number, dto: PetTypeDTO): Promise<void>;
    deletePetType(petTypeId: number): Promise<void>;
}

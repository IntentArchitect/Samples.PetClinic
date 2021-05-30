import { Logger } from '@nestjs/common';
import { PetTypeDTO } from './../../services/dto/pet-type.dto';
import { PetTypeRestService } from './../../services/pet-type-rest.service';
export declare class PetTypeRestController {
    private readonly petTypeRestService;
    logger: Logger;
    constructor(petTypeRestService: PetTypeRestService);
    getAllPetTypes(req: Request): Promise<PetTypeDTO[]>;
    getPetType(req: Request, petTypeId: number): Promise<PetTypeDTO>;
    addPetType(req: Request, dto: PetTypeDTO): Promise<number>;
    updatePetType(req: Request, petTypeId: number, dto: PetTypeDTO): Promise<void>;
    deletePetType(req: Request, petTypeId: number): Promise<void>;
}

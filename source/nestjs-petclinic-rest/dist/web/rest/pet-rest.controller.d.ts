import { Logger } from '@nestjs/common';
import { PetDTO } from './../../services/dto/pet.dto';
import { PetCreateDTO } from './../../services/dto/pet-create.dto';
import { PetUpdateDTO } from './../../services/dto/pet-update.dto';
import { PetRestService } from './../../services/pet-rest.service';
export declare class PetRestController {
    private readonly petRestService;
    logger: Logger;
    constructor(petRestService: PetRestService);
    getPet(req: Request, petId: number): Promise<PetDTO>;
    addPet(req: Request, dto: PetCreateDTO): Promise<void>;
    updatePet(req: Request, petId: number, dto: PetUpdateDTO): Promise<void>;
    deletePet(req: Request, petId: number): Promise<void>;
}

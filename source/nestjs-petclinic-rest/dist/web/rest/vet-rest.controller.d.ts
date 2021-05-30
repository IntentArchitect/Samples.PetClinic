import { Logger } from '@nestjs/common';
import { VetDTO } from './../../services/dto/vet.dto';
import { VetCreateDTO } from './../../services/dto/vet-create.dto';
import { VetUpdateDTO } from './../../services/dto/vet-update.dto';
import { VetRestService } from './../../services/vet-rest.service';
export declare class VetRestController {
    private readonly vetRestService;
    logger: Logger;
    constructor(vetRestService: VetRestService);
    getAllVets(req: Request): Promise<VetDTO[]>;
    getVet(req: Request, vetId: number): Promise<VetDTO>;
    addVet(req: Request, dto: VetCreateDTO): Promise<void>;
    updateVet(req: Request, vetId: number, dto: VetUpdateDTO): Promise<void>;
    deleteVet(req: Request, vetId: number): Promise<void>;
}

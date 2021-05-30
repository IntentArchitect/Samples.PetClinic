import { Logger } from '@nestjs/common';
import { SpecialtyDTO } from './../../services/dto/specialty.dto';
import { SpecialtyRestService } from './../../services/specialty-rest.service';
export declare class SpecialtyRestController {
    private readonly specialtyRestService;
    logger: Logger;
    constructor(specialtyRestService: SpecialtyRestService);
    getAllSpecialties(req: Request): Promise<SpecialtyDTO[]>;
    getSpecialty(req: Request, specialtyId: number): Promise<SpecialtyDTO>;
    addSpecialty(req: Request, dto: SpecialtyDTO): Promise<number>;
    updateSpecialty(req: Request, specialtyId: number, dto: SpecialtyDTO): Promise<void>;
    deleteSpecialty(req: Request, specialtyId: number): Promise<void>;
}

import { Logger } from '@nestjs/common';
import { VisitDTO } from './../../services/dto/visit.dto';
import { VisitCreateDTO } from './../../services/dto/visit-create.dto';
import { VisitUpdateDTO } from './../../services/dto/visit-update.dto';
import { VisitRestService } from './../../services/visit-rest.service';
export declare class VisitRestController {
    private readonly visitRestService;
    logger: Logger;
    constructor(visitRestService: VisitRestService);
    getVisit(req: Request, visitId: number): Promise<VisitDTO>;
    addVisit(req: Request, dto: VisitCreateDTO): Promise<void>;
    updateVisit(req: Request, visitId: number, dto: VisitUpdateDTO): Promise<void>;
    deleteVisit(req: Request, visitId: number): Promise<void>;
}

import { Logger } from '@nestjs/common';
import { OwnerDTO } from './../../services/dto/owner.dto';
import { OwnerCreateDTO } from './../../services/dto/owner-create.dto';
import { OwnerUpdateDTO } from './../../services/dto/owner-update.dto';
import { OwnerRestService } from './../../services/owner-rest.service';
export declare class OwnerRestController {
    private readonly ownerRestService;
    logger: Logger;
    constructor(ownerRestService: OwnerRestService);
    getOwners(req: Request): Promise<OwnerDTO[]>;
    addOwner(req: Request, dto: OwnerCreateDTO): Promise<void>;
    getOwner(req: Request, ownerId: number): Promise<OwnerDTO>;
    updateOwner(req: Request, ownerId: number, dto: OwnerUpdateDTO): Promise<void>;
    deleteOwner(req: Request, ownerId: number): Promise<void>;
    getOwnersList(req: Request, lastName: string): Promise<OwnerDTO[]>;
}

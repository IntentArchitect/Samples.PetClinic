import { VisitDTO } from './dto/visit.dto';
import { VisitCreateDTO } from './dto/visit-create.dto';
import { VisitUpdateDTO } from './dto/visit-update.dto';
import { VisitRepository } from './../repository/visit.repository';
import { PetRepository } from 'src/repository/pet.repository';
export declare class VisitRestService {
    private visitRepository;
    private petRepository;
    constructor(visitRepository: VisitRepository, petRepository: PetRepository);
    getVisit(visitId: number): Promise<VisitDTO>;
    addVisit(dto: VisitCreateDTO): Promise<void>;
    updateVisit(visitId: number, dto: VisitUpdateDTO): Promise<void>;
    deleteVisit(visitId: number): Promise<void>;
}

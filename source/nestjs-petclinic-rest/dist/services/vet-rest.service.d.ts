import { VetDTO } from './dto/vet.dto';
import { VetCreateDTO } from './dto/vet-create.dto';
import { VetUpdateDTO } from './dto/vet-update.dto';
import { VetRepository } from './../repository/vet.repository';
import { SpecialtyRepository } from 'src/repository/specialty.repository';
export declare class VetRestService {
    private vetRepository;
    private specialtyRepository;
    constructor(vetRepository: VetRepository, specialtyRepository: SpecialtyRepository);
    getAllVets(): Promise<VetDTO[]>;
    getVet(vetId: number): Promise<VetDTO>;
    addVet(dto: VetCreateDTO): Promise<void>;
    updateVet(vetId: number, dto: VetUpdateDTO): Promise<void>;
    deleteVet(vetId: number): Promise<void>;
}

import { SpecialtyDTO } from './dto/specialty.dto';
import { SpecialtyRepository } from './../repository/specialty.repository';
export declare class SpecialtyRestService {
    private specialtyRepository;
    constructor(specialtyRepository: SpecialtyRepository);
    getAllSpecialties(): Promise<SpecialtyDTO[]>;
    getSpecialty(specialtyId: number): Promise<SpecialtyDTO>;
    addSpecialty(dto: SpecialtyDTO): Promise<number>;
    updateSpecialty(specialtyId: number, dto: SpecialtyDTO): Promise<void>;
    deleteSpecialty(specialtyId: number): Promise<void>;
}

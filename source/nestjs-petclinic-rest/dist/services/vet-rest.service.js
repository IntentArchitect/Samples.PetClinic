"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VetRestService = void 0;
const common_1 = require("@nestjs/common");
const vet_dto_1 = require("./dto/vet.dto");
const vet_create_dto_1 = require("./dto/vet-create.dto");
const vet_update_dto_1 = require("./dto/vet-update.dto");
const vet_repository_1 = require("./../repository/vet.repository");
const intent_decorators_1 = require("./../intent/intent.decorators");
const specialty_repository_1 = require("../repository/specialty.repository");
const typeorm_1 = require("typeorm");
let VetRestService = class VetRestService {
    constructor(vetRepository, specialtyRepository) {
        this.vetRepository = vetRepository;
        this.specialtyRepository = specialtyRepository;
    }
    async getAllVets() {
        var vets = await this.vetRepository.find({ relations: vet_dto_1.VetDTO.requiredRelations });
        return vets.map(x => vet_dto_1.VetDTO.fromVet(x));
    }
    async getVet(vetId) {
        var vet = await this.vetRepository.findOne({ where: { id: vetId }, relations: vet_dto_1.VetDTO.requiredRelations });
        return vet_dto_1.VetDTO.fromVet(vet);
    }
    async addVet(dto) {
        var specialties = await this.specialtyRepository.findBy({ id: (0, typeorm_1.In)(dto.specialties) });
        var newVet = {
            firstName: dto.firstName,
            lastName: dto.lastName,
            specialties: specialties
        };
        await this.vetRepository.save(newVet);
    }
    async updateVet(vetId, dto) {
        var specialties = await this.specialtyRepository.findBy({ id: (0, typeorm_1.In)(dto.specialties) });
        var existingVet = await this.vetRepository.findOneBy({ id: vetId });
        existingVet.firstName = dto.firstName;
        existingVet.lastName = dto.lastName;
        existingVet.specialties = specialties;
        await this.vetRepository.save(existingVet);
    }
    async deleteVet(vetId) {
        var existingVet = await this.vetRepository.findOneBy({ id: vetId });
        await this.vetRepository.remove(existingVet);
    }
};
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VetRestService.prototype, "getAllVets", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VetRestService.prototype, "getVet", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vet_create_dto_1.VetCreateDTO]),
    __metadata("design:returntype", Promise)
], VetRestService.prototype, "addVet", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, vet_update_dto_1.VetUpdateDTO]),
    __metadata("design:returntype", Promise)
], VetRestService.prototype, "updateVet", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VetRestService.prototype, "deleteVet", null);
VetRestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vet_repository_1.VetRepository, specialty_repository_1.SpecialtyRepository])
], VetRestService);
exports.VetRestService = VetRestService;
//# sourceMappingURL=vet-rest.service.js.map
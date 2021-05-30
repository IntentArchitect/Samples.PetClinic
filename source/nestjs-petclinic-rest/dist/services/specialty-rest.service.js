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
exports.SpecialtyRestService = void 0;
const common_1 = require("@nestjs/common");
const specialty_dto_1 = require("./dto/specialty.dto");
const specialty_repository_1 = require("./../repository/specialty.repository");
const intent_decorators_1 = require("./../intent/intent.decorators");
let SpecialtyRestService = class SpecialtyRestService {
    constructor(specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }
    async getAllSpecialties() {
        var specialties = await this.specialtyRepository.find({ relations: specialty_dto_1.SpecialtyDTO.requiredRelations });
        return Promise.all(specialties.map(x => specialty_dto_1.SpecialtyDTO.fromSpecialty(x)));
    }
    async getSpecialty(specialtyId) {
        var specialty = await this.specialtyRepository.findOne(specialtyId, { relations: specialty_dto_1.SpecialtyDTO.requiredRelations });
        return specialty_dto_1.SpecialtyDTO.fromSpecialty(specialty);
    }
    async addSpecialty(dto) {
        var newSpecialty = {
            id: dto.id,
            name: dto.name,
        };
        await this.specialtyRepository.save(newSpecialty);
        return newSpecialty.id;
    }
    async updateSpecialty(specialtyId, dto) {
        var existingSpecialty = await this.specialtyRepository.findOne(specialtyId);
        existingSpecialty.id = dto.id;
        existingSpecialty.name = dto.name;
        await this.specialtyRepository.save(existingSpecialty);
    }
    async deleteSpecialty(specialtyId) {
        var existingSpecialty = await this.specialtyRepository.findOne(specialtyId);
        await this.specialtyRepository.remove(existingSpecialty);
    }
};
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialtyRestService.prototype, "getAllSpecialties", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpecialtyRestService.prototype, "getSpecialty", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [specialty_dto_1.SpecialtyDTO]),
    __metadata("design:returntype", Promise)
], SpecialtyRestService.prototype, "addSpecialty", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, specialty_dto_1.SpecialtyDTO]),
    __metadata("design:returntype", Promise)
], SpecialtyRestService.prototype, "updateSpecialty", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpecialtyRestService.prototype, "deleteSpecialty", null);
SpecialtyRestService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [specialty_repository_1.SpecialtyRepository])
], SpecialtyRestService);
exports.SpecialtyRestService = SpecialtyRestService;
//# sourceMappingURL=specialty-rest.service.js.map
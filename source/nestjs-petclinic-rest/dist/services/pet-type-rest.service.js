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
exports.PetTypeRestService = void 0;
const common_1 = require("@nestjs/common");
const pet_type_dto_1 = require("./dto/pet-type.dto");
const pet_type_repository_1 = require("./../repository/pet-type.repository");
const intent_decorators_1 = require("./../intent/intent.decorators");
let PetTypeRestService = class PetTypeRestService {
    constructor(petTypeRepository) {
        this.petTypeRepository = petTypeRepository;
    }
    async getAllPetTypes() {
        var petTypes = await this.petTypeRepository.find({ relations: pet_type_dto_1.PetTypeDTO.requiredRelations });
        return petTypes.map(x => pet_type_dto_1.PetTypeDTO.fromPetType(x));
    }
    async getPetType(petTypeId) {
        var petType = await this.petTypeRepository.findOne(petTypeId, { relations: pet_type_dto_1.PetTypeDTO.requiredRelations });
        return pet_type_dto_1.PetTypeDTO.fromPetType(petType);
    }
    async addPetType(dto) {
        var newPetType = {
            id: dto.id,
            name: dto.name,
        };
        await this.petTypeRepository.save(newPetType);
        return newPetType.id;
    }
    async updatePetType(petTypeId, dto) {
        var existingPetType = await this.petTypeRepository.findOne(petTypeId);
        existingPetType.id = dto.id;
        existingPetType.name = dto.name;
        await this.petTypeRepository.save(existingPetType);
    }
    async deletePetType(petTypeId) {
        var existingPetType = await this.petTypeRepository.findOne(petTypeId);
        await this.petTypeRepository.remove(existingPetType);
    }
};
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetTypeRestService.prototype, "getAllPetTypes", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PetTypeRestService.prototype, "getPetType", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_type_dto_1.PetTypeDTO]),
    __metadata("design:returntype", Promise)
], PetTypeRestService.prototype, "addPetType", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pet_type_dto_1.PetTypeDTO]),
    __metadata("design:returntype", Promise)
], PetTypeRestService.prototype, "updatePetType", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PetTypeRestService.prototype, "deletePetType", null);
PetTypeRestService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [pet_type_repository_1.PetTypeRepository])
], PetTypeRestService);
exports.PetTypeRestService = PetTypeRestService;
//# sourceMappingURL=pet-type-rest.service.js.map
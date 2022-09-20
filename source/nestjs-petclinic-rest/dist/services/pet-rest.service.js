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
exports.PetRestService = void 0;
const common_1 = require("@nestjs/common");
const pet_dto_1 = require("./dto/pet.dto");
const pet_create_dto_1 = require("./dto/pet-create.dto");
const pet_update_dto_1 = require("./dto/pet-update.dto");
const pet_repository_1 = require("./../repository/pet.repository");
const intent_decorators_1 = require("./../intent/intent.decorators");
const owner_repository_1 = require("../repository/owner.repository");
const pet_type_repository_1 = require("../repository/pet-type.repository");
let PetRestService = class PetRestService {
    constructor(petRepository, ownerRepository, petTypeRepository) {
        this.petRepository = petRepository;
        this.ownerRepository = ownerRepository;
        this.petTypeRepository = petTypeRepository;
    }
    async getPet(petId) {
        var pet = await this.petRepository.findOne({ where: { id: petId }, relations: pet_dto_1.PetDTO.requiredRelations });
        return pet_dto_1.PetDTO.fromPet(pet);
    }
    async addPet(dto) {
        var owner = await this.ownerRepository.findOneBy({ id: dto.ownerId });
        var petType = await this.petTypeRepository.findOneBy({ id: dto.petTypeId });
        var newPet = {
            owner: owner,
            name: dto.name,
            birthDate: dto.birthDate,
            petType: petType
        };
        await this.petRepository.save(newPet);
    }
    async updatePet(petId, dto) {
        var petType = await this.petTypeRepository.findOneBy({ id: dto.petTypeId });
        var existingPet = await this.petRepository.findOneBy({ id: petId });
        existingPet.name = dto.name;
        existingPet.birthDate = dto.birthDate;
        existingPet.petType = petType;
        await this.petRepository.save(existingPet);
    }
    async deletePet(petId) {
        var existingPet = await this.petRepository.findOneBy({ id: petId });
        await this.petRepository.remove(existingPet);
    }
};
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PetRestService.prototype, "getPet", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_create_dto_1.PetCreateDTO]),
    __metadata("design:returntype", Promise)
], PetRestService.prototype, "addPet", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pet_update_dto_1.PetUpdateDTO]),
    __metadata("design:returntype", Promise)
], PetRestService.prototype, "updatePet", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PetRestService.prototype, "deletePet", null);
PetRestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pet_repository_1.PetRepository, owner_repository_1.OwnerRepository, pet_type_repository_1.PetTypeRepository])
], PetRestService);
exports.PetRestService = PetRestService;
//# sourceMappingURL=pet-rest.service.js.map
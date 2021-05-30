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
exports.OwnerRestService = void 0;
const common_1 = require("@nestjs/common");
const owner_dto_1 = require("./dto/owner.dto");
const owner_create_dto_1 = require("./dto/owner-create.dto");
const owner_update_dto_1 = require("./dto/owner-update.dto");
const owner_repository_1 = require("./../repository/owner.repository");
const intent_decorators_1 = require("./../intent/intent.decorators");
let OwnerRestService = class OwnerRestService {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async getOwners() {
        var owners = await this.ownerRepository.find({ relations: owner_dto_1.OwnerDTO.requiredRelations });
        return owners.map(x => owner_dto_1.OwnerDTO.fromOwner(x));
    }
    async addOwner(dto) {
        var newOwner = {
            firstName: dto.firstName,
            lastName: dto.lastName,
            address: dto.address,
            city: dto.city,
            telephone: dto.telephone,
        };
        await this.ownerRepository.save(newOwner);
    }
    async getOwner(ownerId) {
        var owner = await this.ownerRepository.findOne(ownerId, { relations: owner_dto_1.OwnerDTO.requiredRelations });
        return owner_dto_1.OwnerDTO.fromOwner(owner);
    }
    async updateOwner(ownerId, dto) {
        var existingOwner = await this.ownerRepository.findOne(ownerId);
        existingOwner.firstName = dto.firstName;
        existingOwner.lastName = dto.lastName;
        existingOwner.address = dto.address;
        existingOwner.city = dto.city;
        existingOwner.telephone = dto.telephone;
        await this.ownerRepository.save(existingOwner);
    }
    async deleteOwner(ownerId) {
        var existingOwner = await this.ownerRepository.findOne(ownerId);
        await this.ownerRepository.remove(existingOwner);
    }
    async getOwnersList(lastName) {
        throw new Error("Write your implementation for this service here...");
    }
};
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OwnerRestService.prototype, "getOwners", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [owner_create_dto_1.OwnerCreateDTO]),
    __metadata("design:returntype", Promise)
], OwnerRestService.prototype, "addOwner", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OwnerRestService.prototype, "getOwner", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, owner_update_dto_1.OwnerUpdateDTO]),
    __metadata("design:returntype", Promise)
], OwnerRestService.prototype, "updateOwner", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OwnerRestService.prototype, "deleteOwner", null);
__decorate([
    intent_decorators_1.IntentIgnoreBody(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerRestService.prototype, "getOwnersList", null);
OwnerRestService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [owner_repository_1.OwnerRepository])
], OwnerRestService);
exports.OwnerRestService = OwnerRestService;
//# sourceMappingURL=owner-rest.service.js.map
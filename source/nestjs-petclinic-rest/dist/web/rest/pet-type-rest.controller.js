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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetTypeRestController = void 0;
const common_1 = require("@nestjs/common");
const pet_type_dto_1 = require("./../../services/dto/pet-type.dto");
const pet_type_rest_service_1 = require("./../../services/pet-type-rest.service");
let PetTypeRestController = class PetTypeRestController {
    constructor(petTypeRestService) {
        this.petTypeRestService = petTypeRestService;
        this.logger = new common_1.Logger('PetTypeRestController');
    }
    async getAllPetTypes(req) {
        var result = await this.petTypeRestService.getAllPetTypes();
        return result;
    }
    async getPetType(req, petTypeId) {
        var result = await this.petTypeRestService.getPetType(petTypeId);
        return result;
    }
    async addPetType(req, dto) {
        var result = await this.petTypeRestService.addPetType(dto);
        return result;
    }
    async updatePetType(req, petTypeId, dto) {
        return await this.petTypeRestService.updatePetType(petTypeId, dto);
    }
    async deletePetType(req, petTypeId) {
        return await this.petTypeRestService.deletePetType(petTypeId);
    }
};
__decorate([
    common_1.Get(""),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PetTypeRestController.prototype, "getAllPetTypes", null);
__decorate([
    common_1.Get(":petTypeId"),
    __param(0, common_1.Req()), __param(1, common_1.Param('petTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PetTypeRestController.prototype, "getPetType", null);
__decorate([
    common_1.Post(""),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pet_type_dto_1.PetTypeDTO]),
    __metadata("design:returntype", Promise)
], PetTypeRestController.prototype, "addPetType", null);
__decorate([
    common_1.Put(":petTypeId"),
    __param(0, common_1.Req()), __param(1, common_1.Param('petTypeId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, pet_type_dto_1.PetTypeDTO]),
    __metadata("design:returntype", Promise)
], PetTypeRestController.prototype, "updatePetType", null);
__decorate([
    common_1.Delete(":petTypeId"),
    __param(0, common_1.Req()), __param(1, common_1.Param('petTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PetTypeRestController.prototype, "deletePetType", null);
PetTypeRestController = __decorate([
    common_1.Controller('api/pettypes'),
    __metadata("design:paramtypes", [pet_type_rest_service_1.PetTypeRestService])
], PetTypeRestController);
exports.PetTypeRestController = PetTypeRestController;
//# sourceMappingURL=pet-type-rest.controller.js.map
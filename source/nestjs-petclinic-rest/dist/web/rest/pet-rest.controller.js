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
exports.PetRestController = void 0;
const common_1 = require("@nestjs/common");
const pet_dto_1 = require("./../../services/dto/pet.dto");
const pet_create_dto_1 = require("./../../services/dto/pet-create.dto");
const pet_update_dto_1 = require("./../../services/dto/pet-update.dto");
const pet_rest_service_1 = require("./../../services/pet-rest.service");
const swagger_1 = require("@nestjs/swagger");
let PetRestController = class PetRestController {
    constructor(petRestService) {
        this.petRestService = petRestService;
        this.logger = new common_1.Logger('PetRestController');
    }
    async getPet(req, petId) {
        const result = await this.petRestService.getPet(petId);
        return result;
    }
    async addPet(req, dto) {
        return await this.petRestService.addPet(dto);
    }
    async updatePet(req, petId, dto) {
        return await this.petRestService.updatePet(petId, dto);
    }
    async deletePet(req, petId) {
        return await this.petRestService.deletePet(petId);
    }
};
__decorate([
    (0, common_1.Get)(':petId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Result retrieved successfully.',
        type: pet_dto_1.PetDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Response not found.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('petId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PetRestController.prototype, "getPet", null);
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pet_create_dto_1.PetCreateDTO]),
    __metadata("design:returntype", Promise)
], PetRestController.prototype, "addPet", null);
__decorate([
    (0, common_1.Put)(':petId'),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Successfully updated.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('petId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, pet_update_dto_1.PetUpdateDTO]),
    __metadata("design:returntype", Promise)
], PetRestController.prototype, "updatePet", null);
__decorate([
    (0, common_1.Delete)(':petId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully deleted.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('petId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PetRestController.prototype, "deletePet", null);
PetRestController = __decorate([
    (0, swagger_1.ApiTags)('PetRest'),
    (0, common_1.Controller)('api/pets'),
    __metadata("design:paramtypes", [pet_rest_service_1.PetRestService])
], PetRestController);
exports.PetRestController = PetRestController;
//# sourceMappingURL=pet-rest.controller.js.map
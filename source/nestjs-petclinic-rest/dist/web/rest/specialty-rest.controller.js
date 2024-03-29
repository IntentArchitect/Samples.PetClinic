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
exports.SpecialtyRestController = void 0;
const common_1 = require("@nestjs/common");
const specialty_dto_1 = require("./../../services/dto/specialty.dto");
const specialty_rest_service_1 = require("./../../services/specialty-rest.service");
const swagger_1 = require("@nestjs/swagger");
let SpecialtyRestController = class SpecialtyRestController {
    constructor(specialtyRestService) {
        this.specialtyRestService = specialtyRestService;
        this.logger = new common_1.Logger('SpecialtyRestController');
    }
    async getAllSpecialties(req) {
        const result = await this.specialtyRestService.getAllSpecialties();
        return result;
    }
    async getSpecialty(req, specialtyId) {
        const result = await this.specialtyRestService.getSpecialty(specialtyId);
        return result;
    }
    async addSpecialty(req, dto) {
        const result = await this.specialtyRestService.addSpecialty(dto);
        return result;
    }
    async updateSpecialty(req, specialtyId, dto) {
        return await this.specialtyRestService.updateSpecialty(specialtyId, dto);
    }
    async deleteSpecialty(req, specialtyId) {
        return await this.specialtyRestService.deleteSpecialty(specialtyId);
    }
};
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOkResponse)({
        description: 'Result retrieved successfully.',
        type: specialty_dto_1.SpecialtyDTO,
        isArray: true,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialtyRestController.prototype, "getAllSpecialties", null);
__decorate([
    (0, common_1.Get)(':specialtyId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Result retrieved successfully.',
        type: specialty_dto_1.SpecialtyDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Response not found.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('specialtyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], SpecialtyRestController.prototype, "getSpecialty", null);
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: 'number',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, specialty_dto_1.SpecialtyDTO]),
    __metadata("design:returntype", Promise)
], SpecialtyRestController.prototype, "addSpecialty", null);
__decorate([
    (0, common_1.Put)(':specialtyId'),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Successfully updated.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('specialtyId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, specialty_dto_1.SpecialtyDTO]),
    __metadata("design:returntype", Promise)
], SpecialtyRestController.prototype, "updateSpecialty", null);
__decorate([
    (0, common_1.Delete)(':specialtyId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully deleted.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('specialtyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], SpecialtyRestController.prototype, "deleteSpecialty", null);
SpecialtyRestController = __decorate([
    (0, swagger_1.ApiTags)('SpecialtyRest'),
    (0, common_1.Controller)('api/specialties'),
    __metadata("design:paramtypes", [specialty_rest_service_1.SpecialtyRestService])
], SpecialtyRestController);
exports.SpecialtyRestController = SpecialtyRestController;
//# sourceMappingURL=specialty-rest.controller.js.map
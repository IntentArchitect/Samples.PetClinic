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
exports.VetRestController = void 0;
const common_1 = require("@nestjs/common");
const vet_dto_1 = require("./../../services/dto/vet.dto");
const vet_create_dto_1 = require("./../../services/dto/vet-create.dto");
const vet_update_dto_1 = require("./../../services/dto/vet-update.dto");
const vet_rest_service_1 = require("./../../services/vet-rest.service");
const swagger_1 = require("@nestjs/swagger");
let VetRestController = class VetRestController {
    constructor(vetRestService) {
        this.vetRestService = vetRestService;
        this.logger = new common_1.Logger('VetRestController');
    }
    async getAllVets(req) {
        const result = await this.vetRestService.getAllVets();
        return result;
    }
    async getVet(req, vetId) {
        const result = await this.vetRestService.getVet(vetId);
        return result;
    }
    async addVet(req, dto) {
        return await this.vetRestService.addVet(dto);
    }
    async updateVet(req, vetId, dto) {
        return await this.vetRestService.updateVet(vetId, dto);
    }
    async deleteVet(req, vetId) {
        return await this.vetRestService.deleteVet(vetId);
    }
};
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOkResponse)({
        description: 'Result retrieved successfully.',
        type: vet_dto_1.VetDTO,
        isArray: true,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VetRestController.prototype, "getAllVets", null);
__decorate([
    (0, common_1.Get)(':vetId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Result retrieved successfully.',
        type: vet_dto_1.VetDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Response not found.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('vetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], VetRestController.prototype, "getVet", null);
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, vet_create_dto_1.VetCreateDTO]),
    __metadata("design:returntype", Promise)
], VetRestController.prototype, "addVet", null);
__decorate([
    (0, common_1.Put)(':vetId'),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Successfully updated.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('vetId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, vet_update_dto_1.VetUpdateDTO]),
    __metadata("design:returntype", Promise)
], VetRestController.prototype, "updateVet", null);
__decorate([
    (0, common_1.Delete)(':vetId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully deleted.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('vetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], VetRestController.prototype, "deleteVet", null);
VetRestController = __decorate([
    (0, swagger_1.ApiTags)('VetRest'),
    (0, common_1.Controller)('api/vets'),
    __metadata("design:paramtypes", [vet_rest_service_1.VetRestService])
], VetRestController);
exports.VetRestController = VetRestController;
//# sourceMappingURL=vet-rest.controller.js.map
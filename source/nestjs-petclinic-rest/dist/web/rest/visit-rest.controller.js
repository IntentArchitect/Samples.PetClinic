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
exports.VisitRestController = void 0;
const common_1 = require("@nestjs/common");
const visit_dto_1 = require("./../../services/dto/visit.dto");
const visit_create_dto_1 = require("./../../services/dto/visit-create.dto");
const visit_update_dto_1 = require("./../../services/dto/visit-update.dto");
const visit_rest_service_1 = require("./../../services/visit-rest.service");
const swagger_1 = require("@nestjs/swagger");
let VisitRestController = class VisitRestController {
    constructor(visitRestService) {
        this.visitRestService = visitRestService;
        this.logger = new common_1.Logger('VisitRestController');
    }
    async getVisit(req, visitId) {
        const result = await this.visitRestService.getVisit(visitId);
        return result;
    }
    async addVisit(req, dto) {
        return await this.visitRestService.addVisit(dto);
    }
    async updateVisit(req, visitId, dto) {
        return await this.visitRestService.updateVisit(visitId, dto);
    }
    async deleteVisit(req, visitId) {
        return await this.visitRestService.deleteVisit(visitId);
    }
};
__decorate([
    (0, common_1.Get)(':visitId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Result retrieved successfully.',
        type: visit_dto_1.VisitDTO,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Response not found.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('visitId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], VisitRestController.prototype, "getVisit", null);
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, visit_create_dto_1.VisitCreateDTO]),
    __metadata("design:returntype", Promise)
], VisitRestController.prototype, "addVisit", null);
__decorate([
    (0, common_1.Put)(':visitId'),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Successfully updated.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('visitId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, visit_update_dto_1.VisitUpdateDTO]),
    __metadata("design:returntype", Promise)
], VisitRestController.prototype, "updateVisit", null);
__decorate([
    (0, common_1.Delete)(':visitId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully deleted.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('visitId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], VisitRestController.prototype, "deleteVisit", null);
VisitRestController = __decorate([
    (0, swagger_1.ApiTags)('VisitRest'),
    (0, common_1.Controller)('api/visits'),
    __metadata("design:paramtypes", [visit_rest_service_1.VisitRestService])
], VisitRestController);
exports.VisitRestController = VisitRestController;
//# sourceMappingURL=visit-rest.controller.js.map
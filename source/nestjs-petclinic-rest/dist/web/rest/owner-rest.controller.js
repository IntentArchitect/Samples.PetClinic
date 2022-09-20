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
exports.OwnerRestController = void 0;
const common_1 = require("@nestjs/common");
const owner_create_dto_1 = require("./../../services/dto/owner-create.dto");
const owner_update_dto_1 = require("./../../services/dto/owner-update.dto");
const owner_rest_service_1 = require("./../../services/owner-rest.service");
let OwnerRestController = class OwnerRestController {
    constructor(ownerRestService) {
        this.ownerRestService = ownerRestService;
        this.logger = new common_1.Logger('OwnerRestController');
    }
    async getOwners(req) {
        var result = await this.ownerRestService.getOwners();
        return result;
    }
    async addOwner(req, dto) {
        return await this.ownerRestService.addOwner(dto);
    }
    async getOwner(req, ownerId) {
        var result = await this.ownerRestService.getOwner(ownerId);
        return result;
    }
    async updateOwner(req, ownerId, dto) {
        return await this.ownerRestService.updateOwner(ownerId, dto);
    }
    async deleteOwner(req, ownerId) {
        return await this.ownerRestService.deleteOwner(ownerId);
    }
    async getOwnersList(req, lastName) {
        var result = await this.ownerRestService.getOwnersList(lastName);
        return result;
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OwnerRestController.prototype, "getOwners", null);
__decorate([
    (0, common_1.Post)(""),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, owner_create_dto_1.OwnerCreateDTO]),
    __metadata("design:returntype", Promise)
], OwnerRestController.prototype, "addOwner", null);
__decorate([
    (0, common_1.Get)(":ownerId"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('ownerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], OwnerRestController.prototype, "getOwner", null);
__decorate([
    (0, common_1.Put)(":ownerId"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('ownerId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, owner_update_dto_1.OwnerUpdateDTO]),
    __metadata("design:returntype", Promise)
], OwnerRestController.prototype, "updateOwner", null);
__decorate([
    (0, common_1.Delete)(":ownerId"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('ownerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], OwnerRestController.prototype, "deleteOwner", null);
__decorate([
    (0, common_1.Get)("*/lastname/:lastName"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('lastName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OwnerRestController.prototype, "getOwnersList", null);
OwnerRestController = __decorate([
    (0, common_1.Controller)('api/owners'),
    __metadata("design:paramtypes", [owner_rest_service_1.OwnerRestService])
], OwnerRestController);
exports.OwnerRestController = OwnerRestController;
//# sourceMappingURL=owner-rest.controller.js.map
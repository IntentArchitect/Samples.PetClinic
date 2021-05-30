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
exports.OwnerProfile = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const owner_entity_1 = require("../../domain/entities/owner.entity");
const owner_dto_1 = require("../dto/owner.dto");
let OwnerProfile = class OwnerProfile extends nestjs_1.AutomapperProfile {
    constructor(mapper) {
        super(mapper);
    }
    mapProfile() {
        return (mapper) => {
            mapper.createMap(owner_entity_1.Owner, owner_dto_1.OwnerDTO);
        };
    }
};
OwnerProfile = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_1.InjectMapper()),
    __metadata("design:paramtypes", [Object])
], OwnerProfile);
exports.OwnerProfile = OwnerProfile;
//# sourceMappingURL=owner-mappings.js.map
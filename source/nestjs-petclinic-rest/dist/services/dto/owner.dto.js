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
exports.OwnerDTO = void 0;
const pet_dto_1 = require("./pet.dto");
const swagger_1 = require("@nestjs/swagger");
class OwnerDTO {
    static fromOwner(owner) {
        var _a;
        if (owner == null) {
            return null;
        }
        const dto = new OwnerDTO();
        dto.id = owner.id;
        dto.firstName = owner.firstName;
        dto.lastName = owner.lastName;
        dto.address = owner.address;
        dto.city = owner.city;
        dto.telephone = owner.telephone;
        dto.pets = (_a = owner.pets) === null || _a === void 0 ? void 0 : _a.map(x => pet_dto_1.PetDTO.fromPet(x));
        return dto;
    }
}
OwnerDTO.requiredRelations = ["pets", "pets.petType", "pets.owner", "pets.visits"];
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OwnerDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OwnerDTO.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OwnerDTO.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OwnerDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OwnerDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OwnerDTO.prototype, "telephone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], OwnerDTO.prototype, "pets", void 0);
exports.OwnerDTO = OwnerDTO;
//# sourceMappingURL=owner.dto.js.map
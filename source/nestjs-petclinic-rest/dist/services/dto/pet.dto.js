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
exports.PetDTO = void 0;
const pet_visit_dto_1 = require("./pet-visit.dto");
const swagger_1 = require("@nestjs/swagger");
class PetDTO {
    static fromPet(pet) {
        var _a, _b, _c, _d, _e, _f;
        if (pet == null) {
            return null;
        }
        const dto = new PetDTO();
        dto.id = pet.id;
        dto.name = pet.name;
        dto.birthDate = pet.birthDate;
        dto.petTypeId = (_a = pet.petType) === null || _a === void 0 ? void 0 : _a.id;
        dto.petTypeName = (_b = pet.petType) === null || _b === void 0 ? void 0 : _b.name;
        dto.ownerId = (_c = pet.owner) === null || _c === void 0 ? void 0 : _c.id;
        dto.ownerFirstName = (_d = pet.owner) === null || _d === void 0 ? void 0 : _d.firstName;
        dto.ownerLastName = (_e = pet.owner) === null || _e === void 0 ? void 0 : _e.lastName;
        dto.visits = (_f = pet.visits) === null || _f === void 0 ? void 0 : _f.map(x => pet_visit_dto_1.PetVisitDTO.fromVisit(x));
        return dto;
    }
}
PetDTO.requiredRelations = ["petType", "owner", "visits"];
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PetDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], PetDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], PetDTO.prototype, "birthDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PetDTO.prototype, "petTypeId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], PetDTO.prototype, "petTypeName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PetDTO.prototype, "ownerId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], PetDTO.prototype, "ownerFirstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], PetDTO.prototype, "ownerLastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], PetDTO.prototype, "visits", void 0);
exports.PetDTO = PetDTO;
//# sourceMappingURL=pet.dto.js.map
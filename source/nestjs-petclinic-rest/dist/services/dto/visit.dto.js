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
exports.VisitDTO = void 0;
const pet_dto_1 = require("./pet.dto");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class VisitDTO {
    static fromVisit(visit) {
        var _a, _b;
        if (visit == null) {
            return null;
        }
        const dto = new VisitDTO();
        dto.id = visit.id;
        dto.visitDate = visit.visitDate;
        dto.description = visit.description;
        dto.pet = pet_dto_1.PetDTO.fromPet(visit.pet);
        dto.ownerId = (_b = (_a = visit.pet) === null || _a === void 0 ? void 0 : _a.owner) === null || _b === void 0 ? void 0 : _b.id;
        return dto;
    }
}
VisitDTO.requiredRelations = ["pet", "pet.petType", "pet.owner", "pet.visits"];
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VisitDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], VisitDTO.prototype, "visitDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VisitDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", pet_dto_1.PetDTO)
], VisitDTO.prototype, "pet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VisitDTO.prototype, "ownerId", void 0);
exports.VisitDTO = VisitDTO;
//# sourceMappingURL=visit.dto.js.map
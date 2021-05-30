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
exports.VetDTO = void 0;
const specialty_dto_1 = require("./specialty.dto");
const swagger_1 = require("@nestjs/swagger");
class VetDTO {
    static fromVet(vet) {
        var _a;
        if (vet == null) {
            return null;
        }
        const dto = new VetDTO();
        dto.id = vet.id;
        dto.firstName = vet.firstName;
        dto.lastName = vet.lastName;
        dto.specialties = (_a = vet.specialties) === null || _a === void 0 ? void 0 : _a.map(x => specialty_dto_1.SpecialtyDTO.fromSpecialty(x));
        return dto;
    }
}
VetDTO.requiredRelations = ["specialties"];
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], VetDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], VetDTO.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], VetDTO.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], VetDTO.prototype, "specialties", void 0);
exports.VetDTO = VetDTO;
//# sourceMappingURL=vet.dto.js.map
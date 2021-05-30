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
exports.SpecialtyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class SpecialtyDTO {
    static fromSpecialty(specialty) {
        if (specialty == null) {
            return null;
        }
        const dto = new SpecialtyDTO();
        dto.id = specialty.id;
        dto.name = specialty.name;
        return dto;
    }
}
SpecialtyDTO.requiredRelations = [];
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], SpecialtyDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], SpecialtyDTO.prototype, "name", void 0);
exports.SpecialtyDTO = SpecialtyDTO;
//# sourceMappingURL=specialty.dto.js.map
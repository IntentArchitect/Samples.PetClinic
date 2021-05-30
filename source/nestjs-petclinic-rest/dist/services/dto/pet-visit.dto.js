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
exports.PetVisitDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PetVisitDTO {
    static fromVisit(visit) {
        if (visit == null) {
            return null;
        }
        const dto = new PetVisitDTO();
        dto.id = visit.id;
        dto.visitDate = visit.visitDate;
        dto.description = visit.description;
        return dto;
    }
}
PetVisitDTO.requiredRelations = [];
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PetVisitDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], PetVisitDTO.prototype, "visitDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], PetVisitDTO.prototype, "description", void 0);
exports.PetVisitDTO = PetVisitDTO;
//# sourceMappingURL=pet-visit.dto.js.map
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
exports.VetUpdateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class VetUpdateDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], VetUpdateDTO.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], VetUpdateDTO.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], VetUpdateDTO.prototype, "specialties", void 0);
exports.VetUpdateDTO = VetUpdateDTO;
//# sourceMappingURL=vet-update.dto.js.map
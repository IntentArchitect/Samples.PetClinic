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
exports.Vet = void 0;
const specialty_entity_1 = require("./specialty.entity");
const typeorm_1 = require("typeorm");
let Vet = class Vet {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Vet.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vet.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vet.prototype, "lastName", void 0);
__decorate([
    typeorm_1.ManyToMany(() => specialty_entity_1.Specialty),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Vet.prototype, "specialties", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Vet.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Vet.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Vet.prototype, "lastModifiedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Vet.prototype, "lastModifiedDate", void 0);
Vet = __decorate([
    typeorm_1.Entity('vet')
], Vet);
exports.Vet = Vet;
//# sourceMappingURL=vet.entity.js.map
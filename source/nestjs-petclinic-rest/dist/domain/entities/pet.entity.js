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
exports.Pet = void 0;
const pet_type_entity_1 = require("./pet-type.entity");
const visit_entity_1 = require("./visit.entity");
const owner_entity_1 = require("./owner.entity");
const typeorm_1 = require("typeorm");
let Pet = class Pet {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Pet.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Pet.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Pet.prototype, "birthDate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => pet_type_entity_1.PetType),
    __metadata("design:type", pet_type_entity_1.PetType)
], Pet.prototype, "petType", void 0);
__decorate([
    typeorm_1.OneToMany(() => visit_entity_1.Visit, visits => visits.pet),
    __metadata("design:type", Array)
], Pet.prototype, "visits", void 0);
__decorate([
    typeorm_1.ManyToOne(() => owner_entity_1.Owner, owner => owner.pets),
    __metadata("design:type", owner_entity_1.Owner)
], Pet.prototype, "owner", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Pet.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Pet.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Pet.prototype, "lastModifiedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Pet.prototype, "lastModifiedDate", void 0);
Pet = __decorate([
    typeorm_1.Entity('pet')
], Pet);
exports.Pet = Pet;
//# sourceMappingURL=pet.entity.js.map
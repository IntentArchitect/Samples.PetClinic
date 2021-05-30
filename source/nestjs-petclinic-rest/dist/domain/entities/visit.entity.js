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
exports.Visit = void 0;
const pet_entity_1 = require("./pet.entity");
const typeorm_1 = require("typeorm");
let Visit = class Visit {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Visit.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Visit.prototype, "visitDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Visit.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => pet_entity_1.Pet, pet => pet.visits),
    __metadata("design:type", pet_entity_1.Pet)
], Visit.prototype, "pet", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Visit.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Visit.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Visit.prototype, "lastModifiedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Visit.prototype, "lastModifiedDate", void 0);
Visit = __decorate([
    typeorm_1.Entity('visit')
], Visit);
exports.Visit = Visit;
//# sourceMappingURL=visit.entity.js.map
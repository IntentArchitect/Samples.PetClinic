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
exports.VisitRestService = void 0;
const common_1 = require("@nestjs/common");
const visit_dto_1 = require("./dto/visit.dto");
const visit_create_dto_1 = require("./dto/visit-create.dto");
const visit_update_dto_1 = require("./dto/visit-update.dto");
const visit_repository_1 = require("./../repository/visit.repository");
const intent_decorators_1 = require("./../intent/intent.decorators");
const pet_repository_1 = require("../repository/pet.repository");
let VisitRestService = class VisitRestService {
    constructor(visitRepository, petRepository) {
        this.visitRepository = visitRepository;
        this.petRepository = petRepository;
    }
    async getVisit(visitId) {
        var visit = await this.visitRepository.findOne({ where: { id: visitId }, relations: visit_dto_1.VisitDTO.requiredRelations });
        return visit_dto_1.VisitDTO.fromVisit(visit);
    }
    async addVisit(dto) {
        var pet = await this.petRepository.findOneBy({ id: dto.petId });
        var newVisit = {
            pet: pet,
            visitDate: dto.visitDate,
            description: dto.description,
        };
        await this.visitRepository.save(newVisit);
    }
    async updateVisit(visitId, dto) {
        var existingVisit = await this.visitRepository.findOneBy({ id: visitId });
        existingVisit.visitDate = dto.visitDate;
        existingVisit.description = dto.description;
        await this.visitRepository.save(existingVisit);
    }
    async deleteVisit(visitId) {
        var existingVisit = await this.visitRepository.findOneBy({ id: visitId });
        await this.visitRepository.remove(existingVisit);
    }
};
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VisitRestService.prototype, "getVisit", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [visit_create_dto_1.VisitCreateDTO]),
    __metadata("design:returntype", Promise)
], VisitRestService.prototype, "addVisit", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, visit_update_dto_1.VisitUpdateDTO]),
    __metadata("design:returntype", Promise)
], VisitRestService.prototype, "updateVisit", null);
__decorate([
    (0, intent_decorators_1.IntentIgnoreBody)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VisitRestService.prototype, "deleteVisit", null);
VisitRestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [visit_repository_1.VisitRepository, pet_repository_1.PetRepository])
], VisitRestService);
exports.VisitRestService = VisitRestService;
//# sourceMappingURL=visit-rest.service.js.map
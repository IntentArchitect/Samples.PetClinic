"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const owner_rest_controller_1 = require("./web/rest/owner-rest.controller");
const pet_rest_controller_1 = require("./web/rest/pet-rest.controller");
const pet_type_rest_controller_1 = require("./web/rest/pet-type-rest.controller");
const specialty_rest_controller_1 = require("./web/rest/specialty-rest.controller");
const vet_rest_controller_1 = require("./web/rest/vet-rest.controller");
const visit_rest_controller_1 = require("./web/rest/visit-rest.controller");
const owner_rest_service_1 = require("./services/owner-rest.service");
const pet_rest_service_1 = require("./services/pet-rest.service");
const pet_type_rest_service_1 = require("./services/pet-type-rest.service");
const specialty_rest_service_1 = require("./services/specialty-rest.service");
const vet_rest_service_1 = require("./services/vet-rest.service");
const visit_rest_service_1 = require("./services/visit-rest.service");
const orm_config_1 = require("./orm.config");
const typeorm_ex_module_1 = require("./typeorm/typeorm-ex.module");
const owner_repository_1 = require("./repository/owner.repository");
const pet_repository_1 = require("./repository/pet.repository");
const pet_type_repository_1 = require("./repository/pet-type.repository");
const specialty_repository_1 = require("./repository/specialty.repository");
const vet_repository_1 = require("./repository/vet.repository");
const basic_auditing_subscriber_1 = require("./typeorm/basic-auditing-subscriber");
const visit_repository_1 = require("./repository/visit.repository");
const intent_decorators_1 = require("./intent/intent.decorators");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, intent_decorators_1.IntentMerge)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.typeOrmConfig),
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([
                owner_repository_1.OwnerRepository,
                pet_repository_1.PetRepository,
                pet_type_repository_1.PetTypeRepository,
                specialty_repository_1.SpecialtyRepository,
                vet_repository_1.VetRepository,
            ]),
            nestjs_cls_1.ClsModule.forRoot({
                global: true,
                middleware: { mount: true },
            }),
            typeorm_1.TypeOrmModule.forFeature([owner_repository_1.OwnerRepository, pet_repository_1.PetRepository, pet_type_repository_1.PetTypeRepository, specialty_repository_1.SpecialtyRepository, vet_repository_1.VetRepository, visit_repository_1.VisitRepository])
        ],
        controllers: [
            owner_rest_controller_1.OwnerRestController,
            pet_rest_controller_1.PetRestController,
            pet_type_rest_controller_1.PetTypeRestController,
            specialty_rest_controller_1.SpecialtyRestController,
            vet_rest_controller_1.VetRestController,
            visit_rest_controller_1.VisitRestController
        ],
        providers: [
            owner_rest_service_1.OwnerRestService,
            pet_rest_service_1.PetRestService,
            pet_type_rest_service_1.PetTypeRestService,
            specialty_rest_service_1.SpecialtyRestService,
            vet_rest_service_1.VetRestService,
            visit_rest_service_1.VisitRestService,
            basic_auditing_subscriber_1.BasicAuditingSubscriber
        ]
    })
], AppModule);
exports.AppModule = AppModule;
const nestjs_cls_1 = require("nestjs-cls");
//# sourceMappingURL=app.module.js.map
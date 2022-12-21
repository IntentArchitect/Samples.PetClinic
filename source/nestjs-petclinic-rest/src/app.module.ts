import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerRestController } from './web/rest/owner-rest.controller';
import { PetRestController } from './web/rest/pet-rest.controller';
import { PetTypeRestController } from './web/rest/pet-type-rest.controller';
import { SpecialtyRestController } from './web/rest/specialty-rest.controller';
import { VetRestController } from './web/rest/vet-rest.controller';
import { VisitRestController } from './web/rest/visit-rest.controller';
import { OwnerRestService } from './services/owner-rest.service';
import { PetRestService } from './services/pet-rest.service';
import { PetTypeRestService } from './services/pet-type-rest.service';
import { SpecialtyRestService } from './services/specialty-rest.service';
import { VetRestService } from './services/vet-rest.service';
import { VisitRestService } from './services/visit-rest.service';
import { typeOrmConfig } from './orm.config';
import { TypeOrmExModule } from './typeorm/typeorm-ex.module';
import { OwnerRepository } from './repository/owner.repository';
import { PetRepository } from './repository/pet.repository';
import { PetTypeRepository } from './repository/pet-type.repository';
import { SpecialtyRepository } from './repository/specialty.repository';
import { VetRepository } from './repository/vet.repository';
import { BasicAuditingSubscriber } from './typeorm/basic-auditing-subscriber';
import { VisitRepository } from './repository/visit.repository';
import { IntentIgnore, IntentMerge } from './intent/intent.decorators';
import { ConfigModule } from '@nestjs/config';
import { ClsModule } from 'nestjs-cls';

@IntentMerge()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmExModule.forCustomRepository([
      OwnerRepository,
      PetRepository,
      PetTypeRepository,
      SpecialtyRepository,
      VetRepository,
    ]),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
    TypeOrmModule.forFeature([OwnerRepository, PetRepository, PetTypeRepository, SpecialtyRepository, VetRepository, VisitRepository])
  ],
  controllers: [
    OwnerRestController,
    PetRestController,
    PetTypeRestController,
    SpecialtyRestController,
    VetRestController,
    VisitRestController
  ],
  providers: [
    OwnerRestService,
    PetRestService,
    PetTypeRestService,
    SpecialtyRestService,
    VetRestService,
    VisitRestService,
    BasicAuditingSubscriber
  ]
})
export class AppModule {}

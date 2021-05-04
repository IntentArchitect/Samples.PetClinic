import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { IntentIgnore, IntentMerge } from './intent/intent.decorators';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PartsModule } from './parts/parts.module';
import { OwnersModule } from './owners/owners.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetTypesModule } from './pet-types/pet-types.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
  

@IntentMerge()
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CollapseModule.forRoot(),
    CoreModule,
    PetTypesModule,
    OwnersModule,
    PartsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

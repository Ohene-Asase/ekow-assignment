import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './_services/country.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryFilterPipe } from './Pipes/country-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent,
    HomeLayoutComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

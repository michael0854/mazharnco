import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';

import { AgmCoreModule } from '@agm/core';
import { NgxCarouselModule } from 'ngx-carousel';

import { HomeComponent } from './client/home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { ContactComponent } from './client/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKHGctDoGx1_YdAbRsPlJYQqlQeC6kR2E'
    }),
    NgxCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

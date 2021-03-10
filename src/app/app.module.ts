import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneticsComponent } from './genetics/genetics.component';
import { GeneticsInputComponent } from './genetics/genetics-input/genetics-input.component';
import { BeautifullGeneticsComponent } from './genetics/breeding-details/seed-details/beautifull-genetics/beautifull-genetics.component'
import { BreedingProcessViewerComponent } from './genetics/breeding-details/breeding-process-viewer/breeding-process-viewer.component'
import { ViewerPrintChildsComponent } from './genetics/breeding-details/breeding-process-viewer/viewer-print-childs/viewer-print-childs.component'
import { OptionsComponent } from './genetics/genetics-input/options/options.component'
import { LoadingSimulationComponent } from './genetics/breeding-details/loading-simulation/loading-simulation.component'
import { BreedingDetailsComponent } from './genetics/breeding-details/breeding-details.component';
import { SeedDetailsComponent } from './genetics/breeding-details/seed-details/seed-details.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DonateComponent } from './donate/donate.component'

import { MaterialModule } from './material.module'

@NgModule({
  declarations: [
    AppComponent,
    GeneticsComponent,
    GeneticsInputComponent,
    BreedingDetailsComponent,
    SeedDetailsComponent,
    BeautifullGeneticsComponent,
    BreedingProcessViewerComponent,
    ViewerPrintChildsComponent,
    OptionsComponent,
    LoadingSimulationComponent,
    AboutComponent,
    NavbarComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PastMedicalHistoryComponent } from './components/past-medical-history/past-medical-history.component';
import { DigitalTwinComponent } from './components/digital-twin/digital-twin.component';
import { MiddleComponent } from './pages/middle/middle.component';
import { RightComponent } from './pages/right/right.component';
import { VideoCallComponent } from './components/video-call/video-call.component';
import { SuggestedQuestionsComponent } from './components/suggested-questions/suggested-questions.component';
import { LivePossibleCausesComponent } from './components/live-possible-causes/live-possible-causes.component';
import { ClinicalCodesComponent } from './components/clinical-codes/clinical-codes.component';
import { AutoTranscriptComponent } from './components/auto-transcript/auto-transcript.component';
import { DoctorConsultationComponent } from './components/doctor-consultation/doctor-consultation.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PastMedicalHistoryComponent,
    DigitalTwinComponent,
    MiddleComponent,
    RightComponent,
    VideoCallComponent,
    SuggestedQuestionsComponent,
    LivePossibleCausesComponent,
    ClinicalCodesComponent,
    AutoTranscriptComponent,
    DoctorConsultationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    
    // other imports
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

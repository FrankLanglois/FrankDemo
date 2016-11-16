import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';
import { ExponentialStrengthPipe } from './pipe/exponential.pipe';
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { StructureChildComponent } from './structure-directives/structure-child.component';
import { UnlessDirective } from './structure-directives/unless.directive';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { BackgroundDirective } from './attribute-directives/background.directive';
import { BackgroundOnMouseDirective } from './attribute-directives/backgroundOnMouse.directive';
import { HttpClientComponent } from './http-client/http-client.component';
import { WikiComponent } from './http-client/wiki.component';
import { WikiSmartComponent } from './http-client/wiki-smart.component';
import { DemoService } from './services/demo.service';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientComponent,
    WikiComponent,
    WikiSmartComponent,
    StructureDirectivesComponent,
    StructureChildComponent,
    AttributeDirectivesComponent,
    PipeComponent,
    HomeComponent,
    ExponentialStrengthPipe,
    UnlessDirective,
    BackgroundDirective,
    BackgroundOnMouseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]

})
export class AppModule { }

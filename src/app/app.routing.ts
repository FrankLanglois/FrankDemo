import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pipes',
    component: PipeComponent
  },
  {
    path: 'httpClient',
    component: HttpClientComponent
  },
  {
    path: 'structureDirectives',
    component: StructureDirectivesComponent
  },
  {
    path: 'attributeDirectives',
    component: AttributeDirectivesComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

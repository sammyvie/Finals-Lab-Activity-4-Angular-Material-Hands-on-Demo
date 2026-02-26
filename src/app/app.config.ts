import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Import all components
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomizeDemo } from './custome/customize-demo';
import { RegisterComponent } from './register/register';

const routes: Routes = [
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: 'custom', component: CustomizeDemo },
  { path: 'register', component: RegisterComponent },
  // Default redirect to register
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync() // Required for the MatSidenav/Hamburger animations
  ]
};

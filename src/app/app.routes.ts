import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
// import { CustomizeDemo } from './customize-demo/customize-demo'; <--- Future import

export const routes: Routes = [
  { path: 'act1', component: TemplateDemo },
  { path: 'act2', component: ReactiveDemo },
  { path: 'customize', component: TemplateDemo }, // Point this to your new file later
  { path: '', redirectTo: '/act1', pathMatch: 'full' }
];

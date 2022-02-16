import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';

const APP_ROUTING: Routes = [
  { path: 'cv', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CvComponent },
  { path: 'embaucher', component: EmbaucheComponent },
  { path: 'color', component: ColorComponent },
  { path: 'color/:default', component: ColorComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

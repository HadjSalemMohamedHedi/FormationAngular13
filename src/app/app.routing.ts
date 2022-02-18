import { Routes, RouterModule } from '@angular/router';
import { AddcvComponent } from './addcv/addcv.component';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv.component';
import { DeletecvComponent } from './deletecv/deletecv.component';
import { DetailComponent } from './detail/detail.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTING: Routes = [
  { path: '', component: CvComponent },

 {path:'cv',component:CvComponent,children:[
  { path: 'add', component: AddcvComponent },
  { path: 'delete/:id', component: DeletecvComponent },
    { path: ':id', component: DetailComponent },
  ]},

  { path: 'embaucher', component: EmbaucheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'color', component: ColorComponent },
  { path: 'color/:default', component: ColorComponent },
  {path:'**',component:ErrorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

import { Routes, RouterModule } from '@angular/router';
import { AddcvComponent } from './addcv/addcv.component';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv.component';
import { DeletecvComponent } from './deletecv/deletecv.component';
import { DetailComponent } from './detail/detail.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { LogOutGuard } from './guard/logout.guard';
import { UpdatecvComponent } from './updatecv/updatecv.component';

const APP_ROUTING: Routes = [
  { path: '', component: CvComponent },

 {path:'cv',component:CvComponent,children:[
  { path: 'add', component: AddcvComponent },
    { path: ':id', component: DetailComponent },
  ]},

  { path: 'embaucher', component: EmbaucheComponent },
  { path: 'login', component: LoginComponent ,canActivate:[LogOutGuard] },
  { path: 'color', component: ColorComponent },
  { path: 'color/:default', component: ColorComponent },
  { path: 'alldetails/:id', component: AlldetailsComponent },
  { path: 'update/:id', component: UpdatecvComponent },
  {path:'**',component:ErrorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

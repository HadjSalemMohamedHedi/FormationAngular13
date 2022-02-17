import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcvComponent } from './listcv/listcv.component';
import { ItemcvComponent } from './itemcv/itemcv.component';
import { DetailcvComponent } from './detailcv/detailcv.component';
import { CvComponent } from './cv/cv.component';
import { DefaultImagePipe } from './Pipes/default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ROUTING } from './app.routing';
import { ColorComponent } from './color/color.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { AddcvComponent } from './addcv/addcv.component';
import { DeletecvComponent } from './deletecv/deletecv.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcvComponent,
    ItemcvComponent,
    DetailcvComponent,
    CvComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    ColorComponent,
    HeaderComponent,
    DetailComponent,
    AddcvComponent,
    DeletecvComponent,
    ErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

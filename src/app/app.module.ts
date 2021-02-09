import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { FormsModule } from '@angular/forms';
import { LivresService } from './services/livres.service';
import { LivresModifComponent } from './livres-modif/livres-modif.component';
import { LivresNewComponent } from './livres-new/livres-new.component';
import { HomeComponent } from './home/home.component';
import { LivresListComponent } from './livres-list/livres-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    {
      path: 'livres',
      component:LivresListComponent
    }, 
    {
      path: 'new',
      component:LivresNewComponent
    },
    {
      path: 'modif/:id',
      component:LivresModifComponent
    },
    {
      path: '',
      component:HomeComponent
    },         
];

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    LivresModifComponent,
    LivresNewComponent,
    HomeComponent,
    LivresListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LivresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

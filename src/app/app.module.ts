import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeIdhComponent } from './home-idh/home-idh.component';
import { RecommendedActionsDialog } from './recommended-actions-dialog/recommended-actions-dialog.component';
import { IdhConfigResult } from './idh-config-result/idh-config-result.component';
import { ChartsModule } from 'ng2-charts';
 
import { IdhSearchComponent } from './idh-search/idh-search.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeIdhComponent,
    IdhConfigResult,
    IdhSearchComponent,
   
    RecommendedActionsDialog,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
   //InMemoryWebApiModule.forRoot(ReconciliationInMemDataService),
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeIdhComponent },
      { path: 'search', component: IdhSearchComponent },
      { path: 'result', component: IdhConfigResult },
    ]), BrowserAnimationsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

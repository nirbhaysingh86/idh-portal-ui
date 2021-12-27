import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeIdhComponent } from './home-idh/home-idh.component';
import { IdhFilterDialogComponenet } from './idh-filter-option-dialog/idh-filter-option-dialog.component';
import { IdhConfigResult } from './idh-config-result/idh-config-result.component';
import { IdhConfigDetailComponent } from './idh-config-detail/idh-config-detail.component';
import { IdhConfigEditComponent } from './idh-config-edit/idh-config-edit.component';
import { PromoteDialogSuccessComponenet } from './promote-dialog-success/promote-dialog-success.component';
import { PromoteDialogComponenet } from './promote-dialog/promote-dialog.component';
import { ChartsModule } from 'ng2-charts';
import { IdhSearchComponent } from './idh-search/idh-search.component';
import { MultiselectAutocompleteComponent } from './shared/multiselect-autocomplete/multiselect-autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeIdhComponent,
    IdhConfigResult,
    IdhSearchComponent,
    IdhConfigDetailComponent,
    IdhFilterDialogComponenet,
    PromoteDialogComponenet,
    MultiselectAutocompleteComponent,
    IdhConfigEditComponent,
    PromoteDialogSuccessComponenet
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
      { path: 'configsearch', component: IdhSearchComponent },
      { path: 'configresult', component: IdhConfigResult },
      { path: 'configdetail', component: IdhConfigDetailComponent },
      { path: 'configedit', component: IdhConfigEditComponent },
    ]), BrowserAnimationsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

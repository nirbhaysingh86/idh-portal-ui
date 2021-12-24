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
import { LocationComponent } from './location/location.component';
import { DepartmentComponent } from './department/department.component';
import { RecommendedActionsDialog } from './recommended-actions-dialog/recommended-actions-dialog.component';
import { ItemsComponent } from './items/items.component';
import { DiscrepancyLocationDetail } from './discrepancy-by-location-detail/discrepancy-location-detail.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { IdhSearchComponent } from './idh-search/idh-search.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeIdhComponent,
    LocationComponent,
    DepartmentComponent,
    ItemsComponent,
    DiscrepancyLocationDetail,
    LineChartComponent,
    DoughnutChartComponent,
    IdhSearchComponent,
    PieChartComponent,
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
    ]), BrowserAnimationsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

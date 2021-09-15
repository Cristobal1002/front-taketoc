import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedService} from './shared.service';
import { NgbdSortableHeader } from './sortable.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from "ngx-spinner";
import { LightboxModule } from 'ngx-lightbox';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

import { MetismenuAngularModule } from "@metismenu/angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';





import { MatListModule } from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';



/* #########################  SITE PAGES COMPONENT ###################*/


import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { LoadingComponent } from './elements/loading/loading.component';
import { NavHeaderComponent } from './elements/nav-header/nav-header.component';
import { NavigationComponent } from './elements/navigation/navigation.component';


import { UserStatisticsComponent } from './elements/profile/user-statistics/user-statistics.component';
import { InterestComponent } from './elements/profile/interest/interest.component';
import { LatestNewsComponent } from './elements/profile/latest-news/latest-news.component';
import { HighlightsComponent } from './elements/profile/highlights/highlights.component';

import { Timeline1Component } from './elements/widget/timeline1/timeline1.component';
import { Timeline2Component } from './elements/widget/timeline2/timeline2.component';
import { Notifications1Component } from './elements/widget/notifications1/notifications1.component';
import { Notifications2Component } from './elements/widget/notifications2/notifications2.component';
import { MessageComponent } from './elements/widget/message/message.component';
import { TodolistComponent } from './elements/widget/todolist/todolist.component';
import { PieChart1Component } from './elements/widget/charts/pie-chart1/pie-chart1.component';
import { BarChart1Component } from './elements/widget/charts/bar-chart1/bar-chart1.component';
import { BarChart2Component } from './elements/widget/charts/bar-chart2/bar-chart2.component';
import { AreaChart1Component } from './elements/widget/charts/area-chart1/area-chart1.component';
import { VisitorActivityComponent } from './elements/widget/visitor-activity/visitor-activity.component';
import { VisitorActivityDayComponent } from './elements/widget/visitor-activity/visitor-activity-day/visitor-activity-day.component';
import { VisitorActivityMonthComponent } from './elements/widget/visitor-activity/visitor-activity-month/visitor-activity-month.component';
import { VisitorActivityYearComponent } from './elements/widget/visitor-activity/visitor-activity-year/visitor-activity-year.component';
import { ChartjsActiveUsersComponent } from './elements/widget/charts/chartjs-active-users/chartjs-active-users.component';
import { BloodPressureComponent } from './elements/widget/charts/blood-pressure/blood-pressure.component';
import { HeartRateComponent } from './elements/widget/charts/heart-rate/heart-rate.component';
import { GlucoseRateComponent } from './elements/widget/charts/glucose-rate/glucose-rate.component';
import { ClolesterolComponent } from './elements/widget/charts/clolesterol/clolesterol.component';
import { BarChart3Component } from './elements/widget/charts/bar-chart3/bar-chart3.component';
import { AreaChart2Component } from './elements/widget/charts/area-chart2/area-chart2.component';
import { BarChart4Component } from './elements/widget/charts/bar-chart4/bar-chart4.component';
import { BarChart5Component } from './elements/widget/charts/bar-chart5/bar-chart5.component';
import { AreaChart3Component } from './elements/widget/charts/area-chart3/area-chart3.component';
import { BarChart6Component } from './elements/widget/charts/bar-chart6/bar-chart6.component';
import { MarketNowComponent } from './elements/widget/charts/market-now/market-now.component';
import { SalesAnalysisComponent } from './elements/widget/charts/sales-analysis/sales-analysis.component';
import { TopProducts1Component } from './elements/widget/charts/top-products1/top-products1.component';
import { TopProducts2Component } from './elements/widget/charts/top-products2/top-products2.component';
import { WeeklySalesComponent } from './elements/widget/charts/weekly-sales/weekly-sales.component';
import { SalesStatusComponent } from './elements/widget/charts/sales-status/sales-status.component';
import { AllSales1Component } from './elements/widget/charts/all-sales1/all-sales1.component';
import { AllSales2Component } from './elements/widget/charts/all-sales2/all-sales2.component';



import { GraphSalesRevenueComponent } from './elements/dashboard/graph-sales-revenue/graph-sales-revenue.component';
import { GraphLatestSalesComponent } from './elements/dashboard/graph-latest-sales/graph-latest-sales.component';
import { LatestSalesComponent } from './elements/dashboard/latest-sales/latest-sales.component';
import { GraphTicketSoldComponent } from './elements/dashboard/graph-ticket-sold/graph-ticket-sold.component';
import { MonthlyComponent } from './elements/dashboard/graph-sales-revenue/monthly/monthly.component';
import { WeeklyComponent } from './elements/dashboard/graph-sales-revenue/weekly/weekly.component';
import { TodayComponent } from './elements/dashboard/graph-sales-revenue/today/today.component';
import { GraphIncrementComponent } from './elements/dashboard/graph-ticket-sold/graph-increment/graph-increment.component';
import { TrendingItemsComponent } from './elements/analytics/trending-items/trending-items.component';
import { GraphSalesComparisonComponent } from './elements/analytics/graph-sales-comparison/graph-sales-comparison.component';
import { GraphRevenueComponent } from './elements/analytics/graph-revenue/graph-revenue.component';
import { GraphTicketOrderedComponent } from './elements/analytics/graph-ticket-ordered/graph-ticket-ordered.component';
import { GraphRevenue2Component } from './elements/analytics/graph-revenue2/graph-revenue2.component';
import { GraphPieComponent } from './elements/analytics/graph-pie/graph-pie.component';
import { GraphSalesSummaryComponent } from './elements/analytics/graph-sales-summary/graph-sales-summary.component';

import { GraphAvailableTicketComponent } from './elements/events/graph-available-ticket/graph-available-ticket.component';
import { GraphTicketRefundedComponent } from './elements/analytics/graph-ticket-refunded/graph-ticket-refunded.component';
import { RecentSalesComponent } from './elements/events/recent-sales/recent-sales.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    NavHeaderComponent,
    NavigationComponent,
    
    
    UserStatisticsComponent,
    InterestComponent,
    LatestNewsComponent,
    HighlightsComponent,
    
    
    
    
    NavHeaderComponent,
    
    NgbdSortableHeader,

    Timeline1Component,
    Timeline2Component,
    Notifications1Component,
    Notifications2Component,
    MessageComponent,
    TodolistComponent,
    PieChart1Component,
    BarChart1Component,
    BarChart2Component,
    AreaChart1Component,
    VisitorActivityComponent,
    VisitorActivityDayComponent,
    VisitorActivityMonthComponent,
    VisitorActivityYearComponent,
    ChartjsActiveUsersComponent,
    BloodPressureComponent,
    HeartRateComponent,
    GlucoseRateComponent,
    ClolesterolComponent,
    BarChart3Component,
    AreaChart2Component,
    BarChart4Component,
    BarChart5Component,
    AreaChart3Component,
    BarChart6Component,
    MarketNowComponent,
    SalesAnalysisComponent,
    TopProducts1Component,
    TopProducts2Component,
    WeeklySalesComponent,
    SalesStatusComponent,
    AllSales1Component,
    AllSales2Component,
    
    GraphSalesRevenueComponent,
    GraphLatestSalesComponent,
    LatestSalesComponent,
    GraphTicketSoldComponent,
    MonthlyComponent,
    WeeklyComponent,
    TodayComponent,
    GraphIncrementComponent,
    TrendingItemsComponent,
    GraphSalesComparisonComponent,
    GraphRevenueComponent,
    GraphTicketOrderedComponent,
    GraphRevenue2Component,
    GraphPieComponent,
    GraphSalesSummaryComponent,
    GraphAvailableTicketComponent,
    GraphTicketRefundedComponent,
    RecentSalesComponent,
    PagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,
    
    
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlansComponent } from './plans/plans.component';
import { RewiewersComponent } from './rewiewers/rewiewers.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { ServersComponent } from './servers/servers.component';
import { DownloadComponent } from './download/download.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { SupportComponent } from './support/support.component';
import { ErrorComponent } from './error/error.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PricingComponent,
    FeaturesComponent,
    ServersComponent,
    DownloadComponent,
    BlogComponent,
    LoginComponent,
    OrderComponent,
    PaymentComponent,
    SupportComponent,
    ErrorComponent,
    LostPasswordComponent,
    PlansComponent,
    RewiewersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatTooltipModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatSliderModule,
    MatPaginatorModule,
    MatMenuModule,

    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'pricing', component: PricingComponent },
        { path: 'features', component: FeaturesComponent },
        { path: 'servers', component: ServersComponent },
        { path: 'download', component: DownloadComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'support', component: SupportComponent },
        { path: 'login', component: LoginComponent },
        { path: 'lost-password', component: LostPasswordComponent },
        { path: 'order', component: OrderComponent },
        { path: 'order/payment', component: PaymentComponent },
        { path: '**', component: ErrorComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

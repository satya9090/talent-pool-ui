import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthInterceptor } from './shared/auth-interceptor.service';
import { ErrorInterceptor } from './shared/error-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppStoreModule } from './store/AppStore.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgbModule,
		FontAwesomeModule,
		AppRoutingModule,
		AppStoreModule,
		StoreDevtoolsModule.instrument({ logOnly: true })
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}

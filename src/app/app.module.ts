import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SpyTestComponent } from './spy-test/spy-test.component';
import { EventEmitterTestComponent } from './event-emitter-test/event-emitter-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EndpointComponent,
    LoginComponent,
    SpyTestComponent,
    EventEmitterTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

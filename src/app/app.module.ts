import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

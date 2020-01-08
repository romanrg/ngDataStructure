import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StackComponent } from './stack/stack.component';
import { DequeComponent } from './deque/deque.component';
import { QeueComponent } from './qeue/qeue.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { CardComponent } from './card/card.component';
import { BackgroundPipe } from './pipes/background.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    StackComponent,
    DequeComponent,
    QeueComponent,
    InputComponent,
    OutputComponent,
    CardComponent,
    BackgroundPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

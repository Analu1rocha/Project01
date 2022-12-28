

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { IconsModule } from './components/icons/icons.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DevolutivaComponent } from './components/pages/devolutiva/devolutiva.component';
import { SearchComponent } from './components/search/search.component';
import { DadosDaPropostaComponent } from './components/pages/dados-da-proposta/dados-da-proposta.component';
import { FooterComponent } from './components/footer/footer.component';
import { DevolutivaCnpjComponent } from './components/pages/devolutiva-cnpj/devolutiva-cnpj.component';
import { RotasComponent } from './components/rotas/rotas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DevolutivaComponent,
    DadosDaPropostaComponent,
    FooterComponent,
    DevolutivaCnpjComponent,
    RotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FontAwesomeModule,
    ClipboardModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

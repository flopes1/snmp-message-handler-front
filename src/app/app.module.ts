import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from '../../node_modules/ng2-table';

import { AppComponent } from './app.component';

import { DefaultHttp } from './services/http.service';
import { SnmpMessageService } from './services/snmp-message.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, Ng2TableModule
  ],
  providers: [DefaultHttp, SnmpMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

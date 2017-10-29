import { Component, OnInit } from '@angular/core';

import { SnmpMessage } from './model/snmp-message';
import { SnmpMessageService } from './services/snmp-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projeto Gerência de Redes';
  showGisele = true;
  showMain = false;
  showTableResults = false;
  columns: Array<any> = [
    {title: 'Target IP', name: 'targetIP'}, {title: 'Object Id', name: 'objectId'}, {title: 'Response', name: 'response'},
  ];
  private message: SnmpMessage;
  private snmpMessageHistory: any;

  constructor(
    private snmpMessageService: SnmpMessageService
  ) {

  }

  ngOnInit() {
    this.message = new SnmpMessage();
  }

  showMainExecute() {
    this.showGisele = false;
    this.showMain = true;
  }

  showResults() {
    this.showMain = false;
    this.snmpMessageService.getResults().then(response => {
      this.snmpMessageHistory = response.json();
      this.showTableResults = true;
    }).catch(response => {
      console.log(response);
    });
  }

  clear() {
    this.showTableResults = false;
    this.snmpMessageHistory = null;
    this.showMain = true;
  }

  sendMessage() {
    this.snmpMessageService.sendMessage(this.message).then(response => {
      this.message = new SnmpMessage();
    }).catch(response => {
      console.log(response);
    });
  }

}

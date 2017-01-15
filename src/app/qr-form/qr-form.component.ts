import {Component, OnInit} from '@angular/core';

declare var QRCode: any;

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent implements OnInit {
  qrEl = new QRCode(document.getElementById("qrcode"), {
    width: 400,
    height: 400
  });

  season_1: Season = {label: '1 - Jan-Mar'};

  default_model = {
    fistName: '',
    lastName: '',
    season: this.season_1
  }

  seasons: Season[] = [
    {label: '1 - Jan-Mar'},
    {label: '2 - Apr-Jun'}
  ];

  model = Object.assign({}, this.default_model);

  ngOnInit() {
  }

  generate() {
    this.qrEl.makeCode(this.model.fistName + this.model.lastName);


    console.log("submit")
  }

  clearForm() {
    Object.assign(this.model, this.default_model);
  }
}
export class Season {
  label: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

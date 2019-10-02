import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {Currencies} from 'currencies';
import {config} from 'cryptocompare';

@inject(HttpClient)
export class NoSelection {
  constructor(http) {
    this.http = http;
    this.minutes = 0;
    this.price = '-';
    this.marketCap = '-';
    this.priceInfo = false;
    this.currencies = Currencies;
    this.selectedCurrencyId = null;
    this.config = config;
  }

  getInfo() {
    if (this.selectedCurrencyId !== null) {
      this.http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + this.selectedCurrencyId.id + '&tsyms=USD&api_key=' + this.config.api_key)
        .then(price => {
          this.response = JSON.parse(price.response);
          this.price = this.response.DISPLAY[this.selectedCurrencyId.id].USD.PRICE;
          this.marketCap = this.response.DISPLAY[this.selectedCurrencyId.id].USD.MKTCAP;
          this.priceInfo = true;
        });
      if (this.minutes !== 0) {
        this.setUpdateTime();
      }
    } else {
      this.priceInfo = false;
    }
  }

  updateTime() {
    this.clearInterval();
    let minutes = this.minutes;
    if (typeof(minutes) !== 'number') {
      this.minutes = 0;
    } else {
      let number = parseInt(minutes, 10);
      this.minutes = (number < 1) ? 0 : number;
    }

    if (this.minutes > 0 && this.selectedCurrencyId !== null) {
      this.setUpdateTime();
    } else {
      this.clearInterval();
    }
  }

  clearInterval() {
    window.clearInterval(this.queryApi);
  }

  setUpdateTime() {
    if (this.selectedCurrencyId !== null) {
      this.queryApi = window.setInterval(() => {
        this.getInfo(this.selectedCurrencyId);
      }, this.minutes * 60000);
    }
  }
}

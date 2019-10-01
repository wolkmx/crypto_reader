import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class NoSelection {
  constructor(http) {
    this.http = http;
    this.minutes = 0;
    this.price = '-';
    this.marketCap = '-';
  }

  getInfo() {
    if (this.selectedCurrencyId !== null) {
      this.http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + this.selectedCurrencyId.id + '&tsyms=USD&api_key=d8e8cdf80c624fc67d1984a171499e2b178b0890fee78acb29da167c84d50efd')
        .then(price => {
          this.response = JSON.parse(price.response);
          this.price = this.response.DISPLAY[this.selectedCurrencyId.id].USD.PRICE;
          this.marketCap = this.response.DISPLAY[this.selectedCurrencyId.id].USD.MKTCAP;
        });
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
    this.queryApi = window.setInterval(() => {
      this.getInfo(this.selectedCurrencyId);
    }, this.minutes * 60000);
  }

  currencies = [
    { id: 'BTC', name: 'Bitcoin' },
    { id: 'ETH', name: 'Ethereum' },
    { id: 'XRP', name: 'XRP' },
    { id: 'LTC', name: 'Litecoin' },
    { id: 'BCH', name: 'Bitcoin Cash' }
  ];

  selectedCurrencyId = null;
}

import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class NoSelection {
  constructor(http) {
    this.http = http;
  }

  DropdownChanged(currency) {
    this.http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + currency.id + '&tsyms=USD&api_key=d8e8cdf80c624fc67d1984a171499e2b178b0890fee78acb29da167c84d50efd')
      .then(price => {
        this.response = JSON.parse(price.response);
        this.price = this.response.DISPLAY[currency.id].USD.PRICE;
        this.marketCap = this.response.DISPLAY[currency.id].USD.MKTCAP;
      });
  }

  price = 0;
//window.setTimeout
  currencies = [
    { id: 'BTC', name: 'Bitcoin' },
    { id: 'ETH', name: 'Ethereum' },
    { id: 'XRP', name: 'XRP' },
    { id: 'LTC', name: 'Litecoin' },
    { id: 'BCH', name: 'Bitcoin Cash' }
  ];

  selectedCurrencyId = null;
}

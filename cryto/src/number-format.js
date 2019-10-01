import numeral from 'numeral';

export class NumberFormatValueConverter {
  toView(value) {
    return value;
  }

  fromView(value) {
    let number = numeral(value).value();
    return number;
  }
}

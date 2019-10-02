import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Real Time Values';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('no-selection'),   title: 'CryptoV' }
    ]);

    this.router = router;
  }
}

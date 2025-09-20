import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Home } from './app/home/home';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';

bootstrapApplication(Home, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(App, {
  providers: [
    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode() }),
  ],
});
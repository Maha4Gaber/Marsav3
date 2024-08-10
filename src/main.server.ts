export { AppServerModule as default } from './app/app.module.server';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppServerModule } from './app/app.server.module';
import { getWindow } from 'ssr-window';

if (environment.production) {
  enableProdMode();
}

// Declare the `window` variable with the correct type
declare var window: Window & typeof globalThis;

// Create a shim for the `window` object
window = getWindow();

export { AppServerModule };
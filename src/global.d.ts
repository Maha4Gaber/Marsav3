// global.d.ts
import { getWindow } from 'ssr-window';

declare global {
  interface Global extends Window, typeof globalThis {}
}

// main.server.ts
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppServerModule } from './app/app.server.module';

if (environment.production) {
  enableProdMode();
}

// Create a shim for the `global` object
global = Object.assign(getWindow(), global);

export { AppServerModule };
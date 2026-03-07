import { 
  ApplicationConfig, 
  provideAppInitializer, 
  provideBrowserGlobalErrorListeners, 
  provideZonelessChangeDetection 
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => {
      console.log('hello app from kareem profile');
    }),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};

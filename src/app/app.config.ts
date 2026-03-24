import { 
  ApplicationConfig, 
  provideAppInitializer, 
  provideBrowserGlobalErrorListeners, 
  provideEnvironmentInitializer, 
  provideZonelessChangeDetection 
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironmentInitializer(()  => {
      console.log('provideEnvironmentInitializer(), from kareem profile');
    }),
    provideAppInitializer(() => {
      console.log('provideAppInitializer(), from kareem profile');
    }),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};

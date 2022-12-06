import { AppConfig } from './appconfig.interface';
import { InjectionToken } from "@angular/core";
import { environment } from './../environments/environments';

export const API_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const API_CONFIG = {
    apiEndPoint: environment.apiEndPoint
};

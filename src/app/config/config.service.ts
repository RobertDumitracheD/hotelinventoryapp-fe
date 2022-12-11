import {Inject, Injectable} from '@angular/core';
import {RouteConfigtoken} from "./routeconfig.service";
import {RouteConfig} from "./routeconfig";

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigtoken) private config: RouteConfig) {
    console.log("ConfigService initialized");
    console.log(config.title);
  }
}

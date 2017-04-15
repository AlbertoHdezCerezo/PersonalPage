import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ExperienceParser } from './ExperienceParser';

/** [Service] Loads configuration from config folder, allowing components to access these values */
@Injectable()
export class ConfigBlock {

    public config: Object = null;
    public env:    Object = null;

    constructor(private http: Http, private experienceParser: ExperienceParser) {}

    /**
     *  Provides configuration key values
     */
    public getConfig(key: any) {
        if (this.config && this.config[key]) return this.config[key];
        return null;
    }

    /**
     *  Provides current execution environment (for testing reasons definition
     *  differs from getConfig)
     */
    public getEnv(key: any) {
        return this.env[key];
    }

    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('config/env.json').map( res => res.json() ).catch((error: any):any => {
                resolve(true);
                return Observable.throw(error.json().error || 'Server error');
            }).subscribe( (envResponse: any) => {
                this.env = envResponse;
                let request:any = null;

                request = this.http.get(envResponse.env);

                if (request) {
                    request
                        .map( res => res.json() )
                        .catch((error: any) => {
                            resolve(error);
                            return Observable.throw(error.json().error || 'Server error');
                        })
                        .subscribe((responseData) => {
                            if (responseData.experience) responseData.experience = this.experienceParser.parseExperiencePlaces(responseData.experience);
                            this.config = responseData;
                            resolve(true);
                        });
                } else {
                    console.error('Env config file "env.json" is not valid');
                    resolve(true);
                }
            });

        });
    }
}

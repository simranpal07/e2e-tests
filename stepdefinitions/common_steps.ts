import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { RestClient, IRestResponse, IRequestOptions } from "typed-rest-client/RestClient"
import { IHeaders } from "typed-rest-client/Interfaces";

import { config } from "../config/config";
import { SamplePo } from "../pages/samplePage";

export interface HttpData {
    url: string;
    data: any;
    json: any;
    args?: any
}

export let options: IRequestOptions;
const samplePo: SamplePo = new SamplePo();

Given(/^generate oauth token$/, async () => {
    let encodedUri = encodeURI(`${config.tokenUri}client_id=${config.clientId}&client_secret=${config.clientSecret}&grant_type=client_credentials`)
    let headers: IHeaders = {
        'cache-control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    let options: IRequestOptions = {
        additionalHeaders: headers
    }
    let rest: RestClient = new RestClient('rest');
    let response: IRestResponse<object> = await rest.create<HttpData>(encodedUri, null, options)
    expect(response.statusCode).to.equal(200);
    global['token'] = response.result['access_token'];
});

Given(/^check oauth token is available$/, async () => {
    if (!global['token']) {
        let encodedUri = encodeURI(`${config.tokenUri}client_id=${config.clientId}&client_secret=${config.clientSecret}&grant_type=client_credentials`)
        let headers: IHeaders = {
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        let options: IRequestOptions = {
            additionalHeaders: headers
        }
        let rest: RestClient = new RestClient('create Token');
        let response: IRestResponse<object> = await rest.create<HttpData>(encodedUri, null, options)
        expect(response.statusCode).to.equal(200);
        global['token'] = response.result['access_token'];
    }
    const headers: IHeaders = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + global['token']
    };
     options = {
        additionalHeaders: headers
    }
});

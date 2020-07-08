import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { RestClient, IRestResponse, IRequestOptions } from "typed-rest-client/RestClient"

import { config } from "../config/config";

import { HttpData, options }from "./common_steps"


Then(/^I hit get endpoint$/, async () => {
    let rest: RestClient = new RestClient('Get endpoint');
    let response: IRestResponse<object> = await rest.get<HttpData>(config.getEndPointUri, options);
    expect(response.statusCode).to.equal(200);
});

Then(/^I hit the post endpoint verify the response$/, async () => {
    let body:any = {
        "body": "pass the payload"
    }
    const rest: RestClient = new RestClient('Post Request');
    const response:IRestResponse<object> = await rest.create<HttpData>(config.postEndPointUri, body, options);
    expect(response.statusCode).to.equal(200);
    // write logic to match the response
});

Then(/^I hit the put endpoint verify the response$/, async () => {
    let body:any = {
        "body": "pass the payload"
    }
    const rest: RestClient = new RestClient('Post Request');
    const response:IRestResponse<object> = await rest.replace<HttpData>(config.putEndPointUri, body, options);
    expect(response.statusCode).to.equal(200);
    // write logic to match the response
});


import api from './api';
import Network from '../constants/network';
import Helper from '../../specs_support/helper';

describe('api', () => {
  const jwt = 'jwt_token';
  const apiUrl = 'http://www.example.com';
  const csrf = 'csrf_value';
  const params = {};
  const body = {};
  const headers = {};

  Helper.stubAjax();

  it('calls Get', () => {
    const url = '/api/test/1';
    api.get(url, apiUrl, jwt, csrf, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(Helper.testPayload());
    });
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toEqual(`${apiUrl}${url}`);
    expect(request.method.toLowerCase()).toEqual(Network.GET);
    expect(request.requestHeaders.Accept).toEqual('application/json');
    expect(request.requestHeaders.Authorization).toEqual(`Bearer ${jwt}`);
    expect(request.requestHeaders['X-CSRF-Token']).toEqual(csrf);
  });

  it('calls Get without a jwt', () => {
    const url = '/api/test/2';
    api.get(url, apiUrl, null, csrf, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toEqual(`${apiUrl}${url}`);
    expect(request.requestHeaders.Authorization).toBeUndefined();
    expect(request.requestHeaders['X-CSRF-Token']).toEqual(csrf);
  });

  it('calls Get without a csrf', () => {
    const url = '/api/test/3';
    api.get(url, apiUrl, jwt, null, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toEqual(`${apiUrl}${url}`);
    expect(request.requestHeaders.Authorization).toEqual(`Bearer ${jwt}`);
    expect(request.requestHeaders['X-CSRF-Token']).toBeUndefined();
  });

  it('calls Get with a full url', () => {
    const url = 'http://www.example.com/api/test/full';
    api.get(url, apiUrl, jwt, null, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toEqual(url);
  });

  it('calls Post', () => {
    const url = '/api/test';
    api.post(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });
  });

  it('calls Post with a full url', () => {
    const url = 'http://www.example.com/api/test/full';
    api.post(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toEqual(url);
    expect(request.method.toLowerCase()).toEqual(Network.POST);
  });

  it('calls Put', () => {
    const url = '/api/test/4';
    api.put(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.statusCode).toBe(200);
      const request = result.req;
      expect(request.method.toLowerCase()).toEqual(Network.PUT);
    });
  });

  it('calls Delete', () => {
    const url = '/api/test/5';
    api.del(url, apiUrl, jwt, csrf, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toEqual(`${apiUrl}${url}`);
    expect(request.method.toLowerCase()).toEqual(Network.DEL);
  });

  it('calls execRequest directly', () => {
    const url = '/api/test/6';
    api.execRequest(Network.GET, url, apiUrl, null, null).then((result) => {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(Helper.testPayload());
    });
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toEqual(`${apiUrl}${url}`);
    expect(request.method.toLowerCase()).toEqual(Network.GET);
    expect(request.requestHeaders.Accept).toEqual('application/json');
    expect(request.requestHeaders.Authorization).toBeUndefined();
    expect(request.requestHeaders['X-CSRF-Token']).toBeUndefined();
  });

  describe('Pending Requests', () => {
    const url = 'http://www.example.com';
    const requestMethod = () => {};

    it('Reuses an existing GET request', () => {
      const requestType = Network.GET;
      const request1 = api.wrapRequest(url, requestMethod, requestType);
      const request2 = api.wrapRequest(url, requestMethod, requestType);
      expect(request1).toBe(request2);
    });

    it('Does not reuse Posts requests', () => {
      const requestType = Network.POST;
      const request1 = api.wrapRequest(url, requestMethod, requestType);
      const request2 = api.wrapRequest(url, requestMethod, requestType);
      expect(request1).not.toBe(request2);
    });

    it('Does not reuse Put requests', () => {
      const requestType = Network.PUT;
      const request1 = api.wrapRequest(url, requestMethod, requestType);
      const request2 = api.wrapRequest(url, requestMethod, requestType);
      expect(request1).not.toBe(request2);
    });

    it('Does not reuse Del requests', () => {
      const requestType = Network.DELETE;
      const request1 = api.wrapRequest(url, requestMethod, requestType);
      const request2 = api.wrapRequest(url, requestMethod, requestType);
      expect(request1).not.toBe(request2);
    });
  });
});

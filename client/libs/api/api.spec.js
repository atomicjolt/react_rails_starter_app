import nock    from 'nock';
import api     from './api';
import Network from '../constants/network';
import Helper  from '../../specs_support/helper';

describe('api', () => {
  const jwt = 'jwt_token';
  const apiUrl = 'http://www.example.com';
  const csrf = 'csrf_value';
  const params = {};
  const body = {};
  const headers = {};
  let expectedHeaders;

  beforeEach(() => {
    expectedHeaders = {
      Accept: 'application/json',
    };
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('calls Get', () => {
    const url = '/api/test/1';
    expectedHeaders.Authorization = `Bearer ${jwt}`;
    expectedHeaders['X-CSRF-Token'] = csrf;
    const nockRequest = Helper.mockRequest('get', apiUrl, url, expectedHeaders);

    api.get(url, apiUrl, jwt, csrf, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(Helper.testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Get without a jwt', () => {
    const url = '/api/test/2';
    expectedHeaders['X-CSRF-Token'] = csrf;
    const nockRequest = Helper.mockRequest('get', apiUrl, url, expectedHeaders);

    api.get(url, apiUrl, null, csrf, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Get without a csrf', () => {
    const url = '/api/test/3';
    expectedHeaders.Authorization = `Bearer ${jwt}`;
    const nockRequest = Helper.mockRequest('get', apiUrl, url, expectedHeaders);

    api.get(url, apiUrl, jwt, null, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Get with a full url', () => {
    const url = '/api/test/full';
    const nockRequest = Helper.mockRequest('get', apiUrl, url, expectedHeaders);

    api.get(`${apiUrl}${url}`, apiUrl, jwt, null, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Post', () => {
    const url = '/api/test';
    const nockRequest = Helper.mockRequest('post', apiUrl, url, expectedHeaders);

    api.post(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Post with a full url', () => {
    const url = '/api/test/full';
    const nockRequest = Helper.mockRequest('post', apiUrl, url, expectedHeaders);

    api.post(`${apiUrl}${url}`, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Put', () => {
    const url = '/api/test/4';
    const nockRequest = Helper.mockRequest('put', apiUrl, url, expectedHeaders);

    api.put(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.statusCode).toBe(200);
      const request = result.req;
      expect(request.method.toLowerCase()).toEqual(Network.PUT);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls Delete', () => {
    const url = '/api/test/5';
    const nockRequest = Helper.mockRequest('delete', apiUrl, url, expectedHeaders);

    api.del(url, apiUrl, jwt, csrf, params, headers).then((result) => {
      expect(result.statusCode).toBe(200);
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls execRequest directly', () => {
    const url = '/api/test/6';
    const nockRequest = Helper.mockRequest('get', apiUrl, url, expectedHeaders);

    api.execRequest(Network.GET, url, apiUrl, null, null).then((result) => {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(Helper.testPayload());
    });

    expect(nockRequest.isDone()).toBeTruthy();
  });

  it('calls execRequest with optional timeout', () => {
    const url = '/api/test/7';
    const timeout = 1000;
    const nockRequest = Helper.mockRequest('get', apiUrl, url, expectedHeaders);

    api.execRequest(Network.GET, url, apiUrl, null, null, {}, {}, {}, timeout).then((result) => {
      expect(result.statusCode).toBe(200);
      expect(result.text).toEqual(Helper.testPayload());
    });
    expect(nockRequest.isDone()).toBeTruthy();
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

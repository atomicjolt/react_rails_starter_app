import superAgentMock from 'superagent-mock';
import Request from 'superagent';
import api     from './api';
import Network from '../constants/network';
import config from './superagent-mock-config';
import Helper from '../../specs_support/helper';

describe('api', () => {
  let superagentMock;
  const url = '/api/test/12';
  const jwt = 'jwt_token';
  const apiUrl = 'http://www.example.com';
  const csrf = 'csrf_value';
  const params = {};
  const body = {};
  const headers = {};

  beforeEach(() => {
    superagentMock = superAgentMock(Request, config);
  });

  afterEach(() => {
    superagentMock.unset();
  });

  it('calls Get', () => {
    expect.assertions(3);
    api.get(
      url,
      apiUrl,
      jwt,
      csrf,
      params,
      headers
    ).then((data) => {
      expect(data.body.status).toBe(200);
      expect(data.body.contentType).toContain('application/json');
      expect(data.body.responseText).toContain('Starter App');
    });
  });

  it('calls Get without a jwt', () => {
    api.get(
      url,
      apiUrl,
      null,
      csrf,
      params,
      headers
    ).then(data => expect(data.body.statusText).toContain('Unauthorized'));
  });

  it('calls Get without a csrf', () => {
    api.get(
      url,
      apiUrl,
      jwt,
      null,
      params,
      headers
    ).then(result =>
      expect(result.body.status).toBe(401));
  });

  it('calls Get with a full url', () => {
    const url = 'http://www.example.com/api/test/full';
    api.get(url, apiUrl, jwt, csrf, params, headers).then(data =>
      expect(data.body.status).toBe(200));
  });

  it('calls Post', () => {
    const url = '/api/test';
    api.post(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.code).toBe(201);
    });
  });

  it('calls Post with a full url', () => {
    const url = 'http://www.example.com/api/test/full';
    api.post(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.code).toBe(201);
    });
  });

  it('calls Put', () => {
    api.put(url, apiUrl, jwt, csrf, params, body, headers).then((result) => {
      expect(result.code).toBe(202);
    });
  });

  it('calls Delete', () => {
    api.del(url, apiUrl, jwt, csrf, params, headers).then((result) => {
      expect(result.code).toBe(204);
    });
  });

  it('calls execRequest directly', () => {
    api.execRequest(Network.GET, url, apiUrl, jwt, csrf, params, headers).then((result) => {
      expect(result.body.status).toBe(200);
      expect(result.body.responseText).toEqual(Helper.testPayload());
    });
  });

  it('calls execRequest directly', () => {
    api.execRequest(Network.GET, url, apiUrl, null, null).then((data) => {
      expect(data.body.status).toBe(401);
      expect(data.body.responseText).toBeUndefined();
    });
  });

  it('calls execRequest with optional timeout', () => {
    const timeout = 1000;
    api.execRequest(Network.GET, url, apiUrl, jwt, csrf, {}, {}, {}, timeout).then((result) => {
      expect(result.body.status).toBe(200);
      expect(result.body.responseText).toEqual(Helper.testPayload());
    });
  });

  describe('makeUrl', () => {
    it('adds on the api url', () => {
      const result = api.makeUrl('/api/stuff', 'http://www.example.com');
      expect(result).toBe('http://www.example.com/api/stuff');
    });
    it('does not add an extra slash on the api url', () => {
      const result = api.makeUrl('/api/stuff', 'http://www.example.com/');
      expect(result).toBe('http://www.example.com/api/stuff');
    });
    it('adds on the api url even when the query has http', () => {
      const result = api.makeUrl('/api/stuff?return=https://www.example.com/return', 'http://www.example.com/');
      expect(result).toBe('http://www.example.com/api/stuff?return=https://www.example.com/return');
    });
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

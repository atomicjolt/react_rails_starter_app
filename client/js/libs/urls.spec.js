"use strict";

import { getNextUrl, parseParams }  from './urls';

describe('getNextUrl', ()=>{
  it('gets the next url', ()=>{
    const linkHeader = `<https://next-courses.instructure.com/api/v1/courses.json?opaqueA>; rel='current',<https://next-courses.instructure.com/api/v1/courses.json?opaqueB>; rel="next",<https://next-courses.instructure.com/api/v1/courses.json?opaqueC>; rel=first",<https://next-courses.instructure.com/api/v1/courses.json?opaqueD>; rel="last"`;
    const nextUrl = getNextUrl(linkHeader);
    expect(nextUrl).toContain('next-courses.instructure.com/api/v1/courses.json?opaqueB');
  });
});

describe('parseParams', ()=>{
  it('parses params from the given url into an object', ()=>{
    var nextUrl = "https://atomicjolt.instructure.com/api/v1/courses/244/assignments?page=2&per_page=10";
    const params = parseParams(nextUrl);
    expect(params).toEqual({page: '2', per_page: '10'});
  });
  it('has not params to parse', ()=>{
    var nextUrl = "https://atomicjolt.instructure.com/api/v1/courses/244/assignments";
    const params = parseParams(nextUrl);
    expect(params).toEqual(undefined);
  });
});
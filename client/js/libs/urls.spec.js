"use strict";

import getNextUrl               from './urls';


describe('URLs', ()=>{
var headers;

  beforeEach(()=>{
   headers = `<https://next-courses.instructure.com/api/v1/courses.json?opaqueA>; rel='current',<https://next-courses.instructure.com/api/v1/courses.json?opaqueB>; rel="next",<https://next-courses.instructure.com/api/v1/courses.json?opaqueC>; rel=first",<https://next-courses.instructure.com/api/v1/courses.json?opaqueD>; rel="last"`
  });

  it('gets the next url', ()=>{
    var earl = getNextUrl(headers);
    expect(earl).toContain('next-courses.instructure.com/api/v1/courses.json?opaqueB');
  })
});
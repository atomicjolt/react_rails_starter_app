import api                from "./api";
import Network            from "../constants/network";
import Helper             from '../../specs_support/helper';

describe('api', function() {

  var jwt;
  var apiUrl;
  var csrf;
  var params;
  var body

  Helper.stubAjax();
  
  it('calls Get', () => {
    var url = "http://www.example.com";
    var promise = api.get(url);
    
  });

});
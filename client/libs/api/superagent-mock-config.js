// ./superagent-mock-config.js file
module.exports = [
  {
    /**
     * regular expression of URL
     */
    pattern: 'http://www.example.com(.*)',

    /**
     * returns the data
     *
     * @param match array Result of the resolution of the regular expression
     * @param params object sent by 'send' function
     * @param headers object set by 'set' function
     * @param context object the context of running the fixtures function
     */
    fixtures(match, params, headers, context) {
      /**
       * Returning error codes example:
       *   request.get('https://domain.example/404').end(function(err, res){
       *     console.log(err); // 404
       *     console.log(res.notFound); // true
       *   })
       */
      if (match[1] === '/404') {
        throw new Error(404);
      }

      /**
       * Checking on parameters example:
       *   request.get('https://domain.example/hero').send({superhero: "superman"}).end(function(err, res){
       *     console.log(res.body); // "Your hero: superman"
       *   })
       */

      if (match[1] === '/hero') {
        if (params['superhero']) {
          return 'Your hero:' + params['superhero'];
        }
        return 'You didnt choose a hero';
      }


      /**
       * Checking on headers example:
       *   request.get('https://domain.example/authorized_endpoint').set({Authorization: "9382hfih1834h"}).end(function(err, res){
       *     console.log(res.body); // "Authenticated!"
       *   })
       */

      if (match[1] === '/api/test/12') {
        if (headers.Authorization && headers['X-CSRF-Token']) {
          return {
            status: 200,
            contentType: 'application/json',
            statusText: 'OK',
            responseText: JSON.stringify([{
              id: 1,
              name: 'Starter App'
            }])
          };
        }

        return {
          status: 401,
          statusText: 'Unauthorized',
        };
      }

      /**
       * Cancelling the mocking for a specific matched route example:
       *   request.get('https://domain.example/server_test').end(function(err, res){
       *     console.log(res.body); // (whatever the actual server would have returned)
       *   })
       */

      if (match[1] === '/api/test/full') {
        return {
          status: 200,
          contentType: 'application/json',
          statusText: 'OK',
          responseText: JSON.stringify([{
            id: 1,
            name: 'Starter App'
          }])
        };
      }

      /**
       * Delaying the response with a specific number of milliseconds:
       *   request.get('https://domain.example/delay_test').end(function(err, res){
       *     console.log(res.body); // This log will be written after the delay time has passed
       *   })
       */

      if (match[1] === '/delay_test') {
        context.delay = 3000; // This will delay the response by 3 seconds
        return 'zzZ';
      }

      /**
       * Mocking progress events:
       *   request.get('https://domain.example/progress_test')
       *     .on('progress', function (e) { console.log(e.percent + '%'); })
       *     .end(function(err, res){
       *       console.log(res.body); // This log will be written after all progress events emitted
       *     })
       */

      if (match[1] === '/progress_test') {
        context.progress = {
          parts: 3,               // The number of progress events to emit one after the other with
                                  // linear progress
                                  //   (Meaning, loaded will be [total/parts])
          delay: 1000,            // [optional] The delay of emitting each of the progress events
                                  // by ms
                                  //   (default is 0 unless context.delay specified, then it's
                                  // [delay/parts])
          total: 100,             // [optional] The total as it will appear in the progress
                                  // event (default is 100)
          lengthComputable: true, // [optional] The same as it will appear in the progress
                                  // event (default is true)
          direction: 'upload'     // [optional] superagent adds 'download'/'upload' direction
                                  // to the event (default is 'upload')
        };
        return 'Hundred percent!';
      }
    },

    /**
     * returns the result of the GET request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    get(match, data) {
      return {
        body: data
      };
    },

    /**
     * returns the result of the POST request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    post(match, data) {
      return {
        code: 201,
        body: data
      };
    },

    put(match, data) {
      return {
        code: 202,
        body: data
      };
    },

    delete(match, data) {
      return {
        code: 204,
        body: data
      };
    },
  },
];

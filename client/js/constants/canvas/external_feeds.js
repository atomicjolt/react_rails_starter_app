export default {

  // [List assignment submissions](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
  // `return canvasRequest(CanvasConstants.COURSE_EXTERNAL_FEEDS, {courseId}, query);`
  "COURSE_EXTERNAL_FEEDS": Network.GET,


  // [List assignment submissions](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
  // `return canvasRequest(CanvasConstants.GROUP_EXTERNAL_FEEDS, {groupId}, query);`
  "GROUP_EXTERNAL_FEEDS": Network.GET,


  // [List assignment submissions](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
  // `return canvasRequest(CanvasConstants.COURSE_EXTERNAL_FEEDS, {courseId, externalFeedId}, query);`
  "COURSE_EXTERNAL_FEED": Network.DEL,


  // [List assignment submissions](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
  // `return canvasRequest(CanvasConstants.GROUP_EXTERNAL_FEED, {groupId, externalFeedId}, query);`
  "GROUP_EXTERNAL_FEED": Network.DEL

};
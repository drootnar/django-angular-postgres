function BlogService($resource) {  
  /**
   * @name BlogService
   *
   * @description
   * A service providing blog data.
   */

  var that = this;

  /**
   * A resource for retrieving blog data.
   */
  that.GameResource = $resource(_urlPrefixes.API + "blog/:blog_id/");

  /**
   * A convenience method for retrieving Blog objects.
   * Retrieval is done via a GET request to the ../blog/ endpoint.
   * @param {object} params - the query string object used for a GET request to ../blog/ endpoint
   * @returns {object} $promise - a promise containing blog-related data
   */
  that.getBlog = function(params) {
    return that.BlogResource.query(params).$promise;
  };
}

angular.module("Blog")  
  .service("BlogService", ["$resource", BlogService]);
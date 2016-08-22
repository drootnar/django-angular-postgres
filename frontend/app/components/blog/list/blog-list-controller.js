function BlogListController(BlogService) {  
  var that = this;

  /* Stored blog objects. */
  that.blogs = [];

  /**
   * Initialize the blog list controller.
   */
  that.init = function() {
    return BlogService.getBlog().then(function(blogs) {
      that.blogs = blogs;
    });
  };
}

angular.module("Blog")  
  .controller("BlogListController", [
    "BlogService",
    BlogListController
  ]);
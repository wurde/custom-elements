"use strict"

module.exports = (app) => {
  /**
   * Define controller
   */

  class RootController {
    /**
     * Render index page.
     *
     * @static @method
     * @since 1.0.4
     * @public
     */

    static index(req, res) {
      res.render("index")
    }

    /**
     * Redirect to index page.
     *
     * @static @method
     * @since 1.0.4
     * @public
     */

    static redirect_to_index(req, res) {
      res.redirect("/")
    }
  }

  /**
   * Export controller
   */

  return RootController
}

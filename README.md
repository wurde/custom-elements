# Theme Builder

Use Bootstrap's global style variables to compile custom stylesheets. The goal of this app is to speed up design iteration and ensure cohesive design across all of Bootstrap's components.

## Getting started

Run the following npm tasks to get started:

    git clone https://github.com/wurde/themebuilder
    cd themebuilder
    npm run setup
    npm start

## Bootstrap uses SASS

Every Bootstrap download includes both compiled assets and source code. Normally the compiled and minified versions are adequate, but eventually you'll want to differentiate the style of your site. Using the CSS source code, in the `scss/` directory, we can customize the default styles. All of the SASS files located within `.scss/` reference global variables set inside a `scss/_variables.scss` file.

Using the provided global style directives, available in Bootstrap v4.0, we can customize how Bootstrap styles our web sites with only a few lines of code. Every Sass variable in Bootstrap 4 includes the `!default` flag, meaning you can override that default value in your own Sass even after that original variable’s been defined. Copy and paste variables as needed, modify the values, remove the `!default` flag, and recompile.

Read more about Bootstrap customization and SASS at:

- https://getbootstrap.com/docs/4.0/getting-started/options
- http://sass-lang.com

## Changelog

Get the project's history in [CHANGELOG.md](CHANGELOG.md).

## Maintainer

Andy Bettisworth <andy@accreu.com> https://andybettisworth.com

## License

Script is released under the [MIT License](LICENSE.txt).

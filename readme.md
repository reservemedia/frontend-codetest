# Reserve Front End Engineer Code Test

For this code test you will be creating a weather application with
[React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/).

## Getting Started

We have provided with you with the app's basic boilerplate and webpack
configurations. You should only have to build any necessary components, action
creators, reducers, etc.
[React Hot Loader](https://github.com/gaearon/react-hot-loader) is enabled as
well, so saving a component should update it in the browser.

### Designs

* [Sketch](https://www.sketchapp.com)
* [Wireframes](https://github.com/reservemedia/frontend-codetest/blob/master/Reserve_Code_Test_0816_2.sketch)

### Installation

Make sure you have Node >= v4.0. Then run the following commands:

```
npm install
npm start
```

The app will start on `localhost:3000`.

### Styles

This app makes use of PostCSS and basic
[CSS Modules](https://github.com/webpack/css-loader). We have included the
following PostCSS plugins:

* [precss](https://github.com/jonathantneal/precss)
* [postcss-calc](https://github.com/postcss/postcss-calc)
* [AutoPrefixer](https://github.com/postcss/autoprefixer)

### React Toolbox

We have included the [React-Toolbox](http://react-toolbox.io/) which provides
many Material Design components that you may import.

You can override any React Toolbox settings in `src/theme/_config.scss`.

## Pages

### Landing Page

The landing page should have a header bar that lists the current date. It should
also have an edit button that is visible if there are any cities listed.
Clicking the edit button turns on _edit mode_, which allows the user to remove a
city. There should be a
[FAB button](https://material.google.com/components/buttons-floating-action-button.html)
at the bottom right of the screen that is fixed. Clicking on it should open a
dialog box that lets the user search for a city to add to their _favorites_
list.

The main body of the landing page is the list of the user's favorite cities. For
every city the user has added you should pull the forecast from a weather API
and display some data. The background of the city card should be dynamically
created based on the city's current weather. Clicking on a city card should
route the user to a city detail page.

There is an empty state in the case that a user doesn't have any favorite
cities.

### Search Dialog

We recommend utilizing the
[Google Places Autocomplete API](https://developers.google.com/places/web-service/autocomplete)
to generate autocompleted search results when a user starts typing in a city
name. However, you have freedom to implement this however you like.

### City Detail Page

The city detail page should display additional weather information for the
chosen city. The header on the detail page should change to display the name of
the city with a close icon to go back to the main list. The
[FAB button](https://material.google.com/components/buttons-floating-action-button.html)
should not be displayed on the city detail page.

There should be a snapshot of today with information about the current weather,
as well as a future six-day forecast.

The background color of the city detail page should be dynamically determined
based on the city's current weather, just like on the landing page.

## Design

Bundled with this code test you should find a Sketch file with wireframes. You
can download a fully functional free trial of Sketch from
[their website](https://www.sketchapp.com/). We can also share wireframes with
you via [Zeplin](https://zeplin.io/).

## Libraries

* [Forecast.io](https://developer.forecast.io/) - This is the weather API we
  recommend. It provides weather data and allows for up to 1000 API calls per
  day for free. The main downside with this API is that it has CORS preventing
  requests directly from the browser. If you want to use this library you can
  clone a
  [simple reverse proxy server](https://github.com/jasonleibowitz/wthr.ly-api)
  we created. Spin it up locally and send all API requests through that server
  instead of directly through Forecast.io. Alternatively, you can use any other
  weather API you choose, as long as it provides the data required in the
  designs.
* [Google Places Autocomplete](https://developers.google.com/places/web-service/autocomplete) -
  [React Geosuggest](https://github.com/ubilabs/react-geosuggest) is a great
  library that implements the Google Places API. You can use this library to
  more easily implement autocomplete.
* [Skycons](https://github.com/roadmanfong/react-skycons) - The Forecast.io API
  returns an icon parameter for every forecast. You can use that parameter and
  this API to easily display animated weather icons.
* [React Toolbox](http://react-toolbox.com/) - This is a framework that includes
  a number of Material Designed components. Using this will make it easier for
  you to follow the provided designs.

## Criteria for Review

We will be reviewing your submission based on the following:

* Does it function as expected?
* Does the layout match the design provided?
* Code style and organization.
* Proper usage of libraries and frameworks.

## Project Delivery

* We should be able to setup your submission by running `npm install .; npm
  start`.

Please provide adequate instructions to setup and run your submission locally.
Please provide your solution zipped via email. Do not host publicly.

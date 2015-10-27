# Weather Widget Prototype

Mobile-first weather widget built with Meteor and React.

[VIEW THE DEMO](http://cityweather.meteor.com)

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Run Locally](#run-locally)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

## Roadmap

* Setup build environments and write tests
* Security (permissions, accounts, index by userId)
* Mobile native (cardovo, phonegap)

### Functionality

```
root view component fetches weather for cities from openweather api
   renders list of links to /:name for each city
weather view component fetches data using this city's name route parameter 

```

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Run Locally

```
git clone git@github.com:amazingBastard/mtr-weather.git
cd mtr-weather
```

Run the following to get the bash file to work:

```
chmod +x ./run.sh
```

Now you can start the app with the following command:

```
./run.sh
```

The app should now be running on:

```
http://localhost:3000
```

### Deployment

Make sure you have Meteor Up (mup) installed.

```
npm install -g mup
```

Configure your mup.json file for deployment in environments/production dir. This is an example file:

```
{
  // Server authentication info
  "servers": [
    {
      "host": "hostname",
      "username": "root",
      "password": "password",
      // or pem file (ssh based authentication)
      //"pem": "~/.ssh/id_rsa",
      // Also, for non-standard ssh port use this
      //"sshOptions": { "port" : 49154 },
      // server specific environment variables
      "env": {}
    }
  ],

  // Install MongoDB on the server. Does not destroy the local MongoDB on future setups
  "setupMongo": true,

  // WARNING: Node.js is required! Only skip if you already have Node.js installed on server.
  "setupNode": true,

  // WARNING: nodeVersion defaults to 0.10.36 if omitted. Do not use v, just the version number.
  "nodeVersion": "0.10.36",

  // Install PhantomJS on the server
  "setupPhantom": true,

  // Show a progress bar during the upload of the bundle to the server.
  // Might cause an error in some rare cases if set to true, for instance in Shippable CI
  "enableUploadProgressBar": true,

  // Application name (no spaces).
  "appName": "meteor",

  // Location of app (local directory). This can reference '~' as the users home directory.
  // i.e., "app": "~/Meteor/my-app",
  // This is the same as the line below.
  "app": "/Users/arunoda/Meteor/my-app",

  // Configure environment
  // ROOT_URL must be set to https://YOURDOMAIN.com when using the spiderable package & force SSL
  // your NGINX proxy or Cloudflare. When using just Meteor on SSL without spiderable this is not necessary
  "env": {
    "PORT": 80,
    "ROOT_URL": "http://myapp.com",
    "MONGO_URL": "mongodb://arunoda:fd8dsjsfh7@hanso.mongohq.com:10023/MyApp",
    "MAIL_URL": "smtp://postmaster%40myapp.mailgun.org:adj87sjhd7s@smtp.mailgun.org:587/"
  },

  // Meteor Up checks if the app comes online just after the deployment.
  // Before mup checks that, it will wait for the number of seconds configured below.
  "deployCheckWaitTime": 15
}
```

From the environments/production dir, run ```mup setup``` to setup the server. Then, running ```mup deploy``` will deploy your app.

Check out the [mup docs](https://github.com/arunoda/meteor-up) for more info.

## Structure

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    components/          # Contains react components
      common/             # Common components (i.e. header, footer)
      layouts/            # Router layouts
      views/              # Router views
    stylesheets         # LESS files (with autoprefixer)
      components/         # Components styles
        common/             # Common components styles
        layouts/            # All layouts styles
        views/              # View styles
      elements.less       # html elements and modules styles
      helpers.less        # style helpers for global use
      typography.less     # global typigraphy styles
      variables.less      # All LESS variables
  collections/        # All Collections
  lib/                # Lib files that get executed first
  public/             # Public files
    images/             # Public image files
  router/             # Router (routes, router config)
  server/             # Server folder
  tests/              # All tests
environments/       # Environments folder
  local/              # local environment
  production/         # production environment

```

### Packages Used

* Meteor Core
  * [meteor-base](http://github.com/meteor/meteor/tree/devel/packages/meteor-base)
  * [blaze-html-templates](https://github.com/meteor/meteor/tree/devel/packages/blaze-html-templates)
  * [react](http://github.com/meteor/meteor/tree/devel/packages/react)
  * [ecmascript](https://github.com/meteor/meteor/tree/devel/packages/ecmascript)
  * [es5-shim](https://github.com/meteor/meteor/tree/devel/packages/es5-shim)
  * [jquery](https://github.com/meteor/meteor/tree/devel/packages/jquery)
  * [mobile-experience](https://github.com/meteor/meteor/tree/devel/packages/mobile-experience)
  * [mongo](https://github.com/meteor/meteor/tree/devel/packages/mongo)
  * [session](https://github.com/meteor/meteor/tree/devel/packages/session)
  * [standard-minifiers](https://github.com/meteor/meteor/tree/devel/packages/standard-minifiers)
  * [tracker](https://github.com/meteor/meteor/tree/devel/packages/tracker)
  * [check](https://github.com/meteor/meteor/tree/devel/packages/check)
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
* Routing
  * [kadira:flow-router](https://github.com/kadirahq/flow-router)
  * [kadira:react-layout](https://github.com/kadirahq/meteor-react-layout)
  * [meteorhacks:fast-render](https://github.com/meteorhacks/fast-render)
* SEO
  * [spiderable](http://github.com/meteor/meteor/tree/devel/packages/spiderable)
  * [tomwasd:flow-router-seo](https://github.com/tomwasd/flow-router-seo)
* Analytics 
  * [datariot:ganalytics](https://github.com/datariot/meteor-ganalytics)
* UI/UX
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css)
* Development
  * [fourseven:scss](https://github.com/fourseven/meteor-scss)
* Tests
  * [sanjo:jasmine](https://github.com/xolvio/meteor-jasmine)
  * [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter/)

## License

This project has an MIT License, see the LICENSE.txt for more information.

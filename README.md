# Weather Widget Prototype

Mobile-first weather widget built with Meteor and React.

[VIEW THE DEMO](http://weather.meteor.com)

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

## Structure

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    components/          # Contains react components
      common/             # Common components (i.e. header, footer)
      elements/           # HTML elements components (i.e. forms, lists, buttons)
      layouts/            # Router layouts
    stylesheets         # LESS files (with autoprefixer)
      components/         # Components styles
        common/             # Common components styles
        elements/           # Elements styles
        layouts/            # All layouts styles
      elements.less       # html elements and modules styles
      helpers.less        # style helpers for global use
      typography.less     # global typigraphy styles
      variables.less      # All LESS variables
  collections/        # All Collections
  lib/                # Lib files that get executed first
  public/             # Public files
    images/             # Public image files
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    methods/            # Server methods
    publications/       # Collection publications
    startup/            # On server startup
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
* UI and UX
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css)
* Development
  * [flemay:less-autoprefixer](https://github.com/flemay/less-autoprefixer)
  * [msavin:mongol](https://github.com/msavin/Mongol)

## License

This project has an MIT License, see the LICENSE.txt for more information.

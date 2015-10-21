Live Polling App
======

Live Polling App that allows speakers to poll audience members

#### Screenshot

![Screenshot software](https://raw.githubusercontent.com/Bartekus/live-polling/master/live-polling.png "screenshot software")

## Synopsis

Advance React.js app for live polling that utilizing technologies such as webpack, babel, npm, socket... 

## Code Example

```

```

## Motivation

Implementing a live react.js server and integrating few interesting technologies.

### Directory Layout

```
.
├── /components/         # Build Directory
│   ├── /parts/          # Parts Directory
│   │   ├── /Display.js  # Display Module
│   │   ├── /Header.js   # Header Source
│   │   └── /Join.js     # Join Form Source 
│   ├── /App.js          # App's Main Source
│   ├── /Audience.js     # App's Default Path Source
│   ├── /Board.js        # App's Score Board Path Source
│   └── /Speaker.js      # App's Speaker Path Source
├── /node_modules        # Dependencies Source
├── /public/             # Static Files Directory
│   ├── /bundle.js       # App's Bundled JavaScript
│   ├── /index.html      # App's Main Entry
│   └── /style.css       # App's Style File
├── .gitignore           # Git Version Control Omission File
├── app-client           # Client Logic
├── app-server           # Server Logic
├── live-polling.png     # App's Picture
├── package.json         # NPM Dependencies Management File
├── README.md            # This File
└── webpack.config.js    # Webpack's Config File
```

## Installation

Checkout this repo, install dependencies, then start the server with the following:

```
  > git clone git@github.com:Bartekus/live-polling.git
  > cd live-polling
  > npm install
  > npm start
```

## Usage

Use to allow speakers to poll audience members during presentations, meeting or gatherings of any type.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* 0.0.8 Added Join form module for use by Display 
* 0.0.7 Added 404 page and custom Display module that engages when client is connected to the server
* 0.0.6 Added react-router / Added Audience, Board & Speaker components / Added router with routes to app-client / Refactored to stable release
* 0.0.5 Added welcome method to the App to pass the title down to the client
* 0.0.4 Added socket disconnect callback/adjusted app-server to reflect this along with App logic adjustment
* 0.0.3 Modified the App to pass the connection state to the client and adjusted Header component to display it
* 0.0.2 Added socket.io for server and client with connection logging callback /added header component with dynamic title
* 0.0.1 Basic structure, dependencies and functionality implemented

## Tests

Basic non-automated manual browser test aka no test :P

## Contributors

Standing on the shoulders of all the giants before me.

## Contact
#### Bartek Kus
* Homepage: http://bartekus.com
* E-mail: bartekus@gmail.com
* Twitter: [@Bartekus](https://twitter.com/Bartekus "Bartekus on twitter")

## License

Copyright (c) 2015 Bartek Kus

Licensed under the MIT license

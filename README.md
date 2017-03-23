# Ninjagoat-seed

This is the starting point in a [ninjagoat](https://github.com/tierratelematics/ninjagoat)-powered application.
By following this simple steps you'll have a frontend with some viewmodels of a fake bank context.

## Installation

Make sure you have installed [smild](https://github.com/mtfranchetto/smild) on your machine.
Download this repository (or clone it), then run:

`
$ npm install && smild watch-build
`

And it's running!

### Data!

To supply our seed with data you can run the [prettygoat-seed](https://github.com/tierratelematics/prettygoat-seed) since the configuration is based on prettygoat.


## Usage

Open your browser at http://localhost:5000 to see the app.
Then go to /accounts/list to see the results of the projections coming from prettygoat.
To automatically update the view with new data you can edit the file events/bank.js on the prettyoat side. Try to add this event:

```javascript
{
    type: "io.bank.AccountCreated",
    payload: {
        id: "8340948HSHS-8483J",
        name: "Unicredit"
    },
    timestamp: new Date(2)
}
```

You can see that without refreshing the page the list of accounts is updated with the one added.

## License

Copyright 2016 Tierra SpA

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
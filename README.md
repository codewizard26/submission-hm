# Kerve-donation

This dapp is build on erc-721 standards where the person donating the blood will get an nft in his/her wallet after the blood bank will mint the nft and will be later tranferring it to the wallet address of the person donating the blood
This app is made for public welfare where each one can be beneffited by taking advantage of the nft in the case of emergency 

we are using unstoppable domain to login using the wallet into the user or the blood bank wallet so make sure to create your free domain as well
https://unstoppabledomains.com/auth

The functionality of tranferring nft on the frontend and integration of coinbase for wallet and filecoin for the storage of nft will be done in V2

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox react
```

# You need to run local eth provider on your system to create Contracts ABI file

create the local blockchain network on ganache and import the details for the same in metamask to manually deploy the contract
RPC Server - HTTP://127.0.0.1:8545
Network Id - 5777

```sh

$truffle compile 
$ truffle migrate --reset

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox react
```

Start the react dev server.

```sh
$ cd client
$ npm start
  Starting the development server...
```

Click on the 

## FAQ

- __How do I use this with Ganache (or any other network)?__

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to another network, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Create React App](https://create-react-app.dev). Either one would be a great place to start!

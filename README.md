# Jupiter Aggregator Core typescript library

![1*cXNgzu0Pvj4HwOLw4Akwqg](https://user-images.githubusercontent.com/34560707/145749257-e48cb199-521b-476e-9d81-f79bb45ef834.png)

<p align="center">
  <a href="https://jup.ag">Jupiter Aggregator (jup.ag)</a>
  <br/>
  The best swap aggregator on Solana.  Built for smart traders who like money.
</p>
<br/>

This repo is Jupiter Core SDK.


## Example
For Node, or build your own lib, use [Jupiter Core Example](https://github.com/mercurial-finance/jupiter-core-example)
## Integrate with React instead?
The quickest way to integrate Jupiter with your UI, use [Jupiter React Hook instead](https://www.npmjs.com/package/@jup-ag/react-hook)
## React Native?
Checkout [Jupiter React Native Example](https://github.com/mercurial-finance/jupiter-react-native)


# Installation

Yarn
```
yarn add @jup-ag/core
```

NPM
```
npm install @jup-ag/core
```

<br/>
<hr/>
<br/>

### Jupiter.load()
```
Initialize and load Jupiter instances
```

### jupiter.getRouteMap()
```
Get routeMap, which maps each tokenMint and their respective tokenMints that are swappable
```

### jupiter.computeRoutes()
```
Request Jupiter to compute the requested inputToken and outputToken, to query possible pairs, routes, amounts, slippage and more information.
```

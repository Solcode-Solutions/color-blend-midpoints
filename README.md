[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/solcode)

# 🎨 Color blend midpoints

This NPM package is  being used for generating color midpoints from 2 input colors.

## 🤔 Why?

We've created this package, because we have not seen any other package that uses this approach to generate midpoints between 2 colors.

## 🧰 Installation

Node
```javascript
npm i @solcode/color-blend-midpoints
```

Yarn
```javascript
yarn add @solcode/color-blend-midpoints
```

# 🎬 Introduction & Usage

This package exports 2 primary features.
- **ColorBlender** class that is responsible for generating midpoints
- **blendColors** (initialColor: string, targetColor: string, midpoints: number), this method simply wraps up the ColorBlender class in order to get the blends in one line
- **hexToRgb** & **rgbToHex** helper methods


### How to get a blends?

```typescript
import { blendColors } from "color-blend-midpoints"

const blends = blendColors('#000000', '#FFFFFF', 6)

// generates 6 midpoints between these 2 colors ⬇️
// ['#000000','#242424','#494949','#6D6D6D','#929292','#B6B6B6','#DBDBDB','#FFFFFF']
```


## ❤️ Feel free to support us
Even that we have our clients, a little support would really help us to speed up free & open-source projects like this.
###
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/solcode)
###
BTC Address
(3KkrgnJfN8zCGTqWPfjRAKLeUSPD2z79aG)
###
<img src="https://solcode.net/public/img/btc_donate.png" width=150>

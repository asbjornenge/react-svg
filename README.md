# Component SVG

React `<svg />` component.

This package is [scoped](https://docs.npmjs.com/misc/scope) because it has some particular opinions baked into it.

## Install

```sh
npm install --save @asbjornenge/react-svg
```

## Use

```js
import Svg from '@asbjornenge/react-svg'
import monkey from './graphics/monkey.svg'

class MonkeyFace extends React.Component {
    render() {
        return (
            <Svg svg={monkey} className="monkeyWrapper" />
        )
    }
}
```

## Changelog

### 1.0.0

* Initial release :tada:
* Spreading props (except svg)
* Using jsx + es6 + browserify transform field in package.json

enjoy

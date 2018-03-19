# react-cssobj
React work with [cssobj][], make stylesheet localized, runtime updating, and more.

[![npm](https://img.shields.io/npm/v/react-cssobj.svg "Version")](https://www.npmjs.com/package/react-cssobj)
[![Build Status](https://travis-ci.org/futurist/react-cssobj.svg?branch=master)](https://travis-ci.org/futurist/react-cssobj)

[cssobj]: https://github.com/cssobj/cssobj

## Install

```
npm install --save react-cssobj
```

## Usage

```jsx
import React from 'react'
import ReactCSS from 'react-cssobj'

const {css, mapClass} = ReactCSS({
  '.app': {
    background: 'red'
  },
  '.appTitle': {
    '&.large':{
      fontSize:'3rem'
    },
    color: 'blue'
  },
})

export default class App extends React.Component {
  render(){
    return mapClass ( // <<<-- Rocks!
      <header className = 'app'>
        <h2 className = {{'appTitle': true, 'large': this.state}}
            onClick = {() => {
              css.set(['.app'], {background: 'yellow'})
              this.setState({})
            }}>
          Title
        </h2>
      </header>
    )
  }
}

```

Render result: (stylesheet be rendered in `<head>`, thank to [cssobj][])

```html
<header class="app_17fzew31_">
    <h2 class="appTitle_17fzew31_">Title</h2>
</header>
```


Then, when you clicked on `h2`, the result:

```html
<header class="app_17fzew31_">
    <h2 class="appTitle_17fzew31_ large_17fzew31_">Title</h2>
</header>
```

also, the stylesheet for `.app` rule updated to `background: yellow;`

[Here is Demo](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsHN4DZY2YBeTSCQQwsAE5kADvDK97ynnwg+OxAXIwQAWlgwMG4AIwArZQgADyZ3GHtTc0tYLAYXSHhggFd4EnCADkztMwgLKyYIYIA3MggAd3duF3hff34i+3ayJHgsG0dW2Ahw4dGsap0veBh1UIYIqJiEpNTcdIhBAHpl1ZrnN09lMBdYYJx4dzBUI6PiuncAawBzDB5cI7rBAAAQAjAA2DAAJgwAAY3rgkICwvAMJNoNx3Mw+Bh4mBMscLh54KYiVcbnd7A8ni83h8fn9uACgfBwkgmWDITD4cVEciNqz2bgMO4XNwkMUEN46BhcGQZXiCUcySTzq5iddbvd4I9nq93l9fv9+ZtonF4kqVaT1eStVSdTT9fSjUyjrEGLFoOEwBY6EgGFBeBBgeC3R7oLL5bj8SB1ISbaq6DUjoZjKZYuKAJ7qZTaGqIZIWdbKEba-B9bhQMA2UFQ2HKMXtasAZjjJxSRaMpiQZGaJaQwTF3F6saH8GOPea+hqdG4Kv7wR4jgJVu0-h9ymAW0IylwDHckigDGiAF9lDZlAAlFGSADKt-ECQAFMBtMplAByDD79wf1Cbt932Ud1YB+MV3iQf8Px4FwAw-QCT0IQCvx-aQyBWCA-wAuggM-AAyDAjxcb5MNQV8cNw5QSF4eBbzIAAvCBUA-ZtQlweCKPfRDAPfHhAxcKDYigYpMKQzjd3yb55Sgut3GSDiuLEk8AEpcyTOhYCPaJlAAQXcdxdn4JAwCvFEMEkJkujoQJ4Gw99Qj9CAXCfZTyNw9dbOAIiSLPC8xjIMAMB9BhEAAH1C4ATx4hs6mKFwcL3A8tJMp9lFeZRBEy8JwivbhQLAYRovfXQjEcFw-GSgA5Rpz0-H8P30SigN0KEKuPMBquYWrgGAD9UPQmAsPgFwRJ3byIGUE8ovEpr314Q8yFA7qXPPHM3NmpqtiCuon2oFD9I-ABdHdgBAsDuAg-9xuUAB+T8YLg5QoMzaBA3aD8VKKjblH8wLClvCxEBfcb-2EcbEOuLBuHaCzHGUr6mqmxrvoWpaAFkIARjKUyhZHcOOVMyrxoDovhiiz20abtGvAUJDRjAHLKp9BD09wjnUHcABInw-ABiMcP2UncwChmHxQgMntBId4pV4ZRucgKBXJi+A4pw9lYF5GyMAARxElxM1vaA4Hgbon0V1TpuljSvDlkXodhiAXOAbm+bUQWMHlayXAACWkNGABkbFd-nuGHD2vacv3A6pnRlQTNtZ1XdTYkzDLLCwUISG1XVaSksZiliRkAWl1W3B9E1WS2c1fCLEiig-AB9ISGDoT4GpZSIzQSY4GGJ3DkwzJBs2TPQQEQ+hGlYaNOH6GzWGafISw+Upao1rWcT1pzDeNhAzY-JOEw98gCngSQsAoJAMALM+aO1sB0nQnnNG0D2wCgRandBQhwlBZTcW4PKZ+r8yaL3KhdR4q8LwACFwxQGvrBOgYBqIuFwE+eU7hSgnWUKKJwdRnjKD2k4OsoIACsH5CAfhZEdSa-8lwQAANzaAgIvKAT4IGYPgGTcehBJ7MGnlsWed8BDoHHodE8QA)

## API

### MainEntry [function] signature:

```
function( jsObject, cssobjConfig ) -> Instance of HelperClass
```

  - **jsObject**: _[object]_ Javascript object represetation of stylesheet, same as [cssobj][]'s 1st argument.

  - **cssobjConfig**: _[optional, object]_ The `config` option, same as [cssobj][]'s 2nd argument, but with default value: `{local: true}`.


### HelperClass [class] members:

  - **css**: _[object]_ The cssobj [result](https://github.com/cssobj/cssobj/blob/master/docs/api.md#cssobj-api) object.

  - **mapClass**: _[function (jsx) -> jsx]_ Transform JSX into new JSX, with `className` props transformed:

    1. First passed into [classnames](https://github.com/JedWatson/classnames)

    2. Then passed into [cssobj][] [result.mapClass](https://github.com/cssobj/cssobj/blob/master/docs/api.md#result-object)

    3. The final value is localized `className` as `string`


### Static Methods

`MainEntry` has below methods as shortcuts for related modules:

  - **cssobj**: _[function]_ Same as **require('[cssobj][]')**

  - **classNames**: _[function]_ Same as **require('[classnames](https://github.com/JedWatson/classnames)')**

  - **changeProps**: _[function]_ Same as **require('[react-change-props](https://github.com/futurist/react-change-props)')**



## Notes

### 1. No inject into sub-component

`mapClass` is only **current-level** transformer, when met a component like `<Foo/>`, it will not dig into it, keep the component clean in it's own `render()`.

```jsx

const {css, mapClass} = ReactCSSObj({
  '.app': {
    'p.foo': {color: 'red'}
  }
})

function Foo() {
  return <p className="foo">Hello</p>
}

function MyComponent() {
  return mapClass(<div className="app"><Foo/></div>)
}

```

Above example, `p` will rendered as is, `p.foo` will not be localized, to work, you should change Foo like below:

```jsx
function Foo() {
  return mapClass(<p className="foo">Hello</p>)
}
```

### 2. Get localized class names

If you want get/use localized className some where (like **DOM**), you can use [cssobj][] method `css.mapClass`:

```jsx
function Foo() {
  return <p className={css.mapClass('foo')} ref={
    el => el.onclick = () => $(el).toggleClass( css.mapClass('bar') )
  }>Hello</p>
}

// any where you want to query a DOM:
document
  .querySelector( css.mapSel('.app p.foo') )
  .removeClass( css.mapClass('bar') )
```

[Live demo here](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsHN4DZY2YBeTSCQQwsAE5kADvDK97ynnwg+OxAXIwQAWlgwMG4AIwArZQgADyZ3GHtTc0tYLAYXSHhggFd4EnCADkztMwgLKyYIYIA3MggAd3duF3hff34i+3ayJHgsG0dW2Ahw4dGsap0veBh1UIYIqJiEpNTcdIhBAHpl1ZrnN09lMBdYYJx4dzBUI6PiuncAawBzDB5cI7rBAAAQAjAA2DAAJgwAAY3rgkICwvAMJNoNx3Mw+Bh4mBMscLh54KYiVcbnd7A8ni83h8fn9uACgfBwkgmWDITD4cVEciNqz2bgMO4XNwkMUEN46BhcGQZXiCUcySTzq5iddbvd4I9nq93l9fv9+ZtonF4kqVaT1eStVSdTT9fSjUyjrEGLFoOEwBY6EgGFBeBBgeC3R7oLL5bj8SB1ISbaq6DUjoZjKZYuKAJ7qZTaGqIZIWdbKEba-B9bhQMA2UFQ2HKMXtasAZjjJxSRaMpiQZGaJaQwTF3F6saH8GOPea+hqdG4Kv7wR4jgJVu0-h9ymAW0IylwDHckigDGiAF9lDZlAAlFGSADKt-ECQAFMBtMplAByDD79wf1Cbt930-dwMBIbhuD-TceEDFx-w-UIkA-E9CEA98v3dFxIOAd1YB+MV3iQODM2gQN2iQwCT20E8AEo8zoEh3ilXhlAAMXAp9qIAuh31CeBihcbi9wPI9oifQR3D8ESwAAOUaGwt2iWV90PY8wCfD8wIg6iz1CEh5NQpIoHPHMnwjXhYCgMhcPPJJjK4oCgIjCzVIAGTIH0MHgbhvm+GAny2JThNU9SMI-ajPLcXAONo7iHOuLBuHaSRxQgDiDJoij1AACRI7hjncdQYsopN6MYrxmIAWUzZL9iDPgOPshs6n4wTlKksTJ0k1TZNsewfwJNjuCONtJ0Kqi6OvAUJAqjBQj9CAXDEqqaq6OhAngYadwAEnUgBiMcwp3MAEqSlKYu0Bi6CY7idsgKBqOAJq+IE5R2VgXl1owABHYoFszW9oDgLzFruzjisu674sS5LHA44Ado-Xa1DCjB5TWlwsukCqXJsBH9vA+AUbRhbMex4r40uEljlnVcStiTNlEESwsF07VdVpb4yDGYpYkZAEGOe9yNpZSIzQSXwi2+OobA-AB9WIjzoT4PzWFFRe2eJjgYfQ4qA5MMyQbNkz0EBkPoRpWGjTh+nW1hmnyEsPlKGy3o+nEfr+gGYAQbp1JphMUfIAp4EkLAKCQTyO2SgIcTAdIufUzRtBRsBLOmJ9QUIcJQXC+JuHlRPk5i+2XGUbhSncZ2LwAIXDKAIoYOgwDAlwovlSv4B3R7RScOpnmUagPycOtQQAVg-Qh4JRD8AF1lBoxlHAAbm0CB7agJ9y8eUoYtNwhzeYS2tmt3gBlYU2Z5PIA)


## Other

You may want [babel-plugin-transform-cssobj](https://github.com/cssobj/babel-plugin-transform-cssobj) if you don't hope runtime interpolate.


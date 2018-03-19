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

[Here is Demo](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsHN4DZY2YBeTSCQQwsAE5kADvDK97ynnwg+OxAXIwQAWlgwMG4AIwArZQgADyZ3GHtTc0tYLAYXSHhggFd4EnCADkztMwgLKyYIYIA3MggAd3duF3hff34i+3ayJHgsG0dW2Ahw4dGsap0veBh1UIYIqJiEpNTcdIhBAHpl1ZrnN09lMBdYYJx4dzBUI6PiuncAawBzDB5cI7rBAAAQAjAA2DAAJgwAAY3rgkICwvAMJNoNx3Mw+Bh4mBMscLh54KYiVcbnd7A8ni83h8fn9uACgfBwkgmWDITD4cVEciNqz2bgMO4XNwkMUEN46BhcGQZXiCUcySTzq5iddbvd4I9nq93l9fv9+ZtonF4mDoRhQUckGQwPAjrExe1IC5cfiQOpCerPKTffBNZSQNS9XTDYyAbEGLFoOEHQw6EgGFBeBBgeCnTHoLL5R6lSr9DUjoZjKZYuKAJ7qZTaGqIZIWdbKEba-B9bhQMA2UFQ2HKF3dgDM3pOKSbRlMduaLaQwTF3F6XoX8GO06LOjo3BVs+CPEcBML2n8DuUwC2hGUuAY7kkUAY0QAvsobMoAEooyQAZS-4gSAApgG0ZRlAAcgwG93FA1Az2AkDlGjWAfjFd4kBg0CeBcFNQLgx9CDg8DIOkMgVggaDYLoeCwIAMgwe8XG+MjUCAyiqOUEheHgL8yAALwgVBQKHUJcBw1iQLwuCQJ4VMXHQ2IoGKMj8LEq98m+eV0L7dxklE8TlMfABKWs6GPe9omUABBdx3F2fgkDAd8UQwSQmS6OhAkDFiQNCJMIBcf8DK8+CT08+jGOfV8xntDAE0QAAfOLgEfSSBzqYoXEo69bzMhz-2UV5lEEIrwnCd9uCQsBhBSkDdCMRwXD8HKADlGhfMDINA-Q2Pg3QoUah8wBa5g2uAYBQKIkiYHI+AXEUy8wogZRH2SlTupA3g7zIJCRoCl8ayCta2K2GK6n-ahCOs0CAF1L2ARDkO4VCYIW5QAH4wMw7DlHQytoFTdpQMM6rDuUKKwBOriLEQQCFpg4QFrw64sG4doXMcAzge65aupBzbtoAWQgTHCpLKEcao45S3q8n4JSjHWOfbQVu0D8BQkfGMB8+r-0EKz3COdRLwAEn-UCAGIV1AgzLzAZHUfFCB6e0Eh3ilXhlBFyAoEC1L4HSyj2VgXkPIwABHRSXErL9oDgeBun-LWjJWlW6DVyjZZRtGIAC4ARfFtQpYweV3JcAAJaR8YAGRsP2Je4RdA+Dvzw6j5mdGVANRy3I8TLoWJK0KywsFCEhtV1Wl1LGYpYkjI4Vb1twHRNVktnNXwm0YopQIAfXkxNPk6llIjNBJjgYGmqOLCskGrYs9BAPD6EaVgPU4foPNYZp8hbD5Sjaw3jZxc2-Ktm2EHt0Ds4DQPyAKeBJCwCgkAwBt784k2wHSEjRc0bRA7AKAW1vagkIOEUEBlcTcHlD-P+9Mt4NUeo8Per4ABC2YoAvywnQMAHEXC4H-PKdwpRbrKFFE4OozxlDnScH2UEABWUChBQIsmuktCB+4IAAG5tAQC3lAf8iCiHwHpgvQgS9mAry2Gvd+Ah0ALyuo+IAA)

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

[Live demo here](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsHN4DZY2YBeTSCQQwsAE5kADvDK97ynnwg+OxAXIwQAWlgwMG4AIwArZQgADyZ3GHtTc0tYLAYXSHhggFd4EnCADkztMwgLKyYIYIA3MggAd3duF3hff34i+3ayJHgsG0dW2Ahw4dGsap0veBh1UIYIqJiEpNTcdIhBAHpl1ZrnN09lMBdYYJx4dzBUI6PiuncAawBzDB5cI7rBAAAQAjAA2DAAJgwAAY3rgkICwvAMJNoNx3Mw+Bh4mBMscLh54KYiVcbnd7A8ni83h8fn9uACgfBwkgmWDITD4cVEciNqz2bgMO4XNwkMUEN46BhcGQZXiCUcySTzq5iddbvd4I9nq93l9fv9+ZtonF4mDoRhQUckGQwPAjrExe1IC5cfiQOpCerPKTffBNZSQNS9XTDYyAbEGLFoOEHQw6EgGFBeBBgeCnTHoLL5R6lSr9DUjoZjKZYuKAJ7qZTaGqIZIWdbKEba-B9bhQMA2UFQ2HKF3dgDM3pOKSbRlMduaLaQwTF3F6XoX8GO06LOjo3BVs+CPEcBML2n8DuUwC2hGUuAY7kkUAY0QAvsobMoAEooyQAZS-4gSAApgG0ZRlAAcgwG93FA1Az2AkCwPcDASG4bhoLPHhUxcGDQNCJBQMfQg4JA8DoxcNDgGjWAfjFd4kGwytoFTdp8Lgx9tEfABKOs6BId4pV4ZQADEUP-DjYLoEDQngYoXAk69b3vaJ-0Edw-EUsAADlGhsc9ollG87wfMB-1A5DUI459QhIHSiKSKAXxrf8c14WAoDIKiXySBzxPg+Cc1coyABl7VReBuG+b4YH-LZ9IUoyTNI0COIweA3FwUSuIk3zriwbh2kkcUIFE2zONY9QAAlGO4Y53HUTK2LobReLofiJIAWUrAr9jTPhRJ8gc6hkuSDPU5TpzUoytNsexIIJYTuCOUd13q7iPwFCQ2owUIkwgFxlI6rqujoQJHXUS8ABITIAYhXJLLzAXL8sKzKmr4rwBMuyAoA44ABuk2TlHZWBeROjAAEdil2ysv2gOAwr2r6xIa5rWpyvKCscUTgEu0CrrUJKMHlY6XHK6Q2sCmwcZulD4AJondtJ8mGp9S4SWOLcj0auhYkrZRBEsLArO1XVaW+MgxmKWJIyOXj-pCk1WS2c1fCbb46hsUCAH1YnvOhPlAtYUUiM0EmOBh9Gy+DiwrJBq2LPQQAI+hGlYD1OH6E7WGafIWw+UpPKBkGcQhqGYZgBBuhMjmAwJ8gCngSQsAoJAUvHAqAhxMB0nFkzNG0AmwDc6Z-1BQhwlBZL4m4eVc-zzLvZcZRuFKdx-dfAAhbMoBSlxEzAZCXHS+VW-gS9ftFJw6meZRqFApw+1BABWUDCBwlFQIAXWUTjGUcABubQIG9qB-2bx5Skyx3CGd5hXa2d3eAGVhHY3x8gA)


## Other

You may want [babel-plugin-transform-cssobj](https://github.com/cssobj/babel-plugin-transform-cssobj) if you don't hope runtime interpolate.


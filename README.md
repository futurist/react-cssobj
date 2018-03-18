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
              css.set('.app', {background: 'yellow'}) // <<<-- Rocks!
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
<header class=" app_17fzew31_">
    <h2 class=" appTitle_17fzew31_">Title</h2>
</header>
```


Then, when you clicked on `h2`, the result:

```html
<header class=" app_17fzew31_">
    <h2 class=" appTitle_17fzew31_ large_17fzew31_">Title</h2>
</header>
```

also, the stylesheet for `.app` rule updated to `background: yellow;`

[Here is JSBin]()

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


## Notes

### 1. No inject into sub-component

`helper.mapClass` is only one-level transformer, when met a component like `<Foo/>`, it will not dig into it, keep the component clean in it's own `render()`.

```jsx

const helper = ReactCSS({
  '.app': {
    'p.foo': {color: 'red'}
  }
})

function Foo() {
  return <p className="foo">Hello</p>
}

function MyComponent() {
  return helper.mapClass(<div className="app"><Foo/></div>)
}

```

Above example, `p` will rendered as is, `p.foo` will not be localized, to work, you should change Foo like below:

```jsx
function Foo() {
  return helper.mapClass(<p className="foo">Hello</p>)
}
```

### 2. Map individual class

If you don't want the `helper.mapClass`, or you want use generated className in **DOM**, you can use [cssobj][] method `css.mapClass`:

```jsx
function Foo() {
  return <p className={css.mapClass('foo')} ref={
    el => $(el).addClass( css.mapClass('bar') )
  }>Hello</p>
}

// any where you want to query a DOM:
document
  .querySelector( css.mapSel('.app p.foo') )
  .removeClass( css.mapClass('bar') )
```


# react-cssobj
Make React work with [cssobj](https://github.com/cssobj/cssobj), make stylesheet localized, live update, and more.

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
    return mapClass( <div className='app'>
    <header>
      <h2 className={{'appTitle': true, 'large': this.state}} onClick={e=>{
        this.setState({})
      }}>Title</h2>
    </header>
    </div> )
  }
}

```

The result:

```html
<div class=" app_17fzew31_">
  <header>
    <h2 class=" appTitle_17fzew31_">Title</h2>
  </header>
</div>
```

And when you clicked on `Title`, the result:

```html
<div class=" app_17fzew31_">
  <header>
    <h2 class=" appTitle_17fzew31_ large_17fzew31_">Title</h2>
  </header>
</div>
```


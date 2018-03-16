import React from 'react'
import ReactDOM from 'react-dom'
import createCSS from  '../../src'

const {css, mapClass} = createCSS({
  '.app': {background: 'red'},
  '.appTitle': {
    '&.abc':{
      fontSize:'48px'  //3rem
    },
    color: 'blue'
  }
})

class App extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {}
  }
  render(){
    return mapClass(<div className='app'>
    <header>
      <h2 className={{appTitle:1, abc:this.state.ok}} onClick={e=>{
        css.set(['.appTitle'], {color: 'white'})
        this.setState({ok: !this.state.ok})
      }}><span>Bookmark List</span></h2>
    </header>
    </div>)
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

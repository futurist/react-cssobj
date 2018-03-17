import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSS from  '../../src'

const {css, mapClass:L} = ReactCSS({
  '.app': {background: 'red'},
  '.appTitle': {
    '&.abc':{
      fontSize:'48px'  //3rem
    },
    color: 'blue'
  },
  '.foo':{
    background: 'pink'
  }
})

class Foo extends React.Component{
  render(){
    return L(<span className="foo">foo</span>)
  }
}

class App extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {}
  }
  render(){
    return L(<div className='app'>
    <header>
      <h2 className={{'appTitle':1, 'abc':this.state.ok}} onClick={e=>{
        css.set(['.app'], {background: 'yellow'})
        this.setState({ok: !this.state.ok})
      }}><span>Bookmark List</span></h2>
    </header>
    <Foo />
    </div>)
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

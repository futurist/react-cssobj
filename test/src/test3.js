import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSS from  '../../src'

const {css, mapClass:L} = ReactCSS({
  '.app': {background: 'red'},
  '.appTitle': {
    '&.large':{
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
  render(){
    return L(<div className='app'>
    <header>
      <h2 className={{'appTitle':true, 'large':this.state}} onClick={e=>{
        this.setState({})
      }}>Title</h2>
    </header>
    <Foo />
    </div>)
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

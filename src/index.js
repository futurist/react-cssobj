import cssobj from 'cssobj'
import classNames from 'classnames'
import changeProps from 'react-change-props'

class CreateCSS {
  constructor (obj, config) {
    this.mapClass = this.mapClass.bind(this)
    this.css = cssobj(obj, Object.assign({local: true}, config))
  }
  mapClass(jsx) {
    const {css} = this
    return changeProps(
      jsx,
      el=>{
        const {className} = el.props
        return className && {className: css.mapClass(classNames(className))}
      }
    )
  }
}

export default function createCSS(obj, config) {
  return new CreateCSS(obj, config)
}

createCSS.cssobj = cssobj
createCSS.classNames = classNames
createCSS.changeProps = changeProps


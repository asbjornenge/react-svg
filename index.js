var React = require('react')

module.exports = React.createClass({
    render: function() {
        var svg = this.props.svg
        let props = Object.keys(this.props).reduce((_props, prop) => {
            if (prop == 'svg') return _props
            _props[prop] = this.props[prop]
            return _props
        }, {})
        if (svg.indexOf('data:image') == 0) svg = svg.slice(svg.indexOf('<svg'))
        return (
            <div {...props} dangerouslySetInnerHTML={{ __html : svg }} />
        )
    }
})


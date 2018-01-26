'use strict';
var React = require('react');

class Image extends React.Component {

    render() {
        return <img src={this.props.card.isVisible ? this.props.card.image : ''}
                    onClick={this.onImageClick}
                    className="imageCard">
        </img>;
    }

    onImageClick = (e) => {
        this.props.localHandleClick(this.props.card.id);
    }
}

module.exports = Image;

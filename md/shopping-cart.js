
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdShoppingCart extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m28.4 30c1.8 0 3.2 1.6 3.2 3.4s-1.4 3.2-3.2 3.2-3.4-1.4-3.4-3.2 1.6-3.4 3.4-3.4z m-26.8-26.6h5.5l1.6 3.2h24.7c0.9 0 1.6 0.8 1.6 1.8 0 0.3-0.1 0.5-0.2 0.7l-6 10.8c-0.5 1-1.6 1.7-2.9 1.7h-12.4l-1.5 2.8 0 0.2c0 0.2 0.1 0.4 0.3 0.4h19.3v3.4h-20c-1.8 0-3.2-1.6-3.2-3.4 0-0.5 0.1-1.1 0.3-1.6l2.3-4.1-6-12.7h-3.4v-3.2z m10 26.6c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.2-3.4 3.2-3.2-1.4-3.2-3.2 1.4-3.4 3.2-3.4z"/></g>
            </IconBase>
        );
    }
}

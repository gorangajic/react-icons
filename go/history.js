
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoHistory extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 2.5c-3.6 0-6.8 1.1-9.6 2.9l-2.9-2.9v10h10l-3.4-3.4c1.7-1 3.7-1.6 5.9-1.6 6.9 0 12.5 5.6 12.5 12.5 0 6.9-5.6 12.5-12.5 12.5-6.9 0-12.5-5.6-12.5-12.5 0-1.8 0.4-3.5 1.1-5h-3.6v-3.9c-1.5 2.6-2.5 5.6-2.5 8.9 0 9.7 7.8 17.5 17.5 17.5s17.5-7.8 17.5-17.5c0-9.7-7.8-17.5-17.5-17.5z m0 30l2.5-2.5v-7.5h5l2.5-2.5-2.5-2.5h-5l-2.5-2.5-5 5 2.5 2.5v7.5l2.5 2.5z"/></g>
            </IconBase>
        );
    }
}

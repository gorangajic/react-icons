
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiCalendar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 10.3v-0.3c0-2.8-2.3-5-5-5s-5 2.2-5 5h-3.4c0-2.8-2.2-5-5-5s-5 2.2-5 5v0.3c-1.9 0.7-3.3 2.5-3.3 4.7v15c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5v-15c0-2.2-1.4-4-3.3-4.7z m-6.7-0.3c0-0.9 0.7-1.7 1.7-1.7s1.6 0.8 1.6 1.7v3.3c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7v-3.3z m-13.3 0c0-0.9 0.7-1.7 1.6-1.7s1.7 0.8 1.7 1.7v3.3c0 1-0.7 1.7-1.7 1.7s-1.6-0.7-1.6-1.7v-3.3z m20 20c0 0.9-0.8 1.7-1.7 1.7h-20c-0.9 0-1.7-0.8-1.7-1.7v-10h23.4v10z"/></g>
            </IconBase>
        );
    }
}

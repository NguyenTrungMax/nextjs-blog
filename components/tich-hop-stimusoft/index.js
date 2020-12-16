import React, { Component, Fragment } from 'react';

class TichHop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.renderReport();
    }

    componentDidUpdate(preProps, preState) {

    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }

    renderReport = () => {
        if (window.Stimulsoft) {
            const viewer = new window.Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
            const report = new window.Stimulsoft.Report.StiReport();
            report.loadFile('/reports/mrt/SimpleList.mrt');
            viewer.report = report;
            viewer.renderHtml('viewer');
        }
    }

    render() {
        return (
            <Fragment>
                <div id="viewer">
                </div>
            </Fragment>
        )
    }
}

export default (TichHop);

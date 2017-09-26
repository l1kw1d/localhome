import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Little bit about me</p>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Web Developer & Sys. Admin" subtitle="3ejoeur Inc."
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                        March 2017 - June 2017  WebDev.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Wordpress</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>PHP</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>CSS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>SASS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Java</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>SEO</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>HTML5</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Sys.Admin" subtitle="Consultation Vitesse Eclaire Inc"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          January 2012 - April 2013. System Administrator Consultation Vitesse Eclaire Inc.
			 
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Linux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SQL</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>NAGIOS</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>PHP</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>ffmpeg</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Networking</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Firewall</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Techno. Consultant" subtitle="Groupe Neotech"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          December 2005	- June2006. Technologies consultant , network manager, system administrator.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Windows Server</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Router, Switch</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Network</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;

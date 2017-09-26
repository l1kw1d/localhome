import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">How about working together?, Contributors needed!</p>
                <Card>
                  <CardHeader
                    subtitle="Github Trending"
                    title="github/trends"
                    avatar="github.png"
                  />
                <CardText>
                        A community where more than 24 million people learn, share, and work together to build software.

                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/trends" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;

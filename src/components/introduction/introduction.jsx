import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
            Officially, I'm a new business owner building and offering modern web services, marketing solutions and data traffic optimisation. I'm also addicted to technologies, an expert enhancing website since 1997, Cyber Security is my hobby.
  	
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;

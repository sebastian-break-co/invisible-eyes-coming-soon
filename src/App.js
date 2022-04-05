import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import { ReactComponent as IconDiscord } from './assets/icons/discord.svg';
import { ReactComponent as IconGmail } from './assets/icons/gmail.svg';
import { ReactComponent as IconMirror } from './assets/icons/mirror.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Invisible EYEs</a>
          </div>
          <div className="social">
            <a href="https://twitter.com/invsbleEyes" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://discord.gg/madUctPypY" title="Discord" target="_blank" rel="noopener noreferrer">
              <IconDiscord className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
            <a href="mailto:support@invisibleeyes.art" title="Gmail" target="_blank" rel="noopener noreferrer">
              <IconGmail className="icon" />
            </a>
            <a href="https://mirror.xyz/invisibleeyes.eth" title="Mirror" target="_blank" rel="noopener noreferrer">
              <IconMirror className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/arkn98" target="_blank" rel="noopener noreferrer">arkn98</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/arkn98/coming-soon" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default App;
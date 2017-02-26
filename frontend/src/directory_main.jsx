import React from 'react';
import { render } from 'react-dom';
import { directory_path } from './utilities/rails-routes.js'
import Directory from './components/directory.jsx';

import Theme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List} from 'material-ui/List';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

fetch(
  directory_path({id: 'root'})
).then((response)=>{
  return response.json();
}).then((json)=>{
  render(
    <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
      <List className='dir root'>
        <Directory name='/'
           directory_id={json.id}
           directories={json.directories}
           items={json.items}
           initOpen={true}/>
      </List>
    </MuiThemeProvider>,
    document.getElementById('dir-nav')
  );
}
);

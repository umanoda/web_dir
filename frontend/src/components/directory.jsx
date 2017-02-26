import React, { Component, PropTypes } from 'react';
import Item from './item.jsx'
import { directory_path } from '../utilities/rails-routes.js'

import {List, ListItem} from 'material-ui/List';
import OpenIcon from 'material-ui/svg-icons/navigation/expand-more';
import CloseIcon from 'material-ui/svg-icons/navigation/chevron-right';

export default class Directory extends Component {
  static propTypes: {
    directory_id: PropTypes.integer.isRequire,
    name: PropTypes.string.isRequire,
  }

  constructor(props) {
    super(props);
    this.state = {
      directories: props.directories,
      items: props.items,
      isOpen: props.initOpen,
    };
  }

  dirNameClick() {
    const {directories, items} = this.state;
    if(directories == null && items == null){
      this.getChildren();
    }

    this.setState({
      isOpen: !(this.state.isOpen)},
    );
  }

  getChildren() {
    fetch(
      directory_path({id: this.props.directory_id})
    ).then((response)=>{
      return response.json();
    }).then((json)=>{
      this.setState({
        directories: json.directories,
        items: json.items,
      });
    });
  }

  render(){
    const { name } = this.props;
    const { directories, items, isOpen } = this.state;

    const children = (()=> {
      if(isOpen){
        return <List>
            {
              (directories || []).map((dir)=> {
                return <Directory key={dir.id} name={dir.name} directory_id={dir.id} />
              })
            }
            {
              (items || []).map((item)=> {
                return <Item key={item.id} item_id={item.id} subject={item.subject} />
              })
            }
          </List>
      }
    })();

    return (
      <ListItem className='dir'
                leftIcon={ isOpen ? <OpenIcon /> : <CloseIcon /> } >
        <div className='dir_name' onClick={this.dirNameClick.bind(this)}>{ name }</div>
        { children }
      </ListItem>
    );
  }
}

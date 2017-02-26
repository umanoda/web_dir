import React, { Component, PropTypes } from 'react';

import {ListItem} from 'material-ui/List';
import ItemIcon from 'material-ui/svg-icons/content/inbox';

export default class Item extends Component {
  static propTypes: {
    item_id: PropTypes.integer.isRequired,
    subject: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render(){
    const { item_id, subject } = this.props;

    return (
      <ListItem key={`item_${item_id}`}
                primaryText={ subject }
                className='file_name'
                leftIcon={<ItemIcon />} />
    );
  }
}


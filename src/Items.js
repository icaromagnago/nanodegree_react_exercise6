import React from 'react';
import Item from './Item';

const Items = props => {
	return (
      	<div>
          <p className="items">Items</p>
          <ol className="item-list">
            {props.items.map((item, index) => <Item key={index} item={item} />)}
          </ol>
  		</div>
    )
}

export default Items;
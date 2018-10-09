import React, { Component } from 'react';
import Items from './Items';
import CreateNewItem from './CreateNewItem';
import DeleteLastItem from './DeleteLastItem';

class ShoppingList extends Component {
  	state = {
      items: [],
  	};

    handleAddItem = item => {
      this.setState(prevState => ({ items: [...prevState.items, item] }));
    };

    handleDeleteLastItem = event => {
      this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };

    noItemsFound = () => {
      return this.state.items.length === 0;
    };

	render() {
		return (
          <div>
            <h2>Shopping List</h2>
            <CreateNewItem onAddItem={this.handleAddItem} />

            <DeleteLastItem
          		onDeleteLastItem={this.handleDeleteLastItem}
          		buttonDisabled={this.noItemsFound()}
        	/>

            <Items items={this.state.items} />
          </div>
        )
    }
}

export default ShoppingList;
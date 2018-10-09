import React from 'react';

const Item = props => (
	<li key={props.key}>{props.item}</li>
)

export default Item;
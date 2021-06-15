import React from 'react';
import './Sidebar.css'

const Sidebar = ({title, description}) => (
	<div className="sidebar">
		<h3 className="sidebar-title">{title}</h3>
		<p className="sidebar-description">{description}</p>
	</div>
)

export default Sidebar
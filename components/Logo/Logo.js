import React from 'react';
import Tilt from 'react-tilt';
import mylogo from './ai-icon.png';
import './Logo.css'

const Logo = () => {
	return (
			<div className="m4 mt0 pa3">
				<Tilt className='Tilt br2 shadow-2' option={{ max: 55}} style={{ height: 150, width: 150 }}>
					<div className='Tilt-inner pa3'><img style={{paddingTop: '5px'}} alt='logo' src={mylogo}/></div>
				</Tilt>
			</div>
		);
}
export default Logo;
import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div>
			<p className="f3">
			{`This app is designed to idenfity a face in the picture. Add a link and try it out!`} 
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center br3 br--left' type="text" onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple br3 br--right' onClick={onSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);
}
export default ImageLinkForm;
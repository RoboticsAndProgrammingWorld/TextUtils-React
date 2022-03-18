import React, { useState } from 'react';

export default function TextForm(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to uppercase!", 'success')
	};
	const handleLoClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lowercase!", 'success')
	};
	const handleCtClick = () => {
		setText('');
		props.showAlert("Text Cleared!", 'success')
	};
	const handleCpClick = () => {
		let textBox = document.getElementById('myBox');
		textBox.select();
		navigator.clipboard.writeText(textBox.value);
		props.showAlert("Copied to Clipboard!", 'success')
	};
	const handleEsClick = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
		props.showAlert("Extra spaces removed!", 'success')
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const [text, setText] = useState('');
	return (
		<>
			<div
				className='container'
				style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
				<h1>{props.heading}</h1>
				<div className='mb-3'>
					<textarea
						className='form-control'
						value={text}
						onChange={handleOnChange}
						style={{
							backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
							color: props.mode === 'light' ? '#042743' : 'white',
						}}
						id='myBox'
						rows='8'
					/>
				</div>
				<button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>
					Convert to Uppercase
				</button>
				<button className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>
					Convert to Lowercase
				</button>
				<button className='btn btn-primary mx-2 my-1' onClick={handleCtClick}>
					Clear Text
				</button>
				<button className='btn btn-primary mx-2 my-1' onClick={handleCpClick}>
					Copy Text
				</button>
				<button className='btn btn-primary mx-2 my-1' onClick={handleEsClick}>
					Remove Extra Spaces
				</button>
			</div>
			<div
				className='container my-3'
				style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
				<h2>Your text summary</h2>
				<p>
					{text.trim() === ''
						? 0
						: text.trim().split(/[ ]+/).join(' ').split(' ').length}{' '}
					words, {text.length} characters
				</p>
				<p>
					{0.008 *
						(text.trim() === ''
							? 0
							: text.trim().split(/[ ]+/).join(' ').split(' ').length)}{' '}
					Minutes read
				</p>
				<p>
					{text.trim() === ''
						? 0
						: text.trim().split(/[ ]+/).join(' ').split('. ').length}{' '}
					Lines
				</p>
				<h2>Preview</h2>
				<p>{text.length>0?text:'Enter something in the text above to preview it here'}</p>
			</div>
		</>
	);
}

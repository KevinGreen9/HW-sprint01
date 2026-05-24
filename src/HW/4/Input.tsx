import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: (text: string)=> void// НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (value: string )=> void // НУЖНО ПРОТИПИЗИРОВАТЬ
	text: string
};

export const Input = ({currentText, text}: InputPropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		currentText(e.currentTarget.value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={text} onChange={onChangeHandler} />
	);
};

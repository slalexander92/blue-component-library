export default {
	title: 'Components/BaseButton',
	tags: ['autodocs'],
}

const DefaultTemplate = ({ text, color, hasRoundedCorners, isDisabled }) => {
	return `<base-button text="${text}" color="${color}" has-rounded-corners="${hasRoundedCorners}" is-disabled="${isDisabled}" />`;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
	text: 'Hello World',
	color: 'red',
	hasRoundedCorners: true,
	isDisabled: false,
}

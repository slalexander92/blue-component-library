export default {
	title: 'Components/BaseButton',
	tags: ['autodocs'],
}

const DefaultTemplate = args => {
	return `<base-button text="${args.text}" color="${args.color}" has-rounded-corners="${args.hasRoundedCorners}" />`;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
	text: 'Hello World',
	color: 'red',
	hasRoundedCorners: true,
}

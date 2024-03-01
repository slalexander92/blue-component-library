export default {
	title: 'Components/MultipleComponentsPlayingTogether',
	tags: ['autodocs'],
  argTypes: {
    constraintSize: {
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			}
    },
    paddingSize: {
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			}
    },
  },
}

const DefaultTemplate = (args) => {
	return `
		<multiple-components-playing-together
			constraint-size="${args.constraintSize}"
			padding-size="${args.paddingSize}"
			text="${args.text}"
			color="${args.color}"
			has-rounded-corners="${args.hasRoundedCorners}"
			is-disabled="${args.isDisabled}"
		/>
	`;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
	constraintSize: 'small',
	paddingSize: 'small',
	text: 'Hello World',
	color: 'red',
	hasRoundedCorners: true,
	isDisabled: false,
}

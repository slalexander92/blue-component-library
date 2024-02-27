export default {
	title: 'Components/ContentWrapper',
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

const DefaultTemplate = args => {
	return `
		<content-wrapper constraint-size="${args.constraintSize}" padding-size="${args.paddingSize}">
			<div style="display: flex; justify-content: center">
				<h1>Hello I am some content in the slot</h1>
			</div?
		</content-wrapper>
	`;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
	constraintSize: 'small',
	paddingSize: 'small',
}

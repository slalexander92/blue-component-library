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

const DefaultTemplate = ({ constraintSize, paddingSize }) => {
	return `
		<content-wrapper constraint-size="${constraintSize}" padding-size="${paddingSize}">
			<div style="display: flex; flex-direction: column; align-items: center">
				<h1>Hello, I am some content in the slot</h1>
				<h2>Hello, I am a sub-heading in the slot</h2>
			</div>
		</content-wrapper>
	`;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
	constraintSize: 'small',
	paddingSize: 'small',
}

import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'content-wrapper',
  styleUrl: 'content-wrapper.scss',
  shadow: true,
})

export class ContentWrapper {
	@Prop() constraintSize: string = 'small';
	@Prop() paddingSize: string = 'small';

	getConstraintSize() {
		return `constraint-${this.constraintSize}`;
	}

	getPaddingSize() {
		return `padding-${this.paddingSize}`;
	}

  render() {
    return (
			<div class={['root', this.getConstraintSize(), this.getPaddingSize()].join(' ')}>
				<slot></slot>
			</div>
		);
  }
}

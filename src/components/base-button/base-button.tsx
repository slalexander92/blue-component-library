import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'base-button',
  styleUrl: 'base-button.scss',
  shadow: true,
})

export class BaseButton {
  @Prop() text: string = 'Hello World';
	@Prop() hasRoundedCorners: boolean = false;
	@Prop() color: string = 'Red';
	@Prop() isDisabled: boolean = false;

  render() {
    return (
			<button class={['root', this.hasRoundedCorners ? 'has-rounded-corners' : ''].join(' ')} style={{'--bg-color': this.color}} disabled={this.isDisabled}>
				{ this.text }
			</button>
		);
  }
}

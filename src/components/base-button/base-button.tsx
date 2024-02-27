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

  render() {
    return (
			<button class={['root', this.hasRoundedCorners ? 'has-rounded-corners' : ''].join(' ')} style={{'background-color': this.color}}>
				{ this.text }
			</button>
		);
  }
}

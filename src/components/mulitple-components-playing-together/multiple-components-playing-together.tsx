import { Component, Prop, h } from '@stencil/core';

import '../base-button/base-button';
import '../content-wrapper/content-wrapper';

@Component({
  tag: 'multiple-components-playing-together',
  styleUrl: 'multiple-components-playing-together.scss',
  shadow: true,
})

export class MultipleComponentsPlayingTogether {
	@Prop() constraintSize: string;
	@Prop() paddingSize: string;

  @Prop() text: string = 'Hello World';
	@Prop() hasRoundedCorners: boolean = false;
	@Prop() color: string = 'Red';
	@Prop() isDisabled: boolean = false;

  render() {
    return (
			<content-wrapper constraintSize={this.constraintSize} paddingSize={this.paddingSize}>
				<div class="content-wrapper">
					<base-button
						text={this.text}
						hasRoundedCorners={this.hasRoundedCorners}
						color={this.color}
						isDisabled={this.isDisabled}
					/>
				</div>
			</content-wrapper>
		);
  }
}

import { Component, h } from '@stencil/core';


@Component({
	tag: 'base-spacing',
	styleUrl: 'base-spacing.scss'
})

export class BaseSpacing {
	render() {
		const spacing = [2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 96, 120];

		const tableRows = spacing.map((value, i) => {
			const formatClass = index => index < 10 ? `0${index}` : index;

			return (
				<tr>
					<td>{`$spacing-${i + 1}`}</td>
					<td>{`${value}px`}</td>
					<td class={`spacing-${formatClass(i + 1)}`}>{value}</td>
				</tr>
			);
		})

		return (
			<table class="spacing-table">
				<thead>
					<tr>
						<th>Variable Name</th>
						<th>Size</th>
						<th>Example</th>
					</tr>
				</thead>
				<tbody>
					{ tableRows }
				</tbody>
			</table>
		);
	}
}

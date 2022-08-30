import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'wow-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <button class="c-btn">Button</button>
      </Host>
    );
  }
}

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'wow-text',
  styleUrl: 'text.scss',
  shadow: true,
})
export class MyComponent {
  @Prop()
  mood?: 'edited' | 'forwarded' | '' = '';

  render() {
    return (
      <Host>
        <p class={`c-text ${this.mood} `}>
          <slot />
        </p>
      </Host>
    );
  }
}

import { newSpecPage } from '@stencil/core/testing';
import { ComponentTest1 } from '../component-test1';

describe('component-test1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentTest1],
      html: `<component-test1></component-test1>`,
    });
    expect(page.root).toEqualHtml(`
      <component-test1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-test1>
    `);
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('component-test1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-test1></component-test1>');

    const element = await page.find('component-test1');
    expect(element).toHaveClass('hydrated');
  });
});

import {device, element, by} from 'detox';

describe('Scrolling', () => {
	it('should scroll', async () => {
		await element(by.id('scroll-view')).scrollTo('bottom');
		await element(by.id('scroll-view')).scrollTo('top');
	});
});

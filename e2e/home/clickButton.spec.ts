import {device, element, by} from 'detox';

describe('Tapping button', () => {

	it('should tap simple button 3 times', async () => {
		await element(by.id('simple-button')).tap();
		await element(by.id('simple-button')).tap();
		await element(by.id('simple-button')).tap();
	});
	
});

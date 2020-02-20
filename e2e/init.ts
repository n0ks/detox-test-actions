import {cleanup, init, device} from 'detox';
const adapter = require('detox/runners/jest/adapter');

const config = require('../package.json').detox;

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
	await init(config, {initGlobals: false});
	await device.reloadReactNative();
});

beforeEach(async () => {
	await adapter.beforeEach();
});

afterAll(async () => {
	await adapter.afterAll();
	await cleanup();
});

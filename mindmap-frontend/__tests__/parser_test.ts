import { parseByMarkDown } from '../src/renderer/src/components/mindmap-renderer/parser';

test('title content baisc test', () => {
	const input1 = `
# Title 1
Content 1
## Subtitle 1
Content 2`;

	let result1 = parseByMarkDown(input1);
	expect(result1).toEqual({ 'Title 1': ['Content 1'], 'Subtitle 1': ['Content 2'] });
});

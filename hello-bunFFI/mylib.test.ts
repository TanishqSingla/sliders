import { expect, test } from "bun:test";

test('prints hello world', async () => {
	const buffer = Bun.spawnSync(['bun', 'index.ts']).stdout.toString();

	expect(buffer).toBe('Hello world\n');
});

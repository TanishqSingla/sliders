import { describe, expect, it } from "bun:test";
import { dlopen, suffix } from 'bun:ffi'

const libPath = `libmy_lib.${suffix}`

const {symbols: {
	sum
}} = dlopen(libPath, {
	sum: {
		args: ['int', 'int'],
		returns: 'int'
	}
})

describe('sum', () => {
	it('should return the sum', () => {
		expect(sum(6,9)).toBe(15);
		expect(sum(100,200)).toBe(300);
		expect(sum(-100,100)).toBe(0);
		expect(sum(-1, -29)).toBe(-30);
	});
});

describe('print', () => {
	it('should print to console', () => {
		const app = Bun.spawnSync(['bun', 'index.ts']).stdout.toString();
		
		expect(app).toBe("Test");
	});
})

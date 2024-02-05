import { suffix, dlopen } from "bun:ffi";
import { describe, expect, it } from "bun:test";

const libpath = `libparse_metadata.${suffix}`;

const { symbols: {parse_metadata} } = dlopen(libpath, {
	parse_metadata: {
		args: ['cstring'],
		returns: 'cstring'
	}
});

describe("parse_metadata", () => {
	it(`should return error when file doesn't exists`, () => {
		const result = parse_metadata(Buffer.from("hello.md"));

		expect(String(result)).toBe('Error: File does not exist');
	});

	it('should return meta data if file exists', () => {
		const result = parse_metadata(Buffer.from('README.md\0'));

		expect(JSON.parse(String(result))).toStrictEqual({title: 'README', date: '12-07-21'});
	});
});


import { dlopen, suffix } from 'bun:ffi'

const libPath = `libmy_lib.${suffix}`

const {symbols: {
	print
}} = dlopen(libPath, {
	print: {
		args: ['cstring'],
	}
});

print(Buffer.from("Test"));

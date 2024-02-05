import { dlopen, suffix } from 'bun:ffi';

const path = `libmylib.${suffix}`;

const {symbols} = dlopen(path, {
	hello_world: {
		args: [],
	}
});

symbols.hello_world();

process.stdout.on('data', () => {
	console.log("EVENT")
})

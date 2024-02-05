#include <cstdio>
extern "C" {
	int sum(int a, int b) {
		return a + b;
	}

	void print(const char* string) {
		printf("%s", string);
	}
}

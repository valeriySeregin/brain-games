install:
	npm ci

start:
	npm run babel-node -- src/bin/brain-games.js

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test
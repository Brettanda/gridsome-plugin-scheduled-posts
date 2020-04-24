# @gridsome/plugin-scheduled-posts

This plugin hides posts that have a post date in the future.

## Install

```bash
yarn add @gridsome/plugin-scheduled-posts
#or
npm install @gridsome/plugin-scheduled-posts
```

## Usage

You will have to make sure the the `timeZoneOffset` is correct for your setup.

```js
module.exports = {
	plugins: [
		{
			use: "@gridsome/plugin-scheduled-posts",
			options: {
				typeName: "Post",
				timeZoneOffset: "-6"
			}
		}
	]
};
```


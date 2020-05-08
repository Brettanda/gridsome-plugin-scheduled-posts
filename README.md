# @brettanda/gridsome-plugin-scheduled-posts

[![GitHub license](https://img.shields.io/github/license/Brettanda/gridsome-plugin-scheduled-posts)](https://github.com/Brettanda/gridsome-plugin-scheduled-posts/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FBrettanda%2Fgridsome-plugin-scheduled-posts)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FBrettanda%2Fgridsome-plugin-scheduled-posts)

> Hide posts that have a post date in the future. This only runs on build and will require a rebuild to update

## Install

- `yarn add @brettanda/gridsome-plugin-scheduled-posts`

- `npm install @brettanda/gridsome-plugin-scheduled-posts`

## Usage

You will have to make sure the the `timeZoneOffset` is correct for your setup.

```js
module.exports = {
	plugins: [
		{
			use: "@brettanda/gridsome-plugin-scheduled-posts",
			options: {
				typeName: "Post",
				timeZoneOffset: "-6"
			}
		}
	]
};
```


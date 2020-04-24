module.exports = function (api, options) {
	var date = new Date(Date.now());
	date = new Date(date + date.getTimezoneOffset());
	date = options.timeZoneOffset.charAt(1) == "-" ? new Date(date.setHours(date.getHours() - parseFloat(options.timeZoneOffset.substr(1)))) : new Date(date.setHours(date.getHours() + parseFloat(options.timeZoneOffset.substr(1))));

	api.onCreateNode(postOptions => {
		if (postOptions.internal.typeName === options.typeName && Date.parse(date) <= Date.parse(postOptions.date)) return null;

		return { ...postOptions, id: postOptions.id };
	});
};

module.exports.defaultOptions = () => ({
	typeName: "Post",
	timeZoneOffset: "-6"
});

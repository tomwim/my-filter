enyo.kind({
	name: "ImageFilter",
	published: {
		image: "",
		filters: []
	},
	create: function() {
		this.inherited(arguments);
		this.imageChanged();
		this.filters = [
			{
				contrast: 30,
				brightness: 10,
				grayscale: 10,
				invert: 10,
				blur: 0

			},
			{
				contrast: 10,
				brightness: 30,
				invert: 20,
				grayscale: 10
			},
			{
				contrast: 30,
				brightness: 10,
				grayscale: 10,
				invert: 10,
				blur: 0

			},
			{
				contrast: 10,
				brightness: 30,
				invert: 20,
				grayscale: 10
			},
			{
				contrast: 30,
				brightness: 10,
				grayscale: 10,
				invert: 10,
				blur: 0

			},
			{
				contrast: 10,
				brightness: 30,
				invert: 20,
				grayscale: 10
			}
		];
		this.$.filterRepeater.setCount(this.filters.length);
//		this.buildFilterThumbnails();
	},
	imageChanged: function() {
		this.$.imgTaken.setSrc(this.image);
	},
	filtersChanged: function() {
//		this.buildFilterThumbnails();
		this.$.filterRepeater.setCount(filters.length);
	},
	tap: function() {

	},
	setupFilters: function(inSender, inEvent) {
		var index = inEvent.index;
		var item = inEvent.item;
		item.$.image.setSrc(this.image);
		item.$.image.applyStyle("-webkit-filter", this.createStyle(index));
		return true;
	},
	filterTapped: function(inSender, inEvent) {
		var index = inEvent.index;
		
		this.$.imgTaken.applyStyle("-webkit-filter", this.createStyle(index));
	},
	createStyle: function(index) {
		style = "contrast(" + (this.filters[index].contrast || 100) +"%) " + 
			"brightness(" + (this.filters[index].brightness || 0) + "%) " + 
			"grayscale(" + (this.filters[index].grayscale || 0) + "%) " +
			"saturate(" + (this.filters[index].saturate || 100) + "%) " + 
			"hue-rotate(" + (this.filters[index].hue || 0) + "deg) " + 
			"sepia(" + (this.filters[index].sepia || 0) + "%) " +
			"invert(" + (this.filters[index].invert || 0) + "%) " + 
			"blur(" + (this.filters[index].blur || 0) + "px) ;";
		return style;
	},
	/*
	buildFilterThumbnails: function() {
		this.$.filterBar.destroyClientControls();
		for(var i = 0; i < this.filters.length; i++) {
			image = this.image;
			style = "-webkit-filter: contrast(" + (this.filters[i].contrast || 100) +"%) " + 
			"brightness(" + (this.filters[i].brightness || 0) + "%) " + 
			"grayscale(" + (this.filters[i].grayscale || 0) + "%) " +
			"saturate(" + (this.filters[i].saturate || 100) + "%) " + 
			"hue-rotate(" + (this.filters[i].hue || 0) + "deg) " + 
			"sepia(" + (this.filters[i].sepia || 0) + "%) " +
			"invert(" + (this.filters[i].invert || 0) + "%) " + 
			"blur(" + (this.filters[i].blur || 0) + "px)";
			this.$.filterBar.createComponent({kind: "Image", src: this.image, style: "width: 100px; height: 100px; " + style +  ";", ontap: "tap", owner: this});
		}
	},
	*/
	components: [
		{kind: "Image", name: "imgTaken", style: "width: 100%"},
		{kind: "onyx.InputDecorator", style: "display: block;", components: [
			{kind: "onyx.Input", type: "text"}
		]},
		{kind: "Scroller", name: "filterBar", style: "white-space: nowrap; width: 100%;",components: [
			{kind: "Repeater", name: "filterRepeater", onSetupItem: "setupFilters", components: [
				{kind: "Image", ontap: "filterTapped", style: "width: 100px; height: 100px"}
			]}
		]}
	]
});
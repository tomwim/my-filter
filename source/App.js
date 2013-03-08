enyo.kind({
	name: "App",
	components:[
		{classes: "sliders", components: [
			{content: "Contrast: " + this.contrast + "%", name: "contrast"},
			{kind: "onyx.Slider", value: 33, onChanging: "setContrast", onChange: "setContrast"},
			{content: "Brightness: " + this.brightness + "%", name: "brightness"},
			{kind: "onyx.Slider", value: 50, onChanging: "setBrightness", onChange: "setBrightness"},
			{content: "Grayscale: " + this.grayscale + "%", name: "grayscale"},
			{kind: "onyx.Slider", value: this.grayscale, onChanging: "setGrayscale", onChange: "setGrayscale"},
			{content: "Saturate: " + this.saturate + "%", name: "saturate"},
			{kind: "onyx.Slider", value: 14, onChanging: "setSaturate", onChange: "setSaturate"},
			{content: "Invert: " + this.invert + "%", name: "invert"},
			{kind: "onyx.Slider", value: this.invert, onChanging: "setInvert", onChange: "setInvert"},
			{content: "Hue-rotate: " + this.hue + " deg", name: "hue"},
			{kind: "onyx.Slider", value: this.hue, onChanging: "setHue", onChange: "setHue"},
			{content: "Sepia: " + this.sepia + "%", name: "sepia"},
			{kind: "onyx.Slider", value: this.sepia, onChanging: "setSepia", onChange: "setSepia"},
			{content: "Blur: " + this.blur + "%", name: "blur"},
			{kind: "onyx.Slider", value: this.blur, onChanging: "setBlur", onChange: "setBlur"},
			{content: "Box-Spread: " + this.spread + "%", name: "spread"},
			{kind: "onyx.Slider", value: this.spread, onChanging: "setSpread", onChange: "setSpread"},
			{content: "Box-Alpha: " + this.alpha + "%", name: "alpha"},
			{kind: "onyx.Slider", value: this.alpha, onChanging: "setAlpha", onChange: "setAlpha"},
			{content: "New File"},
			{kind: "Input", name: "picker", type: "text", onchange: "newFile"}
		]},
		{style: "display: inline-block; position: relative;", components: [
			{name: "shadow", style: "position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 100;"},
			{classes: "image", kind: "Image", name: "image"}
		]}
	],
	published: {
		image: ""
	},
	imageChanged: function() {
		this.$.image.setSrc(this.image);
	},
	create: function() {
		this.inherited(arguments);
		this.contrast = 100;
		this.brightness = 0;
		this.grayscale = 0;
		this.saturate = 100;
		this.invert = 0;
		this.hue = 0;
		this.sepia = 0;
		this.blur = 0;
		this.spread = 0;
		this.alpha = 0;
		this.imageChanged();
	},
	newFile: function(inSender, inEvent) {
		this.log(this.$.picker.getValue());
		this.setImage(this.$.picker.getValue());
	},
	setBoxShadow: function() {
		this.$.shadow.applyStyle("box-shadow", "inset 0 0 " + this.spread + "px rgba(0, 0, 0, " + this.alpha + ")");
	},
	setImageStyle: function() {
		this.$.image.applyStyle("-webkit-filter", "contrast(" + this.contrast +"%) brightness(" + this.brightness + "%) grayscale(" + this.grayscale + "%)" +
			" saturate(" + this.saturate + "%) hue-rotate(" + this.hue + "deg) sepia(" + this.sepia + "%)" +
			" invert(" + this.invert + "%) blur(" + this.blur + "px)");
		this.$.shadow.applyStyle("position", "absolute");
		this.$.shadow.applyStyle("width", "100%");
		this.$.shadow.applyStyle("height", "100%");
		this.$.shadow.applyStyle("top", "0");
		this.$.shadow.applyStyle("left", "0");
		this.setBoxShadow();
	},
	setContrast: function(inSender, inEvent) {
		this.contrast = inSender.getValue() * 3;
		this.$.contrast.setContent("Contrast: " + Math.round(this.contrast) + "%");
		this.setImageStyle();
	},
	setBrightness: function(inSender, inEvent) {
		this.brightness = (inSender.getValue() * 2) - 100;
		this.$.brightness.setContent("Brightness: " + Math.round(this.brightness) + "%");
		this.setImageStyle();
	},
	setGrayscale: function(inSender, inEvent) {
		this.grayscale = inSender.getValue();
		this.$.grayscale.setContent("Grayscale: " + Math.round(this.grayscale) + "%");
		this.setImageStyle();
	},
	setSaturate: function(inSender, inEvent) {
		this.saturate = inSender.getValue() * 7;
		this.$.saturate.setContent("Saturate: " + Math.round(this.saturate) + "%");
		this.setImageStyle();
	},
	setInvert: function(inSender, inEvent) {
		this.invert = inSender.getValue();
		this.$.invert.setContent("Invert: " + Math.round(this.invert) + "%");
		this.setImageStyle();
	},
	setHue: function(inSender, inEvent) {
		this.hue = inSender.getValue() * 3.6;
		this.$.hue.setContent("Hue-Rotate: " + Math.round(this.hue) + "deg");
		this.setImageStyle();
	},
	setSepia: function(inSender, inEvent) {
		this.sepia = inSender.getValue();
		this.$.sepia.setContent("Sepia: " + Math.round(this.sepia) + "%");
		this.setImageStyle();
	},
	setBlur: function(inSender, inEvent) {
		this.blur = inSender.getValue() / 10;
		this.$.blur.setContent("Blur: " + Math.round(this.blur) + "%");
		this.setImageStyle();
	},
	setSpread: function(inSender, inEvent) {
		this.spread = inSender.getValue() * 3;
		this.$.spread.setContent("Spread: " + Math.round(this.spread) + "%");
		this.setBoxShadow();
	},
	setAlpha: function(inSender, inEvent) {
		this.alpha = inSender.getValue() / 100;
		this.$.alpha.setContent("Alpha: " + Math.round(this.alpha) + "%");
		this.setBoxShadow();
	}
});

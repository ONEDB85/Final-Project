(function () {

	function cuisineDirective() {
		return {
			restrict: "A",
			link: function ($scope, $element, $attrs) {
				$element.on("click", function () {
					var listText = this.textContent;
					var header = document.getElementById("cuisine");
					header.innerText = listText;
				});
			}
		}
	}

	angular
		.module("vaCaApp")
		.directive("cuisineDirective", cuisineDirective);

})();
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/localization.ts":
/*!*****************************!*\
  !*** ./src/localization.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onPageLoad = void 0;
// Function to load components from a file
function loadComponentsFromFile(filePath) {
    return new Promise(function (resolve, reject) {
        // Assuming you're using fetch API for loading files
        fetch(filePath)
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to load components file");
            }
            return response.text();
        })
            .then(function (data) {
            // Parse the file content
            var components = JSON.parse(data);
            resolve(components);
        })
            .catch(function (error) { return reject(error); });
    });
}
// Function to populate components on page load
function populateComponents(components) {
    components.forEach(function (component) {
        var element = document.getElementById(component.id);
        if (element) {
            element.textContent = component.text;
        }
    });
}
// Function to execute on page load
function onPageLoad(pathStart) {
    var filePath = pathStart + "/languages/english.json"; // File containing component IDs and text
    loadComponentsFromFile(filePath)
        .then(function (components) {
        populateComponents(components);
    })
        .catch(function (error) {
        console.error("Error loading components:", error);
    });
}
exports.onPageLoad = onPageLoad;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/links.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Add event listener for page load
var localization_1 = __webpack_require__(/*! ./localization */ "./src/localization.ts");
window.addEventListener("load", function () { return (0, localization_1.onPageLoad)(".."); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSwwQ0FBMEM7QUFDMUMsU0FBUyxzQkFBc0IsQ0FBQyxRQUFnQjtJQUM5QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsb0RBQW9EO1FBQ3BELEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDWixJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1QseUJBQXlCO1lBQ3pCLElBQU0sVUFBVSxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELCtDQUErQztBQUMvQyxTQUFTLGtCQUFrQixDQUFDLFVBQXVCO0lBQ2pELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1FBQzNCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELG1DQUFtQztBQUNuQyxTQUFnQixVQUFVLENBQUMsU0FBZ0I7SUFDekMsSUFBTSxRQUFRLEdBQUcsU0FBUyxHQUFHLHlCQUF5QixDQUFDLENBQUMseUNBQXlDO0lBQ2pHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztTQUM3QixJQUFJLENBQUMsVUFBQyxVQUFVO1FBQ2Ysa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztRQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVEQsZ0NBU0M7Ozs7Ozs7VUM5Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLG1DQUFtQztBQUNuQyx3RkFBeUM7QUFDekMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxjQUFJLG9DQUFVLEVBQUMsSUFBSSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmb2xpby8uL3NyYy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vd29ya2ZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmb2xpby8uL3NyYy9saW5rcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgYSBDb21wb25lbnQgaW50ZXJmYWNlIHRvIHJlcHJlc2VudCBjb21wb25lbnRzIHdpdGggdGV4dCBhbmQgSURzXG5pbnRlcmZhY2UgQ29tcG9uZW50IHtcbiAgaWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vLyBGdW5jdGlvbiB0byBsb2FkIGNvbXBvbmVudHMgZnJvbSBhIGZpbGVcbmZ1bmN0aW9uIGxvYWRDb21wb25lbnRzRnJvbUZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50W10+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBBc3N1bWluZyB5b3UncmUgdXNpbmcgZmV0Y2ggQVBJIGZvciBsb2FkaW5nIGZpbGVzXG4gICAgZmV0Y2goZmlsZVBhdGgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2FkIGNvbXBvbmVudHMgZmlsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBmaWxlIGNvbnRlbnRcbiAgICAgICAgY29uc3QgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXNvbHZlKGNvbXBvbmVudHMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gcG9wdWxhdGUgY29tcG9uZW50cyBvbiBwYWdlIGxvYWRcbmZ1bmN0aW9uIHBvcHVsYXRlQ29tcG9uZW50cyhjb21wb25lbnRzOiBDb21wb25lbnRbXSk6IHZvaWQge1xuICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb21wb25lbnQuaWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29tcG9uZW50LnRleHQ7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBwYWdlIGxvYWRcbmV4cG9ydCBmdW5jdGlvbiBvblBhZ2VMb2FkKHBhdGhTdGFydDpzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoU3RhcnQgKyBcIi9sYW5ndWFnZXMvZW5nbGlzaC5qc29uXCI7IC8vIEZpbGUgY29udGFpbmluZyBjb21wb25lbnQgSURzIGFuZCB0ZXh0XG4gIGxvYWRDb21wb25lbnRzRnJvbUZpbGUoZmlsZVBhdGgpXG4gICAgLnRoZW4oKGNvbXBvbmVudHMpID0+IHtcbiAgICAgIHBvcHVsYXRlQ29tcG9uZW50cyhjb21wb25lbnRzKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGNvbXBvbmVudHM6XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHBhZ2UgbG9hZFxuaW1wb3J0IHtvblBhZ2VMb2FkfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpPT5vblBhZ2VMb2FkKFwiLi5cIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
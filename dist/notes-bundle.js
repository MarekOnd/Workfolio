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
  !*** ./src/notes.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Add event listener for page load
var localization_1 = __webpack_require__(/*! ./localization */ "./src/localization.ts");
window.addEventListener("load", function () { return (0, localization_1.onPageLoad)(".."); }); // one step higher

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSwwQ0FBMEM7QUFDMUMsU0FBUyxzQkFBc0IsQ0FBQyxRQUFnQjtJQUM5QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsb0RBQW9EO1FBQ3BELEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDWixJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1QseUJBQXlCO1lBQ3pCLElBQU0sVUFBVSxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELCtDQUErQztBQUMvQyxTQUFTLGtCQUFrQixDQUFDLFVBQXVCO0lBQ2pELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1FBQzNCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELG1DQUFtQztBQUNuQyxTQUFnQixVQUFVLENBQUMsU0FBZ0I7SUFDekMsSUFBTSxRQUFRLEdBQUcsU0FBUyxHQUFHLHlCQUF5QixDQUFDLENBQUMseUNBQXlDO0lBQ2pHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztTQUM3QixJQUFJLENBQUMsVUFBQyxVQUFVO1FBQ2Ysa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztRQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVEQsZ0NBU0M7Ozs7Ozs7VUM5Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLG1DQUFtQztBQUNuQyx3RkFBeUM7QUFDekMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxjQUFJLG9DQUFVLEVBQUMsSUFBSSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxtQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZm9saW8vLi9zcmMvbG9jYWxpemF0aW9uLnRzIiwid2VicGFjazovL3dvcmtmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZm9saW8vLi9zcmMvbm90ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVmaW5lIGEgQ29tcG9uZW50IGludGVyZmFjZSB0byByZXByZXNlbnQgY29tcG9uZW50cyB3aXRoIHRleHQgYW5kIElEc1xuaW50ZXJmYWNlIENvbXBvbmVudCB7XG4gIGlkOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuLy8gRnVuY3Rpb24gdG8gbG9hZCBjb21wb25lbnRzIGZyb20gYSBmaWxlXG5mdW5jdGlvbiBsb2FkQ29tcG9uZW50c0Zyb21GaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFtdPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gQXNzdW1pbmcgeW91J3JlIHVzaW5nIGZldGNoIEFQSSBmb3IgbG9hZGluZyBmaWxlc1xuICAgIGZldGNoKGZpbGVQYXRoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBjb21wb25lbnRzIGZpbGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZmlsZSBjb250ZW50XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHM6IENvbXBvbmVudFtdID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgcmVzb2x2ZShjb21wb25lbnRzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHBvcHVsYXRlIGNvbXBvbmVudHMgb24gcGFnZSBsb2FkXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbXBvbmVudHMoY29tcG9uZW50czogQ29tcG9uZW50W10pOiB2b2lkIHtcbiAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29tcG9uZW50LmlkKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbXBvbmVudC50ZXh0O1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gcGFnZSBsb2FkXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTG9hZChwYXRoU3RhcnQ6c3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aFN0YXJ0ICsgXCIvbGFuZ3VhZ2VzL2VuZ2xpc2guanNvblwiOyAvLyBGaWxlIGNvbnRhaW5pbmcgY29tcG9uZW50IElEcyBhbmQgdGV4dFxuICBsb2FkQ29tcG9uZW50c0Zyb21GaWxlKGZpbGVQYXRoKVxuICAgIC50aGVuKChjb21wb25lbnRzKSA9PiB7XG4gICAgICBwb3B1bGF0ZUNvbXBvbmVudHMoY29tcG9uZW50cyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBjb21wb25lbnRzOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBwYWdlIGxvYWRcbmltcG9ydCB7b25QYWdlTG9hZH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uXCJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKT0+b25QYWdlTG9hZChcIi4uXCIpKTsvLyBvbmUgc3RlcCBoaWdoZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
  !*** ./src/index.ts ***!
  \**********************/

//import { Modal } from 'flowbite'
//
//// select the two elements that we'll work with
//const $buttonElement: HTMLElement = document.querySelector('#button');
//const $modalElement: HTMLElement = document.querySelector('#modal');
//
//// create a new modal component
//const modal = new Modal($modalElement);
//
//// toggle the visibility of the modal when clicking on the button
//$buttonElement.addEventListener('click', () => modal.toggle());
Object.defineProperty(exports, "__esModule", ({ value: true }));
var localization_1 = __webpack_require__(/*! ./localization */ "./src/localization.ts");
// Add event listener for page load
window.addEventListener("load", function () { return (0, localization_1.onPageLoad)("."); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU1BLDBDQUEwQztBQUMxQyxTQUFTLHNCQUFzQixDQUFDLFFBQWdCO0lBQzlDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxvREFBb0Q7UUFDcEQsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNaLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLElBQUk7WUFDVCx5QkFBeUI7WUFDekIsSUFBTSxVQUFVLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBSyxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsK0NBQStDO0FBQy9DLFNBQVMsa0JBQWtCLENBQUMsVUFBdUI7SUFDakQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7UUFDM0IsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsbUNBQW1DO0FBQ25DLFNBQWdCLFVBQVUsQ0FBQyxTQUFnQjtJQUN6QyxJQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcseUJBQXlCLENBQUMsQ0FBQyx5Q0FBeUM7SUFDakcsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1NBQzdCLElBQUksQ0FBQyxVQUFDLFVBQVU7UUFDZixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFURCxnQ0FTQzs7Ozs7OztVQzlDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7OztBQ3RCQSxrQ0FBa0M7QUFDbEMsRUFBRTtBQUNGLGlEQUFpRDtBQUNqRCx3RUFBd0U7QUFDeEUsc0VBQXNFO0FBQ3RFLEVBQUU7QUFDRixpQ0FBaUM7QUFDakMseUNBQXlDO0FBQ3pDLEVBQUU7QUFDRixtRUFBbUU7QUFDbkUsaUVBQWlFOztBQUdqRSx3RkFBeUM7QUFDekMsbUNBQW1DO0FBQ25DLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsY0FBSSxvQ0FBVSxFQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya2ZvbGlvLy4vc3JjL2xvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly93b3JrZm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya2ZvbGlvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERlZmluZSBhIENvbXBvbmVudCBpbnRlcmZhY2UgdG8gcmVwcmVzZW50IGNvbXBvbmVudHMgd2l0aCB0ZXh0IGFuZCBJRHNcbmludGVyZmFjZSBDb21wb25lbnQge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGxvYWQgY29tcG9uZW50cyBmcm9tIGEgZmlsZVxuZnVuY3Rpb24gbG9hZENvbXBvbmVudHNGcm9tRmlsZShmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRbXT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIEFzc3VtaW5nIHlvdSdyZSB1c2luZyBmZXRjaCBBUEkgZm9yIGxvYWRpbmcgZmlsZXNcbiAgICBmZXRjaChmaWxlUGF0aClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGxvYWQgY29tcG9uZW50cyBmaWxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGZpbGUgY29udGVudFxuICAgICAgICBjb25zdCBjb21wb25lbnRzOiBDb21wb25lbnRbXSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIHJlc29sdmUoY29tcG9uZW50cyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBwb3B1bGF0ZSBjb21wb25lbnRzIG9uIHBhZ2UgbG9hZFxuZnVuY3Rpb24gcG9wdWxhdGVDb21wb25lbnRzKGNvbXBvbmVudHM6IENvbXBvbmVudFtdKTogdm9pZCB7XG4gIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbXBvbmVudC5pZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb21wb25lbnQudGV4dDtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBleGVjdXRlIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGZ1bmN0aW9uIG9uUGFnZUxvYWQocGF0aFN0YXJ0OnN0cmluZyk6IHZvaWQge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGhTdGFydCArIFwiL2xhbmd1YWdlcy9lbmdsaXNoLmpzb25cIjsgLy8gRmlsZSBjb250YWluaW5nIGNvbXBvbmVudCBJRHMgYW5kIHRleHRcbiAgbG9hZENvbXBvbmVudHNGcm9tRmlsZShmaWxlUGF0aClcbiAgICAudGhlbigoY29tcG9uZW50cykgPT4ge1xuICAgICAgcG9wdWxhdGVDb21wb25lbnRzKGNvbXBvbmVudHMpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgY29tcG9uZW50czpcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdmbG93Yml0ZSdcbi8vXG4vLy8vIHNlbGVjdCB0aGUgdHdvIGVsZW1lbnRzIHRoYXQgd2UnbGwgd29yayB3aXRoXG4vL2NvbnN0ICRidXR0b25FbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24nKTtcbi8vY29uc3QgJG1vZGFsRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcbi8vXG4vLy8vIGNyZWF0ZSBhIG5ldyBtb2RhbCBjb21wb25lbnRcbi8vY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJG1vZGFsRWxlbWVudCk7XG4vL1xuLy8vLyB0b2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIG1vZGFsIHdoZW4gY2xpY2tpbmcgb24gdGhlIGJ1dHRvblxuLy8kYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLnRvZ2dsZSgpKTtcblxuXG5pbXBvcnQge29uUGFnZUxvYWR9IGZyb20gXCIuL2xvY2FsaXphdGlvblwiXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHBhZ2UgbG9hZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpPT5vblBhZ2VMb2FkKFwiLlwiKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
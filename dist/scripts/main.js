/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/imageFile.jpg":
/*!******************************!*\
  !*** ./assets/imageFile.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAD2APYDAREAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAQIAAwQFBgcI/8QAPhAAAQMDAgQDBQYEBQQDAAAAAQACAwQRIQUSMUFRYQYTcSIygZGhBxRCUrHBCCMz0RVDU2KCkrLC4SQ1cv/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMFBgQH/8QANREAAgEDAgQCCgICAgMBAAAAAAECAwQREiEFMUFRBhMiMmFxgZGhscHRFOFC8CNSFRYzgv/aAAwDAQACEQMRAD8AgaunOfCGoQAtUgLBYoCxzbhQCktsVIHYLFQASts66ICPbZ3JSBSEBCOyAUtQEAQAIQBDUIBZCSFqAFkBNqAlkBLIAlqAm1AGyANkBNqAYNQB22QBDUA23sgCGoQNZQSSyAJagABYhAXAXFlBBU9qkEAQkd7bsBChArLcKQLtUgG1QAFqkADUBC1AANygIWoAbUBNqAm1ATagJtQBDUBNqAO1AQNQBDUAwFkAduOCEBDeyAICAYNUANkBLdkBLYUgFkBazgoAr25QCgKQWsF2kKAZsejVM2kO1CmaJoI3FszWe9EepHQjmvM7uEa3kT2b5e0zeTJw8yO66+w1dvkvUYQWQAQAIQEIuEALIA2whBLISC2UBNqAO1ATagJtQB2oCbUAdqAIagDtUAO1AENQBDcoQMG9kACFJBLISQBCAEISPHxsgHe3HBQCrbYqQO3ioBvvCOpS6bqrvKcQ2VhBbyJGf7rnPE9Juz8+PODz8Hs/wbrgcoyufJnykvr0N1qWj6Xr4dPpzo6HUPxR8I5D/wCJ7jC5zhviudBqFz6Ufqv2jZcQ4C1mdI4iuop6GpfT1cTopmGzmu/XuO6+g29xSuaaq0ZaovqjlqkJU5aZLDMfasxQlkBALoAFueGUBGhASxQEsgDZASygBDcoCWQkluyAO1AMAhBNqAbagIG5QDBqAYN4IBgxCCojsrAlkBLZUAJb2QEAygLrXCAqcMoCAIC+J7opI5m+8xwKwXNCNxSlRnykmvmZqFaVCpGrHmnk2VaXQTtmhJDJAHt9CvilehKhUlRnzi8fI+q0asa9ONSPJrJnR6tTajTso9cjMkYxFUs/qRfHmOxXr4dxO44bU10Ht1T5P/e5q+IcIpXccrZmp1fQ59PYKiNzamhcfZqIvd9HD8J9V9P4Vxu24nH0HifWL5/DucLeWFW0lia27mq2rcHiBZAQtQAsgDZASyAlkBLIA2ygIAgGDUJJtQBsgDZCAgIA7UAwCAYNwgGDVAKrKxUFkJJZAEDCAlkBY0YUADmqQLtQFgbcWUA2kQ8/S2Ndkxkt9Oi+V+K6Do8RlPpNJ/h/Y+heHa/mWaj1i2vyjWPbtJB4LnTe5MzSNVqNNlPlPPluw9hy1w9ETlF6ovDMVWjCstM1k31PR6Lr3sOjGn1jvdfDhjj3bw+Vl0PD/Fd7ayUaz1x9vP5/s5m/4BTacqWxz2uaHWaNUCOrZ7Dvclblj/Q/svo3D+J2/Eaeui9+q6r/AHuclXt50JYmjWbbhbAwCkcUAwaUBbTUlRUueKaCSUsaZHBjS7a0cSeyrKSjzZZRcuSKtvVSVJZATbdSA7VADZCQ7UICGoSENQjIQ1ANtQBAQDAIBgOiApspKksgJa6EhDUBLIQOwISM5uAgF2oBmiyEmfpZ9qWM53N3AdSOP0/Rcd4xs3VtY3EVvB7+5/3g6Tw1deXcOi+Ult71/Rj1sW156HIXzeLO5yYhjO39FLYyCGV8Lw5jiC03ChrI5noGj67TV9G2j1VjZoJBY7xeymhd1rSoqtGTTRqL3h8aqexpvEvhKSgY6r04uqKE5NsujHfqO/zX03gfielf4o1/RqfR+7s/Z8ji73h06Dcobr6o5Tb8uS6s1mRg1Aeh/ZfRhmm6xWOGXBsLT2tc/qFqOKTxpj8TacOhnVL4HnsjNr3NtwJC2yeVk1j2eBQ1SQTbdAHagIAgDbsgDtQB2oBg1AEBAEDKAYDsoA4agMeysQSyANlAJZSA7UAzW5QFm24VSRdqkBDUBaxzo3skZ7zTcLDWowr05UqiypLD+JenUlSmqkOa3NhWQtkY17P6cg3MPTt+y+K39nOwuZ28+cfquj+KPp9ldRu6Ma0ev36o1TmFtx3Xlzk9WSt8d8gJkZLKYlrSAbEG4VJA3OleJKzT5AA8vi5sdkKMdUeerbQqLdGVq2k02qwP1HRGgPtumpRy6lo/b5Lv/Dvihtq0vnvyUvw/38zjOK8HlRbqUlt2OVsu/OdPWfCsAofs/a84dPulPxOPoAue4lPNVrtsb2xjppJ9zyiQXkeepK6CKwkaSTy2Jt6KSobICWQEDUAQEAbIAhqAYNQBDUAwbhANZQA26hAY9lYgO1AENQDbEAWtUAYMQFgbgKCQFnzQE2oBmtxZCTP08+ZTy07slvts/cfuuF8a2OqnC9jzj6L9z5fJ/c6jw1d6akrd8nuveuZjVEftDuvnqZ2WSmanfEWkiwcLgpkjJSQbk29UJyV7b3QZM/R6+bTqtksLiLcR1VZLJjqQjUWGZviCkZU6pTyUTABWgEMaODybH65X1XwrxKVzYPznl03jPsxlfo+f8Xs/IudMf8j0HxRNHQeHW0kJG2KIMHwFlgVX+RVS7v8AJ73HyqT9iPIdq7E5nJNqkE2oA7eyAgahAbKAGyANvkgDZAMGoAhqAYBANbCAxw3CAYNQBDUAwaoBsqPTqaobjUYYn/kkjcPqLrW3fEJ2i1Toyce6w/7Pbb2auHphNZ7PYudorGn/AOyocdS4fstL/wC42P8A1l8l+zYvw5erohP8OiBt/iWn/GUj9ldeL+HvmpfL+yH4evv+pBpsZydS04DtKT+gSfjDh8eWp/D+yI+Hr1/4jt0uFwO3VKBxHIOcf2WJ+M7H/rL5L9l//XbzsikULS4hlbQuI6y7f1AWWHjDh0ubkv8A8/opPgF9H/HPxFfDJRSNmc+Ehp/DK11/kVe443wm/oTt51ViSxumvx0K0OG39vVjVhTeY7ifeaSpcfu1RFIDkAOF18nnTlTbi+nU7+MspPkWSSGWFrHW9jAKq2ycblXlAZcMFVbJMaSPorJkZEZHkKWyMnX+FaU1OrUs0n9KkjdL/wAibAfv8F1fArryOH1ornKUV8MPJzvFKWu6pt9E/uL40rvM/ktOXHPoul4FRdWr5j5R+5qOJ1dFPQubOQLOi7A58GxATZnqgJsQBDUBNuOyEB2qQHaoAQ3qgGDUAQ1CRgEBACgKQEAwCAIaoA21AMGoCwbiAHe0OhWqveC2V7vVgs91s/p+TZWnFru02pz27PdFb4Gv4EtPfIXMXfgzCbtqnwl+1+jorbxXvi4h8V+mYVTBJGbkY/MOC5G74fc2T03EHH7fPkdLbX1C7WaMk/v8jFBeHXa43C8TSPTks85zsSi/dVcexGRSLZaVBGTmNTgdR1xLLhjvaavdSlrjuYZLDOh0LWm7WwVjvYdhsh/D2PZeWvQ/yiVydTYWDTnovAySplOXvLWC5ObKU2yGyoR+1aynIOz8Pv8Au2iVEpwS4C/YD/2txwuLkml1Zqb9pSTOR1KR1RVvkdex4X6L65wy1Vrbxh16+84e8redVcunQxdnVbA8pNiAmzsgJs7ICbEBNiAmzshBNiAOwoAhnwQBDUA21AHbhAY4aoJHDUJGDUA4YgCGoBtvZAMGqANtVJRjNaZLKLRk4vVF4ZizUEchJF2O7Lnb3wtZXO9NaH7OXy/WDeWviG6obVHrXt5/Mw5KGWPh7Q7LkL7wxfW28FrXs5/Ln9zpLXj9pcbSeh+39itp3vaXAXDePZc3JOLaa5G6Uk1lGHqlEyemt+IZB6FKdRxkQ9zmHRuicWOBC96ae6MR1fhXUfPYKSoP82IfyyebenwWvuqWn048mTk6NjnNku02I4FePkQYtXUR0sbpZfgOZKvCDm8IJZeC7TdZkqdOu6wAkdZo4BZppw9BPYyRpRi843MmLUI5f5VfH5kR4Pb77O4P7cFtuFcYueGzzTeY9U+TPDxDhNG9husS6MrrKJ1PscCJIJMxytGHf2PZfVuG8TocRpeZRfvXVf73Pnt5Z1bOo6dVGNt+q2J5S37pPa/kS267D/ZV1x7k6Jdit0ZbhwIPcWVskA2dUIJs5pkB2XTIJsTIDsTIJsTIG2BMgIYmQEMTIMbyrd1GScDNYgHDDyCEjBpCEDBvZMgbblQDZabRb3F8o9kDCxTn2MkI9y6opIS+9iABy5qFJlnFGqeza8jp9VlTMWMA2qSDnNb1dtNVmOnYC5mHu6novm/iepb3F2oQWHHaUu/s9uDvOAW9elaOpJ5T3iv97mqbr8u7+ZDG5h5NJutNLhcGvRk8mZcTkn6USTSU1fGfJxIMlrhZwXlnQq2/rrbue2lcU63qvc1zTLR1DJo8PjcDdMKa0szLsd/BVxS0LKsECNzNx7dlqZU2paOpU5HVtQfVVBJNmDDR0C2NKkoRwZYczc+H86YO73Lz1vXMuTMNuHNQiyZkUOuw6Zviq5YpKST+pC93HuOh7r2WdzXtaiq0G00eW9s6V5TcKh6Bo2q+HqLSoKugjE0cnCawc4uHEE8iOi7604rU4isY9LqkcfUs4WL0y29o0/jhv+RRuPdzrLZwsq0uaweWV9Rjy3NdVeLpqhpa+ip3NPJ7dy9ELGon62PcYJ39OS9XPvObqHCWZ8gjZGHG+xgs0ei2UE4xSbya2clKTaWBNqsUJtQB2KSQ7OqgggZjgmQTYgDsTICGIDK+5NAyFi1mbSEUrR2TURpFfTMBwTdSpMaSv7qTYNBJPdTqI0mVFp26Pc4m97AXVXUJUAx6Zd/tyAAflCOp2CgbKJjY22JwOSxPcyLYrr7BrdtrdlMCJGmmjJcSFnTMTRjVTnMp37CA8ghpPI9Vq+M8Q/8AH2kqy9bkve/1zPfwuy/m3MaT5c37l++RxM2iVDnFwnY4k3NwRdfKP5CbzLmfTsqKwlsabV6Z9CWh72knjtPBbnh83Uhh8uhznE4wVXMeb5mubUljgWOIcMgg8F75UlJYaNcpuLyjIq9akl2B0cYIFnOAy7+y13/jYQeU3+jYriM9i2l1+aOlFM54+77r7bfusc+HQb1LmXjfycsyL4ZI6g7myC3VeKdOVN4kjbUqkaizBnRx1sOlaRC1x3zPBcGA9evQLxaHVm+xlcsHPVWqVNY5zZpnMj/JHgf+17YUow5Io5NmseXNcbWI6rMsMlHS+B/ELdLrjTV5J0yqIbOOcZ5SDuOfUXXotrqrZ1FWovdfJ+xni4hYwvKWmS36HtQ8L0cjGujqZS1wuHAtII68Fs140uYvEqcfqcm+EU/+zMSt8LTRtLqSUTAfgcNrvhyK29j4uoV3prx0PvzX7PLW4VOKzTeTn3RuY5zXtLXNNiCMgrrIzU4qUXlM1bTi8MG1WIDtzwQB25QE2oA7EA7IXOvtBKhsYybOkoSYGudCb8bkLFKe/Myxg8ciueBn5ArJshpDSkbeKxouzHcbCw5K5UxDI65wr4KZNlRQukgEjnDJxbksUnh4MkVlZNi2NrW2t6rHlmTBizBrSSLtKuijKTIXOte6tgjIHC/MIQUviwTa4VkyMGl1eTySwNbc2uuE8Y3DdSlRzsk389jsPC9BKnUq92l+TSyVLy7O0egXF6UdS0aXxLC2q06dzbGojbvFuJty+V1seHVpUqsU/VexreIUIVIOS9ZHAGoFrg3C6nQc3kw6ipN8FS6eUVbM2hcMGSxPdY5U8Fk2bWGoA4AD0Fl55U0zIpNGVuEoJub25leWpQjLoemjdVKb2eURuBn6rUs6JCPAIvdWROSlwBV0yyPVvso8btgjh0PWJAGD2aWoccDpG7t0PwXluaCn6S5mvvLVv/kh8T2Ba7eLNWc54upYxFFVBoEm4McfzdF3HhTi2ibta0sJ8s9+3xNTxG0c15kFlrn7jmdvZfQTQjBvCzcoDIjpXSZItboqOWCyjkvi065u51mqHULKmbCn06F7tuzHM2WKVRoyxppmyio4YYw2Nllhc23uZVBJbGRtaG2tlUyy+DHfS05cS5gJKupyKOETlnXJxleo8wfJdtu4Y6FMkYCyAbS0tGcJqGDYxNDWAA4A+CxtmRAdI7cLnAU4IyYtVJufjICtFFZMrDOG33lOSBfLIPtXt0U5IwMJG00MsstgxousFzXhb0pVaj2W5mt6M69RU4LdnE6jqr6md7m4BPFfJb26neVpVp9fouiPptpawtaUaUOS/wByYG4uz9SvJyPS0YmpU/nxh0X9ZvD/AHDovTa1/JliXqs8N5a+fHMfWXI4TVqBhc59MfLd+JhGL/sV1VCs8YlucvOGHg5qpMkbvbGAeK2ENLML2Mymqcd1SpEJmwp5i5eWcS6ZuKa4YDYm61l3VUVpXNnvs6WuWp8kZkUoL2g45XcMLUOLRvVURs36HVuAdG1jmuFwWuwVgVxBc2ZUY8miVrBcwEjsVkVxB9SUYk1DUQ5fE9o9FkjUi+pdM9j+yvxg7UYm6Rqkm6sjH8iVxzI0fhP+4fVeavRzvE1F7baH5kOR1njVhd4arHD3ow2QfBwXjS6GGzeKyOX0O2qU92OAmZh7T+q+h+GuNupH+JXfpL1X3Xb4dDUcd4X5c/PpLZ8/ebmLSnNbu3NLl1rqo59UjOgpmxWc4g2WKUsmRRwWsLA7h9FDyWyi1jwCSBa/ZVaJTD5hDrkfNMZJyF018Xso0jUVl6nBGTm4bXuDbuvUzzIWWYk2F1KRDY7LkAmwA5KCSx842kNuOqhIlyMd0mLXVsFMkj9p1rqQjLjDYxfieOVR7l1sUyzAvJVkirZotfmfVsFNEdsQN3nqei4fxPfSqz/iU+Ud37+3w+52fhyxUIfyp83y93f4/Y5WpjbC4tY0uI5lca+Z1PMqbHNIcMcfgo2DMqPT6l4v5bj2Aus0LWvV/wDnBv3JnnqXNGntOSXxRqNf8JV1dG6eihe2oAywiwk/se63fD6V7R9CpRk4+7l/RpL+dpW9OFWOr38zzDXKSp0+Z9PqNPLTzAZZI2xsugjFrmsfQ0rZrYCbYcSVm2xuQjZ0m78xXlqYLI39FK4NAuQVrq1GE+aPTSrTp+qzZwWluCLPGccCtNcUXR36G4tq8a23Jm80HVPu7hTz3bEcA390/wBlrrijr9KPM98Vg6fdYe0SfReFIujGedxPTusi2LGHNSNEzJ4bwVMbg5kseC0jgs8KjW3QlxUlhnqOo6wK3wC6rqNomljETw389wD/AHVZy1v2moo0HTuVFdNzjNEqzQ6hFPE67L2eOo5hWpVZ0pqpDmjZ16SrU3CXU9CfLcgsN2EXB6hfW7G5heUI149fv1PnNxSlQqOnLoEEudfovVyMI+eSgkJJaLXQnJS8uze5UrBUXdwuSrYBkssW3CxssjlwXDgvUeYm4g8EwMjiXqEwMivdfkQpSIbEAPRCCyN23KNE5C6Rx54TAyJzKkqUfdor3Lb+pWrXBrPU5Shqb77mzfGbzSoxnpS7bE+7Q/6TL+izLhdkuVKPyRhfErt86svmxxEwcGNHoFnjbUYerBL4IwSuK0/Wm38WWXNrDAWZLHIxN5HieWHqj3JTwePfxBVsTqjR6ba0Shkkhdz2kgAemCVqOJYzFGxss4bPP9E0p9ZTGX2gwusCOa01Wt5bwbGMcnf+FvD1HUUkn36lifsIayQbmuPW9jYrnOJX1WlNeVJ79Nmbrh9rCvBupHl1N6/wtpgbeOKRmL4kP7rWri1zndp/A9r4bQ6L6mIdBfA4PpJQ+2QHixWdcSjUWmtH5Hmlw6dN6qUuQ9bpImZ5kQ2S2uW8rrwxraXjmjaRy1lnSeCJINRadL1FgFVCLsdwL2+vUfour4RGy4hD+NcwTkuT5PHbK6r7HPcUVzZz/kW82ovmuaz7vabbU/DE8IdJRnzmD8H4h/dYeJeF6lFOdo9S7Pn8O/3L2XHoVPQuFpffp/RzcrXMJDgcYIPLsuWcXF6ZLDR0UZJrKLTWynTjRB38kyiXb3tZNO+RoWrX1MeN+09P2VmjIeheFK4VumiJ5vLBj1af7H9V1nha+cJytZcnuvf1OS4/Z4arx+JvWtsF3GTmcEUEg5qSAOFwiIZU5l+AVsgZgz7JsFHvBo2sPRZzCDbbjxQgm2/AZUgQt24OVJArslCAWUkBAQBQEsoALICWUgICgkdkbnD2QSmcEpZPmb7e9RdL9oc1OHDbSU8UVhyJBcf+5aS+lqq+421pHFM9b+zPw9TVf2baEa2G7nsdUbgdp9px5+lvkvRCzo3FCMaqz1PNUr1KVWTgzd6lQxUUkcdPGI4izDQuE8U2cLa6jKmsRkvqtn+DsPDty69tKMnvF/ff9mEXOAtxXM4N+0M1jZWP9rbI3I/3KMFGjGe6/BMEYKozsqop4z5dRE7cyQcj0PULPQr1LeaqU3utzHVpRqwcJrKZ6npNV98oYpy3aXjIHC/ZfUuF8ShxGgqkdmua7P8AXY4C9s5WlV03uujKNX0al1JpMjNk1sSt9749VTiHB7e/WZrEu65/2ZLPiVazfoPMez5f0cNq/h6t0/c/Z5sA/wAxmbeo5LiL/gtzZZk1qj3X5XT7HXWXFqF1iOdMuz/Hc1BvbIwtQbUz9D1R+lahHOLuiOHt6jms1CrKjUVWHNbmC5t43FN05dT1SORksbJI3B0bwHNcOYPBfUbO6jd0Y1odT51XoyoVHTlzQ2F6jCVuwVZFWQG6kClxB4YTACwc0ZKNEJDw2rPg8+RN5ypwRkUk3UjIMoQCykBAQBQEQEsgJZASygDFpachCSxkpADbKME5PjLxxWu1bxjrVbu3Gesk2nsHbW/QBc7VlqqNm7pLTBI+vvDdKdO8PaXQAD/49NHF8mi639OCjFI0056pNjeIKZzqOKfiWOsfQrk/F9v5lrGqv8H9Ht98HSeGa2i4lSf+S+q/1nLyu2yu6XsvniWx27RS59iVOCuCoEg7gjRBU4kuJU4IweneEWkeG6bdzkcR6LrvCMX5lWXTCOR8QNa0jcMbuNgu3bwc6kXNjaAdwBVG8l0sHOav4Yo6pxkp7U8p4ho9g+o/stFfeHre6zOn6EvZy+K/Rt7Pjde3xGfpR9vP5/s4TWdKqNLm2zMPlu4OGQfiuNvLCtZT0Vl7n0Z11ne0ruOqk/h1R1PgHUzLC/TJnXc276cnmObf3Xv4HxL+HX0TfoS5+x9zU8dsPNh50Fujqt3bK+jYOLJxQDAWUEkIugwS1ggNQ8tbxGeqzIwvYxn+2/AuSrrYo9wmFwNjYJlDDFLCASRgKSMCgE8FIDsI44UZGBvLNkyTggYb2ITIwBzS08EyBmR7lDYSMiOIDJGQqtl0hpGBzbW+KhMlrJp/EU50zQNTrnYFNTSS39Gkj6pUqaYOREINySPkHwlRnUvFei0jxu+8VkTXd7vBP7rnqS1TS9puqjxFs+2BDaS7bEX4Loc7GlUS6ophPRyxEe+2w9eS8V7bq6oTov8AyWP0ey0rO3rRqrozzqsZtmeD+ZfH8OL0vmj6impJNcjFfbb3spRVoEPtB46ZSSKixRGSdrGi5Jso6EN4R67Q0v3OgpaTbd0UY3W6nJX0Lwzb+Taa3zk8nBcVredcPHQyxGeYA+K6HUa7BW8hpspW5ViEqxBRU08VTE6KojbJG7i1wWOtQp14OnVWUy9KtOjNTpvDRy1T4YqKCpFZo5dIxjg7yr+209uq4riXh2VJ67b0o9uvw7/f3nWWPHIV4+XdbPv0fv7HU0c7NQpm1EY2uOJGHix/Sy3nA+IOtS8mr68fqv66mj4pYu3qao+q+RaWEC5Flvspmrwx2sc5oPAKraROGTaeiZJJZMjBpZIrXyCV6UzztEZtYMNynMLYV+53ZStiGIYsccqckYGbHjAyoyTgjoybXKJjBkQNaG2Iueqq2WSLfKaSCGquS2APjaOLVKbIaRjtjsSrZK4LGjHBQWGAUA4b7bKz7l9mesEGzp2spx/zeAfoCvNeSxSZmt1mojwn7DqAVv2n6Tdt204kqD22sNvqQtZaLNVHuuHimz61Y23Jbo1uC/8ADhVJOJ8SURhrZnAey/2x8eK+X+ILX+NfSa5S9L58/qfROBXP8izinzjt8uX0OclGPQrUo2rQsHsvDuXAozGzrPA+k/eNSNZK28FPkX/E7kF6LG1ld140omr4ldKhSfdnfh4YCXEFxN3WX1OlSVOCpx5I4aU8tyfMqll3E8gsyjgxt5KhbieKsQOC1RuSQgE4CEEaXNvYi3RGkyd0BsTRO6UNDXuFnH83qvJUtKcqirLaS6r7PueiNzNQ8p7x7dvd2H3AXsL916sHnyAuJU4GQOJaPVNmOQocFOCMmpkOTZZ0YWV7SpyVwLtcb2vhTlEYFDXONhcqcjBmQwONibBpWNyLpBdERe23CZJwCHBN/wBEZCLr3tZyguSzS4XuR6oQR8QdwGeyJjBbCzaAAqyZKC6JvC1z2UKRODx3+JirFN4P06iafaq60OP/AOY2k/q4LxX8/QSPRbR9Js47+GOhE3i3VqxwxT0QaD3e8fs0rBY+u2Zbn1Uj6TbEXcLLauWDxYLGRW9447Krl2JSOd8bRtbRxyN43LD+q43xbSzGnV9rX5/B1fhepidSl7n+DhXn2SuMR17LNOpZKuZsUQu97g0LLCnKpJQgstnmqzjTi5yeEj1rTqWOgoYqaH3WDJ/MeZX0Pg/C42NPMvXfP9HAX967qo5dOhY9wW6SNeyl7uAAV0ijYhKkjINxCnAyWxvB4lVaLJhLgFGCcg8y+E0kahTJYq2kagNlsbo4kZGLy5RgnIvcqSDWEhZsGLIASSAMIC8NxngqlsFlOGMBdzOFEsslYQz5AQA3ioSDYhOLKQLZSVLIm3PZQyUO3aL8/VQyw4LRk2UbjYD5A2yJBsLJBYnmjRKZ86/xPVxl13RKO+IqaSUju54H6MWrv36SR67VbNm5/hfpg3Stfqi3MlRFED2awn/yWSwWzZW6e6R7tv2gAcF7sZPO3grMhJU6Suo1niWA1GjVAsSWDePgtJ4goedYz7x3+X9G44DX8q9h2e3z/s85maRED1K+armfRWdh4G03bH97kFjkMv15ldd4ZsnKTupLZbL39TkvEd4klbRe73f4Ow9XFdockEtFkyTgpdY8lZZKMIAtwCDBW698bVZEEF+RCALzYXuoQZUJDfJVsEZFLrm5KnBGQbm3uOCYGS9ktmWuFVx3LJ7DCUWyVGknJrSR0CzGMgcOAwgLmjOSq5JC8g8h8FCDK91jlWIJuHf5KBkUPPdSMjtlcBZGhkO8pgZAZCeJTBGomSeanBXUOLgG11BOo+W/t9qjUfaTVx3uKenhiH/TuP8A3LR3rzVZs7Vf8aZ61/DtR+R9njZudTVyyH0Fmj/tXtsVikea6fpnqQzzXrPMM0hqjmWTwLMBLA+M8HgtWOrSVWEoPqsfMyUqzpzU10eTgn6c6WSGBo9rdtPzXymnZ1J1VQivSzg+pVbqEKLryfo4yd1TMZTQRxR4awWC+p2ttG2oxow5JHzC4uZXFWVWfNlvmWPFZ8GHWTzu6aSdZVLIAOOVZIhsrE55lTpIyAz9FOkahTMeRU4IyMyQ2yVDRORPMBKnBBDlAI7GbqSBd56oMj7+6YGStmTlGQhxYFQWH3KME5AXd0wRkUkKSBSbJgZDvU4GQGRMEZIH3QZHbnmgLL25oUYd3dRgpk+QPtUnNT9o/iGQm9qtzBbo0Bv7LnrnerI3lDanE+jvsaiFP9mWgt4boXSH/k9xW3tFilE1lzL/AJWdk546r04MGsUyd1bSNYPM7ppGswoYAyslmI5+z+609pwuNO9q3Mlz5fFbv8G5u+KupZUraL5c/g9l+TM8yy3Ok02shkxlNJGsqdPYJpJUyt1QHNFyMKNODJqyV+eL8VOCMh80dVOCMjNkHG6jBORjKORUYGoLXhMEpjh4QnIC4IABw4WQjIl7KSAtdZCck3qMDJC/CYGRd6nBGSbymCMil6kA390IB5g6qMkkE4HBBkZs55IkQ5DCU9VdIxOQzZTuGeaOOxXJ8Z+IJnVWvanUvN3S1MryfV5XLVHmbftOjgsRSPqzwC37r4I0GEn3aKL6tv8AuujtoYpR9yNDXlmpL3m8M3dejSYciOqWt4uA+Kq3Fc2WUZPoVurohxkb81V1aa6lvLn2EOowgXMzB8VXz6fcnyZinUYP9dnzUqvT7h0anYR2p0/+uz5rKpRfJlHCS5oxJtWpm/5wVZSiupeMWYztZph/nfRYXUiZlBif43S/6p+SebEny2OzWqa/9T6KfNiR5cjLh1Smk92Zl+5srKcX1KuMl0Mls7T7rgfQqy3K8h/PtzU4GR21CjBORxOOajAyHzAeBQZGDupQA3jqpwMimUBCMimcckGRTOgFM5KgkQynqgFMndMABl6kKCRTUNbxcE1IjcU18DMukaPUopIq0VS63TMGJAfRW82C5spob5GDW+I4oqaZ7dx2xud8gVjnd00mWjQk3yPlQ3c0k8XC/wA1y3M6E+l6DV6iHTqSBpa0RwMYLdmgLfK5moqK2NO6MdTbD/ilQ8X853rfCpKpKXNl1FLkhH1j3A7pXOKpqJKjUudwz0ymSRHTkJknBS6e/QnsbFMk4E+8uBw02QnGQPnLuZHYqym+5GlFDpMZ4qdWRgXzVORgPm4UgBffmpIGZVTR+5I4fFSm0Q0mZMWtVceBKbdCrKrJdSrpxfQy4vEs7bb2Md9FdV5FfJRnQeJoj/Vjc30N1ZV+6Kuj2NhT63SSW2zgHo7CuqsWUdKSNjFWte27XNcOoKyJplMNGLJqtO3/ADQfRYXXgupkVNmM/W6cHG9yo7mJPlMofrzAPYi+ZVXdLoifJZRJr8v4Y4x63Ko7p9EWVFFP+PVH5Y/kq/yZE+ShX67UHgGhR/IkPKRjv1iqdwdb4KHWkxoRQ6uqpOMzvmqOo+5KiVmWR3vSOPxVXUZbQgbs5uR6qjqMnQhgbZ2gKuotpMDXZ9mhahIDwp32P/Eqk36LLwXpI8Pp498sTAPec1v1C8K5ntPfmSFrB7IFlssmuwESkC9sJqIEdLfIB+BTIK3THkPUlTkFbpb4Bt1U5JAHkuAI49FOSyLWtN8HHMFQ5E4AS1qjUBHAgXtYKVIjBUQeeVdTAhBCspkAuVOoYFLj1VkwLvTIBuKZAd55qckBEnqmQXRVUkfuSEehRPAayZrnu5EryZLYJkpqGCE2OVGRgUuF7XypyCXuFGQD0OeinJADn1TIwRp5WUNhILTdVbLYI7dazD7XPF7KMk4HY2Um43Eelrqrkhg1HjEui8L6k4mxMVs87kBUnL0WXgvSR5RokYk1ihYeDp2A/wDUF5oesj0y5M9wDWgd17NR4sFEsl8HirIqyqOcNcLmykCVE4sSQPkpQEhIkGLm/wCIhG8BIfd5bhsu49Da6ZyWGqQ+aMEfy3jIJ5qE8EvcUFwa1the2Te5U5IKpKjYWtcb34EhWQCJmNG48vojAxmDuAsFCYKzIBxwrpgBdccVZMgrJsrpgG5TkgG5MkgLlORglymQbZ7yCQAL2uvEiw24m1yoyAZyRwJsmQBpBeWhWADewIJGbJkYFeZABlp5KU0QM5x2biBYcQoyBY5A5xGcKGwXAEnFuF1RslFDJmh7A5u5w4E5sjySWySPBL3uO0ZDQoW+yBzXjWoMvhepd+Ytbw/3BVqrTFovT3kcF4VZv8R6c3H9YHKwU+Znn6rPVjO65Ic7ra69h4slbqg+WOPoVKW4IS1gaTfPREBSwufuLiAM2CtkYLNznY3fMKCcAFw4Ndm4vfqgGZIXvBtYDHFVYJGTtYXm56hGCSDGEiwYoLmk2ORzWTmQM59gL81BIpBuHDgcpkgLXbi4ZuCpzgBdlWUgVE2cG9VdPIDngcqckhF7JkYFJzhMjB//2Q=="

/***/ }),

/***/ "./node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!*******************************************************!*\
  !*** ./node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/fbjs/lib/shallowEqual.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/konva/konva.js":
/*!*************************************!*\
  !*** ./node_modules/konva/konva.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
 * Konva JavaScript Framework v2.2.2
 * http://konvajs.github.io/
 * Licensed under the MIT
 * Date: Tue Aug 21 2018
 *
 * Original work Copyright (C) 2011 - 2013 by Eric Rowell (KineticJS)
 * Modified work Copyright (C) 2014 - present by Anton Lavrenov (Konva)
 *
 * @license
 */

// runtime check for already included Konva
(function() {
  'use strict';
  /**
   * @namespace Konva
   */

  var PI_OVER_180 = Math.PI / 180;

  var Konva = {
    // public
    version: '2.2.2',

    // private
    stages: [],
    idCounter: 0,
    ids: {},
    names: {},
    shapes: {},
    listenClickTap: false,
    inDblClickWindow: false,

    isBrowser:
      typeof window !== 'undefined' &&
      // browser case
      ({}.toString.call(window) === '[object Window]' ||
        // electron case
        {}.toString.call(window) === '[object global]'),

    isUnminified: /comment/.test(function() {
      /* comment */
    }),

    // configurations
    enableTrace: false,
    traceArrMax: 100,
    dblClickWindow: 400,
    /**
     * Global pixel ratio configuration. KonvaJS automatically detect pixel ratio of current device.
     * But you may override such property, if you want to use your value.
     * @property pixelRatio
     * @default undefined
     * @memberof Konva
     * @example
     * Konva.pixelRatio = 1;
     */
    pixelRatio: undefined,
    /**
     * Drag distance property. If you start to drag a node you may want to wait until pointer is moved to some distance from start point,
     * only then start dragging. Default is 3px.
     * @property dragDistance
     * @default 0
     * @memberof Konva
     * @example
     * Konva.dragDistance = 10;
     */
    dragDistance: 3,
    /**
     * Use degree values for angle properties. You may set this property to false if you want to use radiant values.
     * @property angleDeg
     * @default true
     * @memberof Konva
     * @example
     * node.rotation(45); // 45 degrees
     * Konva.angleDeg = false;
     * node.rotation(Math.PI / 2); // PI/2 radian
     */
    angleDeg: true,
    /**
     * Show different warnings about errors or wrong API usage
     * @property showWarnings
     * @default true
     * @memberof Konva
     * @example
     * Konva.showWarnings = false;
     */
    showWarnings: true,

    /**
     * @namespace Filters
     * @memberof Konva
     */
    Filters: {},

    /**
     * returns whether or not drag and drop is currently active
     * @method
     * @memberof Konva
     */
    isDragging: function() {
      var dd = Konva.DD;

      // if DD is not included with the build, then
      // drag and drop is not even possible
      if (dd) {
        return dd.isDragging;
      }
      return false;
    },
    /**
     * returns whether or not a drag and drop operation is ready, but may
     *  not necessarily have started
     * @method
     * @memberof Konva
     */
    isDragReady: function() {
      var dd = Konva.DD;

      // if DD is not included with the build, then
      // drag and drop is not even possible
      if (dd) {
        return !!dd.node;
      }
      return false;
    },
    _addId: function(node, id) {
      if (!id) {
        return;
      }
      // do we need this warning?
      // if (this.ids[id]) {
      //   Konva.Util.warn(
      //     'Duplicate id "' +
      //       id +
      //       '". Please don not use same id several times. It may break find() method look up.'
      //   );
      // }
      this.ids[id] = node;
    },
    _removeId: function(id) {
      if (id !== undefined) {
        delete this.ids[id];
      }
    },
    _addName: function(node, name) {
      if (name) {
        if (!this.names[name]) {
          this.names[name] = [];
        }
        this.names[name].push(node);
      }
    },
    _removeName: function(name, _id) {
      if (!name) {
        return;
      }
      var nodes = this.names[name];
      if (!nodes) {
        return;
      }
      for (var n = 0; n < nodes.length; n++) {
        var no = nodes[n];
        if (no._id === _id) {
          nodes.splice(n, 1);
        }
      }
      if (nodes.length === 0) {
        delete this.names[name];
      }
    },
    getAngle: function(angle) {
      return this.angleDeg ? angle * PI_OVER_180 : angle;
    },
    _detectIE: function(ua) {
      var msie = ua.indexOf('msie ');
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('trident/');
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('edge/');
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return false;
    },
    _parseUA: function(userAgent) {
      var ua = userAgent.toLowerCase(),
        // jQuery UA regex
        match =
          /(chrome)[ /]([\w.]+)/.exec(ua) ||
          /(webkit)[ /]([\w.]+)/.exec(ua) ||
          /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua) ||
          /(msie) ([\w.]+)/.exec(ua) ||
          (ua.indexOf('compatible') < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
          [],
        // adding mobile flag as well
        mobile = !!userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
        ),
        ieMobile = !!userAgent.match(/IEMobile/i);

      return {
        browser: match[1] || '',
        version: match[2] || '0',
        isIE: Konva._detectIE(ua),
        // adding mobile flab
        mobile: mobile,
        ieMobile: ieMobile // If this is true (i.e., WP8), then Konva touch events are executed instead of equivalent Konva mouse events
      };
    },
    // user agent
    UA: undefined
  };

  var glob =
    typeof global !== 'undefined'
      ? global
      : typeof window !== 'undefined'
        ? window
        : typeof WorkerGlobalScope !== 'undefined'
          ? self
          : {};

  Konva.UA = Konva._parseUA((glob.navigator && glob.navigator.userAgent) || '');

  if (glob.Konva) {
    console.error(
      'Konva instance is already exist in current eviroment. ' +
        'Please use only one instance.'
    );
  }
  glob.Konva = Konva;
  Konva.global = glob;
  Konva.window = glob;
  Konva.document = glob.document;

  if (true) {
    module.exports = Konva;
  } else {}
})();

/*eslint-disable  eqeqeq, no-cond-assign, no-empty*/
(function() {
  'use strict';
  /**
   * Collection constructor.  Collection extends
   *  Array.  This class is used in conjunction with {@link Konva.Container#get}
   * @constructor
   * @memberof Konva
   */
  Konva.Collection = function() {
    var args = [].slice.call(arguments),
      length = args.length,
      i = 0;

    this.length = length;
    for (; i < length; i++) {
      this[i] = args[i];
    }
    return this;
  };
  Konva.Collection.prototype = [];
  /**
   * iterate through node array and run a function for each node.
   *  The node and index is passed into the function
   * @method
   * @memberof Konva.Collection.prototype
   * @param {Function} func
   * @example
   * // get all nodes with name foo inside layer, and set x to 10 for each
   * layer.get('.foo').each(function(shape, n) {
   *   shape.setX(10);
   * });
   */
  Konva.Collection.prototype.each = function(func) {
    for (var n = 0; n < this.length; n++) {
      func(this[n], n);
    }
  };
  /**
   * convert collection into an array
   * @method
   * @memberof Konva.Collection.prototype
   */
  Konva.Collection.prototype.toArray = function() {
    var arr = [],
      len = this.length,
      n;

    for (n = 0; n < len; n++) {
      arr.push(this[n]);
    }
    return arr;
  };
  /**
   * convert array into a collection
   * @method
   * @memberof Konva.Collection
   * @param {Array} arr
   */
  Konva.Collection.toCollection = function(arr) {
    var collection = new Konva.Collection(),
      len = arr.length,
      n;

    for (n = 0; n < len; n++) {
      collection.push(arr[n]);
    }
    return collection;
  };

  // map one method by it's name
  Konva.Collection._mapMethod = function(methodName) {
    Konva.Collection.prototype[methodName] = function() {
      var len = this.length,
        i;

      var args = [].slice.call(arguments);
      for (i = 0; i < len; i++) {
        this[i][methodName].apply(this[i], args);
      }

      return this;
    };
  };

  Konva.Collection.mapMethods = function(constructor) {
    var prot = constructor.prototype;
    for (var methodName in prot) {
      Konva.Collection._mapMethod(methodName);
    }
  };

  /*
    * Last updated November 2011
    * By Simon Sarris
    * www.simonsarris.com
    * sarris@acm.org
    *
    * Free to use and distribute at will
    * So long as you are nice to people, etc
    */

  /*
    * The usage of this class was inspired by some of the work done by a forked
    * project, KineticJS-Ext by Wappworks, which is based on Simon's Transform
    * class.  Modified by Eric Rowell
    */

  /**
   * Transform constructor. Transform object is a private class of Konva framework.
   * In most of the cases you don't need to use it in your app.
   * But there is a documentation for that class in case you still want
   * to make some manual calculations.
   * @constructor
   * @param {Array} [m] Optional six-element matrix
   * @memberof Konva
   */
  Konva.Transform = function(m) {
    this.m = (m && m.slice()) || [1, 0, 0, 1, 0, 0];
  };

  Konva.Transform.prototype = {
    /**
     * Copy Konva.Transform object
     * @method
     * @memberof Konva.Transform.prototype
     * @returns {Konva.Transform}
     */
    copy: function() {
      return new Konva.Transform(this.m);
    },
    /**
     * Transform point
     * @method
     * @memberof Konva.Transform.prototype
     * @param {Object} point 2D point(x, y)
     * @returns {Object} 2D point(x, y)
     */
    point: function(point) {
      var m = this.m;
      return {
        x: m[0] * point.x + m[2] * point.y + m[4],
        y: m[1] * point.x + m[3] * point.y + m[5]
      };
    },
    /**
     * Apply translation
     * @method
     * @memberof Konva.Transform.prototype
     * @param {Number} x
     * @param {Number} y
     * @returns {Konva.Transform}
     */
    translate: function(x, y) {
      this.m[4] += this.m[0] * x + this.m[2] * y;
      this.m[5] += this.m[1] * x + this.m[3] * y;
      return this;
    },
    /**
     * Apply scale
     * @method
     * @memberof Konva.Transform.prototype
     * @param {Number} sx
     * @param {Number} sy
     * @returns {Konva.Transform}
     */
    scale: function(sx, sy) {
      this.m[0] *= sx;
      this.m[1] *= sx;
      this.m[2] *= sy;
      this.m[3] *= sy;
      return this;
    },
    /**
     * Apply rotation
     * @method
     * @memberof Konva.Transform.prototype
     * @param {Number} rad  Angle in radians
     * @returns {Konva.Transform}
     */
    rotate: function(rad) {
      var c = Math.cos(rad);
      var s = Math.sin(rad);
      var m11 = this.m[0] * c + this.m[2] * s;
      var m12 = this.m[1] * c + this.m[3] * s;
      var m21 = this.m[0] * -s + this.m[2] * c;
      var m22 = this.m[1] * -s + this.m[3] * c;
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      return this;
    },
    /**
     * Returns the translation
     * @method
     * @memberof Konva.Transform.prototype
     * @returns {Object} 2D point(x, y)
     */
    getTranslation: function() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    },
    /**
     * Apply skew
     * @method
     * @memberof Konva.Transform.prototype
     * @param {Number} sx
     * @param {Number} sy
     * @returns {Konva.Transform}
     */
    skew: function(sx, sy) {
      var m11 = this.m[0] + this.m[2] * sy;
      var m12 = this.m[1] + this.m[3] * sy;
      var m21 = this.m[2] + this.m[0] * sx;
      var m22 = this.m[3] + this.m[1] * sx;
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      return this;
    },
    /**
     * Transform multiplication
     * @method
     * @memberof Konva.Transform.prototype
     * @param {Konva.Transform} matrix
     * @returns {Konva.Transform}
     */
    multiply: function(matrix) {
      var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
      var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];

      var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
      var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];

      var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
      var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];

      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      this.m[4] = dx;
      this.m[5] = dy;
      return this;
    },
    /**
     * Invert the matrix
     * @method
     * @memberof Konva.Transform.prototype
     * @returns {Konva.Transform}
     */
    invert: function() {
      var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
      var m0 = this.m[3] * d;
      var m1 = -this.m[1] * d;
      var m2 = -this.m[2] * d;
      var m3 = this.m[0] * d;
      var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
      var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      this.m[0] = m0;
      this.m[1] = m1;
      this.m[2] = m2;
      this.m[3] = m3;
      this.m[4] = m4;
      this.m[5] = m5;
      return this;
    },
    /**
     * return matrix
     * @method
     * @memberof Konva.Transform.prototype
     */
    getMatrix: function() {
      return this.m;
    },
    /**
     * set to absolute position via translation
     * @method
     * @memberof Konva.Transform.prototype
     * @returns {Konva.Transform}
     * @author ericdrowell
     */
    setAbsolutePosition: function(x, y) {
      var m0 = this.m[0],
        m1 = this.m[1],
        m2 = this.m[2],
        m3 = this.m[3],
        m4 = this.m[4],
        m5 = this.m[5],
        yt = (m0 * (y - m5) - m1 * (x - m4)) / (m0 * m3 - m1 * m2),
        xt = (x - m4 - m2 * yt) / m0;

      return this.translate(xt, yt);
    }
  };

  // CONSTANTS
  var CONTEXT_2D = '2d',
    OBJECT_ARRAY = '[object Array]',
    OBJECT_NUMBER = '[object Number]',
    OBJECT_STRING = '[object String]',
    OBJECT_BOOLEAN = '[object Boolean]',
    PI_OVER_DEG180 = Math.PI / 180,
    DEG180_OVER_PI = 180 / Math.PI,
    HASH = '#',
    EMPTY_STRING = '',
    ZERO = '0',
    KONVA_WARNING = 'Konva warning: ',
    KONVA_ERROR = 'Konva error: ',
    RGB_PAREN = 'rgb(',
    COLORS = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5]
    },
    RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;

  /**
   * @namespace Util
   * @memberof Konva
   */
  Konva.Util = {
    /*
    * cherry-picked utilities from underscore.js
    */
    _isElement: function(obj) {
      return !!(obj && obj.nodeType == 1);
    },
    _isFunction: function(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    _isObject: function(obj) {
      return !!obj && obj.constructor === Object;
    },
    _isArray: function(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
    },
    _isNumber: function(obj) {
      return (
        Object.prototype.toString.call(obj) === OBJECT_NUMBER &&
        !isNaN(obj) &&
        isFinite(obj)
      );
    },
    _isString: function(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_STRING;
    },
    _isBoolean: function(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
    },
    // arrays are objects too
    isObject: function(val) {
      return val instanceof Object;
    },
    isValidSelector: function(selector) {
      if (typeof selector !== 'string') {
        return false;
      }
      var firstChar = selector[0];
      return (
        firstChar === '#' ||
        firstChar === '.' ||
        firstChar === firstChar.toUpperCase()
      );
    },
    _sign: function(number) {
      if (number === 0) {
        return 0;
      }
      if (number > 0) {
        return 1;
      } else {
        return -1;
      }
    },
    createCanvasElement: function() {
      var canvas = Konva.isBrowser
        ? Konva.document.createElement('canvas')
        : new Konva._nodeCanvas();
      // on some environments canvas.style is readonly
      try {
        canvas.style = canvas.style || {};
      } catch (e) {}
      return canvas;
    },
    _isInDocument: function(el) {
      while ((el = el.parentNode)) {
        if (el == Konva.document) {
          return true;
        }
      }
      return false;
    },
    _simplifyArray: function(arr) {
      var retArr = [],
        len = arr.length,
        util = Konva.Util,
        n,
        val;

      for (n = 0; n < len; n++) {
        val = arr[n];
        if (util._isNumber(val)) {
          val = Math.round(val * 1000) / 1000;
        } else if (!util._isString(val)) {
          val = val.toString();
        }

        retArr.push(val);
      }

      return retArr;
    },
    /*
    * arg can be an image object or image data
    */
    _getImage: function(arg, callback) {
      var imageObj, canvas;

      // if arg is null or undefined
      if (!arg) {
        callback(null);
      } else if (this._isElement(arg)) {
        // if arg is already an image object
        callback(arg);
      } else if (this._isString(arg)) {
        // if arg is a string, then it's a data url
        imageObj = new Konva.window.Image();
        imageObj.onload = function() {
          callback(imageObj);
        };
        imageObj.src = arg;
      } else if (arg.data) {
        //if arg is an object that contains the data property, it's an image object
        canvas = Konva.Util.createCanvasElement();
        canvas.width = arg.width;
        canvas.height = arg.height;
        var _context = canvas.getContext(CONTEXT_2D);
        _context.putImageData(arg, 0, 0);
        this._getImage(canvas.toDataURL(), callback);
      } else {
        callback(null);
      }
    },
    _getRGBAString: function(obj) {
      var red = obj.red || 0,
        green = obj.green || 0,
        blue = obj.blue || 0,
        alpha = obj.alpha || 1;

      return ['rgba(', red, ',', green, ',', blue, ',', alpha, ')'].join(
        EMPTY_STRING
      );
    },
    _rgbToHex: function(r, g, b) {
      return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    _hexToRgb: function(hex) {
      hex = hex.replace(HASH, EMPTY_STRING);
      var bigint = parseInt(hex, 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
      };
    },
    /**
     * return random hex color
     * @method
     * @memberof Konva.Util.prototype
     */
    getRandomColor: function() {
      var randColor = ((Math.random() * 0xffffff) << 0).toString(16);
      while (randColor.length < 6) {
        randColor = ZERO + randColor;
      }
      return HASH + randColor;
    },
    /**
     * return value with default fallback
     * @method
     * @memberof Konva.Util.prototype
     */
    get: function(val, def) {
      if (val === undefined) {
        return def;
      } else {
        return val;
      }
    },
    /**
     * get RGB components of a color
     * @method
     * @memberof Konva.Util.prototype
     * @param {String} color
     * @example
     * // each of the following examples return {r:0, g:0, b:255}
     * var rgb = Konva.Util.getRGB('blue');
     * var rgb = Konva.Util.getRGB('#0000ff');
     * var rgb = Konva.Util.getRGB('rgb(0,0,255)');
     */
    getRGB: function(color) {
      var rgb;
      // color string
      if (color in COLORS) {
        rgb = COLORS[color];
        return {
          r: rgb[0],
          g: rgb[1],
          b: rgb[2]
        };
      } else if (color[0] === HASH) {
        // hex
        return this._hexToRgb(color.substring(1));
      } else if (color.substr(0, 4) === RGB_PAREN) {
        // rgb string
        rgb = RGB_REGEX.exec(color.replace(/ /g, ''));
        return {
          r: parseInt(rgb[1], 10),
          g: parseInt(rgb[2], 10),
          b: parseInt(rgb[3], 10)
        };
      } else {
        // default
        return {
          r: 0,
          g: 0,
          b: 0
        };
      }
    },
    // convert any color string to RGBA object
    // from https://github.com/component/color-parser
    colorToRGBA: function(str) {
      str = str || 'black';
      return (
        Konva.Util._namedColorToRBA(str) ||
        Konva.Util._hex3ColorToRGBA(str) ||
        Konva.Util._hex6ColorToRGBA(str) ||
        Konva.Util._rgbColorToRGBA(str) ||
        Konva.Util._rgbaColorToRGBA(str)
      );
    },
    // Parse named css color. Like "green"
    _namedColorToRBA: function(str) {
      var c = COLORS[str.toLowerCase()];
      if (!c) {
        return null;
      }
      return {
        r: c[0],
        g: c[1],
        b: c[2],
        a: 1
      };
    },
    // Parse rgb(n, n, n)
    _rgbColorToRGBA: function(str) {
      if (str.indexOf('rgb(') === 0) {
        str = str.match(/rgb\(([^)]+)\)/)[1];
        var parts = str.split(/ *, */).map(Number);
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: 1
        };
      }
    },
    // Parse rgba(n, n, n, n)
    _rgbaColorToRGBA: function(str) {
      if (str.indexOf('rgba(') === 0) {
        str = str.match(/rgba\(([^)]+)\)/)[1];
        var parts = str.split(/ *, */).map(Number);
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: parts[3]
        };
      }
    },
    // Parse #nnnnnn
    _hex6ColorToRGBA: function(str) {
      if (str[0] === '#' && str.length === 7) {
        return {
          r: parseInt(str.slice(1, 3), 16),
          g: parseInt(str.slice(3, 5), 16),
          b: parseInt(str.slice(5, 7), 16),
          a: 1
        };
      }
    },
    // Parse #nnn
    _hex3ColorToRGBA: function(str) {
      if (str[0] === '#' && str.length === 4) {
        return {
          r: parseInt(str[1] + str[1], 16),
          g: parseInt(str[2] + str[2], 16),
          b: parseInt(str[3] + str[3], 16),
          a: 1
        };
      }
    },
    // o1 takes precedence over o2
    _merge: function(o1, o2) {
      var retObj = this._clone(o2);
      for (var key in o1) {
        if (this._isObject(o1[key])) {
          retObj[key] = this._merge(o1[key], retObj[key]);
        } else {
          retObj[key] = o1[key];
        }
      }
      return retObj;
    },
    /**
     * check intersection of two client rectangles
     * @method
     * @memberof Konva.Util.prototype
     */
    haveIntersection: function(r1, r2) {
      return !(
        r2.x > r1.x + r1.width ||
        r2.x + r2.width < r1.x ||
        r2.y > r1.y + r1.height ||
        r2.y + r2.height < r1.y
      );
    },
    cloneObject: function(obj) {
      var retObj = {};
      for (var key in obj) {
        if (this._isObject(obj[key])) {
          retObj[key] = this.cloneObject(obj[key]);
        } else if (this._isArray(obj[key])) {
          retObj[key] = this.cloneArray(obj[key]);
        } else {
          retObj[key] = obj[key];
        }
      }
      return retObj;
    },
    cloneArray: function(arr) {
      return arr.slice(0);
    },
    _degToRad: function(deg) {
      return deg * PI_OVER_DEG180;
    },
    _radToDeg: function(rad) {
      return rad * DEG180_OVER_PI;
    },
    _capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    throw: function(str) {
      throw new Error(KONVA_ERROR + str);
    },
    error: function(str) {
      console.error(KONVA_ERROR + str);
    },
    warn: function(str) {
      /*
             * IE9 on Windows7 64bit will throw a JS error
             * if we don't use window.console in the conditional
             */
      if (Konva.global.console && console.warn && Konva.showWarnings) {
        console.warn(KONVA_WARNING + str);
      }
    },
    extend: function(child, parent) {
      function Ctor() {
        this.constructor = child;
      }
      Ctor.prototype = parent.prototype;
      var oldProto = child.prototype;
      child.prototype = new Ctor();
      for (var key in oldProto) {
        if (oldProto.hasOwnProperty(key)) {
          child.prototype[key] = oldProto[key];
        }
      }
      child.__super__ = parent.prototype;
      // create reference to parent
      child.super = parent;
    },
    /**
     * adds methods to a constructor prototype
     * @method
     * @memberof Konva.Util.prototype
     * @param {Function} constructor
     * @param {Object} methods
     */
    addMethods: function(constructor, methods) {
      var key;

      for (key in methods) {
        constructor.prototype[key] = methods[key];
      }
    },
    _getControlPoints: function(x0, y0, x1, y1, x2, y2, t) {
      var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)),
        d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
        fa = t * d01 / (d01 + d12),
        fb = t * d12 / (d01 + d12),
        p1x = x1 - fa * (x2 - x0),
        p1y = y1 - fa * (y2 - y0),
        p2x = x1 + fb * (x2 - x0),
        p2y = y1 + fb * (y2 - y0);

      return [p1x, p1y, p2x, p2y];
    },
    _expandPoints: function(p, tension) {
      var len = p.length,
        allPoints = [],
        n,
        cp;

      for (n = 2; n < len - 2; n += 2) {
        cp = Konva.Util._getControlPoints(
          p[n - 2],
          p[n - 1],
          p[n],
          p[n + 1],
          p[n + 2],
          p[n + 3],
          tension
        );
        allPoints.push(cp[0]);
        allPoints.push(cp[1]);
        allPoints.push(p[n]);
        allPoints.push(p[n + 1]);
        allPoints.push(cp[2]);
        allPoints.push(cp[3]);
      }

      return allPoints;
    },
    _removeLastLetter: function(str) {
      return str.substring(0, str.length - 1);
    },
    each: function(obj, func) {
      for (var key in obj) {
        func(key, obj[key]);
      }
    },
    _inRange: function(val, left, right) {
      return left <= val && val < right;
    },
    _getProjectionToSegment: function(x1, y1, x2, y2, x3, y3) {
      var x, y, dist;

      var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
      if (pd2 == 0) {
        x = x1;
        y = y1;
        dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
      } else {
        var u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
        if (u < 0) {
          x = x1;
          y = y1;
          dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
        } else if (u > 1.0) {
          x = x2;
          y = y2;
          dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
        } else {
          x = x1 + u * (x2 - x1);
          y = y1 + u * (y2 - y1);
          dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
        }
      }
      return [x, y, dist];
    },
    // line as array of points.
    // line might be closed
    _getProjectionToLine: function(pt, line, isClosed) {
      var pc = Konva.Util.cloneObject(pt);
      var dist = Number.MAX_VALUE;
      line.forEach(function(p1, i) {
        if (!isClosed && i === line.length - 1) {
          return;
        }
        var p2 = line[(i + 1) % line.length];
        var proj = Konva.Util._getProjectionToSegment(
          p1.x,
          p1.y,
          p2.x,
          p2.y,
          pt.x,
          pt.y
        );
        var px = proj[0],
          py = proj[1],
          pdist = proj[2];
        if (pdist < dist) {
          pc.x = px;
          pc.y = py;
          dist = pdist;
        }
      });
      return pc;
    },
    _prepareArrayForTween: function(startArray, endArray, isClosed) {
      var n,
        start = [],
        end = [];
      if (startArray.length > endArray.length) {
        var temp = endArray;
        endArray = startArray;
        startArray = temp;
      }
      for (n = 0; n < startArray.length; n += 2) {
        start.push({
          x: startArray[n],
          y: startArray[n + 1]
        });
      }
      for (n = 0; n < endArray.length; n += 2) {
        end.push({
          x: endArray[n],
          y: endArray[n + 1]
        });
      }

      var newStart = [];
      end.forEach(function(point) {
        var pr = Konva.Util._getProjectionToLine(point, start, isClosed);
        newStart.push(pr.x);
        newStart.push(pr.y);
      });
      return newStart;
    },
    _prepareToStringify: function(obj) {
      var desc;

      obj.visitedByCircularReferenceRemoval = true;

      for (var key in obj) {
        if (
          !(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')
        ) {
          continue;
        }
        desc = Object.getOwnPropertyDescriptor(obj, key);
        if (
          obj[key].visitedByCircularReferenceRemoval ||
          Konva.Util._isElement(obj[key])
        ) {
          if (desc.configurable) {
            delete obj[key];
          } else {
            return null;
          }
        } else if (Konva.Util._prepareToStringify(obj[key]) === null) {
          if (desc.configurable) {
            delete obj[key];
          } else {
            return null;
          }
        }
      }

      delete obj.visitedByCircularReferenceRemoval;

      return obj;
    }
  };
})();

(function() {
  'use strict';
  // calculate pixel ratio

  var _pixelRatio;
  function getDevicePixelRatio() {
    if (_pixelRatio) {
      return _pixelRatio;
    }
    var canvas = Konva.Util.createCanvasElement();
    var context = canvas.getContext('2d');
    _pixelRatio = (function() {
      var devicePixelRatio = Konva.window.devicePixelRatio || 1,
        backingStoreRatio =
          context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio ||
          1;
      return devicePixelRatio / backingStoreRatio;
    })();
    return _pixelRatio;
  }

  /**
   * Canvas Renderer constructor
   * @constructor
   * @abstract
   * @memberof Konva
   * @param {Object} config
   * @param {Number} config.width
   * @param {Number} config.height
   * @param {Number} config.pixelRatio KonvaJS automatically handles pixel ratio adjustments in order to render crisp drawings
   *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
   *  of 1.  Some high end tablets and phones, like iPhones and iPads (not the mini) have a device pixel ratio
   *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel
   *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
   *  specified, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
   *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
   */
  Konva.Canvas = function(config) {
    this.init(config);
  };

  Konva.Canvas.prototype = {
    init: function(config) {
      var conf = config || {};

      var pixelRatio =
        conf.pixelRatio || Konva.pixelRatio || getDevicePixelRatio();

      this.pixelRatio = pixelRatio;
      this._canvas = Konva.Util.createCanvasElement();

      // set inline styles
      this._canvas.style.padding = 0;
      this._canvas.style.margin = 0;
      this._canvas.style.border = 0;
      this._canvas.style.background = 'transparent';
      this._canvas.style.position = 'absolute';
      this._canvas.style.top = 0;
      this._canvas.style.left = 0;
    },
    /**
     * get canvas context
     * @method
     * @memberof Konva.Canvas.prototype
     * @returns {CanvasContext} context
     */
    getContext: function() {
      return this.context;
    },
    /**
     * get pixel ratio
     * @method
     * @memberof Konva.Canvas.prototype
     * @returns {Number} pixel ratio
     */
    getPixelRatio: function() {
      return this.pixelRatio;
    },
    /**
     * get pixel ratio
     * @method
     * @memberof Konva.Canvas.prototype
     * @param {Number} pixelRatio KonvaJS automatically handles pixel ratio adustments in order to render crisp drawings
     *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
     *  of 1.  Some high end tablets and phones, like iPhones and iPads have a device pixel ratio
     *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel
     *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
     *  specificed, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
     *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
     */
    setPixelRatio: function(pixelRatio) {
      var previousRatio = this.pixelRatio;
      this.pixelRatio = pixelRatio;
      this.setSize(
        this.getWidth() / previousRatio,
        this.getHeight() / previousRatio
      );
    },
    /**
     * set width
     * @method
     * @memberof Konva.Canvas.prototype
     * @param {Number} width
     */
    setWidth: function(width) {
      // take into account pixel ratio
      this.width = this._canvas.width = width * this.pixelRatio;
      this._canvas.style.width = width + 'px';

      var pixelRatio = this.pixelRatio,
        _context = this.getContext()._context;
      _context.scale(pixelRatio, pixelRatio);
    },
    /**
     * set height
     * @method
     * @memberof Konva.Canvas.prototype
     * @param {Number} height
     */
    setHeight: function(height) {
      // take into account pixel ratio
      this.height = this._canvas.height = height * this.pixelRatio;
      this._canvas.style.height = height + 'px';
      var pixelRatio = this.pixelRatio,
        _context = this.getContext()._context;
      _context.scale(pixelRatio, pixelRatio);
    },
    /**
     * get width
     * @method
     * @memberof Konva.Canvas.prototype
     * @returns {Number} width
     */
    getWidth: function() {
      return this.width;
    },
    /**
     * get height
     * @method
     * @memberof Konva.Canvas.prototype
     * @returns {Number} height
     */
    getHeight: function() {
      return this.height;
    },
    /**
     * set size
     * @method
     * @memberof Konva.Canvas.prototype
     * @param {Number} width
     * @param {Number} height
     */
    setSize: function(width, height) {
      this.setWidth(width);
      this.setHeight(height);
    },
    /**
     * to data url
     * @method
     * @memberof Konva.Canvas.prototype
     * @param {String} mimeType
     * @param {Number} quality between 0 and 1 for jpg mime types
     * @returns {String} data url string
     */
    toDataURL: function(mimeType, quality) {
      try {
        // If this call fails (due to browser bug, like in Firefox 3.6),
        // then revert to previous no-parameter image/png behavior
        return this._canvas.toDataURL(mimeType, quality);
      } catch (e) {
        try {
          return this._canvas.toDataURL();
        } catch (err) {
          Konva.Util.warn('Unable to get data URL. ' + err.message);
          return '';
        }
      }
    }
  };

  Konva.SceneCanvas = function(config) {
    var conf = config || {};
    var width = conf.width || 0,
      height = conf.height || 0;

    Konva.Canvas.call(this, conf);
    this.context = new Konva.SceneContext(this);
    this.setSize(width, height);
  };

  Konva.Util.extend(Konva.SceneCanvas, Konva.Canvas);

  Konva.HitCanvas = function(config) {
    var conf = config || {};
    var width = conf.width || 0,
      height = conf.height || 0;

    Konva.Canvas.call(this, conf);
    this.context = new Konva.HitContext(this);
    this.setSize(width, height);
    this.hitCanvas = true;
  };
  Konva.Util.extend(Konva.HitCanvas, Konva.Canvas);
})();

(function() {
  'use strict';
  var COMMA = ',',
    OPEN_PAREN = '(',
    CLOSE_PAREN = ')',
    OPEN_PAREN_BRACKET = '([',
    CLOSE_BRACKET_PAREN = '])',
    SEMICOLON = ';',
    DOUBLE_PAREN = '()',
    // EMPTY_STRING = '',
    EQUALS = '=',
    // SET = 'set',
    CONTEXT_METHODS = [
      'arc',
      'arcTo',
      'beginPath',
      'bezierCurveTo',
      'clearRect',
      'clip',
      'closePath',
      'createLinearGradient',
      'createPattern',
      'createRadialGradient',
      'drawImage',
      'fill',
      'fillText',
      'getImageData',
      'createImageData',
      'lineTo',
      'moveTo',
      'putImageData',
      'quadraticCurveTo',
      'rect',
      'restore',
      'rotate',
      'save',
      'scale',
      'setLineDash',
      'setTransform',
      'stroke',
      'strokeText',
      'transform',
      'translate'
    ];

  var CONTEXT_PROPERTIES = [
    'fillStyle',
    'strokeStyle',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY',
    'lineCap',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'miterLimit',
    'font',
    'textAlign',
    'textBaseline',
    'globalAlpha',
    'globalCompositeOperation'
  ];

  /**
   * Canvas Context constructor
   * @constructor
   * @abstract
   * @memberof Konva
   */
  Konva.Context = function(canvas) {
    this.init(canvas);
  };

  Konva.Context.prototype = {
    init: function(canvas) {
      this.canvas = canvas;
      this._context = canvas._canvas.getContext('2d');

      if (Konva.enableTrace) {
        this.traceArr = [];
        this._enableTrace();
      }
    },
    /**
     * fill shape
     * @method
     * @memberof Konva.Context.prototype
     * @param {Konva.Shape} shape
     */
    fillShape: function(shape) {
      if (shape.getFillEnabled()) {
        this._fill(shape);
      }
    },
    /**
     * stroke shape
     * @method
     * @memberof Konva.Context.prototype
     * @param {Konva.Shape} shape
     */
    strokeShape: function(shape) {
      if (shape.getStrokeEnabled()) {
        this._stroke(shape);
      }
    },
    /**
     * fill then stroke
     * @method
     * @memberof Konva.Context.prototype
     * @param {Konva.Shape} shape
     */
    fillStrokeShape: function(shape) {
      var fillEnabled = shape.getFillEnabled();
      if (fillEnabled) {
        this._fill(shape);
      }
      if (shape.getStrokeEnabled()) {
        this._stroke(shape);
      }
    },
    /**
     * get context trace if trace is enabled
     * @method
     * @memberof Konva.Context.prototype
     * @param {Boolean} relaxed if false, return strict context trace, which includes method names, method parameters
     *  properties, and property values.  If true, return relaxed context trace, which only returns method names and
     *  properites.
     * @returns {String}
     */
    getTrace: function(relaxed) {
      var traceArr = this.traceArr,
        len = traceArr.length,
        str = '',
        n,
        trace,
        method,
        args;

      for (n = 0; n < len; n++) {
        trace = traceArr[n];
        method = trace.method;

        // methods
        if (method) {
          args = trace.args;
          str += method;
          if (relaxed) {
            str += DOUBLE_PAREN;
          } else {
            if (Konva.Util._isArray(args[0])) {
              str +=
                OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
            } else {
              str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
            }
          }
        } else {
          // properties
          str += trace.property;
          if (!relaxed) {
            str += EQUALS + trace.val;
          }
        }

        str += SEMICOLON;
      }

      return str;
    },
    /**
     * clear trace if trace is enabled
     * @method
     * @memberof Konva.Context.prototype
     */
    clearTrace: function() {
      this.traceArr = [];
    },
    _trace: function(str) {
      var traceArr = this.traceArr,
        len;

      traceArr.push(str);
      len = traceArr.length;

      if (len >= Konva.traceArrMax) {
        traceArr.shift();
      }
    },
    /**
     * reset canvas context transform
     * @method
     * @memberof Konva.Context.prototype
     */
    reset: function() {
      var pixelRatio = this.getCanvas().getPixelRatio();
      this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
    },
    /**
     * get canvas
     * @method
     * @memberof Konva.Context.prototype
     * @returns {Konva.Canvas}
     */
    getCanvas: function() {
      return this.canvas;
    },
    /**
     * clear canvas
     * @method
     * @memberof Konva.Context.prototype
     * @param {Object} [bounds]
     * @param {Number} [bounds.x]
     * @param {Number} [bounds.y]
     * @param {Number} [bounds.width]
     * @param {Number} [bounds.height]
     */
    clear: function(bounds) {
      var canvas = this.getCanvas();

      if (bounds) {
        this.clearRect(
          bounds.x || 0,
          bounds.y || 0,
          bounds.width || 0,
          bounds.height || 0
        );
      } else {
        this.clearRect(
          0,
          0,
          canvas.getWidth() / canvas.pixelRatio,
          canvas.getHeight() / canvas.pixelRatio
        );
      }
    },
    _applyLineCap: function(shape) {
      var lineCap = shape.getLineCap();
      if (lineCap) {
        this.setAttr('lineCap', lineCap);
      }
    },
    _applyOpacity: function(shape) {
      var absOpacity = shape.getAbsoluteOpacity();
      if (absOpacity !== 1) {
        this.setAttr('globalAlpha', absOpacity);
      }
    },
    _applyLineJoin: function(shape) {
      var lineJoin = shape.getLineJoin();
      if (lineJoin) {
        this.setAttr('lineJoin', lineJoin);
      }
    },
    setAttr: function(attr, val) {
      this._context[attr] = val;
    },

    // context pass through methods
    arc: function() {
      var a = arguments;
      this._context.arc(a[0], a[1], a[2], a[3], a[4], a[5]);
    },
    beginPath: function() {
      this._context.beginPath();
    },
    bezierCurveTo: function() {
      var a = arguments;
      this._context.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
    },
    clearRect: function() {
      var a = arguments;
      this._context.clearRect(a[0], a[1], a[2], a[3]);
    },
    clip: function() {
      this._context.clip();
    },
    closePath: function() {
      this._context.closePath();
    },
    createImageData: function() {
      var a = arguments;
      if (a.length === 2) {
        return this._context.createImageData(a[0], a[1]);
      } else if (a.length === 1) {
        return this._context.createImageData(a[0]);
      }
    },
    createLinearGradient: function() {
      var a = arguments;
      return this._context.createLinearGradient(a[0], a[1], a[2], a[3]);
    },
    createPattern: function() {
      var a = arguments;
      return this._context.createPattern(a[0], a[1]);
    },
    createRadialGradient: function() {
      var a = arguments;
      return this._context.createRadialGradient(
        a[0],
        a[1],
        a[2],
        a[3],
        a[4],
        a[5]
      );
    },
    drawImage: function() {
      var a = arguments,
        _context = this._context;

      if (a.length === 3) {
        _context.drawImage(a[0], a[1], a[2]);
      } else if (a.length === 5) {
        _context.drawImage(a[0], a[1], a[2], a[3], a[4]);
      } else if (a.length === 9) {
        _context.drawImage(
          a[0],
          a[1],
          a[2],
          a[3],
          a[4],
          a[5],
          a[6],
          a[7],
          a[8]
        );
      }
    },
    isPointInPath: function(x, y) {
      return this._context.isPointInPath(x, y);
    },
    fill: function() {
      this._context.fill();
    },
    fillRect: function(x, y, width, height) {
      this._context.fillRect(x, y, width, height);
    },
    strokeRect: function(x, y, width, height) {
      this._context.strokeRect(x, y, width, height);
    },
    fillText: function() {
      var a = arguments;
      this._context.fillText(a[0], a[1], a[2]);
    },
    measureText: function(text) {
      return this._context.measureText(text);
    },
    getImageData: function() {
      var a = arguments;
      return this._context.getImageData(a[0], a[1], a[2], a[3]);
    },
    lineTo: function() {
      var a = arguments;
      this._context.lineTo(a[0], a[1]);
    },
    moveTo: function() {
      var a = arguments;
      this._context.moveTo(a[0], a[1]);
    },
    rect: function() {
      var a = arguments;
      this._context.rect(a[0], a[1], a[2], a[3]);
    },
    putImageData: function() {
      var a = arguments;
      this._context.putImageData(a[0], a[1], a[2]);
    },
    quadraticCurveTo: function() {
      var a = arguments;
      this._context.quadraticCurveTo(a[0], a[1], a[2], a[3]);
    },
    restore: function() {
      this._context.restore();
    },
    rotate: function() {
      var a = arguments;
      this._context.rotate(a[0]);
    },
    save: function() {
      this._context.save();
    },
    scale: function() {
      var a = arguments;
      this._context.scale(a[0], a[1]);
    },
    setLineDash: function() {
      var a = arguments,
        _context = this._context;

      // works for Chrome and IE11
      if (this._context.setLineDash) {
        _context.setLineDash(a[0]);
      } else if ('mozDash' in _context) {
        // verified that this works in firefox
        _context.mozDash = a[0];
      } else if ('webkitLineDash' in _context) {
        // does not currently work for Safari
        _context.webkitLineDash = a[0];
      }

      // no support for IE9 and IE10
    },
    getLineDash: function() {
      return this._context.getLineDash();
    },
    setTransform: function() {
      var a = arguments;
      this._context.setTransform(a[0], a[1], a[2], a[3], a[4], a[5]);
    },
    stroke: function() {
      this._context.stroke();
    },
    strokeText: function() {
      var a = arguments;
      this._context.strokeText(a[0], a[1], a[2]);
    },
    transform: function() {
      var a = arguments;
      this._context.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
    },
    translate: function() {
      var a = arguments;
      this._context.translate(a[0], a[1]);
    },
    _enableTrace: function() {
      var that = this,
        len = CONTEXT_METHODS.length,
        _simplifyArray = Konva.Util._simplifyArray,
        origSetter = this.setAttr,
        n,
        args;

      // to prevent creating scope function at each loop
      var func = function(methodName) {
        var origMethod = that[methodName],
          ret;

        that[methodName] = function() {
          args = _simplifyArray(Array.prototype.slice.call(arguments, 0));
          ret = origMethod.apply(that, arguments);

          that._trace({
            method: methodName,
            args: args
          });

          return ret;
        };
      };
      // methods
      for (n = 0; n < len; n++) {
        func(CONTEXT_METHODS[n]);
      }

      // attrs
      that.setAttr = function() {
        origSetter.apply(that, arguments);
        var prop = arguments[0];
        var val = arguments[1];
        if (
          prop === 'shadowOffsetX' ||
          prop === 'shadowOffsetY' ||
          prop === 'shadowBlur'
        ) {
          val = val / this.canvas.getPixelRatio();
        }
        that._trace({
          property: prop,
          val: val
        });
      };
    }
  };

  CONTEXT_PROPERTIES.forEach(function(prop) {
    Object.defineProperty(Konva.Context.prototype, prop, {
      get: function() {
        return this._context[prop];
      },
      set: function(val) {
        this._context[prop] = val;
      }
    });
  });

  Konva.SceneContext = function(canvas) {
    Konva.Context.call(this, canvas);
  };

  Konva.SceneContext.prototype = {
    _fillColor: function(shape) {
      var fill = shape.fill();

      this.setAttr('fillStyle', fill);
      shape._fillFunc(this);
    },
    _fillPattern: function(shape) {
      var fillPatternX = shape.getFillPatternX(),
        fillPatternY = shape.getFillPatternY(),
        fillPatternScale = shape.getFillPatternScale(),
        fillPatternRotation = Konva.getAngle(shape.getFillPatternRotation()),
        fillPatternOffset = shape.getFillPatternOffset();

      if (fillPatternX || fillPatternY) {
        this.translate(fillPatternX || 0, fillPatternY || 0);
      }
      if (fillPatternRotation) {
        this.rotate(fillPatternRotation);
      }
      if (fillPatternScale) {
        this.scale(fillPatternScale.x, fillPatternScale.y);
      }
      if (fillPatternOffset) {
        this.translate(-1 * fillPatternOffset.x, -1 * fillPatternOffset.y);
      }

      this.setAttr(
        'fillStyle',
        this.createPattern(
          shape.getFillPatternImage(),
          shape.getFillPatternRepeat() || 'repeat'
        )
      );
      this.fill();
    },
    _fillLinearGradient: function(shape) {
      var start = shape.getFillLinearGradientStartPoint(),
        end = shape.getFillLinearGradientEndPoint(),
        colorStops = shape.getFillLinearGradientColorStops(),
        grd = this.createLinearGradient(start.x, start.y, end.x, end.y);

      if (colorStops) {
        // build color stops
        for (var n = 0; n < colorStops.length; n += 2) {
          grd.addColorStop(colorStops[n], colorStops[n + 1]);
        }
        this.setAttr('fillStyle', grd);
        shape._fillFunc(this);
      }
    },
    _fillRadialGradient: function(shape) {
      var start = shape.getFillRadialGradientStartPoint(),
        end = shape.getFillRadialGradientEndPoint(),
        startRadius = shape.getFillRadialGradientStartRadius(),
        endRadius = shape.getFillRadialGradientEndRadius(),
        colorStops = shape.getFillRadialGradientColorStops(),
        grd = this.createRadialGradient(
          start.x,
          start.y,
          startRadius,
          end.x,
          end.y,
          endRadius
        );

      // build color stops
      for (var n = 0; n < colorStops.length; n += 2) {
        grd.addColorStop(colorStops[n], colorStops[n + 1]);
      }
      this.setAttr('fillStyle', grd);
      this.fill();
    },
    _fill: function(shape) {
      var hasColor = shape.fill(),
        fillPriority = shape.getFillPriority();

      // priority fills
      if (hasColor && fillPriority === 'color') {
        this._fillColor(shape);
        return;
      }

      var hasPattern = shape.getFillPatternImage();
      if (hasPattern && fillPriority === 'pattern') {
        this._fillPattern(shape);
        return;
      }

      var hasLinearGradient = shape.getFillLinearGradientColorStops();
      if (hasLinearGradient && fillPriority === 'linear-gradient') {
        this._fillLinearGradient(shape);
        return;
      }

      var hasRadialGradient = shape.getFillRadialGradientColorStops();
      if (hasRadialGradient && fillPriority === 'radial-gradient') {
        this._fillRadialGradient(shape);
        return;
      }

      // now just try and fill with whatever is available
      if (hasColor) {
        this._fillColor(shape);
      } else if (hasPattern) {
        this._fillPattern(shape);
      } else if (hasLinearGradient) {
        this._fillLinearGradient(shape);
      } else if (hasRadialGradient) {
        this._fillRadialGradient(shape);
      }
    },
    _strokeLinearGradient: function(shape) {
      var start = shape.getStrokeLinearGradientStartPoint(),
        end = shape.getStrokeLinearGradientEndPoint(),
        colorStops = shape.getStrokeLinearGradientColorStops(),
        grd = this.createLinearGradient(start.x, start.y, end.x, end.y);

      if (colorStops) {
        // build color stops
        for (var n = 0; n < colorStops.length; n += 2) {
          grd.addColorStop(colorStops[n], colorStops[n + 1]);
        }
        this.setAttr('strokeStyle', grd);
      }
    },
    _stroke: function(shape) {
      var dash = shape.dash(),
        // ignore strokeScaleEnabled for Text
        strokeScaleEnabled =
          shape.getStrokeScaleEnabled() || shape instanceof Konva.Text;

      if (shape.hasStroke()) {
        if (!strokeScaleEnabled) {
          this.save();
          this.setTransform(1, 0, 0, 1, 0, 0);
        }

        this._applyLineCap(shape);
        if (dash && shape.dashEnabled()) {
          this.setLineDash(dash);
          this.setAttr('lineDashOffset', shape.dashOffset());
        }

        this.setAttr('lineWidth', shape.strokeWidth());

        if (!shape.getShadowForStrokeEnabled()) {
          this.setAttr('shadowColor', 'rgba(0,0,0,0)');
        }

        // TODO - do we need to make like a fill function?

        var hasLinearGradient = shape.getStrokeLinearGradientColorStops();
        if (hasLinearGradient) {
          this._strokeLinearGradient(shape);
        } else {
          this.setAttr('strokeStyle', shape.stroke());
        }

        shape._strokeFunc(this);

        if (!strokeScaleEnabled) {
          this.restore();
        }
      }
    },
    _applyShadow: function(shape) {
      var util = Konva.Util,
        color = util.get(shape.getShadowRGBA(), 'black'),
        blur = util.get(shape.getShadowBlur(), 5),
        offset = util.get(shape.getShadowOffset(), {
          x: 0,
          y: 0
        }),
        scale = shape.getAbsoluteScale(),
        ratio = this.canvas.getPixelRatio(),
        scaleX = scale.x * ratio,
        scaleY = scale.y * ratio;

      this.setAttr('shadowColor', color);
      this.setAttr(
        'shadowBlur',
        blur * Math.min(Math.abs(scaleX), Math.abs(scaleY))
      );
      this.setAttr('shadowOffsetX', offset.x * scaleX);
      this.setAttr('shadowOffsetY', offset.y * scaleY);
    },
    _applyGlobalCompositeOperation: function(shape) {
      var globalCompositeOperation = shape.getGlobalCompositeOperation();
      if (globalCompositeOperation !== 'source-over') {
        this.setAttr('globalCompositeOperation', globalCompositeOperation);
      }
    }
  };
  Konva.Util.extend(Konva.SceneContext, Konva.Context);

  Konva.HitContext = function(canvas) {
    Konva.Context.call(this, canvas);
  };

  Konva.HitContext.prototype = {
    _fill: function(shape) {
      this.save();
      this.setAttr('fillStyle', shape.colorKey);
      shape._fillFuncHit(this);
      this.restore();
    },
    _stroke: function(shape) {
      if (shape.hasStroke() && shape.strokeHitEnabled()) {
        // ignore strokeScaleEnabled for Text
        var strokeScaleEnabled =
          shape.getStrokeScaleEnabled() || shape instanceof Konva.Text;
        if (!strokeScaleEnabled) {
          this.save();
          this.setTransform(1, 0, 0, 1, 0, 0);
        }
        this._applyLineCap(shape);
        this.setAttr('lineWidth', shape.strokeWidth());
        this.setAttr('strokeStyle', shape.colorKey);
        shape._strokeFuncHit(this);
        if (!strokeScaleEnabled) {
          this.restore();
        }
      }
    }
  };
  Konva.Util.extend(Konva.HitContext, Konva.Context);
})();

(function() {
  'use strict';
  // CONSTANTS
  var GET = 'get',
    SET = 'set';

  Konva.Factory = {
    addGetterSetter: function(constructor, attr, def, validator, after) {
      this.addGetter(constructor, attr, def);
      this.addSetter(constructor, attr, validator, after);
      this.addOverloadedGetterSetter(constructor, attr);
    },
    addGetter: function(constructor, attr, def) {
      var method = GET + Konva.Util._capitalize(attr);

      constructor.prototype[method] = function() {
        var val = this.attrs[attr];
        return val === undefined ? def : val;
      };
    },
    addSetter: function(constructor, attr, validator, after) {
      // if (!validator && validator !== null) {
      //   console.error(constructor, attr, 'has no validator.');
      // }
      var method = SET + Konva.Util._capitalize(attr);

      constructor.prototype[method] = function(val) {
        if (validator && val !== undefined && val !== null) {
          val = validator.call(this, val, attr);
        }

        this._setAttr(attr, val);

        if (after) {
          after.call(this);
        }

        return this;
      };
    },
    addComponentsGetterSetter: function(
      constructor,
      attr,
      components,
      validator,
      after
    ) {
      var len = components.length,
        capitalize = Konva.Util._capitalize,
        getter = GET + capitalize(attr),
        setter = SET + capitalize(attr),
        n,
        component;

      // getter
      constructor.prototype[getter] = function() {
        var ret = {};

        for (n = 0; n < len; n++) {
          component = components[n];
          ret[component] = this.getAttr(attr + capitalize(component));
        }

        return ret;
      };

      // setter
      constructor.prototype[setter] = function(val) {
        var oldVal = this.attrs[attr],
          key;

        if (validator) {
          val = validator.call(this, val);
        }

        for (key in val) {
          if (!val.hasOwnProperty(key)) {
            continue;
          }
          this._setAttr(attr + capitalize(key), val[key]);
        }

        this._fireChangeEvent(attr, oldVal, val);

        if (after) {
          after.call(this);
        }

        return this;
      };

      this.addOverloadedGetterSetter(constructor, attr);
    },
    addOverloadedGetterSetter: function(constructor, attr) {
      var capitalizedAttr = Konva.Util._capitalize(attr),
        setter = SET + capitalizedAttr,
        getter = GET + capitalizedAttr;

      constructor.prototype[attr] = function() {
        // setting
        if (arguments.length) {
          this[setter](arguments[0]);
          return this;
        }
        // getting
        return this[getter]();
      };
    },
    addDeprecatedGetterSetter: function(constructor, attr, def, validator) {
      Konva.Util.error('Adding deprecated ' + attr);

      var method = GET + Konva.Util._capitalize(attr);

      var message =
        attr +
        ' property is deprecated and will be removed soon. Look at Konva change log for more information.';
      constructor.prototype[method] = function() {
        Konva.Util.error(message);
        var val = this.attrs[attr];
        return val === undefined ? def : val;
      };
      this.addSetter(constructor, attr, validator, function() {
        Konva.Util.error(message);
      });
      this.addOverloadedGetterSetter(constructor, attr);
    },
    backCompat: function(constructor, methods) {
      Konva.Util.each(methods, function(oldMethodName, newMethodName) {
        var method = constructor.prototype[newMethodName];
        var oldGetter = GET + Konva.Util._capitalize(oldMethodName);
        var oldSetter = SET + Konva.Util._capitalize(oldMethodName);

        function deprecated() {
          method.apply(this, arguments);
          Konva.Util.error(
            '"' +
              oldMethodName +
              '" method is deprecated and will be removed soon. Use ""' +
              newMethodName +
              '" instead.'
          );
        }

        constructor.prototype[oldMethodName] = deprecated;
        constructor.prototype[oldGetter] = deprecated;
        constructor.prototype[oldSetter] = deprecated;
      });
    },
    afterSetFilter: function() {
      this._filterUpToDate = false;
    }
  };

  Konva.Validators = {
    /**
     * @return {number}
     */
    RGBComponent: function(val) {
      if (val > 255) {
        return 255;
      } else if (val < 0) {
        return 0;
      }
      return Math.round(val);
    },
    alphaComponent: function(val) {
      if (val > 1) {
        return 1;
      } else if (val < 0.0001) {
        // chrome does not honor alpha values of 0
        return 0.0001;
      }

      return val;
    },
    _formatValue: function(val) {
      if (Konva.Util._isString(val)) {
        return '"' + val + '"';
      }
      if (Object.prototype.toString.call(val) === '[object Number]') {
        return val;
      }
      if (Konva.Util._isBoolean(val)) {
        return val;
      }
      return Object.prototype.toString.call(val);
    },
    getNumberValidator: function() {
      if (Konva.isUnminified) {
        return function(val, attr) {
          if (!Konva.Util._isNumber(val)) {
            Konva.Util.warn(
              Konva.Validators._formatValue(val) +
                ' is a not valid value for "' +
                attr +
                '" attribute. The value should be a number.'
            );
          }
          return val;
        };
      }
    },
    getNumberOrAutoValidator: function() {
      if (Konva.isUnminified) {
        return function(val, attr) {
          var isNumber = Konva.Util._isNumber(val);
          var isAuto = val === 'auto';

          if (!(isNumber || isAuto)) {
            Konva.Util.warn(
              Konva.Validators._formatValue(val) +
                ' is a not valid value for "' +
                attr +
                '" attribute. The value should be a number or "auto".'
            );
          }
          return val;
        };
      }
    },
    getStringValidator: function() {
      if (Konva.isUnminified) {
        return function(val, attr) {
          if (!Konva.Util._isString(val)) {
            Konva.Util.warn(
              Konva.Validators._formatValue(val) +
                ' is a not valid value for "' +
                attr +
                '" attribute. The value should be a string.'
            );
          }
          return val;
        };
      }
    },
    getFunctionValidator: function() {
      if (Konva.isUnminified) {
        return function(val, attr) {
          if (!Konva.Util._isFunction(val)) {
            Konva.Util.warn(
              Konva.Validators._formatValue(val) +
                ' is a not valid value for "' +
                attr +
                '" attribute. The value should be a function.'
            );
          }
          return val;
        };
      }
    },
    getNumberArrayValidator: function() {
      if (Konva.isUnminified) {
        return function(val, attr) {
          if (!Konva.Util._isArray(val)) {
            Konva.Util.warn(
              Konva.Validators._formatValue(val) +
                ' is a not valid value for "' +
                attr +
                '" attribute. The value should be a array of numbers.'
            );
          } else {
            val.forEach(function(item) {
              if (!Konva.Util._isNumber(item)) {
                Konva.Util.warn(
                  '"' +
                    attr +
                    '" attribute has non numeric element ' +
                    item +
                    '. Make sure that all elements are numbers.'
                );
              }
            });
          }
          return val;
        };
      }
    },
    getBooleanValidator: function() {
      if (Konva.isUnminified) {
        return function(val, attr) {
          var isBool = val === true || val === false;
          if (!isBool) {
            Konva.Util.warn(
              Konva.Validators._formatValue(val) +
                ' is a not valid value for "' +
                attr +
                '" attribute. The value should be a boolean.'
            );
          }
          return val;
        };
      }
    }
  };
})();

(function(Konva) {
  'use strict';
  // CONSTANTS
  var ABSOLUTE_OPACITY = 'absoluteOpacity',
    ABSOLUTE_TRANSFORM = 'absoluteTransform',
    ABSOLUTE_SCALE = 'absoluteScale',
    CHANGE = 'Change',
    CHILDREN = 'children',
    DOT = '.',
    EMPTY_STRING = '',
    GET = 'get',
    ID = 'id',
    KONVA = 'konva',
    LISTENING = 'listening',
    MOUSEENTER = 'mouseenter',
    MOUSELEAVE = 'mouseleave',
    NAME = 'name',
    SET = 'set',
    SHAPE = 'Shape',
    SPACE = ' ',
    STAGE = 'stage',
    TRANSFORM = 'transform',
    UPPER_STAGE = 'Stage',
    VISIBLE = 'visible',
    CLONE_BLACK_LIST = ['id'],
    TRANSFORM_CHANGE_STR = [
      'xChange.konva',
      'yChange.konva',
      'scaleXChange.konva',
      'scaleYChange.konva',
      'skewXChange.konva',
      'skewYChange.konva',
      'rotationChange.konva',
      'offsetXChange.konva',
      'offsetYChange.konva',
      'transformsEnabledChange.konva'
    ].join(SPACE),
    SCALE_CHANGE_STR = ['scaleXChange.konva', 'scaleYChange.konva'].join(SPACE);

  /**
   * Node constructor. Nodes are entities that can be transformed, layered,
   * and have bound events. The stage, layers, groups, and shapes all extend Node.
   * @constructor
   * @memberof Konva
   * @abstract
   * @param {Object} config
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   */
  Konva.Node = function(config) {
    this._init(config);
  };

  Konva.Util.addMethods(Konva.Node, {
    _init: function(config) {
      this._id = Konva.idCounter++;
      this.eventListeners = {};
      this.attrs = {};
      this._cache = {};
      this._filterUpToDate = false;
      this._isUnderCache = false;
      this.setAttrs(config);

      // event bindings for cache handling
      this.on(TRANSFORM_CHANGE_STR, function() {
        this._clearCache(TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
      });

      this.on(SCALE_CHANGE_STR, function() {
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
      });

      this.on('visibleChange.konva', function() {
        this._clearSelfAndDescendantCache(VISIBLE);
      });
      this.on('listeningChange.konva', function() {
        this._clearSelfAndDescendantCache(LISTENING);
      });
      this.on('opacityChange.konva', function() {
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
      });
    },
    _clearCache: function(attr) {
      if (attr) {
        delete this._cache[attr];
      } else {
        this._cache = {};
      }
    },
    _getCache: function(attr, privateGetter) {
      var cache = this._cache[attr];

      // if not cached, we need to set it using the private getter method.
      if (cache === undefined) {
        this._cache[attr] = privateGetter.call(this);
      }

      return this._cache[attr];
    },
    /*
         * when the logic for a cached result depends on ancestor propagation, use this
         * method to clear self and children cache
         */
    _clearSelfAndDescendantCache: function(attr) {
      this._clearCache(attr);

      if (this.children) {
        this.getChildren().each(function(node) {
          node._clearSelfAndDescendantCache(attr);
        });
      }
    },
    /**
     * clear cached canvas
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Node}
     * @example
     * node.clearCache();
     */
    clearCache: function() {
      delete this._cache.canvas;
      this._filterUpToDate = false;
      return this;
    },
    /**
     *  cache node to improve drawing performance, apply filters, or create more accurate
     *  hit regions. For all basic shapes size of cache canvas will be automatically detected.
     *  If you need to cache your custom `Konva.Shape` instance you have to pass shape's bounding box
     *  properties. Look at [https://konvajs.github.io/docs/performance/Shape_Caching.html](link to demo page) for more information.
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} [config]
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Number} [config.offset]  increase canvas size by `offset` pixel in all directions.
     * @param {Boolean} [config.drawBorder] when set to true, a red border will be drawn around the cached
     *  region for debugging purposes
     * @param {Number} [config.pixelRatio] change quality (or pixel ratio) of cached image. pixelRatio = 2 will produce 2x sized cache.
     * @returns {Konva.Node}
     * @example
     * // cache a shape with the x,y position of the bounding box at the center and
     * // the width and height of the bounding box equal to the width and height of
     * // the shape obtained from shape.width() and shape.height()
     * image.cache();
     *
     * // cache a node and define the bounding box position and size
     * node.cache({
     *   x: -30,
     *   y: -30,
     *   width: 100,
     *   height: 200
     * });
     *
     * // cache a node and draw a red border around the bounding box
     * // for debugging purposes
     * node.cache({
     *   x: -30,
     *   y: -30,
     *   width: 100,
     *   height: 200,
     *   offset : 10,
     *   drawBorder: true
     * });
     */
    cache: function(config) {
      var conf = config || {},
        rect = this.getClientRect({
          skipTransform: true,
          relativeTo: this.getParent()
        }),
        width = conf.width || rect.width,
        height = conf.height || rect.height,
        pixelRatio = conf.pixelRatio,
        x = conf.x || rect.x,
        y = conf.y || rect.y,
        offset = conf.offset || 0,
        drawBorder = conf.drawBorder || false;

      if (!width || !height) {
        Konva.Util.error(
          'Can not cache the node. Width or height of the node equals 0. Caching is skipped.'
        );
        return;
      }

      width += offset * 2;
      height += offset * 2;

      x -= offset;
      y -= offset;

      var cachedSceneCanvas = new Konva.SceneCanvas({
          pixelRatio: pixelRatio,
          width: width,
          height: height
        }),
        cachedFilterCanvas = new Konva.SceneCanvas({
          pixelRatio: pixelRatio,
          width: width,
          height: height
        }),
        cachedHitCanvas = new Konva.HitCanvas({
          pixelRatio: 1,
          width: width,
          height: height
        }),
        sceneContext = cachedSceneCanvas.getContext(),
        hitContext = cachedHitCanvas.getContext();

      cachedHitCanvas.isCache = true;

      this.clearCache();

      sceneContext.save();
      hitContext.save();

      sceneContext.translate(-x, -y);
      hitContext.translate(-x, -y);

      // extra flag to skip on getAbsolute opacity calc
      this._isUnderCache = true;
      this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
      this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);

      this.drawScene(cachedSceneCanvas, this, true);
      this.drawHit(cachedHitCanvas, this, true);
      this._isUnderCache = false;

      sceneContext.restore();
      hitContext.restore();

      // this will draw a red border around the cached box for
      // debugging purposes
      if (drawBorder) {
        sceneContext.save();
        sceneContext.beginPath();
        sceneContext.rect(0, 0, width, height);
        sceneContext.closePath();
        sceneContext.setAttr('strokeStyle', 'red');
        sceneContext.setAttr('lineWidth', 5);
        sceneContext.stroke();
        sceneContext.restore();
      }

      this._cache.canvas = {
        scene: cachedSceneCanvas,
        filter: cachedFilterCanvas,
        hit: cachedHitCanvas,
        x: x,
        y: y
      };

      return this;
    },
    /**
     * Return client rectangle {x, y, width, height} of node. This rectangle also include all styling (strokes, shadows, etc).
     * The rectangle position is relative to parent container.
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} config
     * @param {Boolean} [config.skipTransform] should we apply transform to node for calculating rect?
     * @param {Object} [config.relativeTo] calculate client rect relative to one of the parents
     * @returns {Object} rect with {x, y, width, height} properties
     * @example
     * var rect = new Konva.Rect({
     *      width : 100,
     *      height : 100,
     *      x : 50,
     *      y : 50,
     *      strokeWidth : 4,
     *      stroke : 'black',
     *      offsetX : 50,
     *      scaleY : 2
     * });
     *
     * // get client rect without think off transformations (position, rotation, scale, offset, etc)
     * rect.getClientRect({ skipTransform: true});
     * // returns {
     * //     x : -2,   // two pixels for stroke / 2
     * //     y : -2,
     * //     width : 104, // increased by 4 for stroke
     * //     height : 104
     * //}
     *
     * // get client rect with transformation applied
     * rect.getClientRect();
     * // returns Object {x: -2, y: 46, width: 104, height: 208}
     */
    getClientRect: function() {
      // abstract method
      // redefine in Container and Shape
      throw new Error('abstract "getClientRect" method call');
    },
    _transformedRect: function(rect, top) {
      var points = [
        { x: rect.x, y: rect.y },
        { x: rect.x + rect.width, y: rect.y },
        { x: rect.x + rect.width, y: rect.y + rect.height },
        { x: rect.x, y: rect.y + rect.height }
      ];
      var minX, minY, maxX, maxY;
      var trans = this.getAbsoluteTransform(top);
      points.forEach(function(point) {
        var transformed = trans.point(point);
        if (minX === undefined) {
          minX = maxX = transformed.x;
          minY = maxY = transformed.y;
        }
        minX = Math.min(minX, transformed.x);
        minY = Math.min(minY, transformed.y);
        maxX = Math.max(maxX, transformed.x);
        maxY = Math.max(maxY, transformed.y);
      });
      return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    },
    _drawCachedSceneCanvas: function(context) {
      context.save();
      context._applyOpacity(this);
      context._applyGlobalCompositeOperation(this);
      context.translate(this._cache.canvas.x, this._cache.canvas.y);

      var cacheCanvas = this._getCachedSceneCanvas();
      var ratio = cacheCanvas.pixelRatio;

      context.drawImage(
        cacheCanvas._canvas,
        0,
        0,
        cacheCanvas.width / ratio,
        cacheCanvas.height / ratio
      );
      context.restore();
    },
    _drawCachedHitCanvas: function(context) {
      var cachedCanvas = this._cache.canvas,
        hitCanvas = cachedCanvas.hit;
      context.save();
      context.translate(this._cache.canvas.x, this._cache.canvas.y);
      context.drawImage(hitCanvas._canvas, 0, 0);
      context.restore();
    },
    _getCachedSceneCanvas: function() {
      var filters = this.filters(),
        cachedCanvas = this._cache.canvas,
        sceneCanvas = cachedCanvas.scene,
        filterCanvas = cachedCanvas.filter,
        filterContext = filterCanvas.getContext(),
        len,
        imageData,
        n,
        filter;

      if (filters) {
        if (!this._filterUpToDate) {
          var ratio = sceneCanvas.pixelRatio;

          try {
            len = filters.length;
            filterContext.clear();

            // copy cached canvas onto filter context
            filterContext.drawImage(
              sceneCanvas._canvas,
              0,
              0,
              sceneCanvas.getWidth() / ratio,
              sceneCanvas.getHeight() / ratio
            );
            imageData = filterContext.getImageData(
              0,
              0,
              filterCanvas.getWidth(),
              filterCanvas.getHeight()
            );

            // apply filters to filter context
            for (n = 0; n < len; n++) {
              filter = filters[n];
              if (typeof filter !== 'function') {
                Konva.Util.error(
                  'Filter should be type of function, but got ' +
                    typeof filter +
                    ' insted. Please check correct filters'
                );
                continue;
              }
              filter.call(this, imageData);
              filterContext.putImageData(imageData, 0, 0);
            }
          } catch (e) {
            Konva.Util.error('Unable to apply filter. ' + e.message);
          }

          this._filterUpToDate = true;
        }

        return filterCanvas;
      }
      return sceneCanvas;
    },
    /**
     * bind events to the node. KonvaJS supports mouseover, mousemove,
     *  mouseout, mouseenter, mouseleave, mousedown, mouseup, wheel, contextmenu, click, dblclick, touchstart, touchmove,
     *  touchend, tap, dbltap, dragstart, dragmove, and dragend events. The Konva Stage supports
     *  contentMouseover, contentMousemove, contentMouseout, contentMousedown, contentMouseup, contentWheel, contentContextmenu
     *  contentClick, contentDblclick, contentTouchstart, contentTouchmove, contentTouchend, contentTap,
     *  and contentDblTap.  Pass in a string of events delimited by a space to bind multiple events at once
     *  such as 'mousedown mouseup mousemove'. Include a namespace to bind an
     *  event by name such as 'click.foobar'.
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} evtStr e.g. 'click', 'mousedown touchstart', 'mousedown.foo touchstart.foo'
     * @param {Function} handler The handler function is passed an event object
     * @returns {Konva.Node}
     * @example
     * // add click listener
     * node.on('click', function() {
     *   console.log('you clicked me!');
     * });
     *
     * // get the target node
     * node.on('click', function(evt) {
     *   console.log(evt.target);
     * });
     *
     * // stop event propagation
     * node.on('click', function(evt) {
     *   evt.cancelBubble = true;
     * });
     *
     * // bind multiple listeners
     * node.on('click touchstart', function() {
     *   console.log('you clicked/touched me!');
     * });
     *
     * // namespace listener
     * node.on('click.foo', function() {
     *   console.log('you clicked/touched me!');
     * });
     *
     * // get the event type
     * node.on('click tap', function(evt) {
     *   var eventType = evt.type;
     * });
     *
     * // get native event object
     * node.on('click tap', function(evt) {
     *   var nativeEvent = evt.evt;
     * });
     *
     * // for change events, get the old and new val
     * node.on('xChange', function(evt) {
     *   var oldVal = evt.oldVal;
     *   var newVal = evt.newVal;
     * });
     *
     * // get event targets
     * // with event delegations
     * layer.on('click', 'Group', function(evt) {
     *   var shape = evt.target;
     *   var group = evtn.currentTarger;
     * });
     */
    on: function(evtStr, handler) {
      if (arguments.length === 3) {
        return this._delegate.apply(this, arguments);
      }
      var events = evtStr.split(SPACE),
        len = events.length,
        n,
        event,
        parts,
        baseEvent,
        name;

      /*
             * loop through types and attach event listeners to
             * each one.  eg. 'click mouseover.namespace mouseout'
             * will create three event bindings
             */
      for (n = 0; n < len; n++) {
        event = events[n];
        parts = event.split(DOT);
        baseEvent = parts[0];
        name = parts[1] || EMPTY_STRING;

        // create events array if it doesn't exist
        if (!this.eventListeners[baseEvent]) {
          this.eventListeners[baseEvent] = [];
        }

        this.eventListeners[baseEvent].push({
          name: name,
          handler: handler
        });
      }

      return this;
    },
    /**
     * remove event bindings from the node. Pass in a string of
     *  event types delimmited by a space to remove multiple event
     *  bindings at once such as 'mousedown mouseup mousemove'.
     *  include a namespace to remove an event binding by name
     *  such as 'click.foobar'. If you only give a name like '.foobar',
     *  all events in that namespace will be removed.
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} evtStr e.g. 'click', 'mousedown touchstart', '.foobar'
     * @returns {Konva.Node}
     * @example
     * // remove listener
     * node.off('click');
     *
     * // remove multiple listeners
     * node.off('click touchstart');
     *
     * // remove listener by name
     * node.off('click.foo');
     */
    off: function(evtStr, callback) {
      var events = (evtStr || '').split(SPACE),
        len = events.length,
        n,
        t,
        event,
        parts,
        baseEvent,
        name;

      if (!evtStr) {
        // remove all events
        for (t in this.eventListeners) {
          this._off(t);
        }
      }
      for (n = 0; n < len; n++) {
        event = events[n];
        parts = event.split(DOT);
        baseEvent = parts[0];
        name = parts[1];

        if (baseEvent) {
          if (this.eventListeners[baseEvent]) {
            this._off(baseEvent, name, callback);
          }
        } else {
          for (t in this.eventListeners) {
            this._off(t, name, callback);
          }
        }
      }
      return this;
    },
    // some event aliases for third party integration like HammerJS
    dispatchEvent: function(evt) {
      var e = {
        target: this,
        type: evt.type,
        evt: evt
      };
      this.fire(evt.type, e);
      return this;
    },
    addEventListener: function(type, handler) {
      // we have to pass native event to handler
      this.on(type, function(evt) {
        handler.call(this, evt.evt);
      });
      return this;
    },
    removeEventListener: function(type) {
      this.off(type);
      return this;
    },
    // like node.on
    _delegate: function(event, selector, handler) {
      var stopNode = this;
      this.on(event, function(evt) {
        var targets = evt.target.findAncestors(selector, true, stopNode);
        for (var i = 0; i < targets.length; i++) {
          evt = Konva.Util.cloneObject(evt);
          evt.currentTarget = targets[i];
          handler.call(targets[i], evt);
        }
      });
    },
    /**
     * remove self from parent, but don't destroy. You can reuse node later.
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Node}
     * @example
     * node.remove();
     */
    remove: function() {
      var parent = this.getParent();

      if (parent && parent.children) {
        parent.children.splice(this.index, 1);
        parent._setChildrenIndices();
        delete this.parent;
      }

      // every cached attr that is calculated via node tree
      // traversal must be cleared when removing a node
      this._clearSelfAndDescendantCache(STAGE);
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
      this._clearSelfAndDescendantCache(VISIBLE);
      this._clearSelfAndDescendantCache(LISTENING);
      this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);

      return this;
    },
    /**
     * remove and destroy a node. Kill it forever! You should not reuse node after destroy().
     * @method
     * @memberof Konva.Node.prototype
     * @example
     * node.destroy();
     */
    destroy: function() {
      // remove from ids and names hashes
      Konva._removeId(this.getId());

      // remove all names
      var names = (this.getName() || '').split(/\s/g);
      for (var i = 0; i < names.length; i++) {
        var subname = names[i];
        Konva._removeName(subname, this._id);
      }

      this.remove();
      return this;
    },
    /**
     * get attr
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} attr
     * @returns {Integer|String|Object|Array}
     * @example
     * var x = node.getAttr('x');
     */
    getAttr: function(attr) {
      var method = GET + Konva.Util._capitalize(attr);
      if (Konva.Util._isFunction(this[method])) {
        return this[method]();
      }
      // otherwise get directly
      return this.attrs[attr];
    },
    /**
     * get ancestors
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Collection}
     * @example
     * shape.getAncestors().each(function(node) {
     *   console.log(node.getId());
     * })
     */
    getAncestors: function() {
      var parent = this.getParent(),
        ancestors = new Konva.Collection();

      while (parent) {
        ancestors.push(parent);
        parent = parent.getParent();
      }

      return ancestors;
    },
    /**
     * get attrs object literal
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Object}
     */
    getAttrs: function() {
      return this.attrs || {};
    },
    /**
     * set multiple attrs at once using an object literal
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} config object containing key value pairs
     * @returns {Konva.Node}
     * @example
     * node.setAttrs({
     *   x: 5,
     *   fill: 'red'
     * });
     */
    setAttrs: function(config) {
      var key, method;

      if (!config) {
        return this;
      }
      for (key in config) {
        if (key === CHILDREN) {
          continue;
        }
        method = SET + Konva.Util._capitalize(key);
        // use setter if available
        if (Konva.Util._isFunction(this[method])) {
          this[method](config[key]);
        } else {
          // otherwise set directly
          this._setAttr(key, config[key]);
        }
      }
      return this;
    },
    /**
     * determine if node is listening for events by taking into account ancestors.
     *
     * Parent    | Self      | isListening
     * listening | listening |
     * ----------+-----------+------------
     * T         | T         | T
     * T         | F         | F
     * F         | T         | T
     * F         | F         | F
     * ----------+-----------+------------
     * T         | I         | T
     * F         | I         | F
     * I         | I         | T
     *
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Boolean}
     */
    isListening: function() {
      return this._getCache(LISTENING, this._isListening);
    },
    _isListening: function() {
      var listening = this.getListening(),
        parent = this.getParent();

      // the following conditions are a simplification of the truth table above.
      // please modify carefully
      if (listening === 'inherit') {
        if (parent) {
          return parent.isListening();
        } else {
          return true;
        }
      } else {
        return listening;
      }
    },
    /**
     * determine if node is visible by taking into account ancestors.
     *
     * Parent    | Self      | isVisible
     * visible   | visible   |
     * ----------+-----------+------------
     * T         | T         | T
     * T         | F         | F
     * F         | T         | T
     * F         | F         | F
     * ----------+-----------+------------
     * T         | I         | T
     * F         | I         | F
     * I         | I         | T

      * @method
      * @memberof Konva.Node.prototype
      * @returns {Boolean}
      */
    isVisible: function() {
      return this._getCache(VISIBLE, this._isVisible);
    },
    _isVisible: function() {
      var visible = this.getVisible(),
        parent = this.getParent();

      // the following conditions are a simplification of the truth table above.
      // please modify carefully
      if (visible === 'inherit') {
        if (parent) {
          return parent.isVisible();
        } else {
          return true;
        }
      } else {
        return visible;
      }
    },
    /**
     * determine if listening is enabled by taking into account descendants.  If self or any children
     * have _isListeningEnabled set to true, then self also has listening enabled.
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Boolean}
     */
    shouldDrawHit: function(canvas) {
      var layer = this.getLayer();
      return (
        (canvas && canvas.isCache) ||
        (layer &&
          layer.hitGraphEnabled() &&
          this.isListening() &&
          this.isVisible())
      );
    },
    /**
     * show node
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Node}
     */
    show: function() {
      this.setVisible(true);
      return this;
    },
    /**
     * hide node.  Hidden nodes are no longer detectable
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Node}
     */
    hide: function() {
      this.setVisible(false);
      return this;
    },
    /**
     * get zIndex relative to the node's siblings who share the same parent
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Integer}
     */
    getZIndex: function() {
      return this.index || 0;
    },
    /**
     * get absolute z-index which takes into account sibling
     *  and ancestor indices
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Integer}
     */
    getAbsoluteZIndex: function() {
      var depth = this.getDepth(),
        that = this,
        index = 0,
        nodes,
        len,
        n,
        child;

      function addChildren(children) {
        nodes = [];
        len = children.length;
        for (n = 0; n < len; n++) {
          child = children[n];
          index++;

          if (child.nodeType !== SHAPE) {
            nodes = nodes.concat(child.getChildren().toArray());
          }

          if (child._id === that._id) {
            n = len;
          }
        }

        if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
          addChildren(nodes);
        }
      }
      if (that.nodeType !== UPPER_STAGE) {
        addChildren(that.getStage().getChildren());
      }

      return index;
    },
    /**
     * get node depth in node tree.  Returns an integer.
     *  e.g. Stage depth will always be 0.  Layers will always be 1.  Groups and Shapes will always
     *  be >= 2
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Integer}
     */
    getDepth: function() {
      var depth = 0,
        parent = this.parent;

      while (parent) {
        depth++;
        parent = parent.parent;
      }
      return depth;
    },
    setPosition: function(pos) {
      this.setX(pos.x);
      this.setY(pos.y);
      return this;
    },
    getPosition: function() {
      return {
        x: this.getX(),
        y: this.getY()
      };
    },
    /**
     * get absolute position relative to the top left corner of the stage container div
     * or relative to passed node
     * @method
     * @param {Object} [top] optional parent node
     * @memberof Konva.Node.prototype
     * @returns {Object}
     */
    getAbsolutePosition: function(top) {
      var absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(),
        absoluteTransform = new Konva.Transform(),
        offset = this.offset();

      // clone the matrix array
      absoluteTransform.m = absoluteMatrix.slice();
      absoluteTransform.translate(offset.x, offset.y);

      return absoluteTransform.getTranslation();
    },
    /**
     * set absolute position
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} pos
     * @param {Number} pos.x
     * @param {Number} pos.y
     * @returns {Konva.Node}
     */
    setAbsolutePosition: function(pos) {
      var origTrans = this._clearTransform(),
        it;

      // don't clear translation
      this.attrs.x = origTrans.x;
      this.attrs.y = origTrans.y;
      delete origTrans.x;
      delete origTrans.y;

      // unravel transform
      it = this.getAbsoluteTransform();

      it.invert();
      it.translate(pos.x, pos.y);
      pos = {
        x: this.attrs.x + it.getTranslation().x,
        y: this.attrs.y + it.getTranslation().y
      };

      this.setPosition({ x: pos.x, y: pos.y });
      this._setTransform(origTrans);

      return this;
    },
    _setTransform: function(trans) {
      var key;

      for (key in trans) {
        this.attrs[key] = trans[key];
      }

      this._clearCache(TRANSFORM);
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    },
    _clearTransform: function() {
      var trans = {
        x: this.getX(),
        y: this.getY(),
        rotation: this.getRotation(),
        scaleX: this.getScaleX(),
        scaleY: this.getScaleY(),
        offsetX: this.getOffsetX(),
        offsetY: this.getOffsetY(),
        skewX: this.getSkewX(),
        skewY: this.getSkewY()
      };

      this.attrs.x = 0;
      this.attrs.y = 0;
      this.attrs.rotation = 0;
      this.attrs.scaleX = 1;
      this.attrs.scaleY = 1;
      this.attrs.offsetX = 0;
      this.attrs.offsetY = 0;
      this.attrs.skewX = 0;
      this.attrs.skewY = 0;

      this._clearCache(TRANSFORM);
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);

      // return original transform
      return trans;
    },
    /**
     * move node by an amount relative to its current position
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} change
     * @param {Number} change.x
     * @param {Number} change.y
     * @returns {Konva.Node}
     * @example
     * // move node in x direction by 1px and y direction by 2px
     * node.move({
     *   x: 1,
     *   y: 2)
     * });
     */
    move: function(change) {
      var changeX = change.x,
        changeY = change.y,
        x = this.getX(),
        y = this.getY();

      if (changeX !== undefined) {
        x += changeX;
      }

      if (changeY !== undefined) {
        y += changeY;
      }

      this.setPosition({ x: x, y: y });
      return this;
    },
    _eachAncestorReverse: function(func, top) {
      var family = [],
        parent = this.getParent(),
        len,
        n;

      // if top node is defined, and this node is top node,
      // there's no need to build a family tree.  just execute
      // func with this because it will be the only node
      if (top && top._id === this._id) {
        func(this);
        return;
      }

      family.unshift(this);

      while (parent && (!top || parent._id !== top._id)) {
        family.unshift(parent);
        parent = parent.parent;
      }

      len = family.length;
      for (n = 0; n < len; n++) {
        func(family[n]);
      }
    },
    /**
     * rotate node by an amount in degrees relative to its current rotation
     * @method
     * @memberof Konva.Node.prototype
     * @param {Number} theta
     * @returns {Konva.Node}
     */
    rotate: function(theta) {
      this.setRotation(this.getRotation() + theta);
      return this;
    },
    /**
     * move node to the top of its siblings
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Boolean}
     */
    moveToTop: function() {
      if (!this.parent) {
        Konva.Util.warn('Node has no parent. moveToTop function is ignored.');
        return false;
      }
      var index = this.index;
      this.parent.children.splice(index, 1);
      this.parent.children.push(this);
      this.parent._setChildrenIndices();
      return true;
    },
    /**
     * move node up
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Boolean} flag is moved or not
     */
    moveUp: function() {
      if (!this.parent) {
        Konva.Util.warn('Node has no parent. moveUp function is ignored.');
        return false;
      }
      var index = this.index,
        len = this.parent.getChildren().length;
      if (index < len - 1) {
        this.parent.children.splice(index, 1);
        this.parent.children.splice(index + 1, 0, this);
        this.parent._setChildrenIndices();
        return true;
      }
      return false;
    },
    /**
     * move node down
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Boolean}
     */
    moveDown: function() {
      if (!this.parent) {
        Konva.Util.warn('Node has no parent. moveDown function is ignored.');
        return false;
      }
      var index = this.index;
      if (index > 0) {
        this.parent.children.splice(index, 1);
        this.parent.children.splice(index - 1, 0, this);
        this.parent._setChildrenIndices();
        return true;
      }
      return false;
    },
    /**
     * move node to the bottom of its siblings
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Boolean}
     */
    moveToBottom: function() {
      if (!this.parent) {
        Konva.Util.warn(
          'Node has no parent. moveToBottom function is ignored.'
        );
        return false;
      }
      var index = this.index;
      if (index > 0) {
        this.parent.children.splice(index, 1);
        this.parent.children.unshift(this);
        this.parent._setChildrenIndices();
        return true;
      }
      return false;
    },
    /**
     * set zIndex relative to siblings
     * @method
     * @memberof Konva.Node.prototype
     * @param {Integer} zIndex
     * @returns {Konva.Node}
     */
    setZIndex: function(zIndex) {
      if (!this.parent) {
        Konva.Util.warn('Node has no parent. zIndex parameter is ignored.');
        return false;
      }
      var index = this.index;
      this.parent.children.splice(index, 1);
      this.parent.children.splice(zIndex, 0, this);
      this.parent._setChildrenIndices();
      return this;
    },
    /**
     * get absolute opacity
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Number}
     */
    getAbsoluteOpacity: function() {
      return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
    },
    _getAbsoluteOpacity: function() {
      var absOpacity = this.getOpacity();
      var parent = this.getParent();
      if (parent && !parent._isUnderCache) {
        absOpacity *= this.getParent().getAbsoluteOpacity();
      }
      return absOpacity;
    },
    /**
     * move node to another container
     * @method
     * @memberof Konva.Node.prototype
     * @param {Container} newContainer
     * @returns {Konva.Node}
     * @example
     * // move node from current layer into layer2
     * node.moveTo(layer2);
     */
    moveTo: function(newContainer) {
      // do nothing if new container is already parent
      if (this.getParent() !== newContainer) {
        // this.remove my be overrided by drag and drop
        // buy we need original
        (this.__originalRemove || this.remove).call(this);
        newContainer.add(this);
      }
      return this;
    },
    /**
     * convert Node into an object for serialization.  Returns an object.
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Object}
     */
    toObject: function() {
      var obj = {},
        attrs = this.getAttrs(),
        key,
        val,
        getter,
        defaultValue;

      obj.attrs = {};

      for (key in attrs) {
        val = attrs[key];
        getter = typeof this[key] === 'function' && this[key];
        // remove attr value so that we can extract the default value from the getter
        delete attrs[key];
        defaultValue = getter ? getter.call(this) : null;
        // restore attr value
        attrs[key] = val;
        if (defaultValue !== val) {
          obj.attrs[key] = val;
        }
      }

      obj.className = this.getClassName();
      return Konva.Util._prepareToStringify(obj);
    },
    /**
     * convert Node into a JSON string.  Returns a JSON string.
     * @method
     * @memberof Konva.Node.prototype
     * @returns {String}}
     */
    toJSON: function() {
      return JSON.stringify(this.toObject());
    },
    /**
     * get parent container
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Node}
     */
    getParent: function() {
      return this.parent;
    },
    /**
     * get all ancestros (parent then parent of the parent, etc) of the node
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} [selector] selector for search
     * @param {Boolean} [includeSelf] show we think that node is ancestro itself?
     * @param {Konva.Node} [stopNode] optional node where we need to stop searching (one of ancestors)
     * @returns {Array} [ancestors]
     * @example
     * // get one of the parent group
     * var parentGroups = node.findAncestors('Group');
     */
    findAncestors: function(selector, includeSelf, stopNode) {
      var res = [];

      if (includeSelf && this._isMatch(selector)) {
        res.push(this);
      }
      var ancestor = this.parent;
      while (ancestor) {
        if (ancestor === stopNode) {
          return res;
        }
        if (ancestor._isMatch(selector)) {
          res.push(ancestor);
        }
        ancestor = ancestor.parent;
      }
      return res;
    },
    /**
     * get ancestor (parent or parent of the parent, etc) of the node that match passed selector
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} [selector] selector for search
     * @param {Boolean} [includeSelf] show we think that node is ancestro itself?
     * @param {Konva.Node} [stopNode] optional node where we need to stop searching (one of ancestors)
     * @returns {Konva.Node} ancestor
     * @example
     * // get one of the parent group
     * var group = node.findAncestors('.mygroup');
     */
    findAncestor: function(selector, includeSelf, stopNode) {
      return this.findAncestors(selector, includeSelf, stopNode)[0];
    },
    // is current node match passed selector?
    _isMatch: function(selector) {
      if (!selector) {
        return false;
      }
      var selectorArr = selector.replace(/ /g, '').split(','),
        len = selectorArr.length,
        n,
        sel;

      for (n = 0; n < len; n++) {
        sel = selectorArr[n];
        if (!Konva.Util.isValidSelector(sel)) {
          Konva.Util.warn(
            'Selector "' +
              sel +
              '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'
          );
          Konva.Util.warn(
            'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'
          );
          Konva.Util.warn('Konva is awesome, right?');
        }
        // id selector
        if (sel.charAt(0) === '#') {
          if (this.id() === sel.slice(1)) {
            return true;
          }
        } else if (sel.charAt(0) === '.') {
          // name selector
          if (this.hasName(sel.slice(1))) {
            return true;
          }
        } else if (this._get(sel).length !== 0) {
          return true;
        }
      }
      return false;
    },
    /**
     * get layer ancestor
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Layer}
     */
    getLayer: function() {
      var parent = this.getParent();
      return parent ? parent.getLayer() : null;
    },
    /**
     * get stage ancestor
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Stage}
     */
    getStage: function() {
      return this._getCache(STAGE, this._getStage);
    },
    _getStage: function() {
      var parent = this.getParent();
      if (parent) {
        return parent.getStage();
      } else {
        return undefined;
      }
    },
    /**
     * fire event
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} eventType event type.  can be a regular event, like click, mouseover, or mouseout, or it can be a custom event, like myCustomEvent
     * @param {Event} [evt] event object
     * @param {Boolean} [bubble] setting the value to false, or leaving it undefined, will result in the event
     *  not bubbling.  Setting the value to true will result in the event bubbling.
     * @returns {Konva.Node}
     * @example
     * // manually fire click event
     * node.fire('click');
     *
     * // fire custom event
     * node.fire('foo');
     *
     * // fire custom event with custom event object
     * node.fire('foo', {
     *   bar: 10
     * });
     *
     * // fire click event that bubbles
     * node.fire('click', null, true);
     */
    fire: function(eventType, evt, bubble) {
      evt = evt || {};
      evt.target = evt.target || this;
      // bubble
      if (bubble) {
        this._fireAndBubble(eventType, evt);
      } else {
        // no bubble
        this._fire(eventType, evt);
      }
      return this;
    },
    /**
     * get absolute transform of the node which takes into
     *  account its ancestor transforms
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Transform}
     */
    getAbsoluteTransform: function(top) {
      // if using an argument, we can't cache the result.
      if (top) {
        return this._getAbsoluteTransform(top);
      } else {
        // if no argument, we can cache the result
        return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
      }
    },
    _getAbsoluteTransform: function(top) {
      var at = new Konva.Transform();

      // start with stage and traverse downwards to self
      this._eachAncestorReverse(function(node) {
        var transformsEnabled = node.transformsEnabled();

        if (transformsEnabled === 'all') {
          at.multiply(node.getTransform());
        } else if (transformsEnabled === 'position') {
          at.translate(
            node.getX() - node.getOffsetX(),
            node.getY() - node.getOffsetY()
          );
        }
      }, top);
      return at;
    },
    /**
     * get absolute scale of the node which takes into
     *  account its ancestor scales
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Transform}
     */
    getAbsoluteScale: function(top) {
      // if using an argument, we can't cache the result.
      if (top) {
        return this._getAbsoluteScale(top);
      } else {
        // if no argument, we can cache the result
        return this._getCache(ABSOLUTE_SCALE, this._getAbsoluteScale);
      }
    },
    _getAbsoluteScale: function(top) {
      // this is special logic for caching with some shapes with shadow
      var parent = this;
      while (parent) {
        if (parent._isUnderCache) {
          top = parent;
        }
        parent = parent.getParent();
      }

      var scaleX = 1,
        scaleY = 1;

      // start with stage and traverse downwards to self
      this._eachAncestorReverse(function(node) {
        scaleX *= node.scaleX();
        scaleY *= node.scaleY();
      }, top);
      return {
        x: scaleX,
        y: scaleY
      };
    },
    /**
     * get transform of the node
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Transform}
     */
    getTransform: function() {
      return this._getCache(TRANSFORM, this._getTransform);
    },
    _getTransform: function() {
      var m = new Konva.Transform(),
        x = this.getX(),
        y = this.getY(),
        rotation = Konva.getAngle(this.getRotation()),
        scaleX = this.getScaleX(),
        scaleY = this.getScaleY(),
        skewX = this.getSkewX(),
        skewY = this.getSkewY(),
        offsetX = this.getOffsetX(),
        offsetY = this.getOffsetY();

      if (x !== 0 || y !== 0) {
        m.translate(x, y);
      }
      if (rotation !== 0) {
        m.rotate(rotation);
      }
      if (skewX !== 0 || skewY !== 0) {
        m.skew(skewX, skewY);
      }
      if (scaleX !== 1 || scaleY !== 1) {
        m.scale(scaleX, scaleY);
      }
      if (offsetX !== 0 || offsetY !== 0) {
        m.translate(-1 * offsetX, -1 * offsetY);
      }

      return m;
    },
    /**
     * clone node.  Returns a new Node instance with identical attributes.  You can also override
     *  the node properties with an object literal, enabling you to use an existing node as a template
     *  for another node
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} obj override attrs
     * @returns {Konva.Node}
     * @example
     * // simple clone
     * var clone = node.clone();
     *
     * // clone a node and override the x position
     * var clone = rect.clone({
     *   x: 5
     * });
     */
    clone: function(obj) {
      // instantiate new node
      var attrs = Konva.Util.cloneObject(this.attrs),
        key,
        allListeners,
        len,
        n,
        listener;
      // filter black attrs
      for (var i in CLONE_BLACK_LIST) {
        var blockAttr = CLONE_BLACK_LIST[i];
        delete attrs[blockAttr];
      }
      // apply attr overrides
      for (key in obj) {
        attrs[key] = obj[key];
      }

      var node = new this.constructor(attrs);
      // copy over listeners
      for (key in this.eventListeners) {
        allListeners = this.eventListeners[key];
        len = allListeners.length;
        for (n = 0; n < len; n++) {
          listener = allListeners[n];
          /*
                     * don't include konva namespaced listeners because
                     *  these are generated by the constructors
                     */
          if (listener.name.indexOf(KONVA) < 0) {
            // if listeners array doesn't exist, then create it
            if (!node.eventListeners[key]) {
              node.eventListeners[key] = [];
            }
            node.eventListeners[key].push(listener);
          }
        }
      }
      return node;
    },
    _toKonvaCanvas: function(config) {
      config = config || {};

      var box = this.getClientRect();

      var stage = this.getStage(),
        x = config.x !== undefined ? config.x : box.x,
        y = config.y !== undefined ? config.y : box.y,
        pixelRatio = config.pixelRatio || 1,
        canvas = new Konva.SceneCanvas({
          width: config.width || box.width || (stage ? stage.getWidth() : 0),
          height:
            config.height || box.height || (stage ? stage.getHeight() : 0),
          pixelRatio: pixelRatio
        }),
        context = canvas.getContext();

      context.save();

      if (x || y) {
        context.translate(-1 * x, -1 * y);
      }

      this.drawScene(canvas);
      context.restore();

      return canvas;
    },
    /**
     * converts node into an canvas element.
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} config
     * @param {Function} config.callback function executed when the composite has completed
     * @param {Number} [config.x] x position of canvas section
     * @param {Number} [config.y] y position of canvas section
     * @param {Number} [config.width] width of canvas section
     * @param {Number} [config.height] height of canvas section
     * @paremt {Number} [config.pixelRatio] pixelRatio of ouput image.  Default is 1.
     * @example
     * var canvas = node.toCanvas();
     */
    toCanvas: function(config) {
      return this._toKonvaCanvas(config)._canvas;
    },
    /**
     * Creates a composite data URL. If MIME type is not
     * specified, then "image/png" will result. For "image/jpeg", specify a quality
     * level as quality (range 0.0 - 1.0)
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} config
     * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
     *  "image/png" is the default
     * @param {Number} [config.x] x position of canvas section
     * @param {Number} [config.y] y position of canvas section
     * @param {Number} [config.width] width of canvas section
     * @param {Number} [config.height] height of canvas section
     * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
     *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
     *  is very high quality
     * @param {Number} [config.pixelRatio] pixelRatio of output image url. Default is 1
     * @returns {String}
     */
    toDataURL: function(config) {
      config = config || {};
      var mimeType = config.mimeType || null,
        quality = config.quality || null;
      var url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
      if (config.callback) {
        config.callback(url);
      }
      return url;
    },
    /**
     * converts node into an image.  Since the toImage
     *  method is asynchronous, a callback is required.  toImage is most commonly used
     *  to cache complex drawings as an image so that they don't have to constantly be redrawn
     * @method
     * @memberof Konva.Node.prototype
     * @param {Object} config
     * @param {Function} config.callback function executed when the composite has completed
     * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
     *  "image/png" is the default
     * @param {Number} [config.x] x position of canvas section
     * @param {Number} [config.y] y position of canvas section
     * @param {Number} [config.width] width of canvas section
     * @param {Number} [config.height] height of canvas section
     * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
     *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
     *  is very high quality
     * @paremt {Number} [config.pixelRatio] pixelRatio of ouput image.  Default is 1.
     * @example
     * var image = node.toImage({
     *   callback: function(img) {
     *     // do stuff with img
     *   }
     * });
     */
    toImage: function(config) {
      if (!config || !config.callback) {
        throw 'callback required for toImage method config argument';
      }
      var callback = config.callback;
      delete config.callback;
      Konva.Util._getImage(this.toDataURL(config), function(img) {
        callback(img);
      });
    },
    setSize: function(size) {
      this.setWidth(size.width);
      this.setHeight(size.height);
      return this;
    },
    getSize: function() {
      return {
        width: this.getWidth(),
        height: this.getHeight()
      };
    },
    getWidth: function() {
      return this.attrs.width || 0;
    },
    getHeight: function() {
      return this.attrs.height || 0;
    },
    /**
     * get class name, which may return Stage, Layer, Group, or shape class names like Rect, Circle, Text, etc.
     * @method
     * @memberof Konva.Node.prototype
     * @returns {String}
     */
    getClassName: function() {
      return this.className || this.nodeType;
    },
    /**
     * get the node type, which may return Stage, Layer, Group, or Node
     * @method
     * @memberof Konva.Node.prototype
     * @returns {String}
     */
    getType: function() {
      return this.nodeType;
    },
    getDragDistance: function() {
      // compare with undefined because we need to track 0 value
      if (this.attrs.dragDistance !== undefined) {
        return this.attrs.dragDistance;
      } else if (this.parent) {
        return this.parent.getDragDistance();
      } else {
        return Konva.dragDistance;
      }
    },
    _get: function(selector) {
      return this.className === selector || this.nodeType === selector
        ? [this]
        : [];
    },
    _off: function(type, name, callback) {
      var evtListeners = this.eventListeners[type],
        i,
        evtName,
        handler;

      for (i = 0; i < evtListeners.length; i++) {
        evtName = evtListeners[i].name;
        handler = evtListeners[i].handler;

        // the following two conditions must be true in order to remove a handler:
        // 1) the current event name cannot be konva unless the event name is konva
        //    this enables developers to force remove a konva specific listener for whatever reason
        // 2) an event name is not specified, or if one is specified, it matches the current event name
        if (
          (evtName !== 'konva' || name === 'konva') &&
          (!name || evtName === name) &&
          (!callback || callback === handler)
        ) {
          evtListeners.splice(i, 1);
          if (evtListeners.length === 0) {
            delete this.eventListeners[type];
            break;
          }
          i--;
        }
      }
    },
    _fireChangeEvent: function(attr, oldVal, newVal) {
      this._fire(attr + CHANGE, {
        oldVal: oldVal,
        newVal: newVal
      });
    },
    setId: function(id) {
      var oldId = this.getId();

      Konva._removeId(oldId);
      Konva._addId(this, id);
      this._setAttr(ID, id);
      return this;
    },
    setName: function(name) {
      var oldNames = (this.getName() || '').split(/\s/g);
      var newNames = (name || '').split(/\s/g);
      var subname, i;
      // remove all subnames
      for (i = 0; i < oldNames.length; i++) {
        subname = oldNames[i];
        if (newNames.indexOf(subname) === -1 && subname) {
          Konva._removeName(subname, this._id);
        }
      }

      // add new names
      for (i = 0; i < newNames.length; i++) {
        subname = newNames[i];
        if (oldNames.indexOf(subname) === -1 && subname) {
          Konva._addName(this, subname);
        }
      }

      this._setAttr(NAME, name);
      return this;
    },
    // naming methods
    /**
     * add name to node
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} name
     * @returns {Konva.Node}
     * @example
     * node.name('red');
     * node.addName('selected');
     * node.name(); // return 'red selected'
     */
    addName: function(name) {
      if (!this.hasName(name)) {
        var oldName = this.name();
        var newName = oldName ? oldName + ' ' + name : name;
        this.setName(newName);
      }
      return this;
    },
    /**
     * check is node has name
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} name
     * @returns {Boolean}
     * @example
     * node.name('red');
     * node.hasName('red');   // return true
     * node.hasName('selected'); // return false
     */
    hasName: function(name) {
      var names = (this.name() || '').split(/\s/g);
      return names.indexOf(name) !== -1;
    },
    /**
     * remove name from node
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} name
     * @returns {Konva.Node}
     * @example
     * node.name('red selected');
     * node.removeName('selected');
     * node.hasName('selected'); // return false
     * node.name(); // return 'red'
     */
    removeName: function(name) {
      var names = (this.name() || '').split(/\s/g);
      var index = names.indexOf(name);
      if (index !== -1) {
        names.splice(index, 1);
        this.setName(names.join(' '));
      }
      return this;
    },
    /**
     * set attr
     * @method
     * @memberof Konva.Node.prototype
     * @param {String} attr
     * @param {*} val
     * @returns {Konva.Node}
     * @example
     * node.setAttr('x', 5);
     */
    setAttr: function(attr, val) {
      var method = SET + Konva.Util._capitalize(attr),
        func = this[method];

      if (Konva.Util._isFunction(func)) {
        func.call(this, val);
      } else {
        // otherwise set directly
        this._setAttr(attr, val);
      }
      return this;
    },
    _setAttr: function(key, val) {
      var oldVal;
      oldVal = this.attrs[key];
      var same = oldVal === val;
      if (same && !Konva.Util.isObject(val)) {
        return;
      }
      if (val === undefined || val === null) {
        delete this.attrs[key];
      } else {
        this.attrs[key] = val;
      }
      this._fireChangeEvent(key, oldVal, val);
    },
    _setComponentAttr: function(key, component, val) {
      var oldVal;
      if (val !== undefined) {
        oldVal = this.attrs[key];

        if (!oldVal) {
          // set value to default value using getAttr
          this.attrs[key] = this.getAttr(key);
        }

        this.attrs[key][component] = val;
        this._fireChangeEvent(key, oldVal, val);
      }
    },
    _fireAndBubble: function(eventType, evt, compareShape) {
      var okayToRun = true;

      if (evt && this.nodeType === SHAPE) {
        evt.target = this;
      }

      if (
        eventType === MOUSEENTER &&
        compareShape &&
        (this._id === compareShape._id ||
          (this.isAncestorOf && this.isAncestorOf(compareShape)))
      ) {
        okayToRun = false;
      } else if (
        eventType === MOUSELEAVE &&
        compareShape &&
        (this._id === compareShape._id ||
          (this.isAncestorOf && this.isAncestorOf(compareShape)))
      ) {
        okayToRun = false;
      }
      if (okayToRun) {
        this._fire(eventType, evt);

        // simulate event bubbling
        var stopBubble =
          (eventType === MOUSEENTER || eventType === MOUSELEAVE) &&
          (compareShape &&
            compareShape.isAncestorOf &&
            compareShape.isAncestorOf(this) &&
            !compareShape.isAncestorOf(this.parent));
        if (
          ((evt && !evt.cancelBubble) || !evt) &&
          this.parent &&
          this.parent.isListening() &&
          !stopBubble
        ) {
          if (compareShape && compareShape.parent) {
            this._fireAndBubble.call(
              this.parent,
              eventType,
              evt,
              compareShape.parent
            );
          } else {
            this._fireAndBubble.call(this.parent, eventType, evt);
          }
        }
      }
    },
    _fire: function(eventType, evt) {
      var events = this.eventListeners[eventType],
        i;

      evt = evt || {};
      evt.currentTarget = this;
      evt.type = eventType;

      if (events) {
        for (i = 0; i < events.length; i++) {
          events[i].handler.call(this, evt);
        }
      }
    },
    /**
     * draw both scene and hit graphs.  If the node being drawn is the stage, all of the layers will be cleared and redrawn
     * @method
     * @memberof Konva.Node.prototype
     * @returns {Konva.Node}
     */
    draw: function() {
      this.drawScene();
      this.drawHit();
      return this;
    }
  });

  /**
   * create node with JSON string or an Object.  De-serializtion does not generate custom
   *  shape drawing functions, images, or event handlers (this would make the
   *  serialized object huge).  If your app uses custom shapes, images, and
   *  event handlers (it probably does), then you need to select the appropriate
   *  shapes after loading the stage and set these properties via on(), setSceneFunc(),
   *  and setImage() methods
   * @method
   * @memberof Konva.Node
   * @param {String|Object} json string or object
   * @param {Element} [container] optional container dom element used only if you're
   *  creating a stage node
   */
  Konva.Node.create = function(data, container) {
    if (Konva.Util._isString(data)) {
      data = JSON.parse(data);
    }
    return this._createNode(data, container);
  };
  Konva.Node._createNode = function(obj, container) {
    var className = Konva.Node.prototype.getClassName.call(obj),
      children = obj.children,
      no,
      len,
      n;

    // if container was passed in, add it to attrs
    if (container) {
      obj.attrs.container = container;
    }

    no = new Konva[className](obj.attrs);
    if (children) {
      len = children.length;
      for (n = 0; n < len; n++) {
        no.add(this._createNode(children[n]));
      }
    }

    return no;
  };

  // =========================== add getters setters ===========================

  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'position');
  /**
   * get/set node position relative to parent
   * @name position
   * @method
   * @memberof Konva.Node.prototype
   * @param {Object} pos
   * @param {Number} pos.x
   * @param {Number} pos.y
   * @returns {Object}
   * @example
   * // get position
   * var position = node.position();
   *
   * // set position
   * node.position({
   *   x: 5
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'x',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set x position
   * @name x
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} x
   * @returns {Object}
   * @example
   * // get x
   * var x = node.x();
   *
   * // set x
   * node.x(5);
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'y',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set y position
   * @name y
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} y
   * @returns {Integer}
   * @example
   * // get y
   * var y = node.y();
   *
   * // set y
   * node.y(5);
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'globalCompositeOperation',
    'source-over',
    Konva.Validators.getStringValidator()
  );

  /**
   * get/set globalCompositeOperation of a shape
   * @name globalCompositeOperation
   * @method
   * @memberof Konva.Node.prototype
   * @param {String} type
   * @returns {String}
   * @example
   * // get globalCompositeOperation
   * var globalCompositeOperation = shape.globalCompositeOperation();
   *
   * // set globalCompositeOperation
   * shape.globalCompositeOperation('source-in');
   */
  Konva.Factory.addGetterSetter(
    Konva.Node,
    'opacity',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set opacity.  Opacity values range from 0 to 1.
   *  A node with an opacity of 0 is fully transparent, and a node
   *  with an opacity of 1 is fully opaque
   * @name opacity
   * @method
   * @memberof Konva.Node.prototype
   * @param {Object} opacity
   * @returns {Number}
   * @example
   * // get opacity
   * var opacity = node.opacity();
   *
   * // set opacity
   * node.opacity(0.5);
   */

  Konva.Factory.addGetter(Konva.Node, 'name');
  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'name');

  /**
   * get/set name
   * @name name
   * @method
   * @memberof Konva.Node.prototype
   * @param {String} name
   * @returns {String}
   * @example
   * // get name
   * var name = node.name();
   *
   * // set name
   * node.name('foo');
   *
   * // also node may have multiple names (as css classes)
   * node.name('foo bar');
   */

  Konva.Factory.addGetter(Konva.Node, 'id');
  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'id');

  /**
   * get/set id. Id is global for whole page.
   * @name id
   * @method
   * @memberof Konva.Node.prototype
   * @param {String} id
   * @returns {String}
   * @example
   * // get id
   * var name = node.id();
   *
   * // set id
   * node.id('foo');
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'rotation',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set rotation in degrees
   * @name rotation
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} rotation
   * @returns {Number}
   * @example
   * // get rotation in degrees
   * var rotation = node.rotation();
   *
   * // set rotation in degrees
   * node.rotation(45);
   */

  Konva.Factory.addComponentsGetterSetter(Konva.Node, 'scale', ['x', 'y']);

  /**
   * get/set scale
   * @name scale
   * @param {Object} scale
   * @param {Number} scale.x
   * @param {Number} scale.y
   * @method
   * @memberof Konva.Node.prototype
   * @returns {Object}
   * @example
   * // get scale
   * var scale = node.scale();
   *
   * // set scale
   * shape.scale({
   *   x: 2
   *   y: 3
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'scaleX',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set scale x
   * @name scaleX
   * @param {Number} x
   * @method
   * @memberof Konva.Node.prototype
   * @returns {Number}
   * @example
   * // get scale x
   * var scaleX = node.scaleX();
   *
   * // set scale x
   * node.scaleX(2);
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'scaleY',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set scale y
   * @name scaleY
   * @param {Number} y
   * @method
   * @memberof Konva.Node.prototype
   * @returns {Number}
   * @example
   * // get scale y
   * var scaleY = node.scaleY();
   *
   * // set scale y
   * node.scaleY(2);
   */

  Konva.Factory.addComponentsGetterSetter(Konva.Node, 'skew', ['x', 'y']);

  /**
   * get/set skew
   * @name skew
   * @param {Object} skew
   * @param {Number} skew.x
   * @param {Number} skew.y
   * @method
   * @memberof Konva.Node.prototype
   * @returns {Object}
   * @example
   * // get skew
   * var skew = node.skew();
   *
   * // set skew
   * node.skew({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'skewX',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set skew x
   * @name skewX
   * @param {Number} x
   * @method
   * @memberof Konva.Node.prototype
   * @returns {Number}
   * @example
   * // get skew x
   * var skewX = node.skewX();
   *
   * // set skew x
   * node.skewX(3);
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'skewY',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set skew y
   * @name skewY
   * @param {Number} y
   * @method
   * @memberof Konva.Node.prototype
   * @returns {Number}
   * @example
   * // get skew y
   * var skewY = node.skewY();
   *
   * // set skew y
   * node.skewY(3);
   */

  Konva.Factory.addComponentsGetterSetter(Konva.Node, 'offset', ['x', 'y']);

  /**
   * get/set offset.  Offsets the default position and rotation point
   * @method
   * @memberof Konva.Node.prototype
   * @param {Object} offset
   * @param {Number} offset.x
   * @param {Number} offset.y
   * @returns {Object}
   * @example
   * // get offset
   * var offset = node.offset();
   *
   * // set offset
   * node.offset({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'offsetX',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set offset x
   * @name offsetX
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get offset x
   * var offsetX = node.offsetX();
   *
   * // set offset x
   * node.offsetX(3);
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'offsetY',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set offset y
   * @name offsetY
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get offset y
   * var offsetY = node.offsetY();
   *
   * // set offset y
   * node.offsetY(3);
   */

  Konva.Factory.addSetter(
    Konva.Node,
    'dragDistance',
    Konva.Validators.getNumberValidator()
  );
  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'dragDistance');

  /**
   * get/set drag distance
   * @name dragDistance
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} distance
   * @returns {Number}
   * @example
   * // get drag distance
   * var dragDistance = node.dragDistance();
   *
   * // set distance
   * // node starts dragging only if pointer moved more then 3 pixels
   * node.dragDistance(3);
   * // or set globally
   * Konva.dragDistance = 3;
   */

  Konva.Factory.addSetter(
    Konva.Node,
    'width',
    Konva.Validators.getNumberValidator()
  );
  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'width');
  /**
   * get/set width
   * @name width
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} width
   * @returns {Number}
   * @example
   * // get width
   * var width = node.width();
   *
   * // set width
   * node.width(100);
   */

  Konva.Factory.addSetter(
    Konva.Node,
    'height',
    Konva.Validators.getNumberValidator()
  );
  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'height');
  /**
   * get/set height
   * @name height
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} height
   * @returns {Number}
   * @example
   * // get height
   * var height = node.height();
   *
   * // set height
   * node.height(100);
   */

  Konva.Factory.addGetterSetter(Konva.Node, 'listening', 'inherit', function(
    val
  ) {
    var isValid = val === true || val === false || val === 'inherit';
    if (!isValid) {
      Konva.Util.warn(
        val +
          ' is a not valid value for "listening" attribute. The value may be true, false or "inherit".'
      );
    }
    return val;
  });
  /**
   * get/set listenig attr.  If you need to determine if a node is listening or not
   *   by taking into account its parents, use the isListening() method
   * @name listening
   * @method
   * @memberof Konva.Node.prototype
   * @param {Boolean|String} listening Can be "inherit", true, or false.  The default is "inherit".
   * @returns {Boolean|String}
   * @example
   * // get listening attr
   * var listening = node.listening();
   *
   * // stop listening for events
   * node.listening(false);
   *
   * // listen for events
   * node.listening(true);
   *
   * // listen to events according to the parent
   * node.listening('inherit');
   */

  /**
   * get/set preventDefault
   * By default all shapes will prevent default behaviour
   * of a browser on a pointer move or tap.
   * that will prevent native scrolling when you are trying to drag&drop a node
   * but sometimes you may need to enable default actions
   * in that case you can set the property to false
   * @name preventDefault
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} preventDefault
   * @returns {Number}
   * @example
   * // get preventDefault
   * var shouldPrevent = shape.preventDefault();
   *
   * // set preventDefault
   * shape.preventDefault(false);
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'preventDefault',
    true,
    Konva.Validators.getBooleanValidator()
  );

  Konva.Factory.addGetterSetter(Konva.Node, 'filters', null, function(val) {
    this._filterUpToDate = false;
    return val;
  });
  /**
   * get/set filters.  Filters are applied to cached canvases
   * @name filters
   * @method
   * @memberof Konva.Node.prototype
   * @param {Array} filters array of filters
   * @returns {Array}
   * @example
   * // get filters
   * var filters = node.filters();
   *
   * // set a single filter
   * node.cache();
   * node.filters([Konva.Filters.Blur]);
   *
   * // set multiple filters
   * node.cache();
   * node.filters([
   *   Konva.Filters.Blur,
   *   Konva.Filters.Sepia,
   *   Konva.Filters.Invert
   * ]);
   */

  Konva.Factory.addGetterSetter(Konva.Node, 'visible', 'inherit', function(
    val
  ) {
    var isValid = val === true || val === false || val === 'inherit';
    if (!isValid) {
      Konva.Util.warn(
        val +
          ' is a not valid value for "visible" attribute. The value may be true, false or "inherit".'
      );
    }
    return val;
  });
  /**
   * get/set visible attr.  Can be "inherit", true, or false.  The default is "inherit".
   *   If you need to determine if a node is visible or not
   *   by taking into account its parents, use the isVisible() method
   * @name visible
   * @method
   * @memberof Konva.Node.prototype
   * @param {Boolean|String} visible
   * @returns {Boolean|String}
   * @example
   * // get visible attr
   * var visible = node.visible();
   *
   * // make invisible
   * node.visible(false);
   *
   * // make visible
   * node.visible(true);
   *
   * // make visible according to the parent
   * node.visible('inherit');
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'transformsEnabled',
    'all',
    Konva.Validators.getStringValidator()
  );

  /**
   * get/set transforms that are enabled.  Can be "all", "none", or "position".  The default
   *  is "all"
   * @name transformsEnabled
   * @method
   * @memberof Konva.Node.prototype
   * @param {String} enabled
   * @returns {String}
   * @example
   * // enable position transform only to improve draw performance
   * node.transformsEnabled('position');
   *
   * // enable all transforms
   * node.transformsEnabled('all');
   */

  /**
   * get/set node size
   * @name size
   * @method
   * @memberof Konva.Node.prototype
   * @param {Object} size
   * @param {Number} size.width
   * @param {Number} size.height
   * @returns {Object}
   * @example
   * // get node size
   * var size = node.size();
   * var x = size.x;
   * var y = size.y;
   *
   * // set size
   * node.size({
   *   width: 100,
   *   height: 200
   * });
   */
  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'size');

  Konva.Factory.backCompat(Konva.Node, {
    rotateDeg: 'rotate',
    setRotationDeg: 'setRotation',
    getRotationDeg: 'getRotation'
  });

  Konva.Collection.mapMethods(Konva.Node);
})(Konva);

(function() {
  'use strict';
  /**
   * Grayscale Filter
   * @function
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Grayscale]);
   */
  Konva.Filters.Grayscale = function(imageData) {
    var data = imageData.data,
      len = data.length,
      i,
      brightness;

    for (i = 0; i < len; i += 4) {
      brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
      // red
      data[i] = brightness;
      // green
      data[i + 1] = brightness;
      // blue
      data[i + 2] = brightness;
    }
  };
})();

(function(Konva) {
  'use strict';
  /**
   * Brighten Filter.
   * @function
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Brighten]);
   * node.brightness(0.8);
   */
  Konva.Filters.Brighten = function(imageData) {
    var brightness = this.brightness() * 255,
      data = imageData.data,
      len = data.length,
      i;

    for (i = 0; i < len; i += 4) {
      // red
      data[i] += brightness;
      // green
      data[i + 1] += brightness;
      // blue
      data[i + 2] += brightness;
    }
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'brightness',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set filter brightness.  The brightness is a number between -1 and 1.&nbsp; Positive values
   *  brighten the pixels and negative values darken them. Use with {@link Konva.Filters.Brighten} filter.
   * @name brightness
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} brightness value between -1 and 1
   * @returns {Number}
   */
})(Konva);

(function() {
  'use strict';
  /**
   * Invert Filter
   * @function
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Invert]);
   */
  Konva.Filters.Invert = function(imageData) {
    var data = imageData.data,
      len = data.length,
      i;

    for (i = 0; i < len; i += 4) {
      // red
      data[i] = 255 - data[i];
      // green
      data[i + 1] = 255 - data[i + 1];
      // blue
      data[i + 2] = 255 - data[i + 2];
    }
  };
})();

/*
 the Gauss filter
 master repo: https://github.com/pavelpower/kineticjsGaussFilter
*/
(function(Konva) {
  'use strict';
  /*

     StackBlur - a fast almost Gaussian Blur For Canvas

     Version:   0.5
     Author:    Mario Klingemann
     Contact:   mario@quasimondo.com
     Website:   http://www.quasimondo.com/StackBlurForCanvas
     Twitter:   @quasimondo

     In case you find this class useful - especially in commercial projects -
     I am not totally unhappy for a small donation to my PayPal account
     mario@quasimondo.de

     Or support me on flattr:
     https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

     Copyright (c) 2010 Mario Klingemann

     Permission is hereby granted, free of charge, to any person
     obtaining a copy of this software and associated documentation
     files (the "Software"), to deal in the Software without
     restriction, including without limitation the rights to use,
     copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the
     Software is furnished to do so, subject to the following
     conditions:

     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     OTHER DEALINGS IN THE SOFTWARE.
     */

  function BlurStack() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
  }

  var mul_table = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
  ];

  var shg_table = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
  ];

  function filterGaussBlurRGBA(imageData, radius) {
    var pixels = imageData.data,
      width = imageData.width,
      height = imageData.height;

    var x,
      y,
      i,
      p,
      yp,
      yi,
      yw,
      r_sum,
      g_sum,
      b_sum,
      a_sum,
      r_out_sum,
      g_out_sum,
      b_out_sum,
      a_out_sum,
      r_in_sum,
      g_in_sum,
      b_in_sum,
      a_in_sum,
      pr,
      pg,
      pb,
      pa,
      rbs;

    var div = radius + radius + 1,
      widthMinus1 = width - 1,
      heightMinus1 = height - 1,
      radiusPlus1 = radius + 1,
      sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2,
      stackStart = new BlurStack(),
      stackEnd = null,
      stack = stackStart,
      stackIn = null,
      stackOut = null,
      mul_sum = mul_table[radius],
      shg_sum = shg_table[radius];

    for (i = 1; i < div; i++) {
      stack = stack.next = new BlurStack();
      if (i === radiusPlus1) {
        stackEnd = stack;
      }
    }

    stack.next = stackStart;

    yw = yi = 0;

    for (y = 0; y < height; y++) {
      r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

      r_out_sum = radiusPlus1 * (pr = pixels[yi]);
      g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
      b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
      a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

      r_sum += sumFactor * pr;
      g_sum += sumFactor * pg;
      b_sum += sumFactor * pb;
      a_sum += sumFactor * pa;

      stack = stackStart;

      for (i = 0; i < radiusPlus1; i++) {
        stack.r = pr;
        stack.g = pg;
        stack.b = pb;
        stack.a = pa;
        stack = stack.next;
      }

      for (i = 1; i < radiusPlus1; i++) {
        p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
        r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
        g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
        b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
        a_sum += (stack.a = pa = pixels[p + 3]) * rbs;

        r_in_sum += pr;
        g_in_sum += pg;
        b_in_sum += pb;
        a_in_sum += pa;

        stack = stack.next;
      }

      stackIn = stackStart;
      stackOut = stackEnd;
      for (x = 0; x < width; x++) {
        pixels[yi + 3] = pa = (a_sum * mul_sum) >> shg_sum;
        if (pa !== 0) {
          pa = 255 / pa;
          pixels[yi] = ((r_sum * mul_sum) >> shg_sum) * pa;
          pixels[yi + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
          pixels[yi + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
        } else {
          pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
        }

        r_sum -= r_out_sum;
        g_sum -= g_out_sum;
        b_sum -= b_out_sum;
        a_sum -= a_out_sum;

        r_out_sum -= stackIn.r;
        g_out_sum -= stackIn.g;
        b_out_sum -= stackIn.b;
        a_out_sum -= stackIn.a;

        p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

        r_in_sum += stackIn.r = pixels[p];
        g_in_sum += stackIn.g = pixels[p + 1];
        b_in_sum += stackIn.b = pixels[p + 2];
        a_in_sum += stackIn.a = pixels[p + 3];

        r_sum += r_in_sum;
        g_sum += g_in_sum;
        b_sum += b_in_sum;
        a_sum += a_in_sum;

        stackIn = stackIn.next;

        r_out_sum += pr = stackOut.r;
        g_out_sum += pg = stackOut.g;
        b_out_sum += pb = stackOut.b;
        a_out_sum += pa = stackOut.a;

        r_in_sum -= pr;
        g_in_sum -= pg;
        b_in_sum -= pb;
        a_in_sum -= pa;

        stackOut = stackOut.next;

        yi += 4;
      }
      yw += width;
    }

    for (x = 0; x < width; x++) {
      g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

      yi = x << 2;
      r_out_sum = radiusPlus1 * (pr = pixels[yi]);
      g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
      b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
      a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

      r_sum += sumFactor * pr;
      g_sum += sumFactor * pg;
      b_sum += sumFactor * pb;
      a_sum += sumFactor * pa;

      stack = stackStart;

      for (i = 0; i < radiusPlus1; i++) {
        stack.r = pr;
        stack.g = pg;
        stack.b = pb;
        stack.a = pa;
        stack = stack.next;
      }

      yp = width;

      for (i = 1; i <= radius; i++) {
        yi = (yp + x) << 2;

        r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
        g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
        b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
        a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;

        r_in_sum += pr;
        g_in_sum += pg;
        b_in_sum += pb;
        a_in_sum += pa;

        stack = stack.next;

        if (i < heightMinus1) {
          yp += width;
        }
      }

      yi = x;
      stackIn = stackStart;
      stackOut = stackEnd;
      for (y = 0; y < height; y++) {
        p = yi << 2;
        pixels[p + 3] = pa = (a_sum * mul_sum) >> shg_sum;
        if (pa > 0) {
          pa = 255 / pa;
          pixels[p] = ((r_sum * mul_sum) >> shg_sum) * pa;
          pixels[p + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
          pixels[p + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
        } else {
          pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
        }

        r_sum -= r_out_sum;
        g_sum -= g_out_sum;
        b_sum -= b_out_sum;
        a_sum -= a_out_sum;

        r_out_sum -= stackIn.r;
        g_out_sum -= stackIn.g;
        b_out_sum -= stackIn.b;
        a_out_sum -= stackIn.a;

        p =
          (x +
            ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) *
              width) <<
          2;

        r_sum += r_in_sum += stackIn.r = pixels[p];
        g_sum += g_in_sum += stackIn.g = pixels[p + 1];
        b_sum += b_in_sum += stackIn.b = pixels[p + 2];
        a_sum += a_in_sum += stackIn.a = pixels[p + 3];

        stackIn = stackIn.next;

        r_out_sum += pr = stackOut.r;
        g_out_sum += pg = stackOut.g;
        b_out_sum += pb = stackOut.b;
        a_out_sum += pa = stackOut.a;

        r_in_sum -= pr;
        g_in_sum -= pg;
        b_in_sum -= pb;
        a_in_sum -= pa;

        stackOut = stackOut.next;

        yi += width;
      }
    }
  }

  /**
   * Blur Filter
   * @function
   * @name Blur
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Blur]);
   * node.blurRadius(10);
   */
  Konva.Filters.Blur = function Blur(imageData) {
    var radius = Math.round(this.blurRadius());

    if (radius > 0) {
      filterGaussBlurRGBA(imageData, radius);
    }
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'blurRadius',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );

  /**
   * get/set blur radius. Use with {@link Konva.Filters.Blur} filter
   * @name blurRadius
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} radius
   * @returns {Integer}
   */
})(Konva);

/*eslint-disable  max-depth */
(function() {
  'use strict';
  function pixelAt(idata, x, y) {
    var idx = (y * idata.width + x) * 4;
    var d = [];
    d.push(
      idata.data[idx++],
      idata.data[idx++],
      idata.data[idx++],
      idata.data[idx++]
    );
    return d;
  }

  function rgbDistance(p1, p2) {
    return Math.sqrt(
      Math.pow(p1[0] - p2[0], 2) +
        Math.pow(p1[1] - p2[1], 2) +
        Math.pow(p1[2] - p2[2], 2)
    );
  }

  function rgbMean(pTab) {
    var m = [0, 0, 0];

    for (var i = 0; i < pTab.length; i++) {
      m[0] += pTab[i][0];
      m[1] += pTab[i][1];
      m[2] += pTab[i][2];
    }

    m[0] /= pTab.length;
    m[1] /= pTab.length;
    m[2] /= pTab.length;

    return m;
  }

  function backgroundMask(idata, threshold) {
    var rgbv_no = pixelAt(idata, 0, 0);
    var rgbv_ne = pixelAt(idata, idata.width - 1, 0);
    var rgbv_so = pixelAt(idata, 0, idata.height - 1);
    var rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);

    var thres = threshold || 10;
    if (
      rgbDistance(rgbv_no, rgbv_ne) < thres &&
      rgbDistance(rgbv_ne, rgbv_se) < thres &&
      rgbDistance(rgbv_se, rgbv_so) < thres &&
      rgbDistance(rgbv_so, rgbv_no) < thres
    ) {
      // Mean color
      var mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);

      // Mask based on color distance
      var mask = [];
      for (var i = 0; i < idata.width * idata.height; i++) {
        var d = rgbDistance(mean, [
          idata.data[i * 4],
          idata.data[i * 4 + 1],
          idata.data[i * 4 + 2]
        ]);
        mask[i] = d < thres ? 0 : 255;
      }

      return mask;
    }
  }

  function applyMask(idata, mask) {
    for (var i = 0; i < idata.width * idata.height; i++) {
      idata.data[4 * i + 3] = mask[i];
    }
  }

  function erodeMask(mask, sw, sh) {
    var weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);

    var maskResult = [];
    for (var y = 0; y < sh; y++) {
      for (var x = 0; x < sw; x++) {
        var so = y * sw + x;
        var a = 0;
        for (var cy = 0; cy < side; cy++) {
          for (var cx = 0; cx < side; cx++) {
            var scy = y + cy - halfSide;
            var scx = x + cx - halfSide;

            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
              var srcOff = scy * sw + scx;
              var wt = weights[cy * side + cx];

              a += mask[srcOff] * wt;
            }
          }
        }

        maskResult[so] = a === 255 * 8 ? 255 : 0;
      }
    }

    return maskResult;
  }

  function dilateMask(mask, sw, sh) {
    var weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);

    var maskResult = [];
    for (var y = 0; y < sh; y++) {
      for (var x = 0; x < sw; x++) {
        var so = y * sw + x;
        var a = 0;
        for (var cy = 0; cy < side; cy++) {
          for (var cx = 0; cx < side; cx++) {
            var scy = y + cy - halfSide;
            var scx = x + cx - halfSide;

            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
              var srcOff = scy * sw + scx;
              var wt = weights[cy * side + cx];

              a += mask[srcOff] * wt;
            }
          }
        }

        maskResult[so] = a >= 255 * 4 ? 255 : 0;
      }
    }

    return maskResult;
  }

  function smoothEdgeMask(mask, sw, sh) {
    var weights = [
      1 / 9,
      1 / 9,
      1 / 9,
      1 / 9,
      1 / 9,
      1 / 9,
      1 / 9,
      1 / 9,
      1 / 9
    ];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);

    var maskResult = [];
    for (var y = 0; y < sh; y++) {
      for (var x = 0; x < sw; x++) {
        var so = y * sw + x;
        var a = 0;
        for (var cy = 0; cy < side; cy++) {
          for (var cx = 0; cx < side; cx++) {
            var scy = y + cy - halfSide;
            var scx = x + cx - halfSide;

            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
              var srcOff = scy * sw + scx;
              var wt = weights[cy * side + cx];

              a += mask[srcOff] * wt;
            }
          }
        }

        maskResult[so] = a;
      }
    }

    return maskResult;
  }

  /**
   * Mask Filter
   * @function
   * @name Mask
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Mask]);
   * node.threshold(200);
   */
  Konva.Filters.Mask = function(imageData) {
    // Detect pixels close to the background color
    var threshold = this.threshold(),
      mask = backgroundMask(imageData, threshold);
    if (mask) {
      // Erode
      mask = erodeMask(mask, imageData.width, imageData.height);

      // Dilate
      mask = dilateMask(mask, imageData.width, imageData.height);

      // Gradient
      mask = smoothEdgeMask(mask, imageData.width, imageData.height);

      // Apply mask
      applyMask(imageData, mask);

      // todo : Update hit region function according to mask
    }

    return imageData;
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'threshold',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
})();

(function() {
  'use strict';
  /**
   * RGB Filter
   * @function
   * @name RGB
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author ippo615
   * @example
   * node.cache();
   * node.filters([Konva.Filters.RGB]);
   * node.blue(120);
   * node.green(200);
   */
  Konva.Filters.RGB = function(imageData) {
    var data = imageData.data,
      nPixels = data.length,
      red = this.red(),
      green = this.green(),
      blue = this.blue(),
      i,
      brightness;

    for (i = 0; i < nPixels; i += 4) {
      brightness =
        (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]) / 255;
      data[i] = brightness * red; // r
      data[i + 1] = brightness * green; // g
      data[i + 2] = brightness * blue; // b
      data[i + 3] = data[i + 3]; // alpha
    }
  };

  Konva.Factory.addGetterSetter(Konva.Node, 'red', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) {
      return 255;
    } else if (val < 0) {
      return 0;
    } else {
      return Math.round(val);
    }
  });
  /**
   * get/set filter red value. Use with {@link Konva.Filters.RGB} filter.
   * @name red
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} red value between 0 and 255
   * @returns {Integer}
   */

  Konva.Factory.addGetterSetter(Konva.Node, 'green', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) {
      return 255;
    } else if (val < 0) {
      return 0;
    } else {
      return Math.round(val);
    }
  });
  /**
   * get/set filter green value. Use with {@link Konva.Filters.RGB} filter.
   * @name green
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} green value between 0 and 255
   * @returns {Integer}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'blue',
    0,
    Konva.Validators.RGBComponent,
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set filter blue value. Use with {@link Konva.Filters.RGB} filter.
   * @name blue
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} blue value between 0 and 255
   * @returns {Integer}
   */
})();

(function() {
  'use strict';
  /**
   * RGBA Filter
   * @function
   * @name RGBA
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author codefo
   * @example
   * node.cache();
   * node.filters([Konva.Filters.RGBA]);
   * node.blue(120);
   * node.green(200);
   * node.alpha(0.3);
   */
  Konva.Filters.RGBA = function(imageData) {
    var data = imageData.data,
      nPixels = data.length,
      red = this.red(),
      green = this.green(),
      blue = this.blue(),
      alpha = this.alpha(),
      i,
      ia;

    for (i = 0; i < nPixels; i += 4) {
      ia = 1 - alpha;

      data[i] = red * alpha + data[i] * ia; // r
      data[i + 1] = green * alpha + data[i + 1] * ia; // g
      data[i + 2] = blue * alpha + data[i + 2] * ia; // b
    }
  };

  Konva.Factory.addGetterSetter(Konva.Node, 'red', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) {
      return 255;
    } else if (val < 0) {
      return 0;
    } else {
      return Math.round(val);
    }
  });
  /**
   * get/set filter red value. Use with {@link Konva.Filters.RGBA} filter.
   * @name red
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} red value between 0 and 255
   * @returns {Integer}
   */

  Konva.Factory.addGetterSetter(Konva.Node, 'green', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) {
      return 255;
    } else if (val < 0) {
      return 0;
    } else {
      return Math.round(val);
    }
  });
  /**
   * get/set filter green value. Use with {@link Konva.Filters.RGBA} filter.
   * @name green
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} green value between 0 and 255
   * @returns {Integer}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'blue',
    0,
    Konva.Validators.RGBComponent,
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set filter blue value. Use with {@link Konva.Filters.RGBA} filter.
   * @name blue
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} blue value between 0 and 255
   * @returns {Integer}
   */

  Konva.Factory.addGetterSetter(Konva.Node, 'alpha', 1, function(val) {
    this._filterUpToDate = false;
    if (val > 1) {
      return 1;
    } else if (val < 0) {
      return 0;
    } else {
      return val;
    }
  });
  /**
   * get/set filter alpha value. Use with {@link Konva.Filters.RGBA} filter.
   * @name alpha
   * @method
   * @memberof Konva.Node.prototype
   * @param {Float} alpha value between 0 and 1
   * @returns {Float}
   */
})();

(function() {
  'use strict';
  /**
   * HSV Filter. Adjusts the hue, saturation and value
   * @function
   * @name HSV
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author ippo615
   * @example
   * image.filters([Konva.Filters.HSV]);
   * image.value(200);
   */

  Konva.Filters.HSV = function(imageData) {
    var data = imageData.data,
      nPixels = data.length,
      v = Math.pow(2, this.value()),
      s = Math.pow(2, this.saturation()),
      h = Math.abs(this.hue() + 360) % 360,
      i;

    // Basis for the technique used:
    // http://beesbuzz.biz/code/hsv_color_transforms.php
    // V is the value multiplier (1 for none, 2 for double, 0.5 for half)
    // S is the saturation multiplier (1 for none, 2 for double, 0.5 for half)
    // H is the hue shift in degrees (0 to 360)
    // vsu = V*S*cos(H*PI/180);
    // vsw = V*S*sin(H*PI/180);
    //[ .299V+.701vsu+.168vsw    .587V-.587vsu+.330vsw    .114V-.114vsu-.497vsw ] [R]
    //[ .299V-.299vsu-.328vsw    .587V+.413vsu+.035vsw    .114V-.114vsu+.292vsw ]*[G]
    //[ .299V-.300vsu+1.25vsw    .587V-.588vsu-1.05vsw    .114V+.886vsu-.203vsw ] [B]

    // Precompute the values in the matrix:
    var vsu = v * s * Math.cos(h * Math.PI / 180),
      vsw = v * s * Math.sin(h * Math.PI / 180);
    // (result spot)(source spot)
    var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw,
      rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw,
      rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
    var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw,
      gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw,
      gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
    var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw,
      bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw,
      bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;

    var r, g, b, a;

    for (i = 0; i < nPixels; i += 4) {
      r = data[i + 0];
      g = data[i + 1];
      b = data[i + 2];
      a = data[i + 3];

      data[i + 0] = rr * r + rg * g + rb * b;
      data[i + 1] = gr * r + gg * g + gb * b;
      data[i + 2] = br * r + bg * g + bb * b;
      data[i + 3] = a; // alpha
    }
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'hue',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set hsv hue in degrees. Use with {@link Konva.Filters.HSV} or {@link Konva.Filters.HSL} filter.
   * @name hue
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} hue value between 0 and 359
   * @returns {Number}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'saturation',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set hsv saturation. Use with {@link Konva.Filters.HSV} or {@link Konva.Filters.HSL} filter.
   * @name saturation
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} saturation 0 is no change, -1.0 halves the saturation, 1.0 doubles, etc..
   * @returns {Number}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'value',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set hsv value. Use with {@link Konva.Filters.HSV} filter.
   * @name value
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} value 0 is no change, -1.0 halves the value, 1.0 doubles, etc..
   * @returns {Number}
   */
})();

(function() {
  'use strict';
  Konva.Factory.addGetterSetter(
    Konva.Node,
    'hue',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set hsv hue in degrees. Use with {@link Konva.Filters.HSV} or {@link Konva.Filters.HSL} filter.
   * @name hue
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} hue value between 0 and 359
   * @returns {Number}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'saturation',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set hsv saturation. Use with {@link Konva.Filters.HSV} or {@link Konva.Filters.HSL} filter.
   * @name saturation
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} saturation 0 is no change, -1.0 halves the saturation, 1.0 doubles, etc..
   * @returns {Number}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'luminance',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set hsl luminance. Use with {@link Konva.Filters.HSL} filter.
   * @name value
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} value from -1 to 1
   * @returns {Number}
   */

  /**
   * HSL Filter. Adjusts the hue, saturation and luminance (or lightness)
   * @function
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author ippo615
   * @example
   * image.filters([Konva.Filters.HSL]);
   * image.luminance(200);
   */

  Konva.Filters.HSL = function(imageData) {
    var data = imageData.data,
      nPixels = data.length,
      v = 1,
      s = Math.pow(2, this.saturation()),
      h = Math.abs(this.hue() + 360) % 360,
      l = this.luminance() * 127,
      i;

    // Basis for the technique used:
    // http://beesbuzz.biz/code/hsv_color_transforms.php
    // V is the value multiplier (1 for none, 2 for double, 0.5 for half)
    // S is the saturation multiplier (1 for none, 2 for double, 0.5 for half)
    // H is the hue shift in degrees (0 to 360)
    // vsu = V*S*cos(H*PI/180);
    // vsw = V*S*sin(H*PI/180);
    //[ .299V+.701vsu+.168vsw    .587V-.587vsu+.330vsw    .114V-.114vsu-.497vsw ] [R]
    //[ .299V-.299vsu-.328vsw    .587V+.413vsu+.035vsw    .114V-.114vsu+.292vsw ]*[G]
    //[ .299V-.300vsu+1.25vsw    .587V-.588vsu-1.05vsw    .114V+.886vsu-.203vsw ] [B]

    // Precompute the values in the matrix:
    var vsu = v * s * Math.cos(h * Math.PI / 180),
      vsw = v * s * Math.sin(h * Math.PI / 180);
    // (result spot)(source spot)
    var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw,
      rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw,
      rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
    var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw,
      gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw,
      gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
    var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw,
      bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw,
      bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;

    var r, g, b, a;

    for (i = 0; i < nPixels; i += 4) {
      r = data[i + 0];
      g = data[i + 1];
      b = data[i + 2];
      a = data[i + 3];

      data[i + 0] = rr * r + rg * g + rb * b + l;
      data[i + 1] = gr * r + gg * g + gb * b + l;
      data[i + 2] = br * r + bg * g + bb * b + l;
      data[i + 3] = a; // alpha
    }
  };
})();

(function() {
  'use strict';
  /**
   * Emboss Filter.
   * Pixastic Lib - Emboss filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * License: [http://www.pixastic.com/lib/license.txt]
   * @function
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Emboss]);
   * node.embossStrength(0.8);
   * node.embossWhiteLevel(0.3);
   * node.embossDirection('right');
   * node.embossBlend(true);
   */
  Konva.Filters.Emboss = function(imageData) {
    // pixastic strength is between 0 and 10.  I want it between 0 and 1
    // pixastic greyLevel is between 0 and 255.  I want it between 0 and 1.  Also,
    // a max value of greyLevel yields a white emboss, and the min value yields a black
    // emboss.  Therefore, I changed greyLevel to whiteLevel
    var strength = this.embossStrength() * 10,
      greyLevel = this.embossWhiteLevel() * 255,
      direction = this.embossDirection(),
      blend = this.embossBlend(),
      dirY = 0,
      dirX = 0,
      data = imageData.data,
      w = imageData.width,
      h = imageData.height,
      w4 = w * 4,
      y = h;

    switch (direction) {
      case 'top-left':
        dirY = -1;
        dirX = -1;
        break;
      case 'top':
        dirY = -1;
        dirX = 0;
        break;
      case 'top-right':
        dirY = -1;
        dirX = 1;
        break;
      case 'right':
        dirY = 0;
        dirX = 1;
        break;
      case 'bottom-right':
        dirY = 1;
        dirX = 1;
        break;
      case 'bottom':
        dirY = 1;
        dirX = 0;
        break;
      case 'bottom-left':
        dirY = 1;
        dirX = -1;
        break;
      case 'left':
        dirY = 0;
        dirX = -1;
        break;
      default:
        Konva.Util.error('Unknown emboss direction: ' + direction);
    }

    do {
      var offsetY = (y - 1) * w4;

      var otherY = dirY;
      if (y + otherY < 1) {
        otherY = 0;
      }
      if (y + otherY > h) {
        otherY = 0;
      }

      var offsetYOther = (y - 1 + otherY) * w * 4;

      var x = w;
      do {
        var offset = offsetY + (x - 1) * 4;

        var otherX = dirX;
        if (x + otherX < 1) {
          otherX = 0;
        }
        if (x + otherX > w) {
          otherX = 0;
        }

        var offsetOther = offsetYOther + (x - 1 + otherX) * 4;

        var dR = data[offset] - data[offsetOther];
        var dG = data[offset + 1] - data[offsetOther + 1];
        var dB = data[offset + 2] - data[offsetOther + 2];

        var dif = dR;
        var absDif = dif > 0 ? dif : -dif;

        var absG = dG > 0 ? dG : -dG;
        var absB = dB > 0 ? dB : -dB;

        if (absG > absDif) {
          dif = dG;
        }
        if (absB > absDif) {
          dif = dB;
        }

        dif *= strength;

        if (blend) {
          var r = data[offset] + dif;
          var g = data[offset + 1] + dif;
          var b = data[offset + 2] + dif;

          data[offset] = r > 255 ? 255 : r < 0 ? 0 : r;
          data[offset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
          data[offset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
        } else {
          var grey = greyLevel - dif;
          if (grey < 0) {
            grey = 0;
          } else if (grey > 255) {
            grey = 255;
          }

          data[offset] = data[offset + 1] = data[offset + 2] = grey;
        }
      } while (--x);
    } while (--y);
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'embossStrength',
    0.5,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set emboss strength. Use with {@link Konva.Filters.Emboss} filter.
   * @name embossStrength
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} level between 0 and 1.  Default is 0.5
   * @returns {Number}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'embossWhiteLevel',
    0.5,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set emboss white level. Use with {@link Konva.Filters.Emboss} filter.
   * @name embossWhiteLevel
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} embossWhiteLevel between 0 and 1.  Default is 0.5
   * @returns {Number}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'embossDirection',
    'top-left',
    null,
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set emboss direction. Use with {@link Konva.Filters.Emboss} filter.
   * @name embossDirection
   * @method
   * @memberof Konva.Node.prototype
   * @param {String} embossDirection can be top-left, top, top-right, right, bottom-right, bottom, bottom-left or left
   *   The default is top-left
   * @returns {String}
   */

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'embossBlend',
    false,
    null,
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set emboss blend. Use with {@link Konva.Filters.Emboss} filter.
   * @name embossBlend
   * @method
   * @memberof Konva.Node.prototype
   * @param {Boolean} embossBlend
   * @returns {Boolean}
   */
})();

(function() {
  'use strict';
  function remap(fromValue, fromMin, fromMax, toMin, toMax) {
    // Compute the range of the data
    var fromRange = fromMax - fromMin,
      toRange = toMax - toMin,
      toValue;

    // If either range is 0, then the value can only be mapped to 1 value
    if (fromRange === 0) {
      return toMin + toRange / 2;
    }
    if (toRange === 0) {
      return toMin;
    }

    // (1) untranslate, (2) unscale, (3) rescale, (4) retranslate
    toValue = (fromValue - fromMin) / fromRange;
    toValue = toRange * toValue + toMin;

    return toValue;
  }

  /**
   * Enhance Filter. Adjusts the colors so that they span the widest
   *  possible range (ie 0-255). Performs w*h pixel reads and w*h pixel
   *  writes.
   * @function
   * @name Enhance
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author ippo615
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Enhance]);
   * node.enhance(0.4);
   */
  Konva.Filters.Enhance = function(imageData) {
    var data = imageData.data,
      nSubPixels = data.length,
      rMin = data[0],
      rMax = rMin,
      r,
      gMin = data[1],
      gMax = gMin,
      g,
      bMin = data[2],
      bMax = bMin,
      b,
      i;

    // If we are not enhancing anything - don't do any computation
    var enhanceAmount = this.enhance();
    if (enhanceAmount === 0) {
      return;
    }

    // 1st Pass - find the min and max for each channel:
    for (i = 0; i < nSubPixels; i += 4) {
      r = data[i + 0];
      if (r < rMin) {
        rMin = r;
      } else if (r > rMax) {
        rMax = r;
      }
      g = data[i + 1];
      if (g < gMin) {
        gMin = g;
      } else if (g > gMax) {
        gMax = g;
      }
      b = data[i + 2];
      if (b < bMin) {
        bMin = b;
      } else if (b > bMax) {
        bMax = b;
      }
      //a = data[i + 3];
      //if (a < aMin) { aMin = a; } else
      //if (a > aMax) { aMax = a; }
    }

    // If there is only 1 level - don't remap
    if (rMax === rMin) {
      rMax = 255;
      rMin = 0;
    }
    if (gMax === gMin) {
      gMax = 255;
      gMin = 0;
    }
    if (bMax === bMin) {
      bMax = 255;
      bMin = 0;
    }

    var rMid,
      rGoalMax,
      rGoalMin,
      gMid,
      gGoalMax,
      gGoalMin,
      bMid,
      bGoalMax,
      bGoalMin;

    // If the enhancement is positive - stretch the histogram
    if (enhanceAmount > 0) {
      rGoalMax = rMax + enhanceAmount * (255 - rMax);
      rGoalMin = rMin - enhanceAmount * (rMin - 0);
      gGoalMax = gMax + enhanceAmount * (255 - gMax);
      gGoalMin = gMin - enhanceAmount * (gMin - 0);
      bGoalMax = bMax + enhanceAmount * (255 - bMax);
      bGoalMin = bMin - enhanceAmount * (bMin - 0);
      // If the enhancement is negative -   compress the histogram
    } else {
      rMid = (rMax + rMin) * 0.5;
      rGoalMax = rMax + enhanceAmount * (rMax - rMid);
      rGoalMin = rMin + enhanceAmount * (rMin - rMid);
      gMid = (gMax + gMin) * 0.5;
      gGoalMax = gMax + enhanceAmount * (gMax - gMid);
      gGoalMin = gMin + enhanceAmount * (gMin - gMid);
      bMid = (bMax + bMin) * 0.5;
      bGoalMax = bMax + enhanceAmount * (bMax - bMid);
      bGoalMin = bMin + enhanceAmount * (bMin - bMid);
    }

    // Pass 2 - remap everything, except the alpha
    for (i = 0; i < nSubPixels; i += 4) {
      data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
      data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
      data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
      //data[i + 3] = remap(data[i + 3], aMin, aMax, aGoalMin, aGoalMax);
    }
  };

  /**
   * get/set enhance. Use with {@link Konva.Filters.Enhance} filter. -1 to 1 values
   * @name enhance
   * @method
   * @memberof Konva.Node.prototype
   * @param {Float} amount
   * @returns {Float}
   */
  Konva.Factory.addGetterSetter(
    Konva.Node,
    'enhance',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
})();

(function() {
  'use strict';
  /**
   * Posterize Filter. Adjusts the channels so that there are no more
   *  than n different values for that channel. This is also applied
   *  to the alpha channel.
   * @function
   * @name Posterize
   * @author ippo615
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Posterize]);
   * node.levels(0.8); // between 0 and 1
   */

  Konva.Filters.Posterize = function(imageData) {
    // level must be between 1 and 255
    var levels = Math.round(this.levels() * 254) + 1,
      data = imageData.data,
      len = data.length,
      scale = 255 / levels,
      i;

    for (i = 0; i < len; i += 1) {
      data[i] = Math.floor(data[i] / scale) * scale;
    }
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'levels',
    0.5,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );

  /**
   * get/set levels.  Must be a number between 0 and 1.  Use with {@link Konva.Filters.Posterize} filter.
   * @name levels
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} level between 0 and 1
   * @returns {Number}
   */
})();

(function() {
  'use strict';
  /**
   * Noise Filter. Randomly adds or substracts to the color channels
   * @function
   * @name Noise
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author ippo615
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Noise]);
   * node.noise(0.8);
   */
  Konva.Filters.Noise = function(imageData) {
    var amount = this.noise() * 255,
      data = imageData.data,
      nPixels = data.length,
      half = amount / 2,
      i;

    for (i = 0; i < nPixels; i += 4) {
      data[i + 0] += half - 2 * half * Math.random();
      data[i + 1] += half - 2 * half * Math.random();
      data[i + 2] += half - 2 * half * Math.random();
    }
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'noise',
    0.2,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set noise amount.  Must be a value between 0 and 1. Use with {@link Konva.Filters.Noise} filter.
   * @name noise
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} noise
   * @returns {Number}
   */
})();

/*eslint-disable max-depth */
(function() {
  'use strict';
  /**
   * Pixelate Filter. Averages groups of pixels and redraws
   *  them as larger pixels
   * @function
   * @name Pixelate
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author ippo615
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Pixelate]);
   * node.pixelSize(10);
   */

  Konva.Filters.Pixelate = function(imageData) {
    var pixelSize = Math.ceil(this.pixelSize()),
      width = imageData.width,
      height = imageData.height,
      x,
      y,
      i,
      //pixelsPerBin = pixelSize * pixelSize,
      red,
      green,
      blue,
      alpha,
      nBinsX = Math.ceil(width / pixelSize),
      nBinsY = Math.ceil(height / pixelSize),
      xBinStart,
      xBinEnd,
      yBinStart,
      yBinEnd,
      xBin,
      yBin,
      pixelsInBin;
    imageData = imageData.data;

    if (pixelSize <= 0) {
      Konva.Util.error('pixelSize value can not be <= 0');
      return;
    }

    for (xBin = 0; xBin < nBinsX; xBin += 1) {
      for (yBin = 0; yBin < nBinsY; yBin += 1) {
        // Initialize the color accumlators to 0
        red = 0;
        green = 0;
        blue = 0;
        alpha = 0;

        // Determine which pixels are included in this bin
        xBinStart = xBin * pixelSize;
        xBinEnd = xBinStart + pixelSize;
        yBinStart = yBin * pixelSize;
        yBinEnd = yBinStart + pixelSize;

        // Add all of the pixels to this bin!
        pixelsInBin = 0;
        for (x = xBinStart; x < xBinEnd; x += 1) {
          if (x >= width) {
            continue;
          }
          for (y = yBinStart; y < yBinEnd; y += 1) {
            if (y >= height) {
              continue;
            }
            i = (width * y + x) * 4;
            red += imageData[i + 0];
            green += imageData[i + 1];
            blue += imageData[i + 2];
            alpha += imageData[i + 3];
            pixelsInBin += 1;
          }
        }

        // Make sure the channels are between 0-255
        red = red / pixelsInBin;
        green = green / pixelsInBin;
        blue = blue / pixelsInBin;
        alpha = alpha / pixelsInBin;

        // Draw this bin
        for (x = xBinStart; x < xBinEnd; x += 1) {
          if (x >= width) {
            continue;
          }
          for (y = yBinStart; y < yBinEnd; y += 1) {
            if (y >= height) {
              continue;
            }
            i = (width * y + x) * 4;
            imageData[i + 0] = red;
            imageData[i + 1] = green;
            imageData[i + 2] = blue;
            imageData[i + 3] = alpha;
          }
        }
      }
    }
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'pixelSize',
    8,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set pixel size. Use with {@link Konva.Filters.Pixelate} filter.
   * @name pixelSize
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} pixelSize
   * @returns {Integer}
   */
})();

(function() {
  'use strict';
  /**
   * Threshold Filter. Pushes any value above the mid point to
   *  the max and any value below the mid point to the min.
   *  This affects the alpha channel.
   * @function
   * @name Threshold
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author ippo615
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Threshold]);
   * node.threshold(0.1);
   */

  Konva.Filters.Threshold = function(imageData) {
    var level = this.threshold() * 255,
      data = imageData.data,
      len = data.length,
      i;

    for (i = 0; i < len; i += 1) {
      data[i] = data[i] < level ? 0 : 255;
    }
  };

  Konva.Factory.addGetterSetter(
    Konva.Node,
    'threshold',
    0.5,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
  /**
   * get/set threshold.  Must be a value between 0 and 1. Use with {@link Konva.Filters.Threshold} or {@link Konva.Filters.Mask} filter.
   * @name threshold
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} threshold
   * @returns {Number}
   */
})();

(function() {
  'use strict';
  /**
   * Sepia Filter
   * Based on: Pixastic Lib - Sepia filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * @function
   * @name Sepia
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author Jacob Seidelin <jseidelin@nihilogic.dk>
   * @license MPL v1.1 [http://www.pixastic.com/lib/license.txt]
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Sepia]);
   */
  Konva.Filters.Sepia = function(imageData) {
    var data = imageData.data,
      w = imageData.width,
      y = imageData.height,
      w4 = w * 4,
      offsetY,
      x,
      offset,
      or,
      og,
      ob,
      r,
      g,
      b;

    do {
      offsetY = (y - 1) * w4;
      x = w;
      do {
        offset = offsetY + (x - 1) * 4;

        or = data[offset];
        og = data[offset + 1];
        ob = data[offset + 2];

        r = or * 0.393 + og * 0.769 + ob * 0.189;
        g = or * 0.349 + og * 0.686 + ob * 0.168;
        b = or * 0.272 + og * 0.534 + ob * 0.131;

        data[offset] = r > 255 ? 255 : r;
        data[offset + 1] = g > 255 ? 255 : g;
        data[offset + 2] = b > 255 ? 255 : b;
        data[offset + 3] = data[offset + 3];
      } while (--x);
    } while (--y);
  };
})();

(function() {
  'use strict';
  /**
   * Solarize Filter
   * Pixastic Lib - Solarize filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * License: [http://www.pixastic.com/lib/license.txt]
   * @function
   * @name Solarize
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Solarize]);
   */
  Konva.Filters.Solarize = function(imageData) {
    var data = imageData.data,
      w = imageData.width,
      h = imageData.height,
      w4 = w * 4,
      y = h;

    do {
      var offsetY = (y - 1) * w4;
      var x = w;
      do {
        var offset = offsetY + (x - 1) * 4;
        var r = data[offset];
        var g = data[offset + 1];
        var b = data[offset + 2];

        if (r > 127) {
          r = 255 - r;
        }
        if (g > 127) {
          g = 255 - g;
        }
        if (b > 127) {
          b = 255 - b;
        }

        data[offset] = r;
        data[offset + 1] = g;
        data[offset + 2] = b;
      } while (--x);
    } while (--y);
  };
})();

(function() {
  'use strict';
  /*
   * ToPolar Filter. Converts image data to polar coordinates. Performs
   *  w*h*4 pixel reads and w*h pixel writes. The r axis is placed along
   *  what would be the y axis and the theta axis along the x axis.
   * @function
   * @author ippo615
   * @memberof Konva.Filters
   * @param {ImageData} src, the source image data (what will be transformed)
   * @param {ImageData} dst, the destination image data (where it will be saved)
   * @param {Object} opt
   * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
   *  default is in the middle
   * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
   *  default is in the middle
   */

  var ToPolar = function(src, dst, opt) {
    var srcPixels = src.data,
      dstPixels = dst.data,
      xSize = src.width,
      ySize = src.height,
      xMid = opt.polarCenterX || xSize / 2,
      yMid = opt.polarCenterY || ySize / 2,
      i,
      x,
      y,
      r = 0,
      g = 0,
      b = 0,
      a = 0;

    // Find the largest radius
    var rad,
      rMax = Math.sqrt(xMid * xMid + yMid * yMid);
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt(x * x + y * y);
    rMax = rad > rMax ? rad : rMax;

    // We'll be uisng y as the radius, and x as the angle (theta=t)
    var rSize = ySize,
      tSize = xSize,
      radius,
      theta;

    // We want to cover all angles (0-360) and we need to convert to
    // radians (*PI/180)
    var conversion = 360 / tSize * Math.PI / 180,
      sin,
      cos;

    // var x1, x2, x1i, x2i, y1, y2, y1i, y2i, scale;

    for (theta = 0; theta < tSize; theta += 1) {
      sin = Math.sin(theta * conversion);
      cos = Math.cos(theta * conversion);
      for (radius = 0; radius < rSize; radius += 1) {
        x = Math.floor(xMid + rMax * radius / rSize * cos);
        y = Math.floor(yMid + rMax * radius / rSize * sin);
        i = (y * xSize + x) * 4;
        r = srcPixels[i + 0];
        g = srcPixels[i + 1];
        b = srcPixels[i + 2];
        a = srcPixels[i + 3];

        // Store it
        //i = (theta * xSize  +  radius) * 4;
        i = (theta + radius * xSize) * 4;
        dstPixels[i + 0] = r;
        dstPixels[i + 1] = g;
        dstPixels[i + 2] = b;
        dstPixels[i + 3] = a;
      }
    }
  };

  /*
     * FromPolar Filter. Converts image data from polar coordinates back to rectangular.
     *  Performs w*h*4 pixel reads and w*h pixel writes.
     * @function
     * @author ippo615
     * @memberof Konva.Filters
     * @param {ImageData} src, the source image data (what will be transformed)
     * @param {ImageData} dst, the destination image data (where it will be saved)
     * @param {Object} opt
     * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
     *  default is in the middle
     * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
     *  default is in the middle
     * @param {Number} [opt.polarRotation] amount to rotate the image counterclockwis,
     *  0 is no rotation, 360 degrees is a full rotation
     */

  var FromPolar = function(src, dst, opt) {
    var srcPixels = src.data,
      dstPixels = dst.data,
      xSize = src.width,
      ySize = src.height,
      xMid = opt.polarCenterX || xSize / 2,
      yMid = opt.polarCenterY || ySize / 2,
      i,
      x,
      y,
      dx,
      dy,
      r = 0,
      g = 0,
      b = 0,
      a = 0;

    // Find the largest radius
    var rad,
      rMax = Math.sqrt(xMid * xMid + yMid * yMid);
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt(x * x + y * y);
    rMax = rad > rMax ? rad : rMax;

    // We'll be uisng x as the radius, and y as the angle (theta=t)
    var rSize = ySize,
      tSize = xSize,
      radius,
      theta,
      phaseShift = opt.polarRotation || 0;

    // We need to convert to degrees and we need to make sure
    // it's between (0-360)
    // var conversion = tSize/360*180/Math.PI;
    //var conversion = tSize/360*180/Math.PI;

    var x1, y1;

    for (x = 0; x < xSize; x += 1) {
      for (y = 0; y < ySize; y += 1) {
        dx = x - xMid;
        dy = y - yMid;
        radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
        theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
        theta = theta * tSize / 360;
        x1 = Math.floor(theta);
        y1 = Math.floor(radius);
        i = (y1 * xSize + x1) * 4;
        r = srcPixels[i + 0];
        g = srcPixels[i + 1];
        b = srcPixels[i + 2];
        a = srcPixels[i + 3];

        // Store it
        i = (y * xSize + x) * 4;
        dstPixels[i + 0] = r;
        dstPixels[i + 1] = g;
        dstPixels[i + 2] = b;
        dstPixels[i + 3] = a;
      }
    }
  };

  //Konva.Filters.ToPolar = Konva.Util._FilterWrapDoubleBuffer(ToPolar);
  //Konva.Filters.FromPolar = Konva.Util._FilterWrapDoubleBuffer(FromPolar);

  // create a temporary canvas for working - shared between multiple calls

  /*
     * Kaleidoscope Filter.
     * @function
     * @name Kaleidoscope
     * @author ippo615
     * @memberof Konva.Filters
     * @example
     * node.cache();
     * node.filters([Konva.Filters.Kaleidoscope]);
     * node.kaleidoscopePower(3);
     * node.kaleidoscopeAngle(45);
     */
  Konva.Filters.Kaleidoscope = function(imageData) {
    var xSize = imageData.width,
      ySize = imageData.height;

    var x, y, xoff, i, r, g, b, a, srcPos, dstPos;
    var power = Math.round(this.kaleidoscopePower());
    var angle = Math.round(this.kaleidoscopeAngle());
    var offset = Math.floor(xSize * (angle % 360) / 360);

    if (power < 1) {
      return;
    }

    // Work with our shared buffer canvas
    var tempCanvas = Konva.Util.createCanvasElement();
    tempCanvas.width = xSize;
    tempCanvas.height = ySize;
    var scratchData = tempCanvas
      .getContext('2d')
      .getImageData(0, 0, xSize, ySize);

    // Convert thhe original to polar coordinates
    ToPolar(imageData, scratchData, {
      polarCenterX: xSize / 2,
      polarCenterY: ySize / 2
    });

    // Determine how big each section will be, if it's too small
    // make it bigger
    var minSectionSize = xSize / Math.pow(2, power);
    while (minSectionSize <= 8) {
      minSectionSize = minSectionSize * 2;
      power -= 1;
    }
    minSectionSize = Math.ceil(minSectionSize);
    var sectionSize = minSectionSize;

    // Copy the offset region to 0
    // Depending on the size of filter and location of the offset we may need
    // to copy the section backwards to prevent it from rewriting itself
    var xStart = 0,
      xEnd = sectionSize,
      xDelta = 1;
    if (offset + minSectionSize > xSize) {
      xStart = sectionSize;
      xEnd = 0;
      xDelta = -1;
    }
    for (y = 0; y < ySize; y += 1) {
      for (x = xStart; x !== xEnd; x += xDelta) {
        xoff = Math.round(x + offset) % xSize;
        srcPos = (xSize * y + xoff) * 4;
        r = scratchData.data[srcPos + 0];
        g = scratchData.data[srcPos + 1];
        b = scratchData.data[srcPos + 2];
        a = scratchData.data[srcPos + 3];
        dstPos = (xSize * y + x) * 4;
        scratchData.data[dstPos + 0] = r;
        scratchData.data[dstPos + 1] = g;
        scratchData.data[dstPos + 2] = b;
        scratchData.data[dstPos + 3] = a;
      }
    }

    // Perform the actual effect
    for (y = 0; y < ySize; y += 1) {
      sectionSize = Math.floor(minSectionSize);
      for (i = 0; i < power; i += 1) {
        for (x = 0; x < sectionSize + 1; x += 1) {
          srcPos = (xSize * y + x) * 4;
          r = scratchData.data[srcPos + 0];
          g = scratchData.data[srcPos + 1];
          b = scratchData.data[srcPos + 2];
          a = scratchData.data[srcPos + 3];
          dstPos = (xSize * y + sectionSize * 2 - x - 1) * 4;
          scratchData.data[dstPos + 0] = r;
          scratchData.data[dstPos + 1] = g;
          scratchData.data[dstPos + 2] = b;
          scratchData.data[dstPos + 3] = a;
        }
        sectionSize *= 2;
      }
    }

    // Convert back from polar coordinates
    FromPolar(scratchData, imageData, { polarRotation: 0 });
  };

  /**
   * get/set kaleidoscope power. Use with {@link Konva.Filters.Kaleidoscope} filter.
   * @name kaleidoscopePower
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} power of kaleidoscope
   * @returns {Integer}
   */
  Konva.Factory.addGetterSetter(
    Konva.Node,
    'kaleidoscopePower',
    2,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );

  /**
   * get/set kaleidoscope angle. Use with {@link Konva.Filters.Kaleidoscope} filter.
   * @name kaleidoscopeAngle
   * @method
   * @memberof Konva.Node.prototype
   * @param {Integer} degrees
   * @returns {Integer}
   */
  Konva.Factory.addGetterSetter(
    Konva.Node,
    'kaleidoscopeAngle',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
})();

(function(Konva) {
  'use strict';
  /**
   * Contrast Filter.
   * @function
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Contrast]);
   * node.contrast(10);
   */

  Konva.Filters.Contrast = function(imageData) {
    var adjust = Math.pow((parseInt(this.contrast()) + 100) / 100, 2);

    var data = imageData.data,
      nPixels = data.length,
      red = 150,
      green = 150,
      blue = 150,
      i;

    for (i = 0; i < nPixels; i += 4) {
      red = data[i];
      green = data[i + 1];
      blue = data[i + 2];

      //Red channel
      red /= 255;
      red -= 0.5;
      red *= adjust;
      red += 0.5;
      red *= 255;

      //Green channel
      green /= 255;
      green -= 0.5;
      green *= adjust;
      green += 0.5;
      green *= 255;

      //Blue channel
      blue /= 255;
      blue -= 0.5;
      blue *= adjust;
      blue += 0.5;
      blue *= 255;

      red = red < 0 ? 0 : red > 255 ? 255 : red;
      green = green < 0 ? 0 : green > 255 ? 255 : green;
      blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;

      data[i] = red;
      data[i + 1] = green;
      data[i + 2] = blue;
    }
  };

  /**
   * get/set filter contrast.  The contrast is a number between -100 and 100.
   * Use with {@link Konva.Filters.Contrast} filter.
   * @name contrast
   * @method
   * @memberof Konva.Node.prototype
   * @param {Number} contrast value between -100 and 100
   * @returns {Number}
   */
  Konva.Factory.addGetterSetter(
    Konva.Node,
    'contrast',
    0,
    Konva.Validators.getNumberValidator(),
    Konva.Factory.afterSetFilter
  );
})(Konva);

(function() {
  'use strict';
  /**
   * Container constructor.&nbsp; Containers are used to contain nodes or other containers
   * @constructor
   * @memberof Konva
   * @augments Konva.Node
   * @abstract
   * @param {Object} config
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height
     * @param {Function} [config.clipFunc] set clip func

   */
  Konva.Container = function(config) {
    this.__init(config);
  };

  Konva.Util.addMethods(Konva.Container, {
    __init: function(config) {
      this.children = new Konva.Collection();
      Konva.Node.call(this, config);
    },
    /**
     * returns a {@link Konva.Collection} of direct descendant nodes
     * @method
     * @memberof Konva.Container.prototype
     * @param {Function} [filterFunc] filter function
     * @returns {Konva.Collection}
     * @example
     * // get all children
     * var children = layer.getChildren();
     *
     * // get only circles
     * var circles = layer.getChildren(function(node){
     *    return node.getClassName() === 'Circle';
     * });
     */
    getChildren: function(filterFunc) {
      if (!filterFunc) {
        return this.children;
      }

      var results = new Konva.Collection();
      this.children.each(function(child) {
        if (filterFunc(child)) {
          results.push(child);
        }
      });
      return results;
    },
    /**
     * determine if node has children
     * @method
     * @memberof Konva.Container.prototype
     * @returns {Boolean}
     */
    hasChildren: function() {
      return this.getChildren().length > 0;
    },
    /**
     * remove all children
     * @method
     * @memberof Konva.Container.prototype
     */
    removeChildren: function() {
      var children = Konva.Collection.toCollection(this.children);
      var child;
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        // reset parent to prevent many _setChildrenIndices calls
        delete child.parent;
        child.index = 0;
        child.remove();
      }
      children = null;
      this.children = new Konva.Collection();
      return this;
    },
    /**
     * destroy all children
     * @method
     * @memberof Konva.Container.prototype
     */
    destroyChildren: function() {
      var children = Konva.Collection.toCollection(this.children);
      var child;
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        // reset parent to prevent many _setChildrenIndices calls
        delete child.parent;
        child.index = 0;
        child.destroy();
      }
      children = null;
      this.children = new Konva.Collection();
      return this;
    },
    /**
     * Add node or nodes to container.
     * @method
     * @memberof Konva.Container.prototype
     * @param {...Konva.Node} child
     * @returns {Container}
     * @example
     * layer.add(shape1, shape2, shape3);
     */
    add: function(child) {
      if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      if (child.getParent()) {
        child.moveTo(this);
        return this;
      }
      var children = this.children;
      this._validateAdd(child);
      child.index = children.length;
      child.parent = this;
      children.push(child);
      this._fire('add', {
        child: child
      });

      // if node under drag we need to update drag animation
      if (Konva.DD && child.isDragging()) {
        Konva.DD.anim.setLayers(child.getLayer());
      }

      // chainable
      return this;
    },
    destroy: function() {
      // destroy children
      if (this.hasChildren()) {
        this.destroyChildren();
      }
      // then destroy self
      Konva.Node.prototype.destroy.call(this);
      return this;
    },
    /**
     * return a {@link Konva.Collection} of nodes that match the selector.
     * You can provide a string with '#' for id selections and '.' for name selections.
     * Or a function that will return true/false when a node is passed through.  See example below.
     * With strings you can also select by type or class name. Pass multiple selectors
     * separated by a space.
     * @method
     * @memberof Konva.Container.prototype
     * @param {String | Function} selector
     * @returns {Collection}
     * @example
     *
     * Passing a string as a selector
     * // select node with id foo
     * var node = stage.find('#foo');
     *
     * // select nodes with name bar inside layer
     * var nodes = layer.find('.bar');
     *
     * // select all groups inside layer
     * var nodes = layer.find('Group');
     *
     * // select all rectangles inside layer
     * var nodes = layer.find('Rect');
     *
     * // select node with an id of foo or a name of bar inside layer
     * var nodes = layer.find('#foo, .bar');
     *
     * Passing a function as a selector
     *
     * // get all Groups
     * var groups = stage.find(node => {
     *  return node.getType() === 'Group';
     * });
     *
     * // get only Nodes with partial opacity
     * var alphaNodes = layer.find(node => {
     *  return node.getType() === 'Node' && node.getAbsoluteOpacity() < 1;
     * });
     */
    find: function(selector) {
      // protecting _generalFind to prevent user from accidentally adding
      // second argument and getting unexpected `findOne` result
      return this._generalFind(selector, false);
    },
    /**
     * return a first node from `find` method
     * @method
     * @memberof Konva.Container.prototype
     * @param {String | Function} selector
     * @returns {Konva.Node | Undefined}
     * @example
     * // select node with id foo
     * var node = stage.findOne('#foo');
     *
     * // select node with name bar inside layer
     * var nodes = layer.findOne('.bar');
     *
     * // select the first node to return true in a function
     * var node = stage.findOne(node => {
     *  return node.getType() === 'Shape'
     * })
     */
    findOne: function(selector) {
      var result = this._generalFind(selector, true);
      return result.length > 0 ? result[0] : undefined;
    },
    _generalFind: function(selector, findOne) {
      var retArr = [];

      if (typeof selector === 'string') {
        retArr = this._findByString(selector, findOne);
      } else if (typeof selector === 'function') {
        retArr = this._findByFunction(selector, findOne);
      }

      return Konva.Collection.toCollection(retArr);
    },
    _findByString: function(selector) {
      var retArr = [],
        selectorArr = selector.replace(/ /g, '').split(','),
        len = selectorArr.length,
        n,
        i,
        sel,
        arr,
        node,
        children,
        clen;

      for (n = 0; n < len; n++) {
        sel = selectorArr[n];
        if (!Konva.Util.isValidSelector(sel)) {
          var message =
            'Selector "' +
            sel +
            '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".\n' +
            'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".\n' +
            'Konva is awesome, right?';
          Konva.Util.warn(message);
        }
        // id selector
        if (sel.charAt(0) === '#') {
          node = this._getNodeById(sel.slice(1));
          if (node) {
            retArr.push(node);
          }
        } else if (sel.charAt(0) === '.') {
          // name selector
          arr = this._getNodesByName(sel.slice(1));
          retArr = retArr.concat(arr);
        } else {
          // unrecognized selector, pass to children
          children = this.getChildren();
          clen = children.length;
          for (i = 0; i < clen; i++) {
            retArr = retArr.concat(children[i]._get(sel));
          }
        }
      }

      return retArr;
    },
    // (fn: ((Node) => boolean, findOne?: boolean)
    _findByFunction: function(fn, findOne) {
      var retArr = [];

      var addItems = function(el) {
        // escape function if we've already found one.
        if (findOne && retArr.length > 0) {
          return;
        }

        var children = el.getChildren();
        var clen = children.length;

        if (fn(el)) {
          retArr = retArr.concat(el);
        }

        for (var i = 0; i < clen; i++) {
          addItems(children[i]);
        }
      };

      addItems(this);

      return retArr;
    },
    _getNodeById: function(key) {
      var node = Konva.ids[key];

      if (node !== undefined && this.isAncestorOf(node)) {
        return node;
      }
      return null;
    },
    _getNodesByName: function(key) {
      var arr = Konva.names[key] || [];
      return this._getDescendants(arr);
    },
    _get: function(selector) {
      var retArr = Konva.Node.prototype._get.call(this, selector);
      var children = this.getChildren();
      var len = children.length;
      for (var n = 0; n < len; n++) {
        retArr = retArr.concat(children[n]._get(selector));
      }
      return retArr;
    },
    // extenders
    toObject: function() {
      var obj = Konva.Node.prototype.toObject.call(this);

      obj.children = [];

      var children = this.getChildren();
      var len = children.length;
      for (var n = 0; n < len; n++) {
        var child = children[n];
        obj.children.push(child.toObject());
      }

      return obj;
    },
    _getDescendants: function(arr) {
      var retArr = [];
      var len = arr.length;
      for (var n = 0; n < len; n++) {
        var node = arr[n];
        if (this.isAncestorOf(node)) {
          retArr.push(node);
        }
      }

      return retArr;
    },
    /**
     * determine if node is an ancestor
     * of descendant
     * @method
     * @memberof Konva.Container.prototype
     * @param {Konva.Node} node
     */
    isAncestorOf: function(node) {
      var parent = node.getParent();
      while (parent) {
        if (parent._id === this._id) {
          return true;
        }
        parent = parent.getParent();
      }

      return false;
    },
    clone: function(obj) {
      // call super method
      var node = Konva.Node.prototype.clone.call(this, obj);

      this.getChildren().each(function(no) {
        node.add(no.clone());
      });
      return node;
    },
    /**
     * get all shapes that intersect a point.  Note: because this method must clear a temporary
     * canvas and redraw every shape inside the container, it should only be used for special sitations
     * because it performs very poorly.  Please use the {@link Konva.Stage#getIntersection} method if at all possible
     * because it performs much better
     * @method
     * @memberof Konva.Container.prototype
     * @param {Object} pos
     * @param {Number} pos.x
     * @param {Number} pos.y
     * @returns {Array} array of shapes
     */
    getAllIntersections: function(pos) {
      var arr = [];

      this.find('Shape').each(function(shape) {
        if (shape.isVisible() && shape.intersects(pos)) {
          arr.push(shape);
        }
      });

      return arr;
    },
    _setChildrenIndices: function() {
      this.children.each(function(child, n) {
        child.index = n;
      });
    },
    drawScene: function(can, top, caching) {
      var layer = this.getLayer(),
        canvas = can || (layer && layer.getCanvas()),
        context = canvas && canvas.getContext(),
        cachedCanvas = this._cache.canvas,
        cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;

      if (this.isVisible() || caching) {
        if (!caching && cachedSceneCanvas) {
          context.save();
          layer._applyTransform(this, context, top);
          this._drawCachedSceneCanvas(context);
          context.restore();
        } else {
          this._drawChildren(canvas, 'drawScene', top, false, caching);
        }
      }
      return this;
    },
    drawHit: function(can, top, caching) {
      var layer = this.getLayer(),
        canvas = can || (layer && layer.hitCanvas),
        context = canvas && canvas.getContext(),
        cachedCanvas = this._cache.canvas,
        cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

      if (this.shouldDrawHit(canvas) || caching) {
        if (layer) {
          layer.clearHitCache();
        }
        if (!caching && cachedHitCanvas) {
          context.save();
          layer._applyTransform(this, context, top);
          this._drawCachedHitCanvas(context);
          context.restore();
        } else {
          this._drawChildren(canvas, 'drawHit', top);
        }
      }
      return this;
    },
    _drawChildren: function(canvas, drawMethod, top, caching, skipBuffer) {
      var layer = this.getLayer(),
        context = canvas && canvas.getContext(),
        clipWidth = this.getClipWidth(),
        clipHeight = this.getClipHeight(),
        clipFunc = this.getClipFunc(),
        hasClip = (clipWidth && clipHeight) || clipFunc,
        clipX,
        clipY;

      if (hasClip && layer) {
        context.save();
        var transform = this.getAbsoluteTransform(top);
        var m = transform.getMatrix();
        context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        context.beginPath();
        if (clipFunc) {
          clipFunc.call(this, context, this);
        } else {
          clipX = this.getClipX();
          clipY = this.getClipY();
          context.rect(clipX, clipY, clipWidth, clipHeight);
        }
        context.clip();
        m = transform
          .copy()
          .invert()
          .getMatrix();
        context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }

      this.children.each(function(child) {
        child[drawMethod](canvas, top, caching, skipBuffer);
      });

      if (hasClip) {
        context.restore();
      }
    },
    shouldDrawHit: function(canvas) {
      var layer = this.getLayer();
      var dd = Konva.DD;
      var layerUnderDrag =
        dd &&
        Konva.isDragging() &&
        Konva.DD.anim.getLayers().indexOf(layer) !== -1;
      return (
        (canvas && canvas.isCache) ||
        (layer &&
          layer.hitGraphEnabled() &&
          this.isVisible() &&
          !layerUnderDrag)
      );
    },
    getClientRect: function(attrs) {
      attrs = attrs || {};
      var skipTransform = attrs.skipTransform;
      var relativeTo = attrs.relativeTo;

      var minX, minY, maxX, maxY;
      var selfRect = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
      };
      var that = this;
      this.children.each(function(child) {
        // skip invisible children
        if (!child.getVisible()) {
          return;
        }

        var rect = child.getClientRect({ relativeTo: that });

        // skip invisible children (like empty groups)
        // or don't skip... hmmm...
        // if (rect.width === 0 && rect.height === 0) {
        //     return;
        // }

        if (minX === undefined) {
          // initial value for first child
          minX = rect.x;
          minY = rect.y;
          maxX = rect.x + rect.width;
          maxY = rect.y + rect.height;
        } else {
          minX = Math.min(minX, rect.x);
          minY = Math.min(minY, rect.y);
          maxX = Math.max(maxX, rect.x + rect.width);
          maxY = Math.max(maxY, rect.y + rect.height);
        }
      });

      // if child is group we need to make sure it has visible shapes inside
      var shapes = this.find('Shape');
      var hasVisible = false;
      for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        if (shape.getVisible()) {
          hasVisible = true;
          break;
        }
      }

      if (hasVisible) {
        selfRect = {
          x: minX,
          y: minY,
          width: maxX - minX,
          height: maxY - minY
        };
      } else {
        selfRect = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (!skipTransform) {
        return this._transformedRect(selfRect, relativeTo);
      }
      return selfRect;
    }
  });

  Konva.Util.extend(Konva.Container, Konva.Node);
  // deprecated methods
  Konva.Container.prototype.get = Konva.Container.prototype.find;

  // add getters setters
  Konva.Factory.addComponentsGetterSetter(Konva.Container, 'clip', [
    'x',
    'y',
    'width',
    'height'
  ]);
  /**
   * get/set clip
   * @method
   * @name clip
   * @memberof Konva.Container.prototype
   * @param {Object} clip
   * @param {Number} clip.x
   * @param {Number} clip.y
   * @param {Number} clip.width
   * @param {Number} clip.height
   * @returns {Object}
   * @example
   * // get clip
   * var clip = container.clip();
   *
   * // set clip
   * container.setClip({
   *   x: 20,
   *   y: 20,
   *   width: 20,
   *   height: 20
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Container,
    'clipX',
    undefined,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set clip x
   * @name clipX
   * @method
   * @memberof Konva.Container.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get clip x
   * var clipX = container.clipX();
   *
   * // set clip x
   * container.clipX(10);
   */

  Konva.Factory.addGetterSetter(
    Konva.Container,
    'clipY',
    undefined,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set clip y
   * @name clipY
   * @method
   * @memberof Konva.Container.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get clip y
   * var clipY = container.clipY();
   *
   * // set clip y
   * container.clipY(10);
   */

  Konva.Factory.addGetterSetter(
    Konva.Container,
    'clipWidth',
    undefined,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set clip width
   * @name clipWidth
   * @method
   * @memberof Konva.Container.prototype
   * @param {Number} width
   * @returns {Number}
   * @example
   * // get clip width
   * var clipWidth = container.clipWidth();
   *
   * // set clip width
   * container.clipWidth(100);
   */

  Konva.Factory.addGetterSetter(
    Konva.Container,
    'clipHeight',
    undefined,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set clip height
   * @name clipHeight
   * @method
   * @memberof Konva.Container.prototype
   * @param {Number} height
   * @returns {Number}
   * @example
   * // get clip height
   * var clipHeight = container.clipHeight();
   *
   * // set clip height
   * container.clipHeight(100);
   */

  Konva.Factory.addGetterSetter(Konva.Container, 'clipFunc');
  /**
   * get/set clip function
   * @name clipFunc
   * @method
   * @memberof Konva.Container.prototype
   * @param {Function} function
   * @returns {Function}
   * @example
   * // get clip function
   * var clipFunction = container.clipFunc();
   *
   * // set clip height
   * container.clipFunc(function(ctx) {
   *   ctx.rect(0, 0, 100, 100);
   * });
   */

  Konva.Collection.mapMethods(Konva.Container);
})();

(function(Konva) {
  'use strict';
  var HAS_SHADOW = 'hasShadow';
  var SHADOW_RGBA = 'shadowRGBA';

  function _fillFunc(context) {
    context.fill();
  }
  function _strokeFunc(context) {
    context.stroke();
  }
  function _fillFuncHit(context) {
    context.fill();
  }
  function _strokeFuncHit(context) {
    context.stroke();
  }

  function _clearHasShadowCache() {
    this._clearCache(HAS_SHADOW);
  }

  function _clearGetShadowRGBACache() {
    this._clearCache(SHADOW_RGBA);
  }

  /**
   * Shape constructor.  Shapes are primitive objects such as rectangles,
   *  circles, text, lines, etc.
   * @constructor
   * @memberof Konva
   * @augments Konva.Node
   * @param {Object} config
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var customShape = new Konva.Shape({
   *   x: 5,
   *   y: 10,
   *   fill: 'red',
   *   // a Konva.Canvas renderer is passed into the sceneFunc function
   *   sceneFunc: function(context, shape) {
   *     context.beginPath();
   *     context.moveTo(200, 50);
   *     context.lineTo(420, 80);
   *     context.quadraticCurveTo(300, 100, 260, 170);
   *     context.closePath();
   *     // Konva specific method
   *     context.fillStrokeShape(shape);
   *   }
   *});
   */
  Konva.Shape = function(config) {
    this.__init(config);
  };

  Konva.Util.addMethods(Konva.Shape, {
    __init: function(config) {
      this.nodeType = 'Shape';
      this._fillFunc = _fillFunc;
      this._strokeFunc = _strokeFunc;
      this._fillFuncHit = _fillFuncHit;
      this._strokeFuncHit = _strokeFuncHit;

      // set colorKey
      var shapes = Konva.shapes;
      var key;

      while (true) {
        key = Konva.Util.getRandomColor();
        if (key && !(key in shapes)) {
          break;
        }
      }

      this.colorKey = key;
      shapes[key] = this;

      // call super constructor
      Konva.Node.call(this, config);

      this.on(
        'shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
        _clearHasShadowCache
      );

      this.on(
        'shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
        _clearGetShadowRGBACache
      );
    },
    hasChildren: function() {
      return false;
    },
    getChildren: function() {
      return [];
    },
    /**
     * get canvas context tied to the layer
     * @method
     * @memberof Konva.Shape.prototype
     * @returns {Konva.Context}
     */
    getContext: function() {
      return this.getLayer().getContext();
    },
    /**
     * get canvas renderer tied to the layer.  Note that this returns a canvas renderer, not a canvas element
     * @method
     * @memberof Konva.Shape.prototype
     * @returns {Konva.Canvas}
     */
    getCanvas: function() {
      return this.getLayer().getCanvas();
    },
    /**
     * returns whether or not a shadow will be rendered
     * @method
     * @memberof Konva.Shape.prototype
     * @returns {Boolean}
     */
    hasShadow: function() {
      return this._getCache(HAS_SHADOW, this._hasShadow);
    },
    _hasShadow: function() {
      return (
        this.getShadowEnabled() &&
        (this.getShadowOpacity() !== 0 &&
          !!(
            this.getShadowColor() ||
            this.getShadowBlur() ||
            this.getShadowOffsetX() ||
            this.getShadowOffsetY()
          ))
      );
    },
    getShadowRGBA: function() {
      return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
    },
    _getShadowRGBA: function() {
      if (this.hasShadow()) {
        var rgba = Konva.Util.colorToRGBA(this.shadowColor());
        return (
          'rgba(' +
          rgba.r +
          ',' +
          rgba.g +
          ',' +
          rgba.b +
          ',' +
          rgba.a * (this.getShadowOpacity() || 1) +
          ')'
        );
      }
    },
    /**
     * returns whether or not the shape will be filled
     * @method
     * @memberof Konva.Shape.prototype
     * @returns {Boolean}
     */
    hasFill: function() {
      return !!(
        this.getFill() ||
        this.getFillPatternImage() ||
        this.getFillLinearGradientColorStops() ||
        this.getFillRadialGradientColorStops()
      );
    },
    /**
     * returns whether or not the shape will be stroked
     * @method
     * @memberof Konva.Shape.prototype
     * @returns {Boolean}
     */
    hasStroke: function() {
      return (
        this.strokeEnabled() &&
        !!(this.stroke() || this.getStrokeLinearGradientColorStops())
        // TODO: do we need radial gradient
        // this.getStrokeRadialGradientColorStops()
      );
    },
    /**
     * determines if point is in the shape, regardless if other shapes are on top of it.  Note: because
     *  this method clears a temporary canvas and then redraws the shape, it performs very poorly if executed many times
     *  consecutively.  Please use the {@link Konva.Stage#getIntersection} method if at all possible
     *  because it performs much better
     * @method
     * @memberof Konva.Shape.prototype
     * @param {Object} point
     * @param {Number} point.x
     * @param {Number} point.y
     * @returns {Boolean}
     */
    intersects: function(point) {
      var stage = this.getStage(),
        bufferHitCanvas = stage.bufferHitCanvas,
        p;

      bufferHitCanvas.getContext().clear();
      this.drawHit(bufferHitCanvas);
      p = bufferHitCanvas.context.getImageData(
        Math.round(point.x),
        Math.round(point.y),
        1,
        1
      ).data;
      return p[3] > 0;
    },
    // extends Node.prototype.destroy
    destroy: function() {
      Konva.Node.prototype.destroy.call(this);
      delete Konva.shapes[this.colorKey];
      return this;
    },
    _useBufferCanvas: function(caching) {
      return (
        (!caching &&
          (this.perfectDrawEnabled() &&
            this.getAbsoluteOpacity() !== 1 &&
            this.hasFill() &&
            this.hasStroke() &&
            this.getStage())) ||
        (this.perfectDrawEnabled() &&
          this.hasShadow() &&
          this.getAbsoluteOpacity() !== 1 &&
          this.hasFill() &&
          this.hasStroke() &&
          this.getStage())
      );
    },
    /**
     * return self rectangle (x, y, width, height) of shape.
     * This method are not taken into account transformation and styles.
     * @method
     * @memberof Konva.Shape.prototype
     * @returns {Object} rect with {x, y, width, height} properties
     * @example
     *
     * rect.getSelfRect();  // return {x:0, y:0, width:rect.width(), height:rect.height()}
     * circle.getSelfRect();  // return {x: - circle.width() / 2, y: - circle.height() / 2, width:circle.width(), height:circle.height()}
     *
     */
    getSelfRect: function() {
      var size = this.getSize();
      return {
        x: this._centroid ? Math.round(-size.width / 2) : 0,
        y: this._centroid ? Math.round(-size.height / 2) : 0,
        width: size.width,
        height: size.height
      };
    },
    getClientRect: function(attrs) {
      attrs = attrs || {};
      var skipTransform = attrs.skipTransform;
      var relativeTo = attrs.relativeTo;

      var fillRect = this.getSelfRect();

      var strokeWidth = (this.hasStroke() && this.strokeWidth()) || 0;
      var fillAndStrokeWidth = fillRect.width + strokeWidth;
      var fillAndStrokeHeight = fillRect.height + strokeWidth;

      var shadowOffsetX = this.hasShadow() ? this.shadowOffsetX() : 0;
      var shadowOffsetY = this.hasShadow() ? this.shadowOffsetY() : 0;

      var preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
      var preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);

      var blurRadius = (this.hasShadow() && this.shadowBlur()) || 0;

      var width = preWidth + blurRadius * 2;
      var height = preHeight + blurRadius * 2;

      // if stroke, for example = 3
      // we need to set x to 1.5, but after Math.round it will be 2
      // as we have additional offset we need to increase width and height by 1 pixel
      var roundingOffset = 0;
      if (Math.round(strokeWidth / 2) !== strokeWidth / 2) {
        roundingOffset = 1;
      }
      var rect = {
        width: width + roundingOffset,
        height: height + roundingOffset,
        x:
          -Math.round(strokeWidth / 2 + blurRadius) +
          Math.min(shadowOffsetX, 0) +
          fillRect.x,
        y:
          -Math.round(strokeWidth / 2 + blurRadius) +
          Math.min(shadowOffsetY, 0) +
          fillRect.y
      };
      if (!skipTransform) {
        return this._transformedRect(rect, relativeTo);
      }
      return rect;
    },
    drawScene: function(can, top, caching, skipBuffer) {
      var layer = this.getLayer(),
        canvas = can || layer.getCanvas(),
        context = canvas.getContext(),
        cachedCanvas = this._cache.canvas,
        drawFunc = this.sceneFunc(),
        hasShadow = this.hasShadow(),
        hasStroke = this.hasStroke(),
        stage,
        bufferCanvas,
        bufferContext;

      if (!this.isVisible() && !caching) {
        return this;
      }
      if (cachedCanvas) {
        context.save();
        layer._applyTransform(this, context, top);
        this._drawCachedSceneCanvas(context);
        context.restore();
        return this;
      }
      if (!drawFunc) {
        return this;
      }
      context.save();
      // if buffer canvas is needed
      if (this._useBufferCanvas(caching) && !skipBuffer) {
        stage = this.getStage();
        bufferCanvas = stage.bufferCanvas;
        bufferContext = bufferCanvas.getContext();
        bufferContext.clear();
        bufferContext.save();
        bufferContext._applyLineJoin(this);
        // layer might be undefined if we are using cache before adding to layer
        if (!caching) {
          if (layer) {
            layer._applyTransform(this, bufferContext, top);
          } else {
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
          }
        }

        drawFunc.call(this, bufferContext, this);
        bufferContext.restore();

        var ratio = bufferCanvas.pixelRatio;
        if (hasShadow && !canvas.hitCanvas) {
          context.save();

          context._applyShadow(this);
          context._applyOpacity(this);
          context._applyGlobalCompositeOperation(this);
          context.drawImage(
            bufferCanvas._canvas,
            0,
            0,
            bufferCanvas.width / ratio,
            bufferCanvas.height / ratio
          );
          context.restore();
        } else {
          context._applyOpacity(this);
          context._applyGlobalCompositeOperation(this);
          context.drawImage(
            bufferCanvas._canvas,
            0,
            0,
            bufferCanvas.width / ratio,
            bufferCanvas.height / ratio
          );
        }
      } else {
        // if buffer canvas is not needed
        context._applyLineJoin(this);
        // layer might be undefined if we are using cache before adding to layer
        if (!caching) {
          if (layer) {
            layer._applyTransform(this, context, top);
          } else {
            var o = this.getAbsoluteTransform(top).getMatrix();
            context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
          }
        }

        if (hasShadow && hasStroke && !canvas.hitCanvas) {
          context.save();
          // apply shadow
          if (!caching) {
            context._applyOpacity(this);
            context._applyGlobalCompositeOperation(this);
          }
          context._applyShadow(this);

          drawFunc.call(this, context, this);
          context.restore();
          // if shape has stroke we need to redraw shape
          // otherwise we will see a shadow under stroke (and over fill)
          // but I think this is unexpected behavior
          if (this.hasFill() && this.getShadowForStrokeEnabled()) {
            drawFunc.call(this, context, this);
          }
        } else if (hasShadow && !canvas.hitCanvas) {
          context.save();
          if (!caching) {
            context._applyOpacity(this);
            context._applyGlobalCompositeOperation(this);
          }
          context._applyShadow(this);
          drawFunc.call(this, context, this);
          context.restore();
        } else {
          if (!caching) {
            context._applyOpacity(this);
            context._applyGlobalCompositeOperation(this);
          }
          drawFunc.call(this, context, this);
        }
      }
      context.restore();
      return this;
    },
    drawHit: function(can, top, caching) {
      var layer = this.getLayer(),
        canvas = can || layer.hitCanvas,
        context = canvas.getContext(),
        drawFunc = this.hitFunc() || this.sceneFunc(),
        cachedCanvas = this._cache.canvas,
        cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

      if (!this.shouldDrawHit(canvas) && !caching) {
        return this;
      }
      if (layer) {
        layer.clearHitCache();
      }
      if (cachedHitCanvas) {
        context.save();
        layer._applyTransform(this, context, top);
        this._drawCachedHitCanvas(context);
        context.restore();
        return this;
      }
      if (!drawFunc) {
        return this;
      }
      context.save();
      context._applyLineJoin(this);
      if (!caching) {
        if (layer) {
          layer._applyTransform(this, context, top);
        } else {
          var o = this.getAbsoluteTransform(top).getMatrix();
          context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        }
      }
      drawFunc.call(this, context, this);
      context.restore();
      return this;
    },
    /**
     * draw hit graph using the cached scene canvas
     * @method
     * @memberof Konva.Shape.prototype
     * @param {Integer} alphaThreshold alpha channel threshold that determines whether or not
     *  a pixel should be drawn onto the hit graph.  Must be a value between 0 and 255.
     *  The default is 0
     * @returns {Konva.Shape}
     * @example
     * shape.cache();
     * shape.drawHitFromCache();
     */
    drawHitFromCache: function(alphaThreshold) {
      var threshold = alphaThreshold || 0,
        cachedCanvas = this._cache.canvas,
        sceneCanvas = this._getCachedSceneCanvas(),
        hitCanvas = cachedCanvas.hit,
        hitContext = hitCanvas.getContext(),
        hitWidth = hitCanvas.getWidth(),
        hitHeight = hitCanvas.getHeight(),
        hitImageData,
        hitData,
        len,
        rgbColorKey,
        i,
        alpha;

      hitContext.clear();
      hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);

      try {
        hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
        hitData = hitImageData.data;
        len = hitData.length;
        rgbColorKey = Konva.Util._hexToRgb(this.colorKey);

        // replace non transparent pixels with color key
        for (i = 0; i < len; i += 4) {
          alpha = hitData[i + 3];
          if (alpha > threshold) {
            hitData[i] = rgbColorKey.r;
            hitData[i + 1] = rgbColorKey.g;
            hitData[i + 2] = rgbColorKey.b;
            hitData[i + 3] = 255;
          } else {
            hitData[i + 3] = 0;
          }
        }
        hitContext.putImageData(hitImageData, 0, 0);
      } catch (e) {
        Konva.Util.error(
          'Unable to draw hit graph from cached scene canvas. ' + e.message
        );
      }

      return this;
    }
  });
  Konva.Util.extend(Konva.Shape, Konva.Node);

  // add getters and setters
  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'stroke',
    undefined,
    Konva.Validators.getStringValidator()
  );

  /**
   * get/set stroke color
   * @name stroke
   * @method
   * @memberof Konva.Shape.prototype
   * @param {String} color
   * @returns {String}
   * @example
   * // get stroke color
   * var stroke = shape.stroke();
   *
   * // set stroke color with color string
   * shape.stroke('green');
   *
   * // set stroke color with hex
   * shape.stroke('#00ff00');
   *
   * // set stroke color with rgb
   * shape.stroke('rgb(0,255,0)');
   *
   * // set stroke color with rgba and make it 50% opaque
   * shape.stroke('rgba(0,255,0,0.5');
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'strokeWidth',
    2,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set stroke width
   * @name strokeWidth
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} strokeWidth
   * @returns {Number}
   * @example
   * // get stroke width
   * var strokeWidth = shape.strokeWidth();
   *
   * // set stroke width
   * shape.strokeWidth();
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'strokeHitEnabled',
    true,
    Konva.Validators.getBooleanValidator()
  );

  /**
   * get/set strokeHitEnabled property. Useful for performance optimization.
   * You may set `shape.strokeHitEnabled(false)`. In this case stroke will be no draw on hit canvas, so hit area
   * of shape will be decreased (by lineWidth / 2). Remember that non closed line with `strokeHitEnabled = false`
   * will be not drawn on hit canvas, that is mean line will no trigger pointer events (like mouseover)
   * Default value is true
   * @name strokeHitEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} strokeHitEnabled
   * @returns {Boolean}
   * @example
   * // get strokeHitEnabled
   * var strokeHitEnabled = shape.strokeHitEnabled();
   *
   * // set strokeHitEnabled
   * shape.strokeHitEnabled();
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'perfectDrawEnabled',
    true,
    Konva.Validators.getBooleanValidator()
  );

  /**
   * get/set perfectDrawEnabled. If a shape has fill, stroke and opacity you may set `perfectDrawEnabled` to false to improve performance.
   * See http://konvajs.github.io/docs/performance/Disable_Perfect_Draw.html for more information.
   * Default value is true
   * @name perfectDrawEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} perfectDrawEnabled
   * @returns {Boolean}
   * @example
   * // get perfectDrawEnabled
   * var perfectDrawEnabled = shape.perfectDrawEnabled();
   *
   * // set perfectDrawEnabled
   * shape.perfectDrawEnabled();
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'shadowForStrokeEnabled',
    true,
    Konva.Validators.getBooleanValidator()
  );

  /**
   * get/set shadowForStrokeEnabled. Useful for performance optimization.
   * You may set `shape.shadowForStrokeEnabled(false)`. In this case stroke will be no draw shadow for stroke.
   * Remember if you set `shadowForStrokeEnabled = false` for non closed line - that line with have no shadow!.
   * Default value is true
   * @name shadowForStrokeEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} shadowForStrokeEnabled
   * @returns {Boolean}
   * @example
   * // get shadowForStrokeEnabled
   * var shadowForStrokeEnabled = shape.shadowForStrokeEnabled();
   *
   * // set shadowForStrokeEnabled
   * shape.shadowForStrokeEnabled();
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'lineJoin');

  /**
   * get/set line join.  Can be miter, round, or bevel.  The
   *  default is miter
   * @name lineJoin
   * @method
   * @memberof Konva.Shape.prototype
   * @param {String} lineJoin
   * @returns {String}
   * @example
   * // get line join
   * var lineJoin = shape.lineJoin();
   *
   * // set line join
   * shape.lineJoin('round');
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'lineCap');

  /**
   * get/set line cap.  Can be butt, round, or square
   * @name lineCap
   * @method
   * @memberof Konva.Shape.prototype
   * @param {String} lineCap
   * @returns {String}
   * @example
   * // get line cap
   * var lineCap = shape.lineCap();
   *
   * // set line cap
   * shape.lineCap('round');
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'sceneFunc');

  /**
   * get/set scene draw function
   * @name sceneFunc
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Function} drawFunc drawing function
   * @returns {Function}
   * @example
   * // get scene draw function
   * var sceneFunc = shape.sceneFunc();
   *
   * // set scene draw function
   * shape.sceneFunc(function(context) {
   *   context.beginPath();
   *   context.rect(0, 0, this.width(), this.height());
   *   context.closePath();
   *   context.fillStrokeShape(this);
   * });
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'hitFunc');

  /**
   * get/set hit draw function
   * @name hitFunc
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Function} drawFunc drawing function
   * @returns {Function}
   * @example
   * // get hit draw function
   * var hitFunc = shape.hitFunc();
   *
   * // set hit draw function
   * shape.hitFunc(function(context) {
   *   context.beginPath();
   *   context.rect(0, 0, this.width(), this.height());
   *   context.closePath();
   *   context.fillStrokeShape(this);
   * });
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'dash');

  /**
   * get/set dash array for stroke.
   * @name dash
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Array} dash
   * @returns {Array}
   * @example
   *  // apply dashed stroke that is 10px long and 5 pixels apart
   *  line.dash([10, 5]);
   *  // apply dashed stroke that is made up of alternating dashed
   *  // lines that are 10px long and 20px apart, and dots that have
   *  // a radius of 5px and are 20px apart
   *  line.dash([10, 20, 0.001, 20]);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'dashOffset',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set dash offset for stroke.
   * @name dash
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} dash offset
   * @returns {Number}
   * @example
   *  // apply dashed stroke that is 10px long and 5 pixels apart with an offset of 5px
   *  line.dash([10, 5]);
   *  line.dashOffset(5);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'shadowColor',
    undefined,
    Konva.Validators.getStringValidator()
  );

  /**
   * get/set shadow color
   * @name shadowColor
   * @method
   * @memberof Konva.Shape.prototype
   * @param {String} color
   * @returns {String}
   * @example
   * // get shadow color
   * var shadow = shape.shadowColor();
   *
   * // set shadow color with color string
   * shape.shadowColor('green');
   *
   * // set shadow color with hex
   * shape.shadowColor('#00ff00');
   *
   * // set shadow color with rgb
   * shape.shadowColor('rgb(0,255,0)');
   *
   * // set shadow color with rgba and make it 50% opaque
   * shape.shadowColor('rgba(0,255,0,0.5');
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'shadowBlur',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set shadow blur
   * @name shadowBlur
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} blur
   * @returns {Number}
   * @example
   * // get shadow blur
   * var shadowBlur = shape.shadowBlur();
   *
   * // set shadow blur
   * shape.shadowBlur(10);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'shadowOpacity',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set shadow opacity.  must be a value between 0 and 1
   * @name shadowOpacity
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} opacity
   * @returns {Number}
   * @example
   * // get shadow opacity
   * var shadowOpacity = shape.shadowOpacity();
   *
   * // set shadow opacity
   * shape.shadowOpacity(0.5);
   */

  Konva.Factory.addComponentsGetterSetter(Konva.Shape, 'shadowOffset', [
    'x',
    'y'
  ]);

  /**
   * get/set shadow offset
   * @name shadowOffset
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} offset
   * @param {Number} offset.x
   * @param {Number} offset.y
   * @returns {Object}
   * @example
   * // get shadow offset
   * var shadowOffset = shape.shadowOffset();
   *
   * // set shadow offset
   * shape.shadowOffset({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'shadowOffsetX',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set shadow offset x
   * @name shadowOffsetX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get shadow offset x
   * var shadowOffsetX = shape.shadowOffsetX();
   *
   * // set shadow offset x
   * shape.shadowOffsetX(5);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'shadowOffsetY',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set shadow offset y
   * @name shadowOffsetY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get shadow offset y
   * var shadowOffsetY = shape.shadowOffsetY();
   *
   * // set shadow offset y
   * shape.shadowOffsetY(5);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillPatternImage');

  /**
   * get/set fill pattern image
   * @name fillPatternImage
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Image} image object
   * @returns {Image}
   * @example
   * // get fill pattern image
   * var fillPatternImage = shape.fillPatternImage();
   *
   * // set fill pattern image
   * var imageObj = new Image();
   * imageObj.onload = function() {
   *   shape.fillPatternImage(imageObj);
   * };
   * imageObj.src = 'path/to/image/jpg';
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fill',
    undefined,
    Konva.Validators.getStringValidator()
  );

  /**
   * get/set fill color
   * @name fill
   * @method
   * @memberof Konva.Shape.prototype
   * @param {String} color
   * @returns {String}
   * @example
   * // get fill color
   * var fill = shape.fill();
   *
   * // set fill color with color string
   * shape.fill('green');
   *
   * // set fill color with hex
   * shape.fill('#00ff00');
   *
   * // set fill color with rgb
   * shape.fill('rgb(0,255,0)');
   *
   * // set fill color with rgba and make it 50% opaque
   * shape.fill('rgba(0,255,0,0.5');
   *
   * // shape without fill
   * shape.fill(null);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillPatternX',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set fill pattern x
   * @name fillPatternX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get fill pattern x
   * var fillPatternX = shape.fillPatternX();
   * // set fill pattern x
   * shape.fillPatternX(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillPatternY',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set fill pattern y
   * @name fillPatternY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get fill pattern y
   * var fillPatternY = shape.fillPatternY();
   * // set fill pattern y
   * shape.fillPatternY(20);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillLinearGradientColorStops');

  /**
   * get/set fill linear gradient color stops
   * @name fillLinearGradientColorStops
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Array} colorStops
   * @returns {Array} colorStops
   * @example
   * // get fill linear gradient color stops
   * var colorStops = shape.fillLinearGradientColorStops();
   *
   * // create a linear gradient that starts with red, changes to blue
   * // halfway through, and then changes to green
   * shape.fillLinearGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'strokeLinearGradientColorStops');

  /**
   * get/set stroke linear gradient color stops
   * @name strokeLinearGradientColorStops
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Array} colorStops
   * @returns {Array} colorStops
   * @example
   * // get stroke linear gradient color stops
   * var colorStops = shape.strokeLinearGradientColorStops();
   *
   * // create a linear gradient that starts with red, changes to blue
   * // halfway through, and then changes to green
   * shape.strokeLinearGradientColorStops([0, 'red', 0.5, 'blue', 1, 'green']);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillRadialGradientStartRadius',
    0
  );

  /**
   * get/set fill radial gradient start radius
   * @name fillRadialGradientStartRadius
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} radius
   * @returns {Number}
   * @example
   * // get radial gradient start radius
   * var startRadius = shape.fillRadialGradientStartRadius();
   *
   * // set radial gradient start radius
   * shape.fillRadialGradientStartRadius(0);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillRadialGradientEndRadius', 0);

  /**
   * get/set fill radial gradient end radius
   * @name fillRadialGradientEndRadius
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} radius
   * @returns {Number}
   * @example
   * // get radial gradient end radius
   * var endRadius = shape.fillRadialGradientEndRadius();
   *
   * // set radial gradient end radius
   * shape.fillRadialGradientEndRadius(100);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillRadialGradientColorStops');

  /**
   * get/set fill radial gradient color stops
   * @name fillRadialGradientColorStops
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} colorStops
   * @returns {Array}
   * @example
   * // get fill radial gradient color stops
   * var colorStops = shape.fillRadialGradientColorStops();
   *
   * // create a radial gradient that starts with red, changes to blue
   * // halfway through, and then changes to green
   * shape.fillRadialGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillPatternRepeat', 'repeat');

  /**
   * get/set fill pattern repeat.  Can be 'repeat', 'repeat-x', 'repeat-y', or 'no-repeat'.  The default is 'repeat'
   * @name fillPatternRepeat
   * @method
   * @memberof Konva.Shape.prototype
   * @param {String} repeat
   * @returns {String}
   * @example
   * // get fill pattern repeat
   * var repeat = shape.fillPatternRepeat();
   *
   * // repeat pattern in x direction only
   * shape.fillPatternRepeat('repeat-x');
   *
   * // do not repeat the pattern
   * shape.fillPatternRepeat('no repeat');
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillEnabled', true);

  /**
   * get/set fill enabled flag
   * @name fillEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get fill enabled flag
   * var fillEnabled = shape.fillEnabled();
   *
   * // disable fill
   * shape.fillEnabled(false);
   *
   * // enable fill
   * shape.fillEnabled(true);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'strokeEnabled', true);

  /**
   * get/set stroke enabled flag
   * @name strokeEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get stroke enabled flag
   * var strokeEnabled = shape.strokeEnabled();
   *
   * // disable stroke
   * shape.strokeEnabled(false);
   *
   * // enable stroke
   * shape.strokeEnabled(true);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'shadowEnabled', true);

  /**
   * get/set shadow enabled flag
   * @name shadowEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get shadow enabled flag
   * var shadowEnabled = shape.shadowEnabled();
   *
   * // disable shadow
   * shape.shadowEnabled(false);
   *
   * // enable shadow
   * shape.shadowEnabled(true);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'dashEnabled', true);

  /**
   * get/set dash enabled flag
   * @name dashEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get dash enabled flag
   * var dashEnabled = shape.dashEnabled();
   *
   * // disable dash
   * shape.dashEnabled(false);
   *
   * // enable dash
   * shape.dashEnabled(true);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'strokeScaleEnabled', true);

  /**
   * get/set strokeScale enabled flag
   * @name strokeScaleEnabled
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get stroke scale enabled flag
   * var strokeScaleEnabled = shape.strokeScaleEnabled();
   *
   * // disable stroke scale
   * shape.strokeScaleEnabled(false);
   *
   * // enable stroke scale
   * shape.strokeScaleEnabled(true);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillPriority', 'color');

  /**
   * get/set fill priority.  can be color, pattern, linear-gradient, or radial-gradient.  The default is color.
   *   This is handy if you want to toggle between different fill types.
   * @name fillPriority
   * @method
   * @memberof Konva.Shape.prototype
   * @param {String} priority
   * @returns {String}
   * @example
   * // get fill priority
   * var fillPriority = shape.fillPriority();
   *
   * // set fill priority
   * shape.fillPriority('linear-gradient');
   */

  Konva.Factory.addComponentsGetterSetter(Konva.Shape, 'fillPatternOffset', [
    'x',
    'y'
  ]);

  /**
   * get/set fill pattern offset
   * @name fillPatternOffset
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} offset
   * @param {Number} offset.x
   * @param {Number} offset.y
   * @returns {Object}
   * @example
   * // get fill pattern offset
   * var patternOffset = shape.fillPatternOffset();
   *
   * // set fill pattern offset
   * shape.fillPatternOffset({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillPatternOffsetX',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set fill pattern offset x
   * @name fillPatternOffsetX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get fill pattern offset x
   * var patternOffsetX = shape.fillPatternOffsetX();
   *
   * // set fill pattern offset x
   * shape.fillPatternOffsetX(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillPatternOffsetY',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set fill pattern offset y
   * @name fillPatternOffsetY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get fill pattern offset y
   * var patternOffsetY = shape.fillPatternOffsetY();
   *
   * // set fill pattern offset y
   * shape.fillPatternOffsetY(10);
   */

  Konva.Factory.addComponentsGetterSetter(Konva.Shape, 'fillPatternScale', [
    'x',
    'y'
  ]);

  /**
   * get/set fill pattern scale
   * @name fillPatternScale
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} scale
   * @param {Number} scale.x
   * @param {Number} scale.y
   * @returns {Object}
   * @example
   * // get fill pattern scale
   * var patternScale = shape.fillPatternScale();
   *
   * // set fill pattern scale
   * shape.fillPatternScale({
   *   x: 2
   *   y: 2
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillPatternScaleX',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set fill pattern scale x
   * @name fillPatternScaleX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get fill pattern scale x
   * var patternScaleX = shape.fillPatternScaleX();
   *
   * // set fill pattern scale x
   * shape.fillPatternScaleX(2);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillPatternScaleY',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set fill pattern scale y
   * @name fillPatternScaleY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get fill pattern scale y
   * var patternScaleY = shape.fillPatternScaleY();
   *
   * // set fill pattern scale y
   * shape.fillPatternScaleY(2);
   */

  Konva.Factory.addComponentsGetterSetter(
    Konva.Shape,
    'fillLinearGradientStartPoint',
    ['x', 'y']
  );

  /**
   * get/set fill linear gradient start point
   * @name fillLinearGradientStartPoint
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} startPoint
   * @param {Number} startPoint.x
   * @param {Number} startPoint.y
   * @returns {Object}
   * @example
   * // get fill linear gradient start point
   * var startPoint = shape.fillLinearGradientStartPoint();
   *
   * // set fill linear gradient start point
   * shape.fillLinearGradientStartPoint({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addComponentsGetterSetter(
    Konva.Shape,
    'strokeLinearGradientStartPoint',
    ['x', 'y']
  );

  /**
   * get/set stroke linear gradient start point
   * @name strokeLinearGradientStartPoint
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} startPoint
   * @param {Number} startPoint.x
   * @param {Number} startPoint.y
   * @returns {Object}
   * @example
   * // get stroke linear gradient start point
   * var startPoint = shape.strokeLinearGradientStartPoint();
   *
   * // set stroke linear gradient start point
   * shape.strokeLinearGradientStartPoint({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillLinearGradientStartPointX',
    0
  );

  /**
   * get/set fill linear gradient start point x
   * @name fillLinearGradientStartPointX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get fill linear gradient start point x
   * var startPointX = shape.fillLinearGradientStartPointX();
   *
   * // set fill linear gradient start point x
   * shape.fillLinearGradientStartPointX(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'strokeLinearGradientStartPointX',
    0
  );

  /**
   * get/set stroke linear gradient start point x
   * @name linearLinearGradientStartPointX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get stroke linear gradient start point x
   * var startPointX = shape.strokeLinearGradientStartPointX();
   *
   * // set stroke linear gradient start point x
   * shape.strokeLinearGradientStartPointX(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillLinearGradientStartPointY',
    0
  );

  /**
   * get/set fill linear gradient start point y
   * @name fillLinearGradientStartPointY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get fill linear gradient start point y
   * var startPointY = shape.fillLinearGradientStartPointY();
   *
   * // set fill linear gradient start point y
   * shape.fillLinearGradientStartPointY(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'strokeLinearGradientStartPointY',
    0
  );
  /**
   * get/set stroke linear gradient start point y
   * @name strokeLinearGradientStartPointY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get stroke linear gradient start point y
   * var startPointY = shape.strokeLinearGradientStartPointY();
   *
   * // set stroke linear gradient start point y
   * shape.strokeLinearGradientStartPointY(20);
   */

  Konva.Factory.addComponentsGetterSetter(
    Konva.Shape,
    'fillLinearGradientEndPoint',
    ['x', 'y']
  );

  /**
   * get/set fill linear gradient end point
   * @name fillLinearGradientEndPoint
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} endPoint
   * @param {Number} endPoint.x
   * @param {Number} endPoint.y
   * @returns {Object}
   * @example
   * // get fill linear gradient end point
   * var endPoint = shape.fillLinearGradientEndPoint();
   *
   * // set fill linear gradient end point
   * shape.fillLinearGradientEndPoint({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addComponentsGetterSetter(
    Konva.Shape,
    'strokeLinearGradientEndPoint',
    ['x', 'y']
  );

  /**
   * get/set stroke linear gradient end point
   * @name strokeLinearGradientEndPoint
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} endPoint
   * @param {Number} endPoint.x
   * @param {Number} endPoint.y
   * @returns {Object}
   * @example
   * // get stroke linear gradient end point
   * var endPoint = shape.strokeLinearGradientEndPoint();
   *
   * // set stroke linear gradient end point
   * shape.strokeLinearGradientEndPoint({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillLinearGradientEndPointX', 0);
  /**
   * get/set fill linear gradient end point x
   * @name fillLinearGradientEndPointX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get fill linear gradient end point x
   * var endPointX = shape.fillLinearGradientEndPointX();
   *
   * // set fill linear gradient end point x
   * shape.fillLinearGradientEndPointX(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'strokeLinearGradientEndPointX',
    0
  );
  /**
   * get/set fill linear gradient end point x
   * @name strokeLinearGradientEndPointX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get stroke linear gradient end point x
   * var endPointX = shape.strokeLinearGradientEndPointX();
   *
   * // set stroke linear gradient end point x
   * shape.strokeLinearGradientEndPointX(20);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillLinearGradientEndPointY', 0);
  /**
   * get/set fill linear gradient end point y
   * @name fillLinearGradientEndPointY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get fill linear gradient end point y
   * var endPointY = shape.fillLinearGradientEndPointY();
   *
   * // set fill linear gradient end point y
   * shape.fillLinearGradientEndPointY(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'strokeLinearGradientEndPointY',
    0
  );
  /**
   * get/set stroke linear gradient end point y
   * @name strokeLinearGradientEndPointY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get stroke linear gradient end point y
   * var endPointY = shape.strokeLinearGradientEndPointY();
   *
   * // set stroke linear gradient end point y
   * shape.strokeLinearGradientEndPointY(20);
   */

  Konva.Factory.addComponentsGetterSetter(
    Konva.Shape,
    'fillRadialGradientStartPoint',
    ['x', 'y']
  );

  /**
   * get/set fill radial gradient start point
   * @name fillRadialGradientStartPoint
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} startPoint
   * @param {Number} startPoint.x
   * @param {Number} startPoint.y
   * @returns {Object}
   * @example
   * // get fill radial gradient start point
   * var startPoint = shape.fillRadialGradientStartPoint();
   *
   * // set fill radial gradient start point
   * shape.fillRadialGradientStartPoint({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillRadialGradientStartPointX',
    0
  );
  /**
   * get/set fill radial gradient start point x
   * @name fillRadialGradientStartPointX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get fill radial gradient start point x
   * var startPointX = shape.fillRadialGradientStartPointX();
   *
   * // set fill radial gradient start point x
   * shape.fillRadialGradientStartPointX(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Shape,
    'fillRadialGradientStartPointY',
    0
  );
  /**
   * get/set fill radial gradient start point y
   * @name fillRadialGradientStartPointY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get fill radial gradient start point y
   * var startPointY = shape.fillRadialGradientStartPointY();
   *
   * // set fill radial gradient start point y
   * shape.fillRadialGradientStartPointY(20);
   */

  Konva.Factory.addComponentsGetterSetter(
    Konva.Shape,
    'fillRadialGradientEndPoint',
    ['x', 'y']
  );

  /**
   * get/set fill radial gradient end point
   * @name fillRadialGradientEndPoint
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Object} endPoint
   * @param {Number} endPoint.x
   * @param {Number} endPoint.y
   * @returns {Object}
   * @example
   * // get fill radial gradient end point
   * var endPoint = shape.fillRadialGradientEndPoint();
   *
   * // set fill radial gradient end point
   * shape.fillRadialGradientEndPoint({
   *   x: 20
   *   y: 10
   * });
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillRadialGradientEndPointX', 0);
  /**
   * get/set fill radial gradient end point x
   * @name fillRadialGradientEndPointX
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get fill radial gradient end point x
   * var endPointX = shape.fillRadialGradientEndPointX();
   *
   * // set fill radial gradient end point x
   * shape.fillRadialGradientEndPointX(20);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillRadialGradientEndPointY', 0);
  /**
   * get/set fill radial gradient end point y
   * @name fillRadialGradientEndPointY
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get fill radial gradient end point y
   * var endPointY = shape.fillRadialGradientEndPointY();
   *
   * // set fill radial gradient end point y
   * shape.fillRadialGradientEndPointY(20);
   */

  Konva.Factory.addGetterSetter(Konva.Shape, 'fillPatternRotation', 0);

  /**
   * get/set fill pattern rotation in degrees
   * @name fillPatternRotation
   * @method
   * @memberof Konva.Shape.prototype
   * @param {Number} rotation
   * @returns {Konva.Shape}
   * @example
   * // get fill pattern rotation
   * var patternRotation = shape.fillPatternRotation();
   *
   * // set fill pattern rotation
   * shape.fillPatternRotation(20);
   */

  Konva.Factory.backCompat(Konva.Shape, {
    dashArray: 'dash',
    getDashArray: 'getDash',
    setDashArray: 'getDash',

    drawFunc: 'sceneFunc',
    getDrawFunc: 'getSceneFunc',
    setDrawFunc: 'setSceneFunc',

    drawHitFunc: 'hitFunc',
    getDrawHitFunc: 'getHitFunc',
    setDrawHitFunc: 'setHitFunc'
  });

  Konva.Collection.mapMethods(Konva.Shape);
})(Konva);

(function() {
  'use strict';
  // CONSTANTS
  var STAGE = 'Stage',
    STRING = 'string',
    PX = 'px',
    MOUSEOUT = 'mouseout',
    MOUSELEAVE = 'mouseleave',
    MOUSEOVER = 'mouseover',
    MOUSEENTER = 'mouseenter',
    MOUSEMOVE = 'mousemove',
    MOUSEDOWN = 'mousedown',
    MOUSEUP = 'mouseup',
    CONTEXTMENU = 'contextmenu',
    CLICK = 'click',
    DBL_CLICK = 'dblclick',
    TOUCHSTART = 'touchstart',
    TOUCHEND = 'touchend',
    TAP = 'tap',
    DBL_TAP = 'dbltap',
    TOUCHMOVE = 'touchmove',
    WHEEL = 'wheel',
    CONTENT_MOUSEOUT = 'contentMouseout',
    CONTENT_MOUSEOVER = 'contentMouseover',
    CONTENT_MOUSEMOVE = 'contentMousemove',
    CONTENT_MOUSEDOWN = 'contentMousedown',
    CONTENT_MOUSEUP = 'contentMouseup',
    CONTENT_CONTEXTMENU = 'contentContextmenu',
    CONTENT_CLICK = 'contentClick',
    CONTENT_DBL_CLICK = 'contentDblclick',
    CONTENT_TOUCHSTART = 'contentTouchstart',
    CONTENT_TOUCHEND = 'contentTouchend',
    CONTENT_DBL_TAP = 'contentDbltap',
    CONTENT_TAP = 'contentTap',
    CONTENT_TOUCHMOVE = 'contentTouchmove',
    CONTENT_WHEEL = 'contentWheel',
    DIV = 'div',
    RELATIVE = 'relative',
    KONVA_CONTENT = 'konvajs-content',
    SPACE = ' ',
    UNDERSCORE = '_',
    CONTAINER = 'container',
    EMPTY_STRING = '',
    EVENTS = [
      MOUSEDOWN,
      MOUSEMOVE,
      MOUSEUP,
      MOUSEOUT,
      TOUCHSTART,
      TOUCHMOVE,
      TOUCHEND,
      MOUSEOVER,
      WHEEL,
      CONTEXTMENU
    ],
    // cached variables
    eventsLength = EVENTS.length;

  function addEvent(ctx, eventName) {
    ctx.content.addEventListener(
      eventName,
      function(evt) {
        ctx[UNDERSCORE + eventName](evt);
      },
      false
    );
  }

  /**
   * Stage constructor.  A stage is used to contain multiple layers
   * @constructor
   * @memberof Konva
   * @augments Konva.Container
   * @param {Object} config
   * @param {String|Element} config.container Container selector or DOM element
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var stage = new Konva.Stage({
   *   width: 500,
   *   height: 800,
   *   container: 'containerId' // or "#containerId" or ".containerClass"
   * });
   */
  Konva.Stage = function(config) {
    this.___init(config);
  };

  Konva.Util.addMethods(Konva.Stage, {
    ___init: function(config) {
      this.nodeType = STAGE;
      // call super constructor
      Konva.Container.call(this, config);
      this._id = Konva.idCounter++;
      this._buildDOM();
      this._bindContentEvents();
      this._enableNestedTransforms = false;
      Konva.stages.push(this);
    },
    _validateAdd: function(child) {
      if (child.getType() !== 'Layer') {
        Konva.Util.throw('You may only add layers to the stage.');
      }
    },
    /**
     * set container dom element which contains the stage wrapper div element
     * @method
     * @memberof Konva.Stage.prototype
     * @param {DomElement} container can pass in a dom element or id string
     */
    setContainer: function(container) {
      if (typeof container === STRING) {
        if (container.charAt(0) === '.') {
          var className = container.slice(1);
          container = Konva.document.getElementsByClassName(className)[0];
        } else {
          var id;
          if (container.charAt(0) !== '#') {
            id = container;
          } else {
            id = container.slice(1);
          }
          container = Konva.document.getElementById(id);
        }
        if (!container) {
          throw 'Can not find container in document with id ' + id;
        }
      }
      this._setAttr(CONTAINER, container);
      return this;
    },
    shouldDrawHit: function() {
      return true;
    },
    draw: function() {
      Konva.Node.prototype.draw.call(this);
      return this;
    },
    /**
     * draw layer scene graphs
     * @name draw
     * @method
     * @memberof Konva.Stage.prototype
     */

    /**
     * draw layer hit graphs
     * @name drawHit
     * @method
     * @memberof Konva.Stage.prototype
     */

    /**
     * set height
     * @method
     * @memberof Konva.Stage.prototype
     * @param {Number} height
     */
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      this._resizeDOM();
      return this;
    },
    /**
     * set width
     * @method
     * @memberof Konva.Stage.prototype
     * @param {Number} width
     */
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      this._resizeDOM();
      return this;
    },
    /**
     * clear all layers
     * @method
     * @memberof Konva.Stage.prototype
     */
    clear: function() {
      var layers = this.children,
        len = layers.length,
        n;

      for (n = 0; n < len; n++) {
        layers[n].clear();
      }
      return this;
    },
    clone: function(obj) {
      if (!obj) {
        obj = {};
      }
      obj.container = Konva.document.createElement(DIV);
      return Konva.Container.prototype.clone.call(this, obj);
    },
    /**
     * destroy stage
     * @method
     * @memberof Konva.Stage.prototype
     */
    destroy: function() {
      var content = this.content;
      Konva.Container.prototype.destroy.call(this);

      if (content && Konva.Util._isInDocument(content)) {
        this.getContainer().removeChild(content);
      }
      var index = Konva.stages.indexOf(this);
      if (index > -1) {
        Konva.stages.splice(index, 1);
      }
      return this;
    },
    /**
     * get pointer position which can be a touch position or mouse position
     * @method
     * @memberof Konva.Stage.prototype
     * @returns {Object}
     */
    getPointerPosition: function() {
      return this.pointerPos;
    },
    getStage: function() {
      return this;
    },
    /**
     * get stage content div element which has the
     *  the class name "konvajs-content"
     * @method
     * @memberof Konva.Stage.prototype
     */
    getContent: function() {
      return this.content;
    },
    _toKonvaCanvas: function(config) {
      config = config || {};

      var x = config.x || 0,
        y = config.y || 0,
        canvas = new Konva.SceneCanvas({
          width: config.width || this.getWidth(),
          height: config.height || this.getHeight(),
          pixelRatio: config.pixelRatio || 1
        }),
        _context = canvas.getContext()._context,
        layers = this.children;

      if (x || y) {
        _context.translate(-1 * x, -1 * y);
      }

      layers.each(function(layer) {
        if (!layer.isVisible()) {
          return;
        }
        var layerCanvas = layer._toKonvaCanvas(config);
        _context.drawImage(
          layerCanvas._canvas,
          x,
          y,
          layerCanvas.getWidth() / layerCanvas.getPixelRatio(),
          layerCanvas.getHeight() / layerCanvas.getPixelRatio()
        );
      });
      return canvas;
    },
    /**
     * converts stage into an image.
     * @method
     * @memberof Konva.Stage.prototype
     * @param {Object} config
     * @param {Function} config.callback function executed when the composite has completed
     * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
     *  "image/png" is the default
     * @param {Number} [config.x] x position of canvas section
     * @param {Number} [config.y] y position of canvas section
     * @param {Number} [config.width] width of canvas section
     * @param {Number} [config.height] height of canvas section
     * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
     *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
     *  is very high quality
     */
    toImage: function(config) {
      var cb = config.callback;

      config.callback = function(dataUrl) {
        Konva.Util._getImage(dataUrl, function(img) {
          cb(img);
        });
      };
      this.toDataURL(config);
    },
    /**
     * get visible intersection shape. This is the preferred
     *  method for determining if a point intersects a shape or not
     * @method
     * @memberof Konva.Stage.prototype
     * @param {Object} pos
     * @param {Number} pos.x
     * @param {Number} pos.y
     * @param {String} [selector]
     * @returns {Konva.Node}
     * @example
     * var shape = stage.getIntersection({x: 50, y: 50});
     * // or if you interested in shape parent:
     * var group = stage.getIntersection({x: 50, y: 50}, 'Group');
     */
    getIntersection: function(pos, selector) {
      var layers = this.getChildren(),
        len = layers.length,
        end = len - 1,
        n,
        shape;

      for (n = end; n >= 0; n--) {
        shape = layers[n].getIntersection(pos, selector);
        if (shape) {
          return shape;
        }
      }

      return null;
    },
    _resizeDOM: function() {
      if (this.content) {
        var width = this.getWidth(),
          height = this.getHeight(),
          layers = this.getChildren(),
          len = layers.length,
          n,
          layer;

        // set content dimensions
        this.content.style.width = width + PX;
        this.content.style.height = height + PX;

        this.bufferCanvas.setSize(width, height);
        this.bufferHitCanvas.setSize(width, height);

        // set layer dimensions
        for (n = 0; n < len; n++) {
          layer = layers[n];
          layer.setSize(width, height);
          layer.draw();
        }
      }
    },
    /**
     * add layer or layers to stage
     * @method
     * @memberof Konva.Stage.prototype
     * @param {...Konva.Layer} layer
     * @example
     * stage.add(layer1, layer2, layer3);
     */
    add: function(layer) {
      if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      Konva.Container.prototype.add.call(this, layer);
      layer._setCanvasSize(this.width(), this.height());

      // draw layer and append canvas to container
      layer.draw();

      if (Konva.isBrowser) {
        this.content.appendChild(layer.canvas._canvas);
      }

      // chainable
      return this;
    },
    getParent: function() {
      return null;
    },
    getLayer: function() {
      return null;
    },
    /**
     * returns a {@link Konva.Collection} of layers
     * @method
     * @memberof Konva.Stage.prototype
     */
    getLayers: function() {
      return this.getChildren();
    },
    _bindContentEvents: function() {
      if (!Konva.isBrowser) {
        return;
      }
      for (var n = 0; n < eventsLength; n++) {
        addEvent(this, EVENTS[n]);
      }
    },
    _mouseover: function(evt) {
      if (!Konva.UA.mobile) {
        this._setPointerPosition(evt);
        this._fire(CONTENT_MOUSEOVER, { evt: evt });
      }
    },
    _mouseout: function(evt) {
      if (!Konva.UA.mobile) {
        this._setPointerPosition(evt);
        var targetShape = this.targetShape;

        if (targetShape && !Konva.isDragging()) {
          targetShape._fireAndBubble(MOUSEOUT, { evt: evt });
          targetShape._fireAndBubble(MOUSELEAVE, { evt: evt });
          this.targetShape = null;
        }
        this.pointerPos = undefined;

        this._fire(CONTENT_MOUSEOUT, { evt: evt });
      }
    },
    _mousemove: function(evt) {
      // workaround for mobile IE to force touch event when unhandled pointer event elevates into a mouse event
      if (Konva.UA.ieMobile) {
        return this._touchmove(evt);
      }
      // workaround fake mousemove event in chrome browser https://code.google.com/p/chromium/issues/detail?id=161464
      if (
        (typeof evt.movementX !== 'undefined' ||
          typeof evt.movementY !== 'undefined') &&
        evt.movementY === 0 &&
        evt.movementX === 0
      ) {
        return null;
      }
      if (Konva.UA.mobile) {
        return null;
      }
      this._setPointerPosition(evt);
      var shape;

      if (!Konva.isDragging()) {
        shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) {
          if (
            !Konva.isDragging() &&
            (!this.targetShape || this.targetShape._id !== shape._id)
          ) {
            if (this.targetShape) {
              this.targetShape._fireAndBubble(MOUSEOUT, { evt: evt }, shape);
              this.targetShape._fireAndBubble(MOUSELEAVE, { evt: evt }, shape);
            }
            shape._fireAndBubble(MOUSEOVER, { evt: evt }, this.targetShape);
            shape._fireAndBubble(MOUSEENTER, { evt: evt }, this.targetShape);
            this.targetShape = shape;
          } else {
            shape._fireAndBubble(MOUSEMOVE, { evt: evt });
          }
        } else {
          /*
                 * if no shape was detected, clear target shape and try
                 * to run mouseout from previous target shape
                 */
          if (this.targetShape && !Konva.isDragging()) {
            this.targetShape._fireAndBubble(MOUSEOUT, { evt: evt });
            this.targetShape._fireAndBubble(MOUSELEAVE, { evt: evt });
            this.targetShape = null;
          }
          this._fire(MOUSEMOVE, {
            evt: evt,
            target: this,
            currentTarget: this
          });
        }

        // content event
        this._fire(CONTENT_MOUSEMOVE, { evt: evt });
      }

      // always call preventDefault for desktop events because some browsers
      // try to drag and drop the canvas element
      if (evt.cancelable) {
        evt.preventDefault();
      }
    },
    _mousedown: function(evt) {
      // workaround for mobile IE to force touch event when unhandled pointer event elevates into a mouse event
      if (Konva.UA.ieMobile) {
        return this._touchstart(evt);
      }
      if (!Konva.UA.mobile) {
        this._setPointerPosition(evt);
        var shape = this.getIntersection(this.getPointerPosition());

        Konva.listenClickTap = true;

        if (shape && shape.isListening()) {
          this.clickStartShape = shape;
          shape._fireAndBubble(MOUSEDOWN, { evt: evt });
        } else {
          this._fire(MOUSEDOWN, {
            evt: evt,
            target: this,
            currentTarget: this
          });
        }

        // content event
        this._fire(CONTENT_MOUSEDOWN, { evt: evt });
      }

      // always call preventDefault for desktop events because some browsers
      // try to drag and drop the canvas element
      // TODO: if we preventDefault() it will cancel event detection outside of window
      // but we need it for better drag&drop
      // can we disable native drag&drop somehow differently?
      // if (evt.cancelable) {
      //   evt.preventDefault();
      // }
    },
    _mouseup: function(evt) {
      // workaround for mobile IE to force touch event when unhandled pointer event elevates into a mouse event
      if (Konva.UA.ieMobile) {
        return this._touchend(evt);
      }
      if (!Konva.UA.mobile) {
        this._setPointerPosition(evt);
        var shape = this.getIntersection(this.getPointerPosition()),
          clickStartShape = this.clickStartShape,
          clickEndShape = this.clickEndShape,
          fireDblClick = false,
          dd = Konva.DD;

        if (Konva.inDblClickWindow) {
          fireDblClick = true;
          clearTimeout(this.dblTimeout);
          // Konva.inDblClickWindow = false;
        } else if (!dd || !dd.justDragged) {
          // don't set inDblClickWindow after dragging
          Konva.inDblClickWindow = true;
          clearTimeout(this.dblTimeout);
        } else if (dd) {
          dd.justDragged = false;
        }

        this.dblTimeout = setTimeout(function() {
          Konva.inDblClickWindow = false;
        }, Konva.dblClickWindow);

        if (shape && shape.isListening()) {
          this.clickEndShape = shape;
          shape._fireAndBubble(MOUSEUP, { evt: evt });

          // detect if click or double click occurred
          if (
            Konva.listenClickTap &&
            clickStartShape &&
            clickStartShape._id === shape._id
          ) {
            shape._fireAndBubble(CLICK, { evt: evt });

            if (
              fireDblClick &&
              clickEndShape &&
              clickEndShape._id === shape._id
            ) {
              shape._fireAndBubble(DBL_CLICK, { evt: evt });
            }
          }
        } else {
          this._fire(MOUSEUP, { evt: evt, target: this, currentTarget: this });
          this._fire(CLICK, { evt: evt, target: this, currentTarget: this });
          if (fireDblClick) {
            this._fire(DBL_CLICK, {
              evt: evt,
              target: this,
              currentTarget: this
            });
          }
        }
        // content events
        this._fire(CONTENT_MOUSEUP, { evt: evt });
        if (Konva.listenClickTap) {
          this._fire(CONTENT_CLICK, { evt: evt });
          if (fireDblClick) {
            this._fire(CONTENT_DBL_CLICK, { evt: evt });
          }
        }

        Konva.listenClickTap = false;
      }

      // always call preventDefault for desktop events because some browsers
      // try to drag and drop the canvas element
      if (evt.cancelable) {
        evt.preventDefault();
      }
    },
    _contextmenu: function(evt) {
      this._setPointerPosition(evt);
      var shape = this.getIntersection(this.getPointerPosition());

      if (shape && shape.isListening()) {
        shape._fireAndBubble(CONTEXTMENU, { evt: evt });
      } else {
        this._fire(CONTEXTMENU, {
          evt: evt,
          target: this,
          currentTarget: this
        });
      }
      this._fire(CONTENT_CONTEXTMENU, { evt: evt });
    },
    _touchstart: function(evt) {
      this._setPointerPosition(evt);
      var shape = this.getIntersection(this.getPointerPosition());

      Konva.listenClickTap = true;

      if (shape && shape.isListening()) {
        this.tapStartShape = shape;
        shape._fireAndBubble(TOUCHSTART, { evt: evt });

        // only call preventDefault if the shape is listening for events
        if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
          evt.preventDefault();
        }
      } else {
        this._fire(TOUCHSTART, {
          evt: evt,
          target: this,
          currentTarget: this
        });
      }
      // content event
      this._fire(CONTENT_TOUCHSTART, { evt: evt });
    },
    _touchend: function(evt) {
      this._setPointerPosition(evt);
      var shape = this.getIntersection(this.getPointerPosition()),
        fireDblClick = false;

      if (Konva.inDblClickWindow) {
        fireDblClick = true;
        clearTimeout(this.dblTimeout);
        // Konva.inDblClickWindow = false;
      } else {
        Konva.inDblClickWindow = true;
        clearTimeout(this.dblTimeout);
      }

      this.dblTimeout = setTimeout(function() {
        Konva.inDblClickWindow = false;
      }, Konva.dblClickWindow);

      if (shape && shape.isListening()) {
        shape._fireAndBubble(TOUCHEND, { evt: evt });

        // detect if tap or double tap occurred
        if (
          Konva.listenClickTap &&
          this.tapStartShape &&
          shape._id === this.tapStartShape._id
        ) {
          shape._fireAndBubble(TAP, { evt: evt });

          if (fireDblClick) {
            shape._fireAndBubble(DBL_TAP, { evt: evt });
          }
        }
        // only call preventDefault if the shape is listening for events
        if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
          evt.preventDefault();
        }
      } else {
        this._fire(TOUCHEND, { evt: evt, target: this, currentTarget: this });
        this._fire(TAP, { evt: evt, target: this, currentTarget: this });
        if (fireDblClick) {
          this._fire(DBL_TAP, {
            evt: evt,
            target: this,
            currentTarget: this
          });
        }
      }
      // content events
      this._fire(CONTENT_TOUCHEND, { evt: evt });
      if (Konva.listenClickTap) {
        this._fire(CONTENT_TAP, { evt: evt });
        if (fireDblClick) {
          this._fire(CONTENT_DBL_TAP, { evt: evt });
        }
      }

      Konva.listenClickTap = false;
    },
    _touchmove: function(evt) {
      this._setPointerPosition(evt);
      var dd = Konva.DD,
        shape;
      if (!Konva.isDragging()) {
        shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) {
          shape._fireAndBubble(TOUCHMOVE, { evt: evt });
          // only call preventDefault if the shape is listening for events
          if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
            evt.preventDefault();
          }
        } else {
          this._fire(TOUCHMOVE, {
            evt: evt,
            target: this,
            currentTarget: this
          });
        }
        this._fire(CONTENT_TOUCHMOVE, { evt: evt });
      }
      if (dd) {
        if (
          Konva.isDragging() &&
          Konva.DD.node.preventDefault() &&
          evt.cancelable
        ) {
          evt.preventDefault();
        }
      }
    },
    _wheel: function(evt) {
      this._setPointerPosition(evt);
      var shape = this.getIntersection(this.getPointerPosition());

      if (shape && shape.isListening()) {
        shape._fireAndBubble(WHEEL, { evt: evt });
      } else {
        this._fire(WHEEL, {
          evt: evt,
          target: this,
          currentTarget: this
        });
      }
      this._fire(CONTENT_WHEEL, { evt: evt });
    },
    _setPointerPosition: function(evt) {
      var contentPosition = this._getContentPosition(),
        x = null,
        y = null;
      evt = evt ? evt : window.event;

      // touch events
      if (evt.touches !== undefined) {
        // currently, only handle one finger
        if (evt.touches.length > 0) {
          var touch = evt.touches[0];
          // get the information for finger #1
          x = touch.clientX - contentPosition.left;
          y = touch.clientY - contentPosition.top;
        }
      } else {
        // mouse events
        x = evt.clientX - contentPosition.left;
        y = evt.clientY - contentPosition.top;
      }
      if (x !== null && y !== null) {
        this.pointerPos = {
          x: x,
          y: y
        };
      }
    },
    _getContentPosition: function() {
      var rect = this.content.getBoundingClientRect
        ? this.content.getBoundingClientRect()
        : { top: 0, left: 0 };
      return {
        top: rect.top,
        left: rect.left
      };
    },
    _buildDOM: function() {
      // the buffer canvas pixel ratio must be 1 because it is used as an
      // intermediate canvas before copying the result onto a scene canvas.
      // not setting it to 1 will result in an over compensation
      this.bufferCanvas = new Konva.SceneCanvas();
      this.bufferHitCanvas = new Konva.HitCanvas({ pixelRatio: 1 });

      if (!Konva.isBrowser) {
        return;
      }
      var container = this.getContainer();
      if (!container) {
        throw 'Stage has no container. A container is required.';
      }
      // clear content inside container
      container.innerHTML = EMPTY_STRING;

      // content
      this.content = Konva.document.createElement(DIV);
      this.content.style.position = RELATIVE;
      this.content.className = KONVA_CONTENT;
      this.content.setAttribute('role', 'presentation');

      container.appendChild(this.content);

      this._resizeDOM();
    },
    _onContent: function(typesStr, handler) {
      var types = typesStr.split(SPACE),
        len = types.length,
        n,
        baseEvent;

      for (n = 0; n < len; n++) {
        baseEvent = types[n];
        this.content.addEventListener(baseEvent, handler, false);
      }
    },
    // currently cache function is now working for stage, because stage has no its own canvas element
    // TODO: may be it is better to cache all children layers?
    cache: function() {
      Konva.Util.warn(
        'Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.'
      );
    },
    clearCache: function() {}
  });
  Konva.Util.extend(Konva.Stage, Konva.Container);

  // add getters and setters
  Konva.Factory.addGetter(Konva.Stage, 'container');
  Konva.Factory.addOverloadedGetterSetter(Konva.Stage, 'container');

  /**
   * get container DOM element
   * @name container
   * @method
   * @memberof Konva.Stage.prototype
   * @returns {DomElement} container
   * @example
   * // get container
   * var container = stage.container();
   * // set container
   * var container = document.createElement('div');
   * body.appendChild(container);
   * stage.container(container);
   */
})();

(function(Konva) {
  'use strict';
  /**
   * BaseLayer constructor.
   * @constructor
   * @memberof Konva
   * @augments Konva.Container
   * @param {Object} config
   * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
   * to clear the canvas before each layer draw.  The default value is true.
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height
     * @param {Function} [config.clipFunc] set clip func

   */
  Konva.BaseLayer = function(config) {
    this.___init(config);
  };

  Konva.Util.addMethods(Konva.BaseLayer, {
    ___init: function(config) {
      this.nodeType = 'Layer';
      Konva.Container.call(this, config);
    },
    createPNGStream: function() {
      return this.canvas._canvas.createPNGStream();
    },
    /**
     * get layer canvas
     * @method
     * @memberof Konva.BaseLayer.prototype
     */
    getCanvas: function() {
      return this.canvas;
    },
    /**
     * get layer hit canvas
     * @method
     * @memberof Konva.BaseLayer.prototype
     */
    getHitCanvas: function() {
      return this.hitCanvas;
    },
    /**
     * get layer canvas context
     * @method
     * @memberof Konva.BaseLayer.prototype
     */
    getContext: function() {
      return this.getCanvas().getContext();
    },
    /**
     * clear scene and hit canvas contexts tied to the layer
     * @method
     * @memberof Konva.BaseLayer.prototype
     * @param {Object} [bounds]
     * @param {Number} [bounds.x]
     * @param {Number} [bounds.y]
     * @param {Number} [bounds.width]
     * @param {Number} [bounds.height]
     * @example
     * layer.clear();
     * layer.clear({
     *   x : 0,
     *   y : 0,
     *   width : 100,
     *   height : 100
     * });
     */
    clear: function(bounds) {
      this.getContext().clear(bounds);
      return this;
    },
    clearHitCache: function() {
      this._hitImageData = undefined;
    },
    // extend Node.prototype.setZIndex
    setZIndex: function(index) {
      Konva.Node.prototype.setZIndex.call(this, index);
      var stage = this.getStage();
      if (stage) {
        stage.content.removeChild(this.getCanvas()._canvas);

        if (index < stage.getChildren().length - 1) {
          stage.content.insertBefore(
            this.getCanvas()._canvas,
            stage.getChildren()[index + 1].getCanvas()._canvas
          );
        } else {
          stage.content.appendChild(this.getCanvas()._canvas);
        }
      }
      return this;
    },
    // extend Node.prototype.moveToTop
    moveToTop: function() {
      Konva.Node.prototype.moveToTop.call(this);
      var stage = this.getStage();
      if (stage) {
        stage.content.removeChild(this.getCanvas()._canvas);
        stage.content.appendChild(this.getCanvas()._canvas);
      }
      return this;
    },
    // extend Node.prototype.moveUp
    moveUp: function() {
      var moved = Konva.Node.prototype.moveUp.call(this);
      if (!moved) {
        return this;
      }
      var stage = this.getStage();
      if (!stage) {
        return this;
      }
      stage.content.removeChild(this.getCanvas()._canvas);

      if (this.index < stage.getChildren().length - 1) {
        stage.content.insertBefore(
          this.getCanvas()._canvas,
          stage.getChildren()[this.index + 1].getCanvas()._canvas
        );
      } else {
        stage.content.appendChild(this.getCanvas()._canvas);
      }
      return this;
    },
    // extend Node.prototype.moveDown
    moveDown: function() {
      if (Konva.Node.prototype.moveDown.call(this)) {
        var stage = this.getStage();
        if (stage) {
          var children = stage.getChildren();
          stage.content.removeChild(this.getCanvas()._canvas);
          stage.content.insertBefore(
            this.getCanvas()._canvas,
            children[this.index + 1].getCanvas()._canvas
          );
        }
      }
      return this;
    },
    // extend Node.prototype.moveToBottom
    moveToBottom: function() {
      if (Konva.Node.prototype.moveToBottom.call(this)) {
        var stage = this.getStage();
        if (stage) {
          var children = stage.getChildren();
          stage.content.removeChild(this.getCanvas()._canvas);
          stage.content.insertBefore(
            this.getCanvas()._canvas,
            children[1].getCanvas()._canvas
          );
        }
      }
      return this;
    },
    getLayer: function() {
      return this;
    },
    remove: function() {
      var _canvas = this.getCanvas()._canvas;

      Konva.Node.prototype.remove.call(this);

      if (_canvas && _canvas.parentNode && Konva.Util._isInDocument(_canvas)) {
        _canvas.parentNode.removeChild(_canvas);
      }
      return this;
    },
    getStage: function() {
      return this.parent;
    },
    setSize: function(width, height) {
      this.canvas.setSize(width, height);
      return this;
    },
    _toKonvaCanvas: function(config) {
      config = config || {};
      config.width = config.width || this.getWidth();
      config.height = config.height || this.getHeight();
      config.x = config.x !== undefined ? config.x : this.getX();
      config.y = config.y !== undefined ? config.y : this.getY();

      return Konva.Node.prototype._toKonvaCanvas.call(this, config);
    },
    /**
     * get/set width of layer.getter return width of stage. setter doing nothing.
     * if you want change width use `stage.width(value);`
     * @name width
     * @method
     * @memberof Konva.BaseLayer.prototype
     * @returns {Number}
     * @example
     * var width = layer.width();
     */
    getWidth: function() {
      if (this.parent) {
        return this.parent.getWidth();
      }
    },
    setWidth: function() {
      Konva.Util.warn(
        'Can not change width of layer. Use "stage.width(value)" function instead.'
      );
    },
    /**
     * get/set height of layer.getter return height of stage. setter doing nothing.
     * if you want change height use `stage.height(value);`
     * @name height
     * @method
     * @memberof Konva.BaseLayer.prototype
     * @returns {Number}
     * @example
     * var height = layer.height();
     */
    getHeight: function() {
      if (this.parent) {
        return this.parent.getHeight();
      }
    },
    setHeight: function() {
      Konva.Util.warn(
        'Can not change height of layer. Use "stage.height(value)" function instead.'
      );
    },
    // the apply transform method is handled by the Layer and FastLayer class
    // because it is up to the layer to decide if an absolute or relative transform
    // should be used
    _applyTransform: function(shape, context, top) {
      var m = shape.getAbsoluteTransform(top).getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
    }
  });
  Konva.Util.extend(Konva.BaseLayer, Konva.Container);

  // add getters and setters
  Konva.Factory.addGetterSetter(Konva.BaseLayer, 'clearBeforeDraw', true);
  /**
   * get/set clearBeforeDraw flag which determines if the layer is cleared or not
   *  before drawing
   * @name clearBeforeDraw
   * @method
   * @memberof Konva.BaseLayer.prototype
   * @param {Boolean} clearBeforeDraw
   * @returns {Boolean}
   * @example
   * // get clearBeforeDraw flag
   * var clearBeforeDraw = layer.clearBeforeDraw();
   *
   * // disable clear before draw
   * layer.clearBeforeDraw(false);
   *
   * // enable clear before draw
   * layer.clearBeforeDraw(true);
   */

  Konva.Collection.mapMethods(Konva.BaseLayer);
})(Konva);

(function() {
  'use strict';
  // constants
  var HASH = '#',
    BEFORE_DRAW = 'beforeDraw',
    DRAW = 'draw',
    /*
         * 2 - 3 - 4
         * |       |
         * 1 - 0   5
         *         |
         * 8 - 7 - 6
         */
    INTERSECTION_OFFSETS = [
      { x: 0, y: 0 }, // 0
      { x: -1, y: -1 }, // 2
      { x: 1, y: -1 }, // 4
      { x: 1, y: 1 }, // 6
      { x: -1, y: 1 } // 8
    ],
    INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;

  /**
   * Layer constructor.  Layers are tied to their own canvas element and are used
   * to contain groups or shapes.
   * @constructor
   * @memberof Konva
   * @augments Konva.BaseLayer
   * @param {Object} config
   * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
   * to clear the canvas before each layer draw.  The default value is true.
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height
     * @param {Function} [config.clipFunc] set clip func

   * @example
   * var layer = new Konva.Layer();
   */
  Konva.Layer = function(config) {
    this.____init(config);
  };

  Konva.Util.addMethods(Konva.Layer, {
    ____init: function(config) {
      this.nodeType = 'Layer';
      this.canvas = new Konva.SceneCanvas();
      this.hitCanvas = new Konva.HitCanvas({
        pixelRatio: 1
      });
      // call super constructor
      Konva.BaseLayer.call(this, config);
    },
    _setCanvasSize: function(width, height) {
      this.canvas.setSize(width, height);
      this.hitCanvas.setSize(width, height);
    },
    _validateAdd: function(child) {
      var type = child.getType();
      if (type !== 'Group' && type !== 'Shape') {
        Konva.Util.throw('You may only add groups and shapes to a layer.');
      }
    },
    /**
     * get visible intersection shape. This is the preferred
     * method for determining if a point intersects a shape or not
     * also you may pass optional selector parametr to return ancestor of intersected shape
     * @method
     * @memberof Konva.Layer.prototype
     * @param {Object} pos
     * @param {Number} pos.x
     * @param {Number} pos.y
     * @param {String} [selector]
     * @returns {Konva.Node}
     * @example
     * var shape = layer.getIntersection({x: 50, y: 50});
     * // or if you interested in shape parent:
     * var group = layer.getIntersection({x: 50, y: 50}, 'Group');
     */
    getIntersection: function(pos, selector) {
      var obj, i, intersectionOffset, shape;

      if (!this.hitGraphEnabled() || !this.isVisible()) {
        return null;
      }
      // in some cases antialiased area may be bigger than 1px
      // it is possible if we will cache node, then scale it a lot
      // TODO: check { 0; 0 } point before loop, and remove it from INTERSECTION_OFFSETS.
      var spiralSearchDistance = 1;
      var continueSearch = false;
      while (true) {
        for (i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
          intersectionOffset = INTERSECTION_OFFSETS[i];
          obj = this._getIntersection({
            x: pos.x + intersectionOffset.x * spiralSearchDistance,
            y: pos.y + intersectionOffset.y * spiralSearchDistance
          });
          shape = obj.shape;
          if (shape && selector) {
            return shape.findAncestor(selector, true);
          } else if (shape) {
            return shape;
          }
          // we should continue search if we found antialiased pixel
          // that means our node somewhere very close
          continueSearch = !!obj.antialiased;
          // stop search if found empty pixel
          if (!obj.antialiased) {
            break;
          }
        }
        // if no shape, and no antialiased pixel, we should end searching
        if (continueSearch) {
          spiralSearchDistance += 1;
        } else {
          return null;
        }
      }
    },
    _getImageData: function(x, y) {
      var width = this.hitCanvas.width || 1,
        height = this.hitCanvas.height || 1,
        index = Math.round(y) * width + Math.round(x);

      if (!this._hitImageData) {
        this._hitImageData = this.hitCanvas.context.getImageData(
          0,
          0,
          width,
          height
        );
      }

      return [
        this._hitImageData.data[4 * index + 0], // Red
        this._hitImageData.data[4 * index + 1], // Green
        this._hitImageData.data[4 * index + 2], // Blue
        this._hitImageData.data[4 * index + 3] // Alpha
      ];
    },
    _getIntersection: function(pos) {
      var ratio = this.hitCanvas.pixelRatio;
      var p = this.hitCanvas.context.getImageData(
          Math.round(pos.x * ratio),
          Math.round(pos.y * ratio),
          1,
          1
        ).data,
        p3 = p[3],
        colorKey,
        shape;
      // fully opaque pixel
      if (p3 === 255) {
        colorKey = Konva.Util._rgbToHex(p[0], p[1], p[2]);
        shape = Konva.shapes[HASH + colorKey];
        if (shape) {
          return {
            shape: shape
          };
        }
        return {
          antialiased: true
        };
      } else if (p3 > 0) {
        // antialiased pixel
        return {
          antialiased: true
        };
      }
      // empty pixel
      return {};
    },
    drawScene: function(can, top) {
      var layer = this.getLayer(),
        canvas = can || (layer && layer.getCanvas());

      this._fire(BEFORE_DRAW, {
        node: this
      });

      if (this.getClearBeforeDraw()) {
        canvas.getContext().clear();
      }

      Konva.Container.prototype.drawScene.call(this, canvas, top);

      this._fire(DRAW, {
        node: this
      });

      return this;
    },
    drawHit: function(can, top) {
      var layer = this.getLayer(),
        canvas = can || (layer && layer.hitCanvas);

      if (layer && layer.getClearBeforeDraw()) {
        layer
          .getHitCanvas()
          .getContext()
          .clear();
      }

      Konva.Container.prototype.drawHit.call(this, canvas, top);
      this.imageData = null; // Clear imageData cache
      return this;
    },
    clear: function(bounds) {
      Konva.BaseLayer.prototype.clear.call(this, bounds);
      this.getHitCanvas()
        .getContext()
        .clear(bounds);
      this.imageData = null; // Clear getImageData cache
      return this;
    },
    // extend Node.prototype.setVisible
    setVisible: function(visible) {
      Konva.Node.prototype.setVisible.call(this, visible);
      if (visible) {
        this.getCanvas()._canvas.style.display = 'block';
        this.hitCanvas._canvas.style.display = 'block';
      } else {
        this.getCanvas()._canvas.style.display = 'none';
        this.hitCanvas._canvas.style.display = 'none';
      }
      return this;
    },
    /**
     * enable hit graph
     * @name enableHitGraph
     * @method
     * @memberof Konva.Layer.prototype
     * @returns {Layer}
     */
    enableHitGraph: function() {
      this.setHitGraphEnabled(true);
      return this;
    },
    /**
     * disable hit graph
     * @name disableHitGraph
     * @method
     * @memberof Konva.Layer.prototype
     * @returns {Layer}
     */
    disableHitGraph: function() {
      this.setHitGraphEnabled(false);
      return this;
    },
    setSize: function(width, height) {
      Konva.BaseLayer.prototype.setSize.call(this, width, height);
      this.hitCanvas.setSize(width, height);
      return this;
    }
  });
  Konva.Util.extend(Konva.Layer, Konva.BaseLayer);

  Konva.Factory.addGetterSetter(Konva.Layer, 'hitGraphEnabled', true);
  /**
   * get/set hitGraphEnabled flag.  Disabling the hit graph will greatly increase
   *  draw performance because the hit graph will not be redrawn each time the layer is
   *  drawn.  This, however, also disables mouse/touch event detection
   * @name hitGraphEnabled
   * @method
   * @memberof Konva.Layer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get hitGraphEnabled flag
   * var hitGraphEnabled = layer.hitGraphEnabled();
   *
   * // disable hit graph
   * layer.hitGraphEnabled(false);
   *
   * // enable hit graph
   * layer.hitGraphEnabled(true);
   */
  Konva.Collection.mapMethods(Konva.Layer);
})();

(function() {
  'use strict';
  /**
   * FastLayer constructor. Layers are tied to their own canvas element and are used
   * to contain shapes only.  If you don't need node nesting, mouse and touch interactions,
   * or event pub/sub, you should use FastLayer instead of Layer to create your layers.
   * It renders about 2x faster than normal layers.
   * @constructor
   * @memberof Konva
   * @augments Konva.BaseLayer
   * @param {Object} config
   * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
   * to clear the canvas before each layer draw.  The default value is true.
   * @param {Boolean} [config.visible]
   * @param {String} [config.id] unique id
   * @param {String} [config.name] non-unique name
   * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
   * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height
     * @param {Function} [config.clipFunc] set clip func

   * @example
   * var layer = new Konva.FastLayer();
   */
  Konva.FastLayer = function(config) {
    this.____init(config);
  };

  Konva.Util.addMethods(Konva.FastLayer, {
    ____init: function(config) {
      this.nodeType = 'Layer';
      this.canvas = new Konva.SceneCanvas();
      // call super constructor
      Konva.BaseLayer.call(this, config);
    },
    _validateAdd: function(child) {
      var type = child.getType();
      if (type !== 'Shape') {
        Konva.Util.throw('You may only add shapes to a fast layer.');
      }
    },
    _setCanvasSize: function(width, height) {
      this.canvas.setSize(width, height);
    },
    hitGraphEnabled: function() {
      return false;
    },
    getIntersection: function() {
      return null;
    },
    drawScene: function(can) {
      var layer = this.getLayer(),
        canvas = can || (layer && layer.getCanvas());

      if (this.getClearBeforeDraw()) {
        canvas.getContext().clear();
      }

      Konva.Container.prototype.drawScene.call(this, canvas);

      return this;
    },
    draw: function() {
      this.drawScene();
      return this;
    },
    // extend Node.prototype.setVisible
    setVisible: function(visible) {
      Konva.Node.prototype.setVisible.call(this, visible);
      if (visible) {
        this.getCanvas()._canvas.style.display = 'block';
      } else {
        this.getCanvas()._canvas.style.display = 'none';
      }
      return this;
    }
  });
  Konva.Util.extend(Konva.FastLayer, Konva.BaseLayer);

  Konva.Collection.mapMethods(Konva.FastLayer);
})();

(function() {
  'use strict';
  /**
   * Group constructor.  Groups are used to contain shapes or other groups.
   * @constructor
   * @memberof Konva
   * @augments Konva.Container
   * @param {Object} config
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height
     * @param {Function} [config.clipFunc] set clip func

   * @example
   * var group = new Konva.Group();
   */
  Konva.Group = function(config) {
    this.___init(config);
  };

  Konva.Util.addMethods(Konva.Group, {
    ___init: function(config) {
      this.nodeType = 'Group';
      // call super constructor
      Konva.Container.call(this, config);
    },
    _validateAdd: function(child) {
      var type = child.getType();
      if (type !== 'Group' && type !== 'Shape') {
        Konva.Util.throw('You may only add groups and shapes to groups.');
      }
    }
  });
  Konva.Util.extend(Konva.Group, Konva.Container);

  Konva.Collection.mapMethods(Konva.Group);
})();

(function(Konva) {
  'use strict';
  var now = (function() {
    if (Konva.global.performance && Konva.global.performance.now) {
      return function() {
        return Konva.global.performance.now();
      };
    }

    return function() {
      return new Date().getTime();
    };
  })();

  function FRAF(callback) {
    setTimeout(callback, 1000 / 60);
  }

  var RAF = (function() {
    return (
      Konva.global.requestAnimationFrame ||
      Konva.global.webkitRequestAnimationFrame ||
      Konva.global.mozRequestAnimationFrame ||
      Konva.global.oRequestAnimationFrame ||
      Konva.global.msRequestAnimationFrame ||
      FRAF
    );
  })();

  function requestAnimFrame() {
    return RAF.apply(Konva.global, arguments);
  }

  /**
   * Animation constructor.  A stage is used to contain multiple layers and handle
   * @constructor
   * @memberof Konva
   * @param {Function} func function executed on each animation frame.  The function is passed a frame object, which contains
   *  timeDiff, lastTime, time, and frameRate properties.  The timeDiff property is the number of milliseconds that have passed
   *  since the last animation frame.  The lastTime property is time in milliseconds that elapsed from the moment the animation started
   *  to the last animation frame.  The time property is the time in milliseconds that ellapsed from the moment the animation started
   *  to the current animation frame.  The frameRate property is the current frame rate in frames / second. Return false from function,
   *  if you don't need to redraw layer/layers on some frames.
   * @param {Konva.Layer|Array} [layers] layer(s) to be redrawn on each animation frame. Can be a layer, an array of layers, or null.
   *  Not specifying a node will result in no redraw.
   * @example
   * // move a node to the right at 50 pixels / second
   * var velocity = 50;
   *
   * var anim = new Konva.Animation(function(frame) {
   *   var dist = velocity * (frame.timeDiff / 1000);
   *   node.move(dist, 0);
   * }, layer);
   *
   * anim.start();
   */
  Konva.Animation = function(func, layers) {
    var Anim = Konva.Animation;
    this.func = func;
    this.setLayers(layers);
    this.id = Anim.animIdCounter++;
    this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: now()
    };
  };
  /*
     * Animation methods
     */
  Konva.Animation.prototype = {
    /**
     * set layers to be redrawn on each animation frame
     * @method
     * @memberof Konva.Animation.prototype
     * @param {Konva.Layer|Array} [layers] layer(s) to be redrawn.&nbsp; Can be a layer, an array of layers, or null.  Not specifying a node will result in no redraw.
     * @return {Konva.Animation} this
     */
    setLayers: function(layers) {
      var lays = [];
      // if passing in no layers
      if (!layers) {
        lays = [];
      } else if (layers.length > 0) {
        // if passing in an array of Layers
        // NOTE: layers could be an array or Konva.Collection.  for simplicity, I'm just inspecting
        // the length property to check for both cases
        lays = layers;
      } else {
        // if passing in a Layer
        lays = [layers];
      }

      this.layers = lays;
      return this;
    },
    /**
     * get layers
     * @method
     * @memberof Konva.Animation.prototype
     * @return {Array} Array of Konva.Layer
     */
    getLayers: function() {
      return this.layers;
    },
    /**
     * add layer.  Returns true if the layer was added, and false if it was not
     * @method
     * @memberof Konva.Animation.prototype
     * @param {Konva.Layer} layer to add
     * @return {Bool} true if layer is added to animation, otherwise false
     */
    addLayer: function(layer) {
      var layers = this.layers,
        len = layers.length,
        n;

      // don't add the layer if it already exists
      for (n = 0; n < len; n++) {
        if (layers[n]._id === layer._id) {
          return false;
        }
      }

      this.layers.push(layer);
      return true;
    },
    /**
     * determine if animation is running or not.  returns true or false
     * @method
     * @memberof Konva.Animation.prototype
     * @return {Bool} is animation running?
     */
    isRunning: function() {
      var a = Konva.Animation,
        animations = a.animations,
        len = animations.length,
        n;

      for (n = 0; n < len; n++) {
        if (animations[n].id === this.id) {
          return true;
        }
      }
      return false;
    },
    /**
     * start animation
     * @method
     * @memberof Konva.Animation.prototype
     * @return {Konva.Animation} this
     */
    start: function() {
      var Anim = Konva.Animation;
      this.stop();
      this.frame.timeDiff = 0;
      this.frame.lastTime = now();
      Anim._addAnimation(this);
      return this;
    },
    /**
     * stop animation
     * @method
     * @memberof Konva.Animation.prototype
     * @return {Konva.Animation} this
     */
    stop: function() {
      Konva.Animation._removeAnimation(this);
      return this;
    },
    _updateFrameObject: function(time) {
      this.frame.timeDiff = time - this.frame.lastTime;
      this.frame.lastTime = time;
      this.frame.time += this.frame.timeDiff;
      this.frame.frameRate = 1000 / this.frame.timeDiff;
    }
  };
  Konva.Animation.animations = [];
  Konva.Animation.animIdCounter = 0;
  Konva.Animation.animRunning = false;

  Konva.Animation._addAnimation = function(anim) {
    this.animations.push(anim);
    this._handleAnimation();
  };
  Konva.Animation._removeAnimation = function(anim) {
    var id = anim.id,
      animations = this.animations,
      len = animations.length,
      n;

    for (n = 0; n < len; n++) {
      if (animations[n].id === id) {
        this.animations.splice(n, 1);
        break;
      }
    }
  };

  Konva.Animation._runFrames = function() {
    var layerHash = {},
      animations = this.animations,
      anim,
      layers,
      func,
      n,
      i,
      layersLen,
      layer,
      key,
      needRedraw;
    /*
         * loop through all animations and execute animation
         *  function.  if the animation object has specified node,
         *  we can add the node to the nodes hash to eliminate
         *  drawing the same node multiple times.  The node property
         *  can be the stage itself or a layer
         */
    /*
         * WARNING: don't cache animations.length because it could change while
         * the for loop is running, causing a JS error
         */

    for (n = 0; n < animations.length; n++) {
      anim = animations[n];
      layers = anim.layers;
      func = anim.func;

      anim._updateFrameObject(now());
      layersLen = layers.length;

      // if animation object has a function, execute it
      if (func) {
        // allow anim bypassing drawing
        needRedraw = func.call(anim, anim.frame) !== false;
      } else {
        needRedraw = true;
      }
      if (!needRedraw) {
        continue;
      }
      for (i = 0; i < layersLen; i++) {
        layer = layers[i];

        if (layer._id !== undefined) {
          layerHash[layer._id] = layer;
        }
      }
    }

    for (key in layerHash) {
      if (!layerHash.hasOwnProperty(key)) {
        continue;
      }
      layerHash[key].draw();
    }
  };
  Konva.Animation._animationLoop = function() {
    var Anim = Konva.Animation;
    if (Anim.animations.length) {
      Anim._runFrames();
      requestAnimFrame(Anim._animationLoop);
    } else {
      Anim.animRunning = false;
    }
  };
  Konva.Animation._handleAnimation = function() {
    if (!this.animRunning) {
      this.animRunning = true;
      requestAnimFrame(this._animationLoop);
    }
  };

  /**
   * batch draw. this function will not do immediate draw
   * but it will schedule drawing to next tick (requestAnimFrame)
   * @method
   * @return {Konva.Layer} this
   * @memberof Konva.Base.prototype
   */
  Konva.BaseLayer.prototype.batchDraw = function() {
    var that = this,
      Anim = Konva.Animation;

    if (!this.batchAnim) {
      this.batchAnim = new Anim(function() {
        // stop animation after first tick
        that.batchAnim.stop();
      }, this);
    }

    if (!this.batchAnim.isRunning()) {
      this.batchAnim.start();
    }
    return this;
  };

  /**
   * batch draw
   * @method
   * @return {Konva.Stage} this
   * @memberof Konva.Stage.prototype
   */
  Konva.Stage.prototype.batchDraw = function() {
    this.getChildren().each(function(layer) {
      layer.batchDraw();
    });
    return this;
  };
})(Konva);

(function() {
  'use strict';
  var blacklist = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    },
    PAUSED = 1,
    PLAYING = 2,
    REVERSING = 3,
    idCounter = 0,
    colorAttrs = ['fill', 'stroke', 'shadowColor'];

  var Tween = function(prop, propFunc, func, begin, finish, duration, yoyo) {
    this.prop = prop;
    this.propFunc = propFunc;
    this.begin = begin;
    this._pos = begin;
    this.duration = duration;
    this._change = 0;
    this.prevPos = 0;
    this.yoyo = yoyo;
    this._time = 0;
    this._position = 0;
    this._startTime = 0;
    this._finish = 0;
    this.func = func;
    this._change = finish - this.begin;
    this.pause();
  };
  /*
     * Tween methods
     */
  Tween.prototype = {
    fire: function(str) {
      var handler = this[str];
      if (handler) {
        handler();
      }
    },
    setTime: function(t) {
      if (t > this.duration) {
        if (this.yoyo) {
          this._time = this.duration;
          this.reverse();
        } else {
          this.finish();
        }
      } else if (t < 0) {
        if (this.yoyo) {
          this._time = 0;
          this.play();
        } else {
          this.reset();
        }
      } else {
        this._time = t;
        this.update();
      }
    },
    getTime: function() {
      return this._time;
    },
    setPosition: function(p) {
      this.prevPos = this._pos;
      this.propFunc(p);
      this._pos = p;
    },
    getPosition: function(t) {
      if (t === undefined) {
        t = this._time;
      }
      return this.func(t, this.begin, this._change, this.duration);
    },
    play: function() {
      this.state = PLAYING;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire('onPlay');
    },
    reverse: function() {
      this.state = REVERSING;
      this._time = this.duration - this._time;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire('onReverse');
    },
    seek: function(t) {
      this.pause();
      this._time = t;
      this.update();
      this.fire('onSeek');
    },
    reset: function() {
      this.pause();
      this._time = 0;
      this.update();
      this.fire('onReset');
    },
    finish: function() {
      this.pause();
      this._time = this.duration;
      this.update();
      this.fire('onFinish');
    },
    update: function() {
      this.setPosition(this.getPosition(this._time));
    },
    onEnterFrame: function() {
      var t = this.getTimer() - this._startTime;
      if (this.state === PLAYING) {
        this.setTime(t);
      } else if (this.state === REVERSING) {
        this.setTime(this.duration - t);
      }
    },
    pause: function() {
      this.state = PAUSED;
      this.fire('onPause');
    },
    getTimer: function() {
      return new Date().getTime();
    }
  };

  /**
   * Tween constructor.  Tweens enable you to animate a node between the current state and a new state.
   *  You can play, pause, reverse, seek, reset, and finish tweens.  By default, tweens are animated using
   *  a linear easing.  For more tweening options, check out {@link Konva.Easings}
   * @constructor
   * @memberof Konva
   * @example
   * // instantiate new tween which fully rotates a node in 1 second
   * var tween = new Konva.Tween({
   *   node: node,
   *   rotationDeg: 360,
   *   duration: 1,
   *   easing: Konva.Easings.EaseInOut
   * });
   *
   * // play tween
   * tween.play();
   *
   * // pause tween
   * tween.pause();
   */
  Konva.Tween = function(config) {
    var that = this,
      node = config.node,
      nodeId = node._id,
      duration,
      easing = config.easing || Konva.Easings.Linear,
      yoyo = !!config.yoyo,
      key;

    if (typeof config.duration === 'undefined') {
      duration = 0.3;
    } else if (config.duration === 0) {
      // zero is bad value for duration
      duration = 0.001;
    } else {
      duration = config.duration;
    }
    this.node = node;
    this._id = idCounter++;

    var layers =
      node.getLayer() ||
      (node instanceof Konva.Stage ? node.getLayers() : null);
    if (!layers) {
      Konva.Util.error(
        'Tween constructor have `node` that is not in a layer. Please add node into layer first.'
      );
    }
    this.anim = new Konva.Animation(function() {
      that.tween.onEnterFrame();
    }, layers);

    this.tween = new Tween(
      key,
      function(i) {
        that._tweenFunc(i);
      },
      easing,
      0,
      1,
      duration * 1000,
      yoyo
    );

    this._addListeners();

    // init attrs map
    if (!Konva.Tween.attrs[nodeId]) {
      Konva.Tween.attrs[nodeId] = {};
    }
    if (!Konva.Tween.attrs[nodeId][this._id]) {
      Konva.Tween.attrs[nodeId][this._id] = {};
    }
    // init tweens map
    if (!Konva.Tween.tweens[nodeId]) {
      Konva.Tween.tweens[nodeId] = {};
    }

    for (key in config) {
      if (blacklist[key] === undefined) {
        this._addAttr(key, config[key]);
      }
    }

    this.reset();

    // callbacks
    this.onFinish = config.onFinish;
    this.onReset = config.onReset;
  };

  // start/diff object = attrs.nodeId.tweenId.attr
  Konva.Tween.attrs = {};
  // tweenId = tweens.nodeId.attr
  Konva.Tween.tweens = {};

  Konva.Tween.prototype = {
    _addAttr: function(key, end) {
      var node = this.node,
        nodeId = node._id,
        start,
        diff,
        tweenId,
        n,
        len,
        trueEnd,
        trueStart;

      // remove conflict from tween map if it exists
      tweenId = Konva.Tween.tweens[nodeId][key];

      if (tweenId) {
        delete Konva.Tween.attrs[nodeId][tweenId][key];
      }

      // add to tween map
      start = node.getAttr(key);

      if (Konva.Util._isArray(end)) {
        diff = [];
        len = Math.max(end.length, start.length);

        if (key === 'points' && end.length !== start.length) {
          // before tweening points we need to make sure that start.length === end.length
          // Konva.Util._prepareArrayForTween thinking that end.length > start.length

          if (end.length > start.length) {
            // so in this case we will increase number of starting points
            trueStart = start;
            start = Konva.Util._prepareArrayForTween(start, end, node.closed());
          } else {
            // in this case we will increase number of eding points
            trueEnd = end;
            end = Konva.Util._prepareArrayForTween(end, start, node.closed());
          }
        }

        for (n = 0; n < len; n++) {
          diff.push(end[n] - start[n]);
        }
      } else if (colorAttrs.indexOf(key) !== -1) {
        start = Konva.Util.colorToRGBA(start);
        var endRGBA = Konva.Util.colorToRGBA(end);
        diff = {
          r: endRGBA.r - start.r,
          g: endRGBA.g - start.g,
          b: endRGBA.b - start.b,
          a: endRGBA.a - start.a
        };
      } else {
        diff = end - start;
      }

      Konva.Tween.attrs[nodeId][this._id][key] = {
        start: start,
        diff: diff,
        end: end,
        trueEnd: trueEnd,
        trueStart: trueStart
      };
      Konva.Tween.tweens[nodeId][key] = this._id;
    },
    _tweenFunc: function(i) {
      var node = this.node,
        attrs = Konva.Tween.attrs[node._id][this._id],
        key,
        attr,
        start,
        diff,
        newVal,
        n,
        len,
        end;

      for (key in attrs) {
        attr = attrs[key];
        start = attr.start;
        diff = attr.diff;
        end = attr.end;

        if (Konva.Util._isArray(start)) {
          newVal = [];
          len = Math.max(start.length, end.length);
          for (n = 0; n < len; n++) {
            newVal.push((start[n] || 0) + diff[n] * i);
          }
        } else if (colorAttrs.indexOf(key) !== -1) {
          newVal =
            'rgba(' +
            Math.round(start.r + diff.r * i) +
            ',' +
            Math.round(start.g + diff.g * i) +
            ',' +
            Math.round(start.b + diff.b * i) +
            ',' +
            (start.a + diff.a * i) +
            ')';
        } else {
          newVal = start + diff * i;
        }

        node.setAttr(key, newVal);
      }
    },
    _addListeners: function() {
      var that = this;

      // start listeners
      this.tween.onPlay = function() {
        that.anim.start();
      };
      this.tween.onReverse = function() {
        that.anim.start();
      };

      // stop listeners
      this.tween.onPause = function() {
        that.anim.stop();
      };
      this.tween.onFinish = function() {
        var node = that.node;

        // after tweening  points of line we need to set original end
        var attrs = Konva.Tween.attrs[node._id][that._id];
        if (attrs.points && attrs.points.trueEnd) {
          node.points(attrs.points.trueEnd);
        }

        if (that.onFinish) {
          that.onFinish.call(that);
        }
      };
      this.tween.onReset = function() {
        var node = that.node;
        // after tweening  points of line we need to set original start
        var attrs = Konva.Tween.attrs[node._id][that._id];
        if (attrs.points && attrs.points.trueStart) {
          node.points(attrs.points.trueStart);
        }

        if (that.onReset) {
          that.onReset();
        }
      };
    },
    /**
     * play
     * @method
     * @memberof Konva.Tween.prototype
     * @returns {Tween}
     */
    play: function() {
      this.tween.play();
      return this;
    },
    /**
     * reverse
     * @method
     * @memberof Konva.Tween.prototype
     * @returns {Tween}
     */
    reverse: function() {
      this.tween.reverse();
      return this;
    },
    /**
     * reset
     * @method
     * @memberof Konva.Tween.prototype
     * @returns {Tween}
     */
    reset: function() {
      this.tween.reset();
      return this;
    },
    /**
     * seek
     * @method
     * @memberof Konva.Tween.prototype
     * @param {Integer} t time in seconds between 0 and the duration
     * @returns {Tween}
     */
    seek: function(t) {
      this.tween.seek(t * 1000);
      return this;
    },
    /**
     * pause
     * @method
     * @memberof Konva.Tween.prototype
     * @returns {Tween}
     */
    pause: function() {
      this.tween.pause();
      return this;
    },
    /**
     * finish
     * @method
     * @memberof Konva.Tween.prototype
     * @returns {Tween}
     */
    finish: function() {
      this.tween.finish();
      return this;
    },
    /**
     * destroy
     * @method
     * @memberof Konva.Tween.prototype
     */
    destroy: function() {
      var nodeId = this.node._id,
        thisId = this._id,
        attrs = Konva.Tween.tweens[nodeId],
        key;

      this.pause();

      for (key in attrs) {
        delete Konva.Tween.tweens[nodeId][key];
      }

      delete Konva.Tween.attrs[nodeId][thisId];
    }
  };

  /**
   * Tween node properties. Shorter usage of {@link Konva.Tween} object.
   *
   * @method Konva.Node#to
   * @memberof Konva.Node
   * @param {Object} [params] tween params
   * @example
   *
   * circle.to({
   *  x : 50,
   *  duration : 0.5
   * });
   */
  Konva.Node.prototype.to = function(params) {
    var onFinish = params.onFinish;
    params.node = this;
    params.onFinish = function() {
      this.destroy();
      if (onFinish) {
        onFinish();
      }
    };
    var tween = new Konva.Tween(params);
    tween.play();
  };

  /*
    * These eases were ported from an Adobe Flash tweening library to JavaScript
    * by Xaric
    */

  /**
   * @namespace Easings
   * @memberof Konva
   */
  Konva.Easings = {
    /**
     * back ease in
     * @function
     * @memberof Konva.Easings
     */
    BackEaseIn: function(t, b, c, d) {
      var s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    /**
     * back ease out
     * @function
     * @memberof Konva.Easings
     */
    BackEaseOut: function(t, b, c, d) {
      var s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    /**
     * back ease in out
     * @function
     * @memberof Konva.Easings
     */
    BackEaseInOut: function(t, b, c, d) {
      var s = 1.70158;
      if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      }
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    /**
     * elastic ease in
     * @function
     * @memberof Konva.Easings
     */
    ElasticEaseIn: function(t, b, c, d, a, p) {
      // added s = 0
      var s = 0;
      if (t === 0) {
        return b;
      }
      if ((t /= d) === 1) {
        return b + c;
      }
      if (!p) {
        p = d * 0.3;
      }
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return (
        -(
          a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin((t * d - s) * (2 * Math.PI) / p)
        ) + b
      );
    },
    /**
     * elastic ease out
     * @function
     * @memberof Konva.Easings
     */
    ElasticEaseOut: function(t, b, c, d, a, p) {
      // added s = 0
      var s = 0;
      if (t === 0) {
        return b;
      }
      if ((t /= d) === 1) {
        return b + c;
      }
      if (!p) {
        p = d * 0.3;
      }
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return (
        a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) +
        c +
        b
      );
    },
    /**
     * elastic ease in out
     * @function
     * @memberof Konva.Easings
     */
    ElasticEaseInOut: function(t, b, c, d, a, p) {
      // added s = 0
      var s = 0;
      if (t === 0) {
        return b;
      }
      if ((t /= d / 2) === 2) {
        return b + c;
      }
      if (!p) {
        p = d * (0.3 * 1.5);
      }
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      if (t < 1) {
        return (
          -0.5 *
            (a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin((t * d - s) * (2 * Math.PI) / p)) +
          b
        );
      }
      return (
        a *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin((t * d - s) * (2 * Math.PI) / p) *
          0.5 +
        c +
        b
      );
    },
    /**
     * bounce ease out
     * @function
     * @memberof Konva.Easings
     */
    BounceEaseOut: function(t, b, c, d) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }
    },
    /**
     * bounce ease in
     * @function
     * @memberof Konva.Easings
     */
    BounceEaseIn: function(t, b, c, d) {
      return c - Konva.Easings.BounceEaseOut(d - t, 0, c, d) + b;
    },
    /**
     * bounce ease in out
     * @function
     * @memberof Konva.Easings
     */
    BounceEaseInOut: function(t, b, c, d) {
      if (t < d / 2) {
        return Konva.Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
      } else {
        return (
          Konva.Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
        );
      }
    },
    /**
     * ease in
     * @function
     * @memberof Konva.Easings
     */
    EaseIn: function(t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    /**
     * ease out
     * @function
     * @memberof Konva.Easings
     */
    EaseOut: function(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    /**
     * ease in out
     * @function
     * @memberof Konva.Easings
     */
    EaseInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
      }
      return -c / 2 * (--t * (t - 2) - 1) + b;
    },
    /**
     * strong ease in
     * @function
     * @memberof Konva.Easings
     */
    StrongEaseIn: function(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    /**
     * strong ease out
     * @function
     * @memberof Konva.Easings
     */
    StrongEaseOut: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    /**
     * strong ease in out
     * @function
     * @memberof Konva.Easings
     */
    StrongEaseInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
      }
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    /**
     * linear
     * @function
     * @memberof Konva.Easings
     */
    Linear: function(t, b, c, d) {
      return c * t / d + b;
    }
  };
})();

(function() {
  'use strict';
  Konva.DD = {
    // properties
    anim: new Konva.Animation(function() {
      var b = this.dirty;
      this.dirty = false;
      return b;
    }),
    isDragging: false,
    justDragged: false,
    offset: {
      x: 0,
      y: 0
    },
    node: null,

    // methods
    _drag: function(evt) {
      var dd = Konva.DD,
        node = dd.node;
      if (node) {
        if (!dd.isDragging) {
          var pos = node.getStage().getPointerPosition();
          // it is possible that pos is undefined
          // reattach it
          if (!pos) {
            node.getStage()._setPointerPosition(evt);
            pos = node.getStage().getPointerPosition();
          }
          var dragDistance = node.dragDistance();
          var distance = Math.max(
            Math.abs(pos.x - dd.startPointerPos.x),
            Math.abs(pos.y - dd.startPointerPos.y)
          );
          if (distance < dragDistance) {
            return;
          }
        }

        node.getStage()._setPointerPosition(evt);
        node._setDragPosition(evt);
        if (!dd.isDragging) {
          dd.isDragging = true;
          node.fire(
            'dragstart',
            {
              type: 'dragstart',
              target: node,
              evt: evt
            },
            true
          );
        }

        // execute ondragmove if defined
        node.fire(
          'dragmove',
          {
            type: 'dragmove',
            target: node,
            evt: evt
          },
          true
        );
      }
    },
    _endDragBefore: function(evt) {
      var dd = Konva.DD,
        node = dd.node,
        layer;

      if (node) {
        layer = node.getLayer();
        dd.anim.stop();

        // only fire dragend event if the drag and drop
        // operation actually started.
        if (dd.isDragging) {
          dd.isDragging = false;
          dd.justDragged = true;
          Konva.listenClickTap = false;

          if (evt) {
            evt.dragEndNode = node;
          }
        }

        delete dd.node;

        if (node.getLayer() || layer || node instanceof Konva.Stage) {
          (layer || node).draw();
        }
      }
    },
    _endDragAfter: function(evt) {
      evt = evt || {};
      var dragEndNode = evt.dragEndNode;

      if (evt && dragEndNode) {
        dragEndNode.fire(
          'dragend',
          {
            type: 'dragend',
            target: dragEndNode,
            evt: evt
          },
          true
        );
      }
    }
  };

  // Node extenders

  /**
   * initiate drag and drop
   * @method
   * @memberof Konva.Node.prototype
   */
  Konva.Node.prototype.startDrag = function() {
    var dd = Konva.DD,
      stage = this.getStage(),
      layer = this.getLayer(),
      pos = stage.getPointerPosition(),
      ap = this.getAbsolutePosition();

    if (pos) {
      if (dd.node) {
        dd.node.stopDrag();
      }

      dd.node = this;
      dd.startPointerPos = pos;
      dd.offset.x = pos.x - ap.x;
      dd.offset.y = pos.y - ap.y;
      dd.anim.setLayers(layer || this.getLayers());
      dd.anim.start();

      this._setDragPosition();
    }
  };

  Konva.Node.prototype._setDragPosition = function(evt) {
    var dd = Konva.DD,
      pos = this.getStage().getPointerPosition(),
      dbf = this.getDragBoundFunc();
    if (!pos) {
      return;
    }
    var newNodePos = {
      x: pos.x - dd.offset.x,
      y: pos.y - dd.offset.y
    };

    if (dbf !== undefined) {
      newNodePos = dbf.call(this, newNodePos, evt);
    }
    this.setAbsolutePosition(newNodePos);

    if (
      !this._lastPos ||
      this._lastPos.x !== newNodePos.x ||
      this._lastPos.y !== newNodePos.y
    ) {
      dd.anim.dirty = true;
    }

    this._lastPos = newNodePos;
  };

  /**
   * stop drag and drop
   * @method
   * @memberof Konva.Node.prototype
   */
  Konva.Node.prototype.stopDrag = function() {
    var dd = Konva.DD,
      evt = {};
    dd._endDragBefore(evt);
    dd._endDragAfter(evt);
  };

  Konva.Node.prototype.setDraggable = function(draggable) {
    this._setAttr('draggable', draggable);
    this._dragChange();
  };

  var origRemove = Konva.Node.prototype.remove;

  Konva.Node.prototype.__originalRemove = origRemove;
  Konva.Node.prototype.remove = function() {
    var dd = Konva.DD;

    // stop DD
    if (dd.node && dd.node._id === this._id) {
      this.stopDrag();
    }

    origRemove.call(this);
  };

  /**
   * determine if node is currently in drag and drop mode
   * @method
   * @memberof Konva.Node.prototype
   */
  Konva.Node.prototype.isDragging = function() {
    var dd = Konva.DD;
    return !!(dd.node && dd.node._id === this._id && dd.isDragging);
  };

  Konva.Node.prototype._listenDrag = function() {
    var that = this;

    this._dragCleanup();

    if (this.getClassName() === 'Stage') {
      this.on('contentMousedown.konva contentTouchstart.konva', function(evt) {
        if (!Konva.DD.node) {
          that.startDrag(evt);
        }
      });
    } else {
      this.on('mousedown.konva touchstart.konva', function(evt) {
        // ignore right and middle buttons
        if (evt.evt.button === 1 || evt.evt.button === 2) {
          return;
        }
        if (!Konva.DD.node) {
          that.startDrag(evt);
        }
      });
    }

    // listening is required for drag and drop
    /*
        this._listeningEnabled = true;
        this._clearSelfAndAncestorCache('listeningEnabled');
        */
  };

  Konva.Node.prototype._dragChange = function() {
    if (this.attrs.draggable) {
      this._listenDrag();
    } else {
      // remove event listeners
      this._dragCleanup();

      /*
             * force drag and drop to end
             * if this node is currently in
             * drag and drop mode
             */
      var stage = this.getStage();
      var dd = Konva.DD;
      if (stage && dd.node && dd.node._id === this._id) {
        dd.node.stopDrag();
      }
    }
  };

  Konva.Node.prototype._dragCleanup = function() {
    if (this.getClassName() === 'Stage') {
      this.off('contentMousedown.konva');
      this.off('contentTouchstart.konva');
    } else {
      this.off('mousedown.konva');
      this.off('touchstart.konva');
    }
  };

  Konva.Factory.addGetterSetter(Konva.Node, 'dragBoundFunc');

  /**
   * get/set drag bound function.  This is used to override the default
   *  drag and drop position.
   * @name dragBoundFunc
   * @method
   * @memberof Konva.Node.prototype
   * @param {Function} dragBoundFunc
   * @returns {Function}
   * @example
   * // get drag bound function
   * var dragBoundFunc = node.dragBoundFunc();
   *
   * // create vertical drag and drop
   * node.dragBoundFunc(function(pos){
   *   // important pos - is absolute position of the node
   *   // you should return absolute position too
   *   return {
   *     x: this.getAbsolutePosition().x,
   *     y: pos.y
   *   };
   * });
   */

  Konva.Factory.addGetter(Konva.Node, 'draggable', false);
  Konva.Factory.addOverloadedGetterSetter(Konva.Node, 'draggable');

  /**
   * get/set draggable flag
   * @name draggable
   * @method
   * @memberof Konva.Node.prototype
   * @param {Boolean} draggable
   * @returns {Boolean}
   * @example
   * // get draggable flag
   * var draggable = node.draggable();
   *
   * // enable drag and drop
   * node.draggable(true);
   *
   * // disable drag and drop
   * node.draggable(false);
   */

  if (Konva.isBrowser) {
    window.addEventListener('mouseup', Konva.DD._endDragBefore, true);
    window.addEventListener('touchend', Konva.DD._endDragBefore, true);

    window.addEventListener('mousemove', Konva.DD._drag);
    window.addEventListener('touchmove', Konva.DD._drag);

    window.addEventListener('mouseup', Konva.DD._endDragAfter, false);
    window.addEventListener('touchend', Konva.DD._endDragAfter, false);
  }
})();

(function() {
  'use strict';
  /**
   * Rect constructor
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Number} [config.cornerRadius]
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var rect = new Konva.Rect({
   *   width: 100,
   *   height: 50,
   *   fill: 'red',
   *   stroke: 'black',
   *   strokeWidth: 5
   * });
   */
  Konva.Rect = function(config) {
    this.___init(config);
  };

  Konva.Rect.prototype = {
    ___init: function(config) {
      Konva.Shape.call(this, config);
      this.className = 'Rect';
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var cornerRadius = this.getCornerRadius(),
        width = this.getWidth(),
        height = this.getHeight();

      context.beginPath();

      if (!cornerRadius) {
        // simple rect - don't bother doing all that complicated maths stuff.
        context.rect(0, 0, width, height);
      } else {
        // arcTo would be nicer, but browser support is patchy (Opera)
        cornerRadius = Math.min(cornerRadius, width / 2, height / 2);
        context.moveTo(cornerRadius, 0);
        context.lineTo(width - cornerRadius, 0);
        context.arc(
          width - cornerRadius,
          cornerRadius,
          cornerRadius,
          Math.PI * 3 / 2,
          0,
          false
        );
        context.lineTo(width, height - cornerRadius);
        context.arc(
          width - cornerRadius,
          height - cornerRadius,
          cornerRadius,
          0,
          Math.PI / 2,
          false
        );
        context.lineTo(cornerRadius, height);
        context.arc(
          cornerRadius,
          height - cornerRadius,
          cornerRadius,
          Math.PI / 2,
          Math.PI,
          false
        );
        context.lineTo(0, cornerRadius);
        context.arc(
          cornerRadius,
          cornerRadius,
          cornerRadius,
          Math.PI,
          Math.PI * 3 / 2,
          false
        );
      }
      context.closePath();
      context.fillStrokeShape(this);
    }
  };

  Konva.Util.extend(Konva.Rect, Konva.Shape);

  Konva.Factory.addGetterSetter(
    Konva.Rect,
    'cornerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set corner radius
   * @name cornerRadius
   * @method
   * @memberof Konva.Rect.prototype
   * @param {Number} cornerRadius
   * @returns {Number}
   * @example
   * // get corner radius
   * var cornerRadius = rect.cornerRadius();
   *
   * // set corner radius
   * rect.cornerRadius(10);
   */

  Konva.Collection.mapMethods(Konva.Rect);
})();

(function(Konva) {
  'use strict';
  // the 0.0001 offset fixes a bug in Chrome 27
  var PIx2 = Math.PI * 2 - 0.0001,
    CIRCLE = 'Circle';

  /**
   * Circle constructor
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Number} config.radius
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * // create circle
   * var circle = new Konva.Circle({
   *   radius: 40,
   *   fill: 'red',
   *   stroke: 'black'
   *   strokeWidth: 5
   * });
   */
  Konva.Circle = function(config) {
    this.___init(config);
  };

  Konva.Circle.prototype = {
    _centroid: true,
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = CIRCLE;
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      context.beginPath();
      context.arc(0, 0, this.getRadius(), 0, PIx2, false);
      context.closePath();
      context.fillStrokeShape(this);
    },
    // implements Shape.prototype.getWidth()
    getWidth: function() {
      return this.getRadius() * 2;
    },
    // implements Shape.prototype.getHeight()
    getHeight: function() {
      return this.getRadius() * 2;
    },
    // implements Shape.prototype.setWidth()
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      if (this.radius() !== width / 2) {
        this.setRadius(width / 2);
      }
    },
    // implements Shape.prototype.setHeight()
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      if (this.radius() !== height / 2) {
        this.setRadius(height / 2);
      }
    }
  };
  Konva.Util.extend(Konva.Circle, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(
    Konva.Circle,
    'radius',
    0,
    Konva.Validators.getNumberValidator()
  );
  Konva.Factory.addOverloadedGetterSetter(Konva.Circle, 'radius');

  /**
   * get/set radius
   * @name radius
   * @method
   * @memberof Konva.Circle.prototype
   * @param {Number} radius
   * @returns {Number}
   * @example
   * // get radius
   * var radius = circle.radius();
   *
   * // set radius
   * circle.radius(10);
   */

  Konva.Collection.mapMethods(Konva.Circle);
})(Konva);

(function() {
  'use strict';
  // the 0.0001 offset fixes a bug in Chrome 27
  var PIx2 = Math.PI * 2 - 0.0001,
    ELLIPSE = 'Ellipse';

  /**
   * Ellipse constructor
   * @constructor
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Object} config.radius defines x and y radius
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var ellipse = new Konva.Ellipse({
   *   radius : {
   *     x : 50,
   *     y : 50
   *   },
   *   fill: 'red'
   * });
   */
  Konva.Ellipse = function(config) {
    this.___init(config);
  };

  Konva.Ellipse.prototype = {
    _centroid: true,
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = ELLIPSE;
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var rx = this.getRadiusX(),
        ry = this.getRadiusY();

      context.beginPath();
      context.save();
      if (rx !== ry) {
        context.scale(1, ry / rx);
      }
      context.arc(0, 0, rx, 0, PIx2, false);
      context.restore();
      context.closePath();
      context.fillStrokeShape(this);
    },
    // implements Shape.prototype.getWidth()
    getWidth: function() {
      return this.getRadiusX() * 2;
    },
    // implements Shape.prototype.getHeight()
    getHeight: function() {
      return this.getRadiusY() * 2;
    },
    // implements Shape.prototype.setWidth()
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      this.setRadius({
        x: width / 2
      });
    },
    // implements Shape.prototype.setHeight()
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      this.setRadius({
        y: height / 2
      });
    }
  };
  Konva.Util.extend(Konva.Ellipse, Konva.Shape);

  // add getters setters
  Konva.Factory.addComponentsGetterSetter(Konva.Ellipse, 'radius', ['x', 'y']);

  /**
   * get/set radius
   * @name radius
   * @method
   * @memberof Konva.Ellipse.prototype
   * @param {Object} radius
   * @param {Number} radius.x
   * @param {Number} radius.y
   * @returns {Object}
   * @example
   * // get radius
   * var radius = ellipse.radius();
   *
   * // set radius
   * ellipse.radius({
   *   x: 200,
   *   y: 100
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Ellipse,
    'radiusX',
    0,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set radius x
   * @name radiusX
   * @method
   * @memberof Konva.Ellipse.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get radius x
   * var radiusX = ellipse.radiusX();
   *
   * // set radius x
   * ellipse.radiusX(200);
   */

  Konva.Factory.addGetterSetter(
    Konva.Ellipse,
    'radiusY',
    0,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set radius y
   * @name radiusY
   * @method
   * @memberof Konva.Ellipse.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get radius y
   * var radiusY = ellipse.radiusY();
   *
   * // set radius y
   * ellipse.radiusY(200);
   */

  Konva.Collection.mapMethods(Konva.Ellipse);
})();

(function() {
  'use strict';
  // the 0.0001 offset fixes a bug in Chrome 27
  var PIx2 = Math.PI * 2 - 0.0001;
  /**
   * Ring constructor
   * @constructor
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Number} config.innerRadius
   * @param {Number} config.outerRadius
   * @param {Boolean} [config.clockwise]
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var ring = new Konva.Ring({
   *   innerRadius: 40,
   *   outerRadius: 80,
   *   fill: 'red',
   *   stroke: 'black',
   *   strokeWidth: 5
   * });
   */
  Konva.Ring = function(config) {
    this.___init(config);
  };

  Konva.Ring.prototype = {
    _centroid: true,
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'Ring';
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      context.beginPath();
      context.arc(0, 0, this.getInnerRadius(), 0, PIx2, false);
      context.moveTo(this.getOuterRadius(), 0);
      context.arc(0, 0, this.getOuterRadius(), PIx2, 0, true);
      context.closePath();
      context.fillStrokeShape(this);
    },
    // implements Shape.prototype.getWidth()
    getWidth: function() {
      return this.getOuterRadius() * 2;
    },
    // implements Shape.prototype.getHeight()
    getHeight: function() {
      return this.getOuterRadius() * 2;
    },
    // implements Shape.prototype.setWidth()
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      if (this.outerRadius() !== width / 2) {
        this.setOuterRadius(width / 2);
      }
    },
    // implements Shape.prototype.setHeight()
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      if (this.outerRadius() !== height / 2) {
        this.setOuterRadius(height / 2);
      }
    },
    setOuterRadius: function(val) {
      this._setAttr('outerRadius', val);
      this.setWidth(val * 2);
      this.setHeight(val * 2);
    }
  };
  Konva.Util.extend(Konva.Ring, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(
    Konva.Ring,
    'innerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set innerRadius
   * @name innerRadius
   * @method
   * @memberof Konva.Ring.prototype
   * @param {Number} innerRadius
   * @returns {Number}
   * @example
   * // get inner radius
   * var innerRadius = ring.innerRadius();
   *
   * // set inner radius
   * ring.innerRadius(20);
   */
  Konva.Factory.addGetter(
    Konva.Ring,
    'outerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );
  Konva.Factory.addOverloadedGetterSetter(Konva.Ring, 'outerRadius');

  /**
   * get/set outerRadius
   * @name outerRadius
   * @method
   * @memberof Konva.Ring.prototype
   * @param {Number} outerRadius
   * @returns {Number}
   * @example
   * // get outer radius
   * var outerRadius = ring.outerRadius();
   *
   * // set outer radius
   * ring.outerRadius(20);
   */

  Konva.Collection.mapMethods(Konva.Ring);
})();

(function() {
  'use strict';
  /**
   * Wedge constructor
   * @constructor
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Number} config.angle in degrees
   * @param {Number} config.radius
   * @param {Boolean} [config.clockwise]
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * // draw a wedge that's pointing downwards
   * var wedge = new Konva.Wedge({
   *   radius: 40,
   *   fill: 'red',
   *   stroke: 'black'
   *   strokeWidth: 5,
   *   angleDeg: 60,
   *   rotationDeg: -120
   * });
   */
  Konva.Wedge = function(config) {
    this.___init(config);
  };

  Konva.Wedge.prototype = {
    _centroid: true,
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'Wedge';
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      context.beginPath();
      context.arc(
        0,
        0,
        this.getRadius(),
        0,
        Konva.getAngle(this.getAngle()),
        this.getClockwise()
      );
      context.lineTo(0, 0);
      context.closePath();
      context.fillStrokeShape(this);
    },
    // implements Shape.prototype.getWidth()
    getWidth: function() {
      return this.getRadius() * 2;
    },
    // implements Shape.prototype.getHeight()
    getHeight: function() {
      return this.getRadius() * 2;
    },
    // implements Shape.prototype.setWidth()
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      if (this.radius() !== width / 2) {
        this.setRadius(width / 2);
      }
    },
    // implements Shape.prototype.setHeight()
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      if (this.radius() !== height / 2) {
        this.setRadius(height / 2);
      }
    }
  };
  Konva.Util.extend(Konva.Wedge, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(
    Konva.Wedge,
    'radius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set radius
   * @name radius
   * @method
   * @memberof Konva.Wedge.prototype
   * @param {Number} radius
   * @returns {Number}
   * @example
   * // get radius
   * var radius = wedge.radius();
   *
   * // set radius
   * wedge.radius(10);
   */

  Konva.Factory.addGetterSetter(
    Konva.Wedge,
    'angle',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set angle in degrees
   * @name angle
   * @method
   * @memberof Konva.Wedge.prototype
   * @param {Number} angle
   * @returns {Number}
   * @example
   * // get angle
   * var angle = wedge.angle();
   *
   * // set angle
   * wedge.angle(20);
   */

  Konva.Factory.addGetterSetter(Konva.Wedge, 'clockwise', false);

  /**
   * get/set clockwise flag
   * @name clockwise
   * @method
   * @memberof Konva.Wedge.prototype
   * @param {Number} clockwise
   * @returns {Number}
   * @example
   * // get clockwise flag
   * var clockwise = wedge.clockwise();
   *
   * // draw wedge counter-clockwise
   * wedge.clockwise(false);
   *
   * // draw wedge clockwise
   * wedge.clockwise(true);
   */

  Konva.Factory.backCompat(Konva.Wedge, {
    angleDeg: 'angle',
    getAngleDeg: 'getAngle',
    setAngleDeg: 'setAngle'
  });

  Konva.Collection.mapMethods(Konva.Wedge);
})();

(function(Konva) {
  'use strict';
  /**
   * Arc constructor
   * @constructor
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Number} config.angle in degrees
   * @param {Number} config.innerRadius
   * @param {Number} config.outerRadius
   * @param {Boolean} [config.clockwise]
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * // draw a Arc that's pointing downwards
   * var arc = new Konva.Arc({
   *   innerRadius: 40,
   *   outerRadius: 80,
   *   fill: 'red',
   *   stroke: 'black'
   *   strokeWidth: 5,
   *   angle: 60,
   *   rotationDeg: -120
   * });
   */
  Konva.Arc = function(config) {
    this.___init(config);
  };

  Konva.Arc.prototype = {
    _centroid: true,
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'Arc';
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var angle = Konva.getAngle(this.angle()),
        clockwise = this.clockwise();

      context.beginPath();
      context.arc(0, 0, this.getOuterRadius(), 0, angle, clockwise);
      context.arc(0, 0, this.getInnerRadius(), angle, 0, !clockwise);
      context.closePath();
      context.fillStrokeShape(this);
    },
    // implements Shape.prototype.getWidth()
    getWidth: function() {
      return this.getOuterRadius() * 2;
    },
    // implements Shape.prototype.getHeight()
    getHeight: function() {
      return this.getOuterRadius() * 2;
    },
    // implements Shape.prototype.setWidth()
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      if (this.getOuterRadius() !== width / 2) {
        this.setOuterRadius(width / 2);
      }
    },
    // implements Shape.prototype.setHeight()
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      if (this.getOuterRadius() !== height / 2) {
        this.setOuterRadius(height / 2);
      }
    }
  };
  Konva.Util.extend(Konva.Arc, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(
    Konva.Arc,
    'innerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set innerRadius
   * @name innerRadius
   * @method
   * @memberof Konva.Arc.prototype
   * @param {Number} innerRadius
   * @returns {Number}
   * @example
   * // get inner radius
   * var innerRadius = arc.innerRadius();
   *
   * // set inner radius
   * arc.innerRadius(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Arc,
    'outerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set outerRadius
   * @name outerRadius
   * @method
   * @memberof Konva.Arc.prototype
   * @param {Number} outerRadius
   * @returns {Number}
   * @example
   * // get outer radius
   * var outerRadius = arc.outerRadius();
   *
   * // set outer radius
   * arc.outerRadius(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Arc,
    'angle',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set angle in degrees
   * @name angle
   * @method
   * @memberof Konva.Arc.prototype
   * @param {Number} angle
   * @returns {Number}
   * @example
   * // get angle
   * var angle = arc.angle();
   *
   * // set angle
   * arc.angle(20);
   */

  Konva.Factory.addGetterSetter(Konva.Arc, 'clockwise', false);

  /**
   * get/set clockwise flag
   * @name clockwise
   * @method
   * @memberof Konva.Arc.prototype
   * @param {Boolean} clockwise
   * @returns {Boolean}
   * @example
   * // get clockwise flag
   * var clockwise = arc.clockwise();
   *
   * // draw arc counter-clockwise
   * arc.clockwise(false);
   *
   * // draw arc clockwise
   * arc.clockwise(true);
   */

  Konva.Collection.mapMethods(Konva.Arc);
})(Konva);

(function() {
  'use strict';
  // CONSTANTS
  var IMAGE = 'Image';

  /**
   * Image constructor
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Image} config.image
   * @param {Object} [config.crop]
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var imageObj = new Image();
   * imageObj.onload = function() {
   *   var image = new Konva.Image({
   *     x: 200,
   *     y: 50,
   *     image: imageObj,
   *     width: 100,
   *     height: 100
   *   });
   * };
   * imageObj.src = '/path/to/image.jpg'
   */
  Konva.Image = function(config) {
    this.___init(config);
  };

  Konva.Image.prototype = {
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = IMAGE;
      this.sceneFunc(this._sceneFunc);
      this.hitFunc(this._hitFunc);
    },
    _useBufferCanvas: function() {
      return (
        (this.hasShadow() || this.getAbsoluteOpacity() !== 1) &&
        this.hasStroke() &&
        this.getStage()
      );
    },
    _sceneFunc: function(context) {
      var width = this.getWidth(),
        height = this.getHeight(),
        image = this.getImage(),
        cropWidth,
        cropHeight,
        params;

      if (image) {
        cropWidth = this.getCropWidth();
        cropHeight = this.getCropHeight();
        if (cropWidth && cropHeight) {
          params = [
            image,
            this.getCropX(),
            this.getCropY(),
            cropWidth,
            cropHeight,
            0,
            0,
            width,
            height
          ];
        } else {
          params = [image, 0, 0, width, height];
        }
      }

      if (this.hasFill() || this.hasStroke()) {
        context.beginPath();
        context.rect(0, 0, width, height);
        context.closePath();
        context.fillStrokeShape(this);
      }

      if (image) {
        context.drawImage.apply(context, params);
      }
    },
    _hitFunc: function(context) {
      var width = this.getWidth(),
        height = this.getHeight();

      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    },
    getWidth: function() {
      var image = this.getImage();
      return this.attrs.width || (image ? image.width : 0);
    },
    getHeight: function() {
      var image = this.getImage();
      return this.attrs.height || (image ? image.height : 0);
    }
  };
  Konva.Util.extend(Konva.Image, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(Konva.Image, 'image');

  /**
   * set image
   * @name setImage
   * @method
   * @memberof Konva.Image.prototype
   * @param {Image} image
   */

  /**
   * get image
   * @name getImage
   * @method
   * @memberof Konva.Image.prototype
   * @returns {Image}
   */

  Konva.Factory.addComponentsGetterSetter(Konva.Image, 'crop', [
    'x',
    'y',
    'width',
    'height'
  ]);
  /**
   * get/set crop
   * @method
   * @name crop
   * @memberof Konva.Image.prototype
   * @param {Object} crop
   * @param {Number} crop.x
   * @param {Number} crop.y
   * @param {Number} crop.width
   * @param {Number} crop.height
   * @returns {Object}
   * @example
   * // get crop
   * var crop = image.crop();
   *
   * // set crop
   * image.crop({
   *   x: 20,
   *   y: 20,
   *   width: 20,
   *   height: 20
   * });
   */

  Konva.Factory.addGetterSetter(
    Konva.Image,
    'cropX',
    0,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set crop x
   * @method
   * @name cropX
   * @memberof Konva.Image.prototype
   * @param {Number} x
   * @returns {Number}
   * @example
   * // get crop x
   * var cropX = image.cropX();
   *
   * // set crop x
   * image.cropX(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Image,
    'cropY',
    0,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set crop y
   * @name cropY
   * @method
   * @memberof Konva.Image.prototype
   * @param {Number} y
   * @returns {Number}
   * @example
   * // get crop y
   * var cropY = image.cropY();
   *
   * // set crop y
   * image.cropY(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Image,
    'cropWidth',
    0,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set crop width
   * @name cropWidth
   * @method
   * @memberof Konva.Image.prototype
   * @param {Number} width
   * @returns {Number}
   * @example
   * // get crop width
   * var cropWidth = image.cropWidth();
   *
   * // set crop width
   * image.cropWidth(20);
   */

  Konva.Factory.addGetterSetter(
    Konva.Image,
    'cropHeight',
    0,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set crop height
   * @name cropHeight
   * @method
   * @memberof Konva.Image.prototype
   * @param {Number} height
   * @returns {Number}
   * @example
   * // get crop height
   * var cropHeight = image.cropHeight();
   *
   * // set crop height
   * image.cropHeight(20);
   */

  Konva.Collection.mapMethods(Konva.Image);

  /**
   * load image from given url and create `Konva.Image` instance
   * @method
   * @memberof Konva.Image
   * @param {String} url image source
   * @param {Function} callback with Konva.Image instance as first argument
   * @example
   *  Konva.Image.fromURL(imageURL, function(image){
   *    // image is Konva.Image instance
   *    layer.add(image);
   *    layer.draw();
   *  });
   */
  Konva.Image.fromURL = function(url, callback) {
    var img = new Image();
    img.onload = function() {
      var image = new Konva.Image({
        image: img
      });
      callback(image);
    };
    img.crossOrigin = 'Anonymous';
    img.src = url;
  };
})();

/*eslint-disable max-depth */
(function() {
  'use strict';
  // var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  // constants
  var AUTO = 'auto',
    //CANVAS = 'canvas',
    CENTER = 'center',
    JUSTIFY = 'justify',
    CHANGE_KONVA = 'Change.konva',
    CONTEXT_2D = '2d',
    DASH = '-',
    EMPTY_STRING = '',
    LEFT = 'left',
    TEXT = 'text',
    TEXT_UPPER = 'Text',
    MIDDLE = 'middle',
    NORMAL = 'normal',
    PX_SPACE = 'px ',
    SPACE = ' ',
    RIGHT = 'right',
    WORD = 'word',
    CHAR = 'char',
    NONE = 'none',
    ELLIPSIS = '…',
    ATTR_CHANGE_LIST = [
      'fontFamily',
      'fontSize',
      'fontStyle',
      'fontVariant',
      'padding',
      'align',
      'lineHeight',
      'text',
      'width',
      'height',
      'wrap',
      'ellipsis',
      'letterSpacing'
    ],
    // cached variables
    attrChangeListLen = ATTR_CHANGE_LIST.length;
  var dummyContext;
  function getDummyContext() {
    if (dummyContext) {
      return dummyContext;
    }
    dummyContext = Konva.Util.createCanvasElement().getContext(CONTEXT_2D);
    return dummyContext;
  }

  /**
   * Text constructor
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {String} [config.fontFamily] default is Arial
   * @param {Number} [config.fontSize] in pixels.  Default is 12
   * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
   * @param {String} [config.fontVariant] can be normal or small-caps.  Default is normal
   * @param {String} config.text
   * @param {String} [config.align] can be left, center, or right
   * @param {Number} [config.padding]
   * @param {Number} [config.lineHeight] default is 1
   * @param {String} [config.wrap] can be word, char, or none. Default is word
   * @param {Boolean} [config.ellipsis] can be true or false. Default is false. if Konva.Text config is set to wrap="none" and ellipsis=true, then it will add "..." to the end
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var text = new Konva.Text({
   *   x: 10,
   *   y: 15,
   *   text: 'Simple Text',
   *   fontSize: 30,
   *   fontFamily: 'Calibri',
   *   fill: 'green'
   * });
   */
  Konva.Text = function(config) {
    this.___init(config);
  };
  function _fillFunc(context) {
    context.fillText(this.partialText, 0, 0);
  }
  function _strokeFunc(context) {
    context.strokeText(this.partialText, 0, 0);
  }

  Konva.Text.prototype = {
    ___init: function(config) {
      config = config || {};

      // set default color to black
      if (
        !config.fillLinearGradientColorStops &&
        !config.fillRadialGradientColorStops
      ) {
        config.fill = config.fill || 'black';
      }
      //
      // if (config.width === undefined) {
      //     config.width = AUTO;
      // }
      // if (config.height === undefined) {
      //     config.height = AUTO;
      // }

      // call super constructor
      Konva.Shape.call(this, config);

      this._fillFunc = _fillFunc;
      this._strokeFunc = _strokeFunc;
      this.className = TEXT_UPPER;

      // update text data for certain attr changes
      for (var n = 0; n < attrChangeListLen; n++) {
        this.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, this._setTextData);
      }

      this._setTextData();
      this.sceneFunc(this._sceneFunc);
      this.hitFunc(this._hitFunc);
    },
    _sceneFunc: function(context) {
      var padding = this.getPadding(),
        textHeight = this.getTextHeight(),
        lineHeightPx = this.getLineHeight() * textHeight,
        textArr = this.textArr,
        textArrLen = textArr.length,
        align = this.getAlign(),
        totalWidth = this.getWidth(),
        letterSpacing = this.getLetterSpacing(),
        textDecoration = this.textDecoration(),
        fill = this.fill(),
        fontSize = this.fontSize(),
        n;

      context.setAttr('font', this._getContextFont());

      context.setAttr('textBaseline', MIDDLE);
      context.setAttr('textAlign', LEFT);
      if (padding) {
        context.translate(padding, 0);
        context.translate(0, padding + lineHeightPx / 2);
      } else {
        context.translate(0, lineHeightPx / 2);
      }

      // draw text lines
      for (n = 0; n < textArrLen; n++) {
        var obj = textArr[n],
          text = obj.text,
          width = obj.width,
          lastLine = n !== textArrLen - 1,
          spacesNumber,
          oneWord,
          lineWidth;

        // horizontal alignment
        context.save();
        if (align === RIGHT) {
          context.translate(totalWidth - width - padding * 2, 0);
        } else if (align === CENTER) {
          context.translate((totalWidth - width - padding * 2) / 2, 0);
        }

        if (textDecoration.indexOf('underline') !== -1) {
          context.save();
          context.beginPath();

          context.moveTo(0, Math.round(lineHeightPx / 2));
          spacesNumber = text.split(' ').length - 1;
          oneWord = spacesNumber === 0;
          lineWidth =
            align === JUSTIFY && lastLine && !oneWord
              ? totalWidth - padding * 2
              : width;
          context.lineTo(Math.round(lineWidth), Math.round(lineHeightPx / 2));
          // TODO: I have no idea what is real ratio
          // just /15 looks good enough
          context.lineWidth = fontSize / 15;
          context.strokeStyle = fill;
          context.stroke();
          context.restore();
        }
        if (textDecoration.indexOf('line-through') !== -1) {
          context.save();
          context.beginPath();
          context.moveTo(0, 0);
          spacesNumber = text.split(' ').length - 1;
          oneWord = spacesNumber === 0;
          lineWidth =
            align === JUSTIFY && lastLine && !oneWord
              ? totalWidth - padding * 2
              : width;
          context.lineTo(Math.round(lineWidth), 0);
          context.lineWidth = fontSize / 15;
          context.strokeStyle = fill;
          context.stroke();
          context.restore();
        }
        if (letterSpacing !== 0 || align === JUSTIFY) {
          //   var words = text.split(' ');
          spacesNumber = text.split(' ').length - 1;
          for (var li = 0; li < text.length; li++) {
            var letter = text[li];
            // skip justify for the last line
            if (letter === ' ' && n !== textArrLen - 1 && align === JUSTIFY) {
              context.translate(
                Math.floor((totalWidth - padding * 2 - width) / spacesNumber),
                0
              );
            }
            this.partialText = letter;
            context.fillStrokeShape(this);
            context.translate(
              Math.round(this._getTextSize(letter).width) + letterSpacing,
              0
            );
          }
        } else {
          this.partialText = text;

          context.fillStrokeShape(this);
        }
        context.restore();
        if (textArrLen > 1) {
          context.translate(0, lineHeightPx);
        }
      }
    },
    _hitFunc: function(context) {
      var width = this.getWidth(),
        height = this.getHeight();

      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    },
    setText: function(text) {
      var str = Konva.Util._isString(text) ? text : (text || '').toString();
      this._setAttr(TEXT, str);
      return this;
    },
    /**
     * get width of text area, which includes padding
     * @method
     * @memberof Konva.Text.prototype
     * @returns {Number}
     */
    getWidth: function() {
      var isAuto = this.attrs.width === AUTO || this.attrs.width === undefined;
      return isAuto
        ? this.getTextWidth() + this.getPadding() * 2
        : this.attrs.width;
    },
    /**
     * get the height of the text area, which takes into account multi-line text, line heights, and padding
     * @method
     * @memberof Konva.Text.prototype
     * @returns {Number}
     */
    getHeight: function() {
      var isAuto =
        this.attrs.height === AUTO || this.attrs.height === undefined;
      return isAuto
        ? this.getTextHeight() * this.textArr.length * this.getLineHeight() +
            this.getPadding() * 2
        : this.attrs.height;
    },
    /**
     * get text width
     * @method
     * @memberof Konva.Text.prototype
     * @returns {Number}
     */
    getTextWidth: function() {
      return this.textWidth;
    },
    /**
     * get text height
     * @method
     * @memberof Konva.Text.prototype
     * @returns {Number}
     */
    getTextHeight: function() {
      return this.textHeight;
    },
    _getTextSize: function(text) {
      var _context = getDummyContext(),
        fontSize = this.getFontSize(),
        metrics;

      _context.save();
      _context.font = this._getContextFont();

      metrics = _context.measureText(text);
      _context.restore();
      return {
        width: metrics.width,
        height: parseInt(fontSize, 10)
      };
    },
    _getContextFont: function() {
      // IE don't want to work with usual font style
      // bold was not working
      // removing font variant will solve
      // fix for: https://github.com/konvajs/konva/issues/94
      if (Konva.UA.isIE) {
        return (
          this.getFontStyle() +
          SPACE +
          this.getFontSize() +
          PX_SPACE +
          this.getFontFamily()
        );
      }
      return (
        this.getFontStyle() +
        SPACE +
        this.getFontVariant() +
        SPACE +
        this.getFontSize() +
        PX_SPACE +
        this.getFontFamily()
      );
    },
    _addTextLine: function(line) {
      if (this.align() === JUSTIFY) {
        line = line.trim();
      }
      var width = this._getTextWidth(line);
      return this.textArr.push({ text: line, width: width });
    },
    _getTextWidth: function(text) {
      var latterSpacing = this.getLetterSpacing();
      var length = text.length;
      return (
        getDummyContext().measureText(text).width +
        (length ? latterSpacing * (length - 1) : 0)
      );
    },
    _setTextData: function() {
      var lines = this.getText().split('\n'),
        fontSize = +this.getFontSize(),
        textWidth = 0,
        lineHeightPx = this.getLineHeight() * fontSize,
        width = this.attrs.width,
        height = this.attrs.height,
        fixedWidth = width !== AUTO,
        fixedHeight = height !== AUTO,
        padding = this.getPadding(),
        maxWidth = width - padding * 2,
        maxHeightPx = height - padding * 2,
        currentHeightPx = 0,
        wrap = this.getWrap(),
        shouldWrap = wrap !== NONE,
        wrapAtWord = wrap !== CHAR && shouldWrap,
        shouldAddEllipsis = this.getEllipsis() && !shouldWrap;

      this.textArr = [];
      getDummyContext().font = this._getContextFont();
      for (var i = 0, max = lines.length; i < max; ++i) {
        var line = lines[i];
        var additionalWidth = shouldAddEllipsis
          ? this._getTextWidth(ELLIPSIS)
          : 0;

        var lineWidth = this._getTextWidth(line);
        if (fixedWidth && lineWidth > maxWidth) {
          /*
          * if width is fixed and line does not fit entirely
          * break the line into multiple fitting lines
          */
          while (line.length > 0) {
            /*
            * use binary search to find the longest substring that
            * that would fit in the specified width
            */
            var low = 0,
              high = line.length,
              match = '',
              matchWidth = 0;
            while (low < high) {
              var mid = (low + high) >>> 1,
                substr = line.slice(0, mid + 1),
                substrWidth = this._getTextWidth(substr) + additionalWidth;
              if (substrWidth <= maxWidth) {
                low = mid + 1;
                match = substr + (shouldAddEllipsis ? ELLIPSIS : '');
                matchWidth = substrWidth;
              } else {
                high = mid;
              }
            }
            /*
            * 'low' is now the index of the substring end
            * 'match' is the substring
            * 'matchWidth' is the substring width in px
            */
            if (match) {
              // a fitting substring was found
              if (wrapAtWord) {
                // try to find a space or dash where wrapping could be done
                var wrapIndex;
                var nextChar = line[match.length];
                var nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
                if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                  wrapIndex = match.length;
                } else {
                  wrapIndex =
                    Math.max(
                      match.lastIndexOf(SPACE),
                      match.lastIndexOf(DASH)
                    ) + 1;
                }
                if (wrapIndex > 0) {
                  // re-cut the substring found at the space/dash position
                  low = wrapIndex;
                  match = match.slice(0, low);
                  matchWidth = this._getTextWidth(match);
                }
              }
              this._addTextLine(match);
              textWidth = Math.max(textWidth, matchWidth);
              currentHeightPx += lineHeightPx;
              if (
                !shouldWrap ||
                (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx)
              ) {
                /*
                * stop wrapping if wrapping is disabled or if adding
                * one more line would overflow the fixed height
                */
                break;
              }
              line = line.slice(low);
              if (line.length > 0) {
                // Check if the remaining text would fit on one line
                lineWidth = this._getTextWidth(line);
                if (lineWidth <= maxWidth) {
                  // if it does, add the line and break out of the loop
                  this._addTextLine(line);
                  currentHeightPx += lineHeightPx;
                  textWidth = Math.max(textWidth, lineWidth);
                  break;
                }
              }
            } else {
              // not even one character could fit in the element, abort
              break;
            }
          }
        } else {
          // element width is automatically adjusted to max line width
          this._addTextLine(line);
          currentHeightPx += lineHeightPx;
          textWidth = Math.max(textWidth, lineWidth);
        }
        // if element height is fixed, abort if adding one more line would overflow
        if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
          break;
        }
      }
      this.textHeight = fontSize;
      // var maxTextWidth = 0;
      // for(var j = 0; j < this.textArr.length; j++) {
      //     maxTextWidth = Math.max(maxTextWidth, this.textArr[j].width);
      // }
      this.textWidth = textWidth;
    }
  };
  Konva.Util.extend(Konva.Text, Konva.Shape);

  Konva.Factory.addSetter(
    Konva.Node,
    'width',
    Konva.Validators.getNumberOrAutoValidator()
  );

  Konva.Factory.addSetter(
    Konva.Node,
    'height',
    Konva.Validators.getNumberOrAutoValidator()
  );

  // add getters setters
  Konva.Factory.addGetterSetter(Konva.Text, 'fontFamily', 'Arial');

  /**
   * get/set font family
   * @name fontFamily
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} fontFamily
   * @returns {String}
   * @example
   * // get font family
   * var fontFamily = text.fontFamily();
   *
   * // set font family
   * text.fontFamily('Arial');
   */

  Konva.Factory.addGetterSetter(
    Konva.Text,
    'fontSize',
    12,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set font size in pixels
   * @name fontSize
   * @method
   * @memberof Konva.Text.prototype
   * @param {Number} fontSize
   * @returns {Number}
   * @example
   * // get font size
   * var fontSize = text.fontSize();
   *
   * // set font size to 22px
   * text.fontSize(22);
   */

  Konva.Factory.addGetterSetter(Konva.Text, 'fontStyle', NORMAL);

  /**
   * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
   * @name fontStyle
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} fontStyle
   * @returns {String}
   * @example
   * // get font style
   * var fontStyle = text.fontStyle();
   *
   * // set font style
   * text.fontStyle('bold');
   */

  Konva.Factory.addGetterSetter(Konva.Text, 'fontVariant', NORMAL);

  /**
   * set font variant.  Can be 'normal' or 'small-caps'.  'normal' is the default.
   * @name fontVariant
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} fontVariant
   * @returns {String}
   * @example
   * // get font variant
   * var fontVariant = text.fontVariant();
   *
   * // set font variant
   * text.fontVariant('small-caps');
   */

  Konva.Factory.addGetterSetter(
    Konva.Text,
    'padding',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set padding
   * @name padding
   * @method
   * @memberof Konva.Text.prototype
   * @param {Number} padding
   * @returns {Number}
   * @example
   * // get padding
   * var padding = text.padding();
   *
   * // set padding to 10 pixels
   * text.padding(10);
   */

  Konva.Factory.addGetterSetter(Konva.Text, 'align', LEFT);

  /**
   * get/set horizontal align of text.  Can be 'left', 'center', 'right' or 'justify'
   * @name align
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} align
   * @returns {String}
   * @example
   * // get text align
   * var align = text.align();
   *
   * // center text
   * text.align('center');
   *
   * // align text to right
   * text.align('right');
   */

  Konva.Factory.addGetterSetter(
    Konva.Text,
    'lineHeight',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set line height.  The default is 1.
   * @name lineHeight
   * @method
   * @memberof Konva.Text.prototype
   * @param {Number} lineHeight
   * @returns {Number}
   * @example
   * // get line height
   * var lineHeight = text.lineHeight();
   *
   * // set the line height
   * text.lineHeight(2);
   */

  Konva.Factory.addGetterSetter(Konva.Text, 'wrap', WORD);

  /**
   * get/set wrap.  Can be word, char, or none. Default is word.
   * @name wrap
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} wrap
   * @returns {String}
   * @example
   * // get wrap
   * var wrap = text.wrap();
   *
   * // set wrap
   * text.wrap('word');
   */

  Konva.Factory.addGetterSetter(Konva.Text, 'ellipsis', false);

  /**
   * get/set ellipsis.  Can be true or false. Default is false.
   * if Konva.Text config is set to wrap="none" and ellipsis=true, then it will add "..." to the end
   * @name ellipsis
   * @method
   * @memberof Konva.Text.prototype
   * @param {Boolean} ellipsis
   * @returns {Boolean}
   * @example
   * // get ellipsis
   * var ellipsis = text.ellipsis();
   *
   * // set ellipsis
   * text.ellipsis(true);
   */

  Konva.Factory.addGetterSetter(
    Konva.Text,
    'letterSpacing',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set letter spacing property. Default value is 0.
   * @name letterSpacing
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {Number} letterSpacing
   */

  Konva.Factory.addGetter(Konva.Text, 'text', EMPTY_STRING);
  Konva.Factory.addOverloadedGetterSetter(Konva.Text, 'text');

  /**
   * get/set text
   * @name getText
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} text
   * @returns {String}
   * @example
   * // get text
   * var text = text.text();
   *
   * // set text
   * text.text('Hello world!');
   */

  Konva.Factory.addGetterSetter(Konva.Text, 'textDecoration', EMPTY_STRING);

  /**
   * get/set text decoration of a text.  Possible values are 'underline', 'line-through' or combination of these values separated by space
   * @name textDecoration
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} textDecoration
   * @returns {String}
   * @example
   * // get text decoration
   * var textDecoration = text.textDecoration();
   *
   * // underline text
   * text.textDecoration('underline');
   *
   * // strike text
   * text.textDecoration('line-through');
   *
   * // underline and strike text
   * text.textDecoration('underline line-through');
   */

  Konva.Collection.mapMethods(Konva.Text);
})();

(function() {
  'use strict';
  /**
   * Line constructor.&nbsp; Lines are defined by an array of points and
   *  a tension
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Array} config.points Flat array of points coordinates. You should define them as [x1, y1, x2, y2, x3, y3].
   * @param {Number} [config.tension] Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
   *   The default is 0
   * @param {Boolean} [config.closed] defines whether or not the line shape is closed, creating a polygon or blob
   * @param {Boolean} [config.bezier] if no tension is provided but bezier=true, we draw the line as a bezier using the passed points
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var line = new Konva.Line({
   *   x: 100,
   *   y: 50,
   *   points: [73, 70, 340, 23, 450, 60, 500, 20],
   *   stroke: 'red',
   *   tension: 1
   * });
   */
  Konva.Line = function(config) {
    this.___init(config);
  };

  Konva.Line.prototype = {
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'Line';

      this.on(
        'pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva',
        function() {
          this._clearCache('tensionPoints');
        }
      );

      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var points = this.getPoints(),
        length = points.length,
        tension = this.getTension(),
        closed = this.getClosed(),
        bezier = this.getBezier(),
        tp,
        len,
        n;

      if (!length) {
        return;
      }

      context.beginPath();
      context.moveTo(points[0], points[1]);

      // tension
      if (tension !== 0 && length > 4) {
        tp = this.getTensionPoints();
        len = tp.length;
        n = closed ? 0 : 4;

        if (!closed) {
          context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
        }

        while (n < len - 2) {
          context.bezierCurveTo(
            tp[n++],
            tp[n++],
            tp[n++],
            tp[n++],
            tp[n++],
            tp[n++]
          );
        }

        if (!closed) {
          context.quadraticCurveTo(
            tp[len - 2],
            tp[len - 1],
            points[length - 2],
            points[length - 1]
          );
        }
      } else if (bezier) {
        // no tension but bezier
        n = 2;

        while (n < length) {
          context.bezierCurveTo(
            points[n++],
            points[n++],
            points[n++],
            points[n++],
            points[n++],
            points[n++]
          );
        }
      } else {
        // no tension
        for (n = 2; n < length; n += 2) {
          context.lineTo(points[n], points[n + 1]);
        }
      }

      // closed e.g. polygons and blobs
      if (closed) {
        context.closePath();
        context.fillStrokeShape(this);
      } else {
        // open e.g. lines and splines
        context.strokeShape(this);
      }
    },
    getTensionPoints: function() {
      return this._getCache('tensionPoints', this._getTensionPoints);
    },
    _getTensionPoints: function() {
      if (this.getClosed()) {
        return this._getTensionPointsClosed();
      } else {
        return Konva.Util._expandPoints(this.getPoints(), this.getTension());
      }
    },
    _getTensionPointsClosed: function() {
      var p = this.getPoints(),
        len = p.length,
        tension = this.getTension(),
        util = Konva.Util,
        firstControlPoints = util._getControlPoints(
          p[len - 2],
          p[len - 1],
          p[0],
          p[1],
          p[2],
          p[3],
          tension
        ),
        lastControlPoints = util._getControlPoints(
          p[len - 4],
          p[len - 3],
          p[len - 2],
          p[len - 1],
          p[0],
          p[1],
          tension
        ),
        middle = Konva.Util._expandPoints(p, tension),
        tp = [firstControlPoints[2], firstControlPoints[3]]
          .concat(middle)
          .concat([
            lastControlPoints[0],
            lastControlPoints[1],
            p[len - 2],
            p[len - 1],
            lastControlPoints[2],
            lastControlPoints[3],
            firstControlPoints[0],
            firstControlPoints[1],
            p[0],
            p[1]
          ]);

      return tp;
    },
    getWidth: function() {
      return this.getSelfRect().width;
    },
    getHeight: function() {
      return this.getSelfRect().height;
    },
    // overload size detection
    getSelfRect: function() {
      var points;
      if (this.getTension() !== 0) {
        points = this._getTensionPoints();
      } else {
        points = this.getPoints();
      }
      var minX = points[0];
      var maxX = points[0];
      var minY = points[1];
      var maxY = points[1];
      var x, y;
      for (var i = 0; i < points.length / 2; i++) {
        x = points[i * 2];
        y = points[i * 2 + 1];
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
      return {
        x: Math.round(minX),
        y: Math.round(minY),
        width: Math.round(maxX - minX),
        height: Math.round(maxY - minY)
      };
    }
  };
  Konva.Util.extend(Konva.Line, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(Konva.Line, 'closed', false);

  /**
   * get/set closed flag.  The default is false
   * @name closed
   * @method
   * @memberof Konva.Line.prototype
   * @param {Boolean} closed
   * @returns {Boolean}
   * @example
   * // get closed flag
   * var closed = line.closed();
   *
   * // close the shape
   * line.closed(true);
   *
   * // open the shape
   * line.closed(false);
   */

  Konva.Factory.addGetterSetter(Konva.Line, 'bezier', false);

  /**
   * get/set bezier flag.  The default is false
   * @name bezier
   * @method
   * @memberof Konva.Line.prototype
   * @param {Boolean} bezier
   * @returns {Boolean}
   * @example
   * // get whether the line is a bezier
   * var isBezier = line.bezier();
   *
   * // set whether the line is a bezier
   * line.bezier(true);
   */

  Konva.Factory.addGetterSetter(
    Konva.Line,
    'tension',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set tension
   * @name tension
   * @method
   * @memberof Konva.Line.prototype
   * @param {Number} Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
   *   The default is 0
   * @returns {Number}
   * @example
   * // get tension
   * var tension = line.tension();
   *
   * // set tension
   * line.tension(3);
   */

  Konva.Factory.addGetterSetter(
    Konva.Line,
    'points',
    [],
    Konva.Validators.getNumberArrayValidator()
  );
  /**
   * get/set points array
   * @name points
   * @method
   * @memberof Konva.Line.prototype
   * @param {Array} points
   * @returns {Array}
   * @example
   * // get points
   * var points = line.points();
   *
   * // set points
   * line.points([10, 20, 30, 40, 50, 60]);
   *
   * // push a new point
   * line.points(line.points().concat([70, 80]));
   */

  Konva.Collection.mapMethods(Konva.Line);
})();

(function() {
  'use strict';
  /**
   * Sprite constructor
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {String} config.animation animation key
   * @param {Object} config.animations animation map
   * @param {Integer} [config.frameIndex] animation frame index
   * @param {Image} config.image image object
   * @param {Integer} [config.frameRate] animation frame rate
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var imageObj = new Image();
   * imageObj.onload = function() {
   *   var sprite = new Konva.Sprite({
   *     x: 200,
   *     y: 100,
   *     image: imageObj,
   *     animation: 'standing',
   *     animations: {
   *       standing: [
   *         // x, y, width, height (6 frames)
   *         0, 0, 49, 109,
   *         52, 0, 49, 109,
   *         105, 0, 49, 109,
   *         158, 0, 49, 109,
   *         210, 0, 49, 109,
   *         262, 0, 49, 109
   *       ],
   *       kicking: [
   *         // x, y, width, height (6 frames)
   *         0, 109, 45, 98,
   *         45, 109, 45, 98,
   *         95, 109, 63, 98,
   *         156, 109, 70, 98,
   *         229, 109, 60, 98,
   *         287, 109, 41, 98
   *       ]
   *     },
   *     frameRate: 7,
   *     frameIndex: 0
   *   });
   * };
   * imageObj.src = '/path/to/image.jpg'
   */
  Konva.Sprite = function(config) {
    this.___init(config);
  };

  Konva.Sprite.prototype = {
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'Sprite';

      this._updated = true;
      var that = this;
      this.anim = new Konva.Animation(function() {
        // if we don't need to redraw layer we should return false
        var updated = that._updated;
        that._updated = false;
        return updated;
      });
      this.on('animationChange.konva', function() {
        // reset index when animation changes
        this.frameIndex(0);
      });
      this.on('frameIndexChange.konva', function() {
        this._updated = true;
      });
      // smooth change for frameRate
      this.on('frameRateChange.konva', function() {
        if (!this.anim.isRunning()) {
          return;
        }
        clearInterval(this.interval);
        this._setInterval();
      });

      this.sceneFunc(this._sceneFunc);
      this.hitFunc(this._hitFunc);
    },
    _sceneFunc: function(context) {
      var anim = this.getAnimation(),
        index = this.frameIndex(),
        ix4 = index * 4,
        set = this.getAnimations()[anim],
        offsets = this.frameOffsets(),
        x = set[ix4 + 0],
        y = set[ix4 + 1],
        width = set[ix4 + 2],
        height = set[ix4 + 3],
        image = this.getImage();

      if (this.hasFill() || this.hasStroke()) {
        context.beginPath();
        context.rect(0, 0, width, height);
        context.closePath();
        context.fillStrokeShape(this);
      }

      if (image) {
        if (offsets) {
          var offset = offsets[anim],
            ix2 = index * 2;
          context.drawImage(
            image,
            x,
            y,
            width,
            height,
            offset[ix2 + 0],
            offset[ix2 + 1],
            width,
            height
          );
        } else {
          context.drawImage(image, x, y, width, height, 0, 0, width, height);
        }
      }
    },
    _hitFunc: function(context) {
      var anim = this.getAnimation(),
        index = this.frameIndex(),
        ix4 = index * 4,
        set = this.getAnimations()[anim],
        offsets = this.frameOffsets(),
        width = set[ix4 + 2],
        height = set[ix4 + 3];

      context.beginPath();
      if (offsets) {
        var offset = offsets[anim];
        var ix2 = index * 2;
        context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
      } else {
        context.rect(0, 0, width, height);
      }
      context.closePath();
      context.fillShape(this);
    },
    _useBufferCanvas: function() {
      return (
        (this.hasShadow() || this.getAbsoluteOpacity() !== 1) &&
        this.hasStroke()
      );
    },
    _setInterval: function() {
      var that = this;
      this.interval = setInterval(function() {
        that._updateIndex();
      }, 1000 / this.getFrameRate());
    },
    /**
     * start sprite animation
     * @method
     * @memberof Konva.Sprite.prototype
     */
    start: function() {
      var layer = this.getLayer();

      /*
             * animation object has no executable function because
             *  the updates are done with a fixed FPS with the setInterval
             *  below.  The anim object only needs the layer reference for
             *  redraw
             */
      this.anim.setLayers(layer);
      this._setInterval();
      this.anim.start();
    },
    /**
     * stop sprite animation
     * @method
     * @memberof Konva.Sprite.prototype
     */
    stop: function() {
      this.anim.stop();
      clearInterval(this.interval);
    },
    /**
     * determine if animation of sprite is running or not.  returns true or false
     * @method
     * @memberof Konva.Animation.prototype
     * @returns {Boolean}
     */
    isRunning: function() {
      return this.anim.isRunning();
    },
    _updateIndex: function() {
      var index = this.frameIndex(),
        animation = this.getAnimation(),
        animations = this.getAnimations(),
        anim = animations[animation],
        len = anim.length / 4;

      if (index < len - 1) {
        this.frameIndex(index + 1);
      } else {
        this.frameIndex(0);
      }
    }
  };
  Konva.Util.extend(Konva.Sprite, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(Konva.Sprite, 'animation');

  /**
   * get/set animation key
   * @name animation
   * @method
   * @memberof Konva.Sprite.prototype
   * @param {String} anim animation key
   * @returns {String}
   * @example
   * // get animation key
   * var animation = sprite.animation();
   *
   * // set animation key
   * sprite.animation('kicking');
   */

  Konva.Factory.addGetterSetter(Konva.Sprite, 'animations');

  /**
   * get/set animations map
   * @name animations
   * @method
   * @memberof Konva.Sprite.prototype
   * @param {Object} animations
   * @returns {Object}
   * @example
   * // get animations map
   * var animations = sprite.animations();
   *
   * // set animations map
   * sprite.animations({
   *   standing: [
   *     // x, y, width, height (6 frames)
   *     0, 0, 49, 109,
   *     52, 0, 49, 109,
   *     105, 0, 49, 109,
   *     158, 0, 49, 109,
   *     210, 0, 49, 109,
   *     262, 0, 49, 109
   *   ],
   *   kicking: [
   *     // x, y, width, height (6 frames)
   *     0, 109, 45, 98,
   *     45, 109, 45, 98,
   *     95, 109, 63, 98,
   *     156, 109, 70, 98,
   *     229, 109, 60, 98,
   *     287, 109, 41, 98
   *   ]
   * });
   */

  Konva.Factory.addGetterSetter(Konva.Sprite, 'frameOffsets');

  /**
   * get/set offsets map
   * @name offsets
   * @method
   * @memberof Konva.Sprite.prototype
   * @param {Object} offsets
   * @returns {Object}
   * @example
   * // get offsets map
   * var offsets = sprite.offsets();
   *
   * // set offsets map
   * sprite.offsets({
   *   standing: [
   *     // x, y (6 frames)
   *     0, 0,
   *     0, 0,
   *     5, 0,
   *     0, 0,
   *     0, 3,
   *     2, 0
   *   ],
   *   kicking: [
   *     // x, y (6 frames)
   *     0, 5,
   *     5, 0,
   *     10, 0,
   *     0, 0,
   *     2, 1,
   *     0, 0
   *   ]
   * });
   */

  Konva.Factory.addGetterSetter(Konva.Sprite, 'image');

  /**
   * get/set image
   * @name image
   * @method
   * @memberof Konva.Sprite.prototype
   * @param {Image} image
   * @returns {Image}
   * @example
   * // get image
   * var image = sprite.image();
   *
   * // set image
   * sprite.image(imageObj);
   */

  Konva.Factory.addGetterSetter(
    Konva.Sprite,
    'frameIndex',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set/set animation frame index
   * @name frameIndex
   * @method
   * @memberof Konva.Sprite.prototype
   * @param {Integer} frameIndex
   * @returns {Integer}
   * @example
   * // get animation frame index
   * var frameIndex = sprite.frameIndex();
   *
   * // set animation frame index
   * sprite.frameIndex(3);
   */

  Konva.Factory.addGetterSetter(
    Konva.Sprite,
    'frameRate',
    17,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set frame rate in frames per second.  Increase this number to make the sprite
   *  animation run faster, and decrease the number to make the sprite animation run slower
   *  The default is 17 frames per second
   * @name frameRate
   * @method
   * @memberof Konva.Sprite.prototype
   * @param {Integer} frameRate
   * @returns {Integer}
   * @example
   * // get frame rate
   * var frameRate = sprite.frameRate();
   *
   * // set frame rate to 2 frames per second
   * sprite.frameRate(2);
   */

  Konva.Factory.backCompat(Konva.Sprite, {
    index: 'frameIndex',
    getIndex: 'getFrameIndex',
    setIndex: 'setFrameIndex'
  });

  Konva.Collection.mapMethods(Konva.Sprite);
})();

/*eslint-disable  no-shadow, max-len, max-depth */
(function() {
  'use strict';
  /**
   * Path constructor.
   * @author Jason Follas
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {String} config.data SVG data string
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var path = new Konva.Path({
   *   x: 240,
   *   y: 40,
   *   data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
   *   fill: 'green',
   *   scale: 2
   * });
   */
  Konva.Path = function(config) {
    this.___init(config);
  };

  Konva.Path.prototype = {
    ___init: function(config) {
      this.dataArray = [];
      var that = this;

      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'Path';

      this.dataArray = Konva.Path.parsePathData(this.getData());
      this.on('dataChange.konva', function() {
        that.dataArray = Konva.Path.parsePathData(this.getData());
      });

      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var ca = this.dataArray;

      // context position
      context.beginPath();
      for (var n = 0; n < ca.length; n++) {
        var c = ca[n].command;
        var p = ca[n].points;
        switch (c) {
          case 'L':
            context.lineTo(p[0], p[1]);
            break;
          case 'M':
            context.moveTo(p[0], p[1]);
            break;
          case 'C':
            context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
            break;
          case 'Q':
            context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
            break;
          case 'A':
            var cx = p[0],
              cy = p[1],
              rx = p[2],
              ry = p[3],
              theta = p[4],
              dTheta = p[5],
              psi = p[6],
              fs = p[7];

            var r = rx > ry ? rx : ry;
            var scaleX = rx > ry ? 1 : rx / ry;
            var scaleY = rx > ry ? ry / rx : 1;

            context.translate(cx, cy);
            context.rotate(psi);
            context.scale(scaleX, scaleY);
            context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
            context.scale(1 / scaleX, 1 / scaleY);
            context.rotate(-psi);
            context.translate(-cx, -cy);

            break;
          case 'z':
            context.closePath();
            break;
        }
      }

      context.fillStrokeShape(this);
    },
    getSelfRect: function() {
      var points = [];
      this.dataArray.forEach(function(data) {
        points = points.concat(data.points);
      });
      var minX = points[0];
      var maxX = points[0];
      var minY = points[1];
      var maxY = points[1];
      var x, y;
      for (var i = 0; i < points.length / 2; i++) {
        x = points[i * 2];
        y = points[i * 2 + 1];
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
      return {
        x: Math.round(minX),
        y: Math.round(minY),
        width: Math.round(maxX - minX),
        height: Math.round(maxY - minY)
      };
    }
  };
  Konva.Util.extend(Konva.Path, Konva.Shape);

  Konva.Path.getLineLength = function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  };
  Konva.Path.getPointOnLine = function(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
    if (fromX === undefined) {
      fromX = P1x;
    }
    if (fromY === undefined) {
      fromY = P1y;
    }

    var m = (P2y - P1y) / (P2x - P1x + 0.00000001);
    var run = Math.sqrt(dist * dist / (1 + m * m));
    if (P2x < P1x) {
      run *= -1;
    }
    var rise = m * run;
    var pt;

    if (P2x === P1x) {
      // vertical line
      pt = {
        x: fromX,
        y: fromY + rise
      };
    } else if ((fromY - P1y) / (fromX - P1x + 0.00000001) === m) {
      pt = {
        x: fromX + run,
        y: fromY + rise
      };
    } else {
      var ix, iy;

      var len = this.getLineLength(P1x, P1y, P2x, P2y);
      if (len < 0.00000001) {
        return undefined;
      }
      var u = (fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y);
      u = u / (len * len);
      ix = P1x + u * (P2x - P1x);
      iy = P1y + u * (P2y - P1y);

      var pRise = this.getLineLength(fromX, fromY, ix, iy);
      var pRun = Math.sqrt(dist * dist - pRise * pRise);
      run = Math.sqrt(pRun * pRun / (1 + m * m));
      if (P2x < P1x) {
        run *= -1;
      }
      rise = m * run;
      pt = {
        x: ix + run,
        y: iy + rise
      };
    }

    return pt;
  };

  Konva.Path.getPointOnCubicBezier = function(
    pct,
    P1x,
    P1y,
    P2x,
    P2y,
    P3x,
    P3y,
    P4x,
    P4y
  ) {
    function CB1(t) {
      return t * t * t;
    }
    function CB2(t) {
      return 3 * t * t * (1 - t);
    }
    function CB3(t) {
      return 3 * t * (1 - t) * (1 - t);
    }
    function CB4(t) {
      return (1 - t) * (1 - t) * (1 - t);
    }
    var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
    var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);

    return {
      x: x,
      y: y
    };
  };
  Konva.Path.getPointOnQuadraticBezier = function(
    pct,
    P1x,
    P1y,
    P2x,
    P2y,
    P3x,
    P3y
  ) {
    function QB1(t) {
      return t * t;
    }
    function QB2(t) {
      return 2 * t * (1 - t);
    }
    function QB3(t) {
      return (1 - t) * (1 - t);
    }
    var x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
    var y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);

    return {
      x: x,
      y: y
    };
  };
  Konva.Path.getPointOnEllipticalArc = function(cx, cy, rx, ry, theta, psi) {
    var cosPsi = Math.cos(psi),
      sinPsi = Math.sin(psi);
    var pt = {
      x: rx * Math.cos(theta),
      y: ry * Math.sin(theta)
    };
    return {
      x: cx + (pt.x * cosPsi - pt.y * sinPsi),
      y: cy + (pt.x * sinPsi + pt.y * cosPsi)
    };
  };
  /*
     * get parsed data array from the data
     *  string.  V, v, H, h, and l data are converted to
     *  L data for the purpose of high performance Path
     *  rendering
     */
  Konva.Path.parsePathData = function(data) {
    // Path Data Segment must begin with a moveTo
    //m (x y)+  Relative moveTo (subsequent points are treated as lineTo)
    //M (x y)+  Absolute moveTo (subsequent points are treated as lineTo)
    //l (x y)+  Relative lineTo
    //L (x y)+  Absolute LineTo
    //h (x)+    Relative horizontal lineTo
    //H (x)+    Absolute horizontal lineTo
    //v (y)+    Relative vertical lineTo
    //V (y)+    Absolute vertical lineTo
    //z (closepath)
    //Z (closepath)
    //c (x1 y1 x2 y2 x y)+ Relative Bezier curve
    //C (x1 y1 x2 y2 x y)+ Absolute Bezier curve
    //q (x1 y1 x y)+       Relative Quadratic Bezier
    //Q (x1 y1 x y)+       Absolute Quadratic Bezier
    //t (x y)+    Shorthand/Smooth Relative Quadratic Bezier
    //T (x y)+    Shorthand/Smooth Absolute Quadratic Bezier
    //s (x2 y2 x y)+       Shorthand/Smooth Relative Bezier curve
    //S (x2 y2 x y)+       Shorthand/Smooth Absolute Bezier curve
    //a (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+     Relative Elliptical Arc
    //A (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+  Absolute Elliptical Arc

    // return early if data is not defined
    if (!data) {
      return [];
    }

    // command string
    var cs = data;

    // command chars
    var cc = [
      'm',
      'M',
      'l',
      'L',
      'v',
      'V',
      'h',
      'H',
      'z',
      'Z',
      'c',
      'C',
      'q',
      'Q',
      't',
      'T',
      's',
      'S',
      'a',
      'A'
    ];
    // convert white spaces to commas
    cs = cs.replace(new RegExp(' ', 'g'), ',');
    // create pipes so that we can split the data
    for (var n = 0; n < cc.length; n++) {
      cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
    }
    // create array
    var arr = cs.split('|');
    var ca = [];
    var coords = [];
    // init context point
    var cpx = 0;
    var cpy = 0;

    var re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    var match;
    for (n = 1; n < arr.length; n++) {
      var str = arr[n];
      var c = str.charAt(0);
      str = str.slice(1);

      coords.length = 0;
      while ((match = re.exec(str))) {
        coords.push(match[0]);
      }

      // while ((match = re.exec(str))) {
      //   coords.push(match[0]);
      // }
      var p = [];

      for (var j = 0, jlen = coords.length; j < jlen; j++) {
        var parsed = parseFloat(coords[j]);
        if (!isNaN(parsed)) {
          p.push(parsed);
        }
      }

      while (p.length > 0) {
        if (isNaN(p[0])) {
          // case for a trailing comma before next command
          break;
        }

        var cmd = null;
        var points = [];
        var startX = cpx,
          startY = cpy;
        // Move var from within the switch to up here (jshint)
        var prevCmd, ctlPtx, ctlPty; // Ss, Tt
        var rx, ry, psi, fa, fs, x1, y1; // Aa

        // convert l, H, h, V, and v to L
        switch (c) {
          // Note: Keep the lineTo's above the moveTo's in this switch
          case 'l':
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'L':
            cpx = p.shift();
            cpy = p.shift();
            points.push(cpx, cpy);
            break;
          // Note: lineTo handlers need to be above this point
          case 'm':
            var dx = p.shift();
            var dy = p.shift();
            cpx += dx;
            cpy += dy;
            cmd = 'M';
            // After closing the path move the current position
            // to the the first point of the path (if any).
            if (ca.length > 2 && ca[ca.length - 1].command === 'z') {
              for (var idx = ca.length - 2; idx >= 0; idx--) {
                if (ca[idx].command === 'M') {
                  cpx = ca[idx].points[0] + dx;
                  cpy = ca[idx].points[1] + dy;
                  break;
                }
              }
            }
            points.push(cpx, cpy);
            c = 'l';
            // subsequent points are treated as relative lineTo
            break;
          case 'M':
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'M';
            points.push(cpx, cpy);
            c = 'L';
            // subsequent points are treated as absolute lineTo
            break;

          case 'h':
            cpx += p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'H':
            cpx = p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'v':
            cpy += p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'V':
            cpy = p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'C':
            points.push(p.shift(), p.shift(), p.shift(), p.shift());
            cpx = p.shift();
            cpy = p.shift();
            points.push(cpx, cpy);
            break;
          case 'c':
            points.push(
              cpx + p.shift(),
              cpy + p.shift(),
              cpx + p.shift(),
              cpy + p.shift()
            );
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'C';
            points.push(cpx, cpy);
            break;
          case 'S':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'C') {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, p.shift(), p.shift());
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'C';
            points.push(cpx, cpy);
            break;
          case 's':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'C') {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'C';
            points.push(cpx, cpy);
            break;
          case 'Q':
            points.push(p.shift(), p.shift());
            cpx = p.shift();
            cpy = p.shift();
            points.push(cpx, cpy);
            break;
          case 'q':
            points.push(cpx + p.shift(), cpy + p.shift());
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'Q';
            points.push(cpx, cpy);
            break;
          case 'T':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'Q') {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'Q';
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case 't':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'Q') {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'Q';
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case 'A':
            rx = p.shift();
            ry = p.shift();
            psi = p.shift();
            fa = p.shift();
            fs = p.shift();
            x1 = cpx;
            y1 = cpy;
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'A';
            points = this.convertEndpointToCenterParameterization(
              x1,
              y1,
              cpx,
              cpy,
              fa,
              fs,
              rx,
              ry,
              psi
            );
            break;
          case 'a':
            rx = p.shift();
            ry = p.shift();
            psi = p.shift();
            fa = p.shift();
            fs = p.shift();
            x1 = cpx;
            y1 = cpy;
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'A';
            points = this.convertEndpointToCenterParameterization(
              x1,
              y1,
              cpx,
              cpy,
              fa,
              fs,
              rx,
              ry,
              psi
            );
            break;
        }

        ca.push({
          command: cmd || c,
          points: points,
          start: {
            x: startX,
            y: startY
          },
          pathLength: this.calcLength(startX, startY, cmd || c, points)
        });
      }

      if (c === 'z' || c === 'Z') {
        ca.push({
          command: 'z',
          points: [],
          start: undefined,
          pathLength: 0
        });
      }
    }

    return ca;
  };
  Konva.Path.calcLength = function(x, y, cmd, points) {
    var len, p1, p2, t;
    var path = Konva.Path;

    switch (cmd) {
      case 'L':
        return path.getLineLength(x, y, points[0], points[1]);
      case 'C':
        // Approximates by breaking curve into 100 line segments
        len = 0.0;
        p1 = path.getPointOnCubicBezier(
          0,
          x,
          y,
          points[0],
          points[1],
          points[2],
          points[3],
          points[4],
          points[5]
        );
        for (t = 0.01; t <= 1; t += 0.01) {
          p2 = path.getPointOnCubicBezier(
            t,
            x,
            y,
            points[0],
            points[1],
            points[2],
            points[3],
            points[4],
            points[5]
          );
          len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }
        return len;
      case 'Q':
        // Approximates by breaking curve into 100 line segments
        len = 0.0;
        p1 = path.getPointOnQuadraticBezier(
          0,
          x,
          y,
          points[0],
          points[1],
          points[2],
          points[3]
        );
        for (t = 0.01; t <= 1; t += 0.01) {
          p2 = path.getPointOnQuadraticBezier(
            t,
            x,
            y,
            points[0],
            points[1],
            points[2],
            points[3]
          );
          len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }
        return len;
      case 'A':
        // Approximates by breaking curve into line segments
        len = 0.0;
        var start = points[4];
        // 4 = theta
        var dTheta = points[5];
        // 5 = dTheta
        var end = points[4] + dTheta;
        var inc = Math.PI / 180.0;
        // 1 degree resolution
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
        p1 = path.getPointOnEllipticalArc(
          points[0],
          points[1],
          points[2],
          points[3],
          start,
          0
        );
        if (dTheta < 0) {
          // clockwise
          for (t = start - inc; t > end; t -= inc) {
            p2 = path.getPointOnEllipticalArc(
              points[0],
              points[1],
              points[2],
              points[3],
              t,
              0
            );
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        } else {
          // counter-clockwise
          for (t = start + inc; t < end; t += inc) {
            p2 = path.getPointOnEllipticalArc(
              points[0],
              points[1],
              points[2],
              points[3],
              t,
              0
            );
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        }
        p2 = path.getPointOnEllipticalArc(
          points[0],
          points[1],
          points[2],
          points[3],
          end,
          0
        );
        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);

        return len;
    }

    return 0;
  };
  Konva.Path.convertEndpointToCenterParameterization = function(
    x1,
    y1,
    x2,
    y2,
    fa,
    fs,
    rx,
    ry,
    psiDeg
  ) {
    // Derived from: http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
    var psi = psiDeg * (Math.PI / 180.0);
    var xp = Math.cos(psi) * (x1 - x2) / 2.0 + Math.sin(psi) * (y1 - y2) / 2.0;
    var yp =
      -1 * Math.sin(psi) * (x1 - x2) / 2.0 + Math.cos(psi) * (y1 - y2) / 2.0;

    var lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);

    if (lambda > 1) {
      rx *= Math.sqrt(lambda);
      ry *= Math.sqrt(lambda);
    }

    var f = Math.sqrt(
      (rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) /
        (rx * rx * (yp * yp) + ry * ry * (xp * xp))
    );

    if (fa === fs) {
      f *= -1;
    }
    if (isNaN(f)) {
      f = 0;
    }

    var cxp = f * rx * yp / ry;
    var cyp = f * -ry * xp / rx;

    var cx = (x1 + x2) / 2.0 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
    var cy = (y1 + y2) / 2.0 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;

    var vMag = function(v) {
      return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    };
    var vRatio = function(u, v) {
      return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
    };
    var vAngle = function(u, v) {
      return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
    };
    var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
    var u = [(xp - cxp) / rx, (yp - cyp) / ry];
    var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    var dTheta = vAngle(u, v);

    if (vRatio(u, v) <= -1) {
      dTheta = Math.PI;
    }
    if (vRatio(u, v) >= 1) {
      dTheta = 0;
    }
    if (fs === 0 && dTheta > 0) {
      dTheta = dTheta - 2 * Math.PI;
    }
    if (fs === 1 && dTheta < 0) {
      dTheta = dTheta + 2 * Math.PI;
    }
    return [cx, cy, rx, ry, theta, dTheta, psi, fs];
  };
  // add getters setters
  Konva.Factory.addGetterSetter(Konva.Path, 'data');

  /**
   * set SVG path data string.  This method
   *  also automatically parses the data string
   *  into a data array.  Currently supported SVG data:
   *  M, m, L, l, H, h, V, v, Q, q, T, t, C, c, S, s, A, a, Z, z
   * @name setData
   * @method
   * @memberof Konva.Path.prototype
   * @param {String} SVG path command string
   */

  /**
   * get SVG path data string
   * @name getData
   * @method
   * @memberof Konva.Path.prototype
   */

  Konva.Collection.mapMethods(Konva.Path);
})();

(function() {
  'use strict';
  var EMPTY_STRING = '',
    //CALIBRI = 'Calibri',
    NORMAL = 'normal';

  /**
   * Path constructor.
   * @author Jason Follas
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {String} [config.fontFamily] default is Calibri
   * @param {Number} [config.fontSize] default is 12
   * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
   * @param {String} [config.fontVariant] can be normal or small-caps.  Default is normal
   * @param {String} config.text
   * @param {String} config.data SVG data string
   * @param {Function} config.getKerning a getter for kerning values for the specified characters
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var kerningPairs = {
   *   'A': {
   *     ' ': -0.05517578125,
   *     'T': -0.07421875,
   *     'V': -0.07421875,
   *   },
   *   'V': {
   *     ',': -0.091796875,
   *     ":": -0.037109375,
   *     ";": -0.037109375,
   *     "A": -0.07421875,
   *   }
   * }
   * var textpath = new Konva.TextPath({
   *   x: 100,
   *   y: 50,
   *   fill: '#333',
   *   fontSize: '24',
   *   fontFamily: 'Arial',
   *   text: 'All the world\'s a stage, and all the men and women merely players.',
   *   data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50',
   *   getKerning: function(leftChar, rightChar) {
   *     return kerningPairs.hasOwnProperty(leftChar) ? pairs[leftChar][rightChar] || 0 : 0
   *   }
   * });
   */
  Konva.TextPath = function(config) {
    this.___init(config);
  };

  function _fillFunc(context) {
    context.fillText(this.partialText, 0, 0);
  }
  function _strokeFunc(context) {
    context.strokeText(this.partialText, 0, 0);
  }

  Konva.TextPath.prototype = {
    ___init: function(config) {
      var that = this;
      this.dummyCanvas = Konva.Util.createCanvasElement();
      this.dataArray = [];
      this.getKerning = config && config.getKerning;

      // call super constructor
      Konva.Shape.call(this, config);

      // overrides
      // TODO: shouldn't this be on the prototype?
      this._fillFunc = _fillFunc;
      this._strokeFunc = _strokeFunc;
      this._fillFuncHit = _fillFunc;
      this._strokeFuncHit = _strokeFunc;

      this.className = 'TextPath';

      this.dataArray = Konva.Path.parsePathData(this.attrs.data);
      this.on('dataChange.konva', function() {
        that.dataArray = Konva.Path.parsePathData(this.attrs.data);
        that._setTextData();
      });

      // update text data for certain attr changes
      this.on(
        'textChange.konva alignChange.konva letterSpacingChange.konva',
        that._setTextData
      );
      that._setTextData();
      this.sceneFunc(this._sceneFunc);
      this.hitFunc(this._hitFunc);
    },
    _sceneFunc: function(context) {
      context.setAttr('font', this._getContextFont());
      context.setAttr('textBaseline', this.getTextBaseline());
      context.setAttr('textAlign', 'left');
      context.save();

      var textDecoration = this.textDecoration();
      var fill = this.fill();
      var fontSize = this.fontSize();

      var glyphInfo = this.glyphInfo;
      if (textDecoration === 'underline') {
        context.beginPath();
      }
      for (var i = 0; i < glyphInfo.length; i++) {
        context.save();

        var p0 = glyphInfo[i].p0;

        context.translate(p0.x, p0.y);
        context.rotate(glyphInfo[i].rotation);
        this.partialText = glyphInfo[i].text;

        context.fillStrokeShape(this);
        if (textDecoration === 'underline') {
          if (i === 0) {
            context.moveTo(0, fontSize / 2 + 1);
          }

          context.lineTo(fontSize, fontSize / 2 + 1);
        }
        context.restore();

        //// To assist with debugging visually, uncomment following
        //
        // if (i % 2)
        // context.strokeStyle = 'cyan';
        // else
        // context.strokeStyle = 'green';
        // var p1 = glyphInfo[i].p1;
        // context.moveTo(p0.x, p0.y);
        // context.lineTo(p1.x, p1.y);
        // context.stroke();
      }
      if (textDecoration === 'underline') {
        context.strokeStyle = fill;
        context.lineWidth = fontSize / 20;
        context.stroke();
      }

      context.restore();
    },
    _hitFunc: function(context) {
      context.beginPath();

      var glyphInfo = this.glyphInfo;
      if (glyphInfo.length >= 1) {
        var p0 = glyphInfo[0].p0;
        context.moveTo(p0.x, p0.y);
      }
      for (var i = 0; i < glyphInfo.length; i++) {
        var p1 = glyphInfo[i].p1;
        context.lineTo(p1.x, p1.y);
      }
      context.setAttr('lineWidth', this.getFontSize());
      context.setAttr('strokeStyle', this.colorKey);
      context.stroke();
    },
    /**
     * get text width in pixels
     * @method
     * @memberof Konva.TextPath.prototype
     */
    getTextWidth: function() {
      return this.textWidth;
    },
    /**
     * get text height in pixels
     * @method
     * @memberof Konva.TextPath.prototype
     */
    getTextHeight: function() {
      return this.textHeight;
    },
    /**
     * set text
     * @method
     * @memberof Konva.TextPath.prototype
     * @param {String} text
     */
    setText: function(text) {
      Konva.Text.prototype.setText.call(this, text);
    },
    _getTextSize: function(text) {
      var dummyCanvas = this.dummyCanvas;
      var _context = dummyCanvas.getContext('2d');

      _context.save();

      _context.font = this._getContextFont();
      var metrics = _context.measureText(text);

      _context.restore();

      return {
        width: metrics.width,
        height: parseInt(this.attrs.fontSize, 10)
      };
    },
    _setTextData: function() {
      var that = this;
      var size = this._getTextSize(this.attrs.text);
      var letterSpacing = this.getLetterSpacing();
      var align = this.align();

      this.textWidth = size.width;
      this.textHeight = size.height;

      var textFullWidth = Math.max(
        this.textWidth + ((this.attrs.text || '').length - 1) * letterSpacing,
        0
      );

      this.glyphInfo = [];

      var fullPathWidth = 0;
      for (var l = 0; l < that.dataArray.length; l++) {
        if (that.dataArray[l].pathLength > 0) {
          fullPathWidth += that.dataArray[l].pathLength;
        }
      }

      var offset = 0;
      if (align === 'center') {
        offset = Math.max(0, fullPathWidth / 2 - textFullWidth / 2);
      }
      if (align === 'right') {
        offset = Math.max(0, fullPathWidth - textFullWidth);
      }

      var charArr = this.getText().split('');
      var spacesNumber = this.getText().split(' ').length - 1;

      var p0, p1, pathCmd;

      var pIndex = -1;
      var currentT = 0;
      // var sumLength = 0;
      // for(var j = 0; j < that.dataArray.length; j++) {
      //   if(that.dataArray[j].pathLength > 0) {
      //
      //     if (sumLength + that.dataArray[j].pathLength > offset) {}
      //       fullPathWidth += that.dataArray[j].pathLength;
      //   }
      // }

      var getNextPathSegment = function() {
        currentT = 0;
        var pathData = that.dataArray;

        for (var j = pIndex + 1; j < pathData.length; j++) {
          if (pathData[j].pathLength > 0) {
            pIndex = j;

            return pathData[j];
          } else if (pathData[j].command === 'M') {
            p0 = {
              x: pathData[j].points[0],
              y: pathData[j].points[1]
            };
          }
        }

        return {};
      };

      var findSegmentToFitCharacter = function(c) {
        var glyphWidth = that._getTextSize(c).width + letterSpacing;

        if (c === ' ' && align === 'justify') {
          glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
        }

        var currLen = 0;
        var attempts = 0;

        p1 = undefined;
        while (
          Math.abs(glyphWidth - currLen) / glyphWidth > 0.01 &&
          attempts < 25
        ) {
          attempts++;
          var cumulativePathLength = currLen;
          while (pathCmd === undefined) {
            pathCmd = getNextPathSegment();

            if (
              pathCmd &&
              cumulativePathLength + pathCmd.pathLength < glyphWidth
            ) {
              cumulativePathLength += pathCmd.pathLength;
              pathCmd = undefined;
            }
          }

          if (pathCmd === {} || p0 === undefined) {
            return undefined;
          }

          var needNewSegment = false;

          switch (pathCmd.command) {
            case 'L':
              if (
                Konva.Path.getLineLength(
                  p0.x,
                  p0.y,
                  pathCmd.points[0],
                  pathCmd.points[1]
                ) > glyphWidth
              ) {
                p1 = Konva.Path.getPointOnLine(
                  glyphWidth,
                  p0.x,
                  p0.y,
                  pathCmd.points[0],
                  pathCmd.points[1],
                  p0.x,
                  p0.y
                );
              } else {
                pathCmd = undefined;
              }
              break;
            case 'A':
              var start = pathCmd.points[4];
              // 4 = theta
              var dTheta = pathCmd.points[5];
              // 5 = dTheta
              var end = pathCmd.points[4] + dTheta;

              if (currentT === 0) {
                currentT = start + 0.00000001;
              } else if (glyphWidth > currLen) {
                // Just in case start is 0
                currentT += Math.PI / 180.0 * dTheta / Math.abs(dTheta);
              } else {
                currentT -= Math.PI / 360.0 * dTheta / Math.abs(dTheta);
              }

              // Credit for bug fix: @therth https://github.com/ericdrowell/KonvaJS/issues/249
              // Old code failed to render text along arc of this path: "M 50 50 a 150 50 0 0 1 250 50 l 50 0"
              if (
                (dTheta < 0 && currentT < end) ||
                (dTheta >= 0 && currentT > end)
              ) {
                currentT = end;
                needNewSegment = true;
              }
              p1 = Konva.Path.getPointOnEllipticalArc(
                pathCmd.points[0],
                pathCmd.points[1],
                pathCmd.points[2],
                pathCmd.points[3],
                currentT,
                pathCmd.points[6]
              );
              break;
            case 'C':
              if (currentT === 0) {
                if (glyphWidth > pathCmd.pathLength) {
                  currentT = 0.00000001;
                } else {
                  currentT = glyphWidth / pathCmd.pathLength;
                }
              } else if (glyphWidth > currLen) {
                currentT += (glyphWidth - currLen) / pathCmd.pathLength;
              } else {
                currentT -= (currLen - glyphWidth) / pathCmd.pathLength;
              }

              if (currentT > 1.0) {
                currentT = 1.0;
                needNewSegment = true;
              }
              p1 = Konva.Path.getPointOnCubicBezier(
                currentT,
                pathCmd.start.x,
                pathCmd.start.y,
                pathCmd.points[0],
                pathCmd.points[1],
                pathCmd.points[2],
                pathCmd.points[3],
                pathCmd.points[4],
                pathCmd.points[5]
              );
              break;
            case 'Q':
              if (currentT === 0) {
                currentT = glyphWidth / pathCmd.pathLength;
              } else if (glyphWidth > currLen) {
                currentT += (glyphWidth - currLen) / pathCmd.pathLength;
              } else {
                currentT -= (currLen - glyphWidth) / pathCmd.pathLength;
              }

              if (currentT > 1.0) {
                currentT = 1.0;
                needNewSegment = true;
              }
              p1 = Konva.Path.getPointOnQuadraticBezier(
                currentT,
                pathCmd.start.x,
                pathCmd.start.y,
                pathCmd.points[0],
                pathCmd.points[1],
                pathCmd.points[2],
                pathCmd.points[3]
              );
              break;
          }

          if (p1 !== undefined) {
            currLen = Konva.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
          }

          if (needNewSegment) {
            needNewSegment = false;
            pathCmd = undefined;
          }
        }
      };

      // fake search for offset, this is very bad approach
      // TODO: find other way to add offset from start (for align)
      var testChar = 'C';
      var glyphWidth = that._getTextSize(testChar).width + letterSpacing;
      for (var k = 0; k < offset / glyphWidth; k++) {
        findSegmentToFitCharacter(testChar);
        if (p0 === undefined || p1 === undefined) {
          break;
        }
        p0 = p1;
      }

      for (var i = 0; i < charArr.length; i++) {
        // Find p1 such that line segment between p0 and p1 is approx. width of glyph
        findSegmentToFitCharacter(charArr[i]);

        if (p0 === undefined || p1 === undefined) {
          break;
        }

        var width = Konva.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);

        var kern = 0;
        if (this.getKerning) {
          try {
            // getKerning is a user provided getter. Make sure it never breaks our logic
            kern =
              this.getKerning(charArr[i - 1], charArr[i]) * this.fontSize();
          } catch (e) {
            kern = 0;
          }
        }

        p0.x += kern;
        p1.x += kern;
        this.textWidth += kern;

        var midpoint = Konva.Path.getPointOnLine(
          kern + width / 2.0,
          p0.x,
          p0.y,
          p1.x,
          p1.y
        );

        var rotation = Math.atan2(p1.y - p0.y, p1.x - p0.x);
        this.glyphInfo.push({
          transposeX: midpoint.x,
          transposeY: midpoint.y,
          text: charArr[i],
          rotation: rotation,
          p0: p0,
          p1: p1
        });
        p0 = p1;
      }
    },
    getSelfRect: function() {
      var points = [];

      this.glyphInfo.forEach(function(info) {
        points.push(info.p0.x);
        points.push(info.p0.y);
        points.push(info.p1.x);
        points.push(info.p1.y);
      });
      var minX = points[0];
      var maxX = points[0];
      var minY = points[0];
      var maxY = points[0];
      var x, y;
      for (var i = 0; i < points.length / 2; i++) {
        x = points[i * 2];
        y = points[i * 2 + 1];
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
      var fontSize = this.fontSize();
      return {
        x: Math.round(minX) - fontSize / 2,
        y: Math.round(minY) - fontSize / 2,
        width: Math.round(maxX - minX) + fontSize,
        height: Math.round(maxY - minY) + fontSize
      };
    }
  };

  // map TextPath methods to Text
  Konva.TextPath.prototype._getContextFont =
    Konva.Text.prototype._getContextFont;

  Konva.Util.extend(Konva.TextPath, Konva.Shape);

  // add setters and getters
  Konva.Factory.addGetterSetter(Konva.TextPath, 'data');

  /**
   * set SVG path data string.  This method
   *  also automatically parses the data string
   *  into a data array.  Currently supported SVG data:
   *  M, m, L, l, H, h, V, v, Q, q, T, t, C, c, S, s, A, a, Z, z
   * @name setData
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {String} SVG path command string
   */

  /**
   * get SVG path data string
   * @name getData
   * @method
   * @memberof Konva.TextPath.prototype
   */

  Konva.Factory.addGetterSetter(Konva.TextPath, 'fontFamily', 'Arial');

  /**
   * set font family
   * @name setFontFamily
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {String} fontFamily
   */

  /**
   * get font family
   * @name getFontFamily
   * @method
   * @memberof Konva.TextPath.prototype
   */

  Konva.Factory.addGetterSetter(
    Konva.TextPath,
    'fontSize',
    12,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set font size
   * @name setFontSize
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {int} fontSize
   */

  /**
   * get font size
   * @name getFontSize
   * @method
   * @memberof Konva.TextPath.prototype
   */

  Konva.Factory.addGetterSetter(Konva.TextPath, 'fontStyle', NORMAL);

  /**
   * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
   * @name setFontStyle
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {String} fontStyle
   */
  Konva.Factory.addGetterSetter(Konva.TextPath, 'align', 'left');

  /**
   * get/set horizontal align of text.  Can be 'left', 'center', 'right' or 'justify'
   * @name align
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} align
   * @returns {String}
   * @example
   * // get text align
   * var align = text.align();
   *
   * // center text
   * text.align('center');
   *
   * // align text to right
   * text.align('right');
   */

  Konva.Factory.addGetterSetter(
    Konva.TextPath,
    'letterSpacing',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set letter spacing property. Default value is 0.
   * @name letterSpacing
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {Number} letterSpacing
   */

  Konva.Factory.addGetterSetter(Konva.TextPath, 'textBaseline', 'middle');

  /**
   * set textBaseline property. Default value is 'middle'.
   * Can be 'top', 'bottom', 'middle', 'alphabetic', 'hanging'
   * @name textBaseline
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {Number} textBaseline
   */

  /**
   * get font style
   * @name getFontStyle
   * @method
   * @memberof Konva.TextPath.prototype
   */

  Konva.Factory.addGetterSetter(Konva.TextPath, 'fontVariant', NORMAL);

  /**
   * set font variant.  Can be 'normal' or 'small-caps'.  'normal' is the default.
   * @name setFontVariant
   * @method
   * @memberof Konva.TextPath.prototype
   * @param {String} fontVariant
   */

  /**
   * @get font variant
   * @name getFontVariant
   * @method
   * @memberof Konva.TextPath.prototype
   */

  Konva.Factory.addGetter(Konva.TextPath, 'text', EMPTY_STRING);

  /**
   * get text
   * @name getText
   * @method
   * @memberof Konva.TextPath.prototype
   */

  Konva.Factory.addGetterSetter(Konva.TextPath, 'textDecoration', null);

  /**
   * get/set text decoration of a text.  Can be '' or 'underline'
   * @name textDecoration
   * @method
   * @memberof Konva.Text.prototype
   * @param {String} textDecoration
   * @returns {String}
   * @example
   * // get text decoration
   * var textDecoration = text.textDecoration();
   *
   * // center text
   * text.textDecoration('underline');
   */

  Konva.Collection.mapMethods(Konva.TextPath);
})();

(function() {
  'use strict';
  /**
   * RegularPolygon constructor.&nbsp; Examples include triangles, squares, pentagons, hexagons, etc.
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Number} config.sides
   * @param {Number} config.radius
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var hexagon = new Konva.RegularPolygon({
   *   x: 100,
   *   y: 200,
   *   sides: 6,
   *   radius: 70,
   *   fill: 'red',
   *   stroke: 'black',
   *   strokeWidth: 4
   * });
   */
  Konva.RegularPolygon = function(config) {
    this.___init(config);
  };

  Konva.RegularPolygon.prototype = {
    _centroid: true,
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'RegularPolygon';
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var sides = this.attrs.sides,
        radius = this.attrs.radius,
        n,
        x,
        y;

      context.beginPath();
      context.moveTo(0, 0 - radius);

      for (n = 1; n < sides; n++) {
        x = radius * Math.sin(n * 2 * Math.PI / sides);
        y = -1 * radius * Math.cos(n * 2 * Math.PI / sides);
        context.lineTo(x, y);
      }
      context.closePath();
      context.fillStrokeShape(this);
    },
    getWidth: function() {
      return this.getRadius() * 2;
    },
    // implements Shape.prototype.getHeight()
    getHeight: function() {
      return this.getRadius() * 2;
    },
    // implements Shape.prototype.setWidth()
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      if (this.radius() !== width / 2) {
        this.setRadius(width / 2);
      }
    },
    // implements Shape.prototype.setHeight()
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      if (this.radius() !== height / 2) {
        this.setRadius(height / 2);
      }
    }
  };
  Konva.Util.extend(Konva.RegularPolygon, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(
    Konva.RegularPolygon,
    'radius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set radius
   * @name setRadius
   * @method
   * @memberof Konva.RegularPolygon.prototype
   * @param {Number} radius
   */

  /**
   * get radius
   * @name getRadius
   * @method
   * @memberof Konva.RegularPolygon.prototype
   */

  Konva.Factory.addGetterSetter(
    Konva.RegularPolygon,
    'sides',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set number of sides
   * @name setSides
   * @method
   * @memberof Konva.RegularPolygon.prototype
   * @param {int} sides
   */

  /**
   * get number of sides
   * @name getSides
   * @method
   * @memberof Konva.RegularPolygon.prototype
   */

  Konva.Collection.mapMethods(Konva.RegularPolygon);
})();

(function() {
  'use strict';
  /**
   * Star constructor
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Integer} config.numPoints
   * @param {Number} config.innerRadius
   * @param {Number} config.outerRadius
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var star = new Konva.Star({
   *   x: 100,
   *   y: 200,
   *   numPoints: 5,
   *   innerRadius: 70,
   *   outerRadius: 70,
   *   fill: 'red',
   *   stroke: 'black',
   *   strokeWidth: 4
   * });
   */
  Konva.Star = function(config) {
    this.___init(config);
  };

  Konva.Star.prototype = {
    _centroid: true,
    ___init: function(config) {
      // call super constructor
      Konva.Shape.call(this, config);
      this.className = 'Star';
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var innerRadius = this.innerRadius(),
        outerRadius = this.outerRadius(),
        numPoints = this.numPoints();

      context.beginPath();
      context.moveTo(0, 0 - outerRadius);

      for (var n = 1; n < numPoints * 2; n++) {
        var radius = n % 2 === 0 ? outerRadius : innerRadius;
        var x = radius * Math.sin(n * Math.PI / numPoints);
        var y = -1 * radius * Math.cos(n * Math.PI / numPoints);
        context.lineTo(x, y);
      }
      context.closePath();

      context.fillStrokeShape(this);
    },
    // implements Shape.prototype.getWidth()
    getWidth: function() {
      return this.getOuterRadius() * 2;
    },
    // implements Shape.prototype.getHeight()
    getHeight: function() {
      return this.getOuterRadius() * 2;
    },
    // implements Shape.prototype.setWidth()
    setWidth: function(width) {
      Konva.Node.prototype.setWidth.call(this, width);
      if (this.outerRadius() !== width / 2) {
        this.setOuterRadius(width / 2);
      }
    },
    // implements Shape.prototype.setHeight()
    setHeight: function(height) {
      Konva.Node.prototype.setHeight.call(this, height);
      if (this.outerRadius() !== height / 2) {
        this.setOuterRadius(height / 2);
      }
    }
  };
  Konva.Util.extend(Konva.Star, Konva.Shape);

  // add getters setters
  Konva.Factory.addGetterSetter(
    Konva.Star,
    'numPoints',
    5,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set number of points
   * @name setNumPoints
   * @method
   * @memberof Konva.Star.prototype
   * @param {Integer} points
   */

  /**
   * get number of points
   * @name getNumPoints
   * @method
   * @memberof Konva.Star.prototype
   */

  Konva.Factory.addGetterSetter(
    Konva.Star,
    'innerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set inner radius
   * @name setInnerRadius
   * @method
   * @memberof Konva.Star.prototype
   * @param {Number} radius
   */

  /**
   * get inner radius
   * @name getInnerRadius
   * @method
   * @memberof Konva.Star.prototype
   */

  Konva.Factory.addGetterSetter(
    Konva.Star,
    'outerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set outer radius
   * @name setOuterRadius
   * @method
   * @memberof Konva.Star.prototype
   * @param {Number} radius
   */

  /**
   * get outer radius
   * @name getOuterRadius
   * @method
   * @memberof Konva.Star.prototype
   */

  Konva.Collection.mapMethods(Konva.Star);
})();

(function() {
  'use strict';
  // constants
  var ATTR_CHANGE_LIST = [
      'fontFamily',
      'fontSize',
      'fontStyle',
      'padding',
      'lineHeight',
      'text',
      'width'
    ],
    CHANGE_KONVA = 'Change.konva',
    NONE = 'none',
    UP = 'up',
    RIGHT = 'right',
    DOWN = 'down',
    LEFT = 'left',
    LABEL = 'Label',
    // cached variables
    attrChangeListLen = ATTR_CHANGE_LIST.length;

  /**
   * Label constructor.&nbsp; Labels are groups that contain a Text and Tag shape
   * @constructor
   * @memberof Konva
   * @param {Object} config
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * // create label
   * var label = new Konva.Label({
   *   x: 100,
   *   y: 100,
   *   draggable: true
   * });
   *
   * // add a tag to the label
   * label.add(new Konva.Tag({
   *   fill: '#bbb',
   *   stroke: '#333',
   *   shadowColor: 'black',
   *   shadowBlur: 10,
   *   shadowOffset: [10, 10],
   *   shadowOpacity: 0.2,
   *   lineJoin: 'round',
   *   pointerDirection: 'up',
   *   pointerWidth: 20,
   *   pointerHeight: 20,
   *   cornerRadius: 5
   * }));
   *
   * // add text to the label
   * label.add(new Konva.Text({
   *   text: 'Hello World!',
   *   fontSize: 50,
   *   lineHeight: 1.2,
   *   padding: 10,
   *   fill: 'green'
   *  }));
   */
  Konva.Label = function(config) {
    this.____init(config);
  };

  Konva.Label.prototype = {
    ____init: function(config) {
      var that = this;

      Konva.Group.call(this, config);
      this.className = LABEL;

      this.on('add.konva', function(evt) {
        that._addListeners(evt.child);
        that._sync();
      });
    },
    /**
     * get Text shape for the label.  You need to access the Text shape in order to update
     * the text properties
     * @name getText
     * @method
     * @memberof Konva.Label.prototype
     */
    getText: function() {
      return this.find('Text')[0];
    },
    /**
     * get Tag shape for the label.  You need to access the Tag shape in order to update
     * the pointer properties and the corner radius
     * @name getTag
     * @method
     * @memberof Konva.Label.prototype
     */
    getTag: function() {
      return this.find('Tag')[0];
    },
    _addListeners: function(text) {
      var that = this,
        n;
      var func = function() {
        that._sync();
      };

      // update text data for certain attr changes
      for (n = 0; n < attrChangeListLen; n++) {
        text.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, func);
      }
    },
    getWidth: function() {
      return this.getText().getWidth();
    },
    getHeight: function() {
      return this.getText().getHeight();
    },
    _sync: function() {
      var text = this.getText(),
        tag = this.getTag(),
        width,
        height,
        pointerDirection,
        pointerWidth,
        x,
        y,
        pointerHeight;

      if (text && tag) {
        width = text.getWidth();
        height = text.getHeight();
        pointerDirection = tag.getPointerDirection();
        pointerWidth = tag.getPointerWidth();
        pointerHeight = tag.getPointerHeight();
        x = 0;
        y = 0;

        switch (pointerDirection) {
          case UP:
            x = width / 2;
            y = -1 * pointerHeight;
            break;
          case RIGHT:
            x = width + pointerWidth;
            y = height / 2;
            break;
          case DOWN:
            x = width / 2;
            y = height + pointerHeight;
            break;
          case LEFT:
            x = -1 * pointerWidth;
            y = height / 2;
            break;
        }

        tag.setAttrs({
          x: -1 * x,
          y: -1 * y,
          width: width,
          height: height
        });

        text.setAttrs({
          x: -1 * x,
          y: -1 * y
        });
      }
    }
  };

  Konva.Util.extend(Konva.Label, Konva.Group);

  Konva.Collection.mapMethods(Konva.Label);

  /**
   * Tag constructor.&nbsp; A Tag can be configured
   *  to have a pointer element that points up, right, down, or left
   * @constructor
   * @memberof Konva
   * @param {Object} config
   * @param {String} [config.pointerDirection] can be up, right, down, left, or none; the default
   *  is none.  When a pointer is present, the positioning of the label is relative to the tip of the pointer.
   * @param {Number} [config.pointerWidth]
   * @param {Number} [config.pointerHeight]
   * @param {Number} [config.cornerRadius]
   */
  Konva.Tag = function(config) {
    this.___init(config);
  };

  Konva.Tag.prototype = {
    ___init: function(config) {
      Konva.Shape.call(this, config);
      this.className = 'Tag';
      this.sceneFunc(this._sceneFunc);
    },
    _sceneFunc: function(context) {
      var width = this.getWidth(),
        height = this.getHeight(),
        pointerDirection = this.getPointerDirection(),
        pointerWidth = this.getPointerWidth(),
        pointerHeight = this.getPointerHeight(),
        cornerRadius = Math.min(this.getCornerRadius(), width / 2, height / 2);

      context.beginPath();
      if (!cornerRadius) {
        context.moveTo(0, 0);
      } else {
        context.moveTo(cornerRadius, 0);
      }

      if (pointerDirection === UP) {
        context.lineTo((width - pointerWidth) / 2, 0);
        context.lineTo(width / 2, -1 * pointerHeight);
        context.lineTo((width + pointerWidth) / 2, 0);
      }

      if (!cornerRadius) {
        context.lineTo(width, 0);
      } else {
        context.lineTo(width - cornerRadius, 0);
        context.arc(
          width - cornerRadius,
          cornerRadius,
          cornerRadius,
          Math.PI * 3 / 2,
          0,
          false
        );
      }

      if (pointerDirection === RIGHT) {
        context.lineTo(width, (height - pointerHeight) / 2);
        context.lineTo(width + pointerWidth, height / 2);
        context.lineTo(width, (height + pointerHeight) / 2);
      }

      if (!cornerRadius) {
        context.lineTo(width, height);
      } else {
        context.lineTo(width, height - cornerRadius);
        context.arc(
          width - cornerRadius,
          height - cornerRadius,
          cornerRadius,
          0,
          Math.PI / 2,
          false
        );
      }

      if (pointerDirection === DOWN) {
        context.lineTo((width + pointerWidth) / 2, height);
        context.lineTo(width / 2, height + pointerHeight);
        context.lineTo((width - pointerWidth) / 2, height);
      }

      if (!cornerRadius) {
        context.lineTo(0, height);
      } else {
        context.lineTo(cornerRadius, height);
        context.arc(
          cornerRadius,
          height - cornerRadius,
          cornerRadius,
          Math.PI / 2,
          Math.PI,
          false
        );
      }

      if (pointerDirection === LEFT) {
        context.lineTo(0, (height + pointerHeight) / 2);
        context.lineTo(-1 * pointerWidth, height / 2);
        context.lineTo(0, (height - pointerHeight) / 2);
      }

      if (cornerRadius) {
        context.lineTo(0, cornerRadius);
        context.arc(
          cornerRadius,
          cornerRadius,
          cornerRadius,
          Math.PI,
          Math.PI * 3 / 2,
          false
        );
      }

      context.closePath();
      context.fillStrokeShape(this);
    },
    getSelfRect: function() {
      var x = 0,
        y = 0,
        pointerWidth = this.getPointerWidth(),
        pointerHeight = this.getPointerHeight(),
        direction = this.pointerDirection(),
        width = this.getWidth(),
        height = this.getHeight();

      if (direction === UP) {
        y -= pointerHeight;
        height += pointerHeight;
      } else if (direction === DOWN) {
        height += pointerHeight;
      } else if (direction === LEFT) {
        // ARGH!!! I have no idea why should I used magic 1.5!!!!!!!!!
        x -= pointerWidth * 1.5;
        width += pointerWidth;
      } else if (direction === RIGHT) {
        width += pointerWidth * 1.5;
      }
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }
  };

  Konva.Util.extend(Konva.Tag, Konva.Shape);
  Konva.Factory.addGetterSetter(Konva.Tag, 'pointerDirection', NONE);

  /**
   * set pointer Direction
   * @name setPointerDirection
   * @method
   * @memberof Konva.Tag.prototype
   * @param {String} pointerDirection can be up, right, down, left, or none.  The
   *  default is none
   */

  /**
   * get pointer Direction
   * @name getPointerDirection
   * @method
   * @memberof Konva.Tag.prototype
   */

  Konva.Factory.addGetterSetter(
    Konva.Tag,
    'pointerWidth',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set pointer width
   * @name setPointerWidth
   * @method
   * @memberof Konva.Tag.prototype
   * @param {Number} pointerWidth
   */

  /**
   * get pointer width
   * @name getPointerWidth
   * @method
   * @memberof Konva.Tag.prototype
   */

  Konva.Factory.addGetterSetter(
    Konva.Tag,
    'pointerHeight',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set pointer height
   * @name setPointerHeight
   * @method
   * @memberof Konva.Tag.prototype
   * @param {Number} pointerHeight
   */

  /**
   * get pointer height
   * @name getPointerHeight
   * @method
   * @memberof Konva.Tag.prototype
   */

  Konva.Factory.addGetterSetter(
    Konva.Tag,
    'cornerRadius',
    0,
    Konva.Validators.getNumberValidator()
  );

  /**
   * set corner radius
   * @name setCornerRadius
   * @method
   * @memberof Konva.Tag.prototype
   * @param {Number} corner radius
   */

  /**
   * get corner radius
   * @name getCornerRadius
   * @method
   * @memberof Konva.Tag.prototype
   */

  Konva.Collection.mapMethods(Konva.Tag);
})();

(function(Konva) {
  'use strict';
  /**
   * Arrow constructor
   * @constructor
   * @memberof Konva
   * @augments Konva.Shape
   * @param {Object} config
   * @param {Array} config.points Flat array of points coordinates. You should define them as [x1, y1, x2, y2, x3, y3].
   * @param {Number} [config.tension] Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
   *   The default is 0
   * @param {Number} config.pointerLength Arrow pointer length. Default value is 10.
   * @param {Number} config.pointerWidth Arrow pointer width. Default value is 10.
   * @param {Boolean} config.pointerAtBeginning Do we need to draw pointer on both sides?. Default false.
   * @param {String} [config.fill] fill color
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeHitEnabled] flag which enables or disables stroke hit region.  The default is true
     * @param {Boolean} [config.perfectDrawEnabled] flag which enables or disables using buffer canvas.  The default is true
     * @param {Boolean} [config.shadowForStrokeEnabled] flag which enables or disables shasow for stroke.  The default is true
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
   * @example
   * var line = new Konva.Line({
   *   points: [73, 70, 340, 23, 450, 60, 500, 20],
   *   stroke: 'red',
   *   tension: 1,
   *   pointerLength : 10,
   *   pointerWidth : 12
   * });
   */
  Konva.Arrow = function(config) {
    this.____init(config);
  };

  Konva.Arrow.prototype = {
    ____init: function(config) {
      // call super constructor
      Konva.Line.call(this, config);
      this.className = 'Arrow';
    },
    _sceneFunc: function(ctx) {
      Konva.Line.prototype._sceneFunc.apply(this, arguments);
      var PI2 = Math.PI * 2;
      var points = this.points();

      var tp = points;
      var fromTension = this.getTension() !== 0 && points.length > 4;
      if (fromTension) {
        tp = this.getTensionPoints();
      }

      var n = points.length;

      var dx, dy;
      if (fromTension) {
        dx = points[n - 2] - tp[n - 2];
        dy = points[n - 1] - tp[n - 1];
      } else {
        dx = points[n - 2] - points[n - 4];
        dy = points[n - 1] - points[n - 3];
      }

      var radians = (Math.atan2(dy, dx) + PI2) % PI2;
      var length = this.pointerLength();
      var width = this.pointerWidth();

      ctx.save();
      ctx.beginPath();
      ctx.translate(points[n - 2], points[n - 1]);
      ctx.rotate(radians);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();

      if (this.pointerAtBeginning()) {
        ctx.save();
        ctx.translate(points[0], points[1]);
        if (fromTension) {
          dx = tp[0] - points[0];
          dy = tp[1] - points[1];
        } else {
          dx = points[2] - points[0];
          dy = points[3] - points[1];
        }

        ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
        ctx.moveTo(0, 0);
        ctx.lineTo(-length, width / 2);
        ctx.lineTo(-length, -width / 2);
        ctx.closePath();
        ctx.restore();
      }

      // here is a tricky part
      // we need to disable dash for arrow pointers
      var isDashEnabled = this.dashEnabled();
      if (isDashEnabled) {
        // manually disable dash for head
        // it is better not to use setter here,
        // because it will trigger attr change event
        this.attrs.dashEnabled = false;
        ctx.setLineDash([]);
      }

      ctx.fillStrokeShape(this);

      // restore old value
      if (isDashEnabled) {
        this.attrs.dashEnabled = true;
      }
    }
  };

  Konva.Util.extend(Konva.Arrow, Konva.Line);
  /**
   * get/set pointerLength
   * @name pointerLength
   * @method
   * @memberof Konva.Arrow.prototype
   * @param {Number} Length of pointer of arrow.
   *   The default is 10.
   * @returns {Number}
   * @example
   * // get tension
   * var pointerLength = line.pointerLength();
   *
   * // set tension
   * line.pointerLength(15);
   */

  Konva.Factory.addGetterSetter(
    Konva.Arrow,
    'pointerLength',
    10,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set pointerWidth
   * @name pointerWidth
   * @method
   * @memberof Konva.Arrow.prototype
   * @param {Number} Width of pointer of arrow.
   *   The default is 10.
   * @returns {Number}
   * @example
   * // get tension
   * var pointerWidth = line.pointerWidth();
   *
   * // set tension
   * line.pointerWidth(15);
   */

  Konva.Factory.addGetterSetter(
    Konva.Arrow,
    'pointerWidth',
    10,
    Konva.Validators.getNumberValidator()
  );
  /**
   * get/set pointerAtBeginning
   * @name pointerAtBeginning
   * @method
   * @memberof Konva.Arrow.prototype
   * @param {Number} Should pointer displayed at beginning of arrow.
   *   The default is false.
   * @returns {Boolean}
   * @example
   * // get tension
   * var pointerAtBeginning = line.pointerAtBeginning();
   *
   * // set tension
   * line.pointerAtBeginning(true);
   */

  Konva.Factory.addGetterSetter(Konva.Arrow, 'pointerAtBeginning', false);
  Konva.Collection.mapMethods(Konva.Arrow);
})(Konva);

(function(Konva) {
  'use strict';

  var ATTR_CHANGE_LIST = [
    'resizeEnabledChange',
    'rotateAnchorOffsetChange',
    'enabledAnchorsChange',
    'anchorSizeChange',
    'borderEnabledChange',
    'borderStrokeChange',
    'borderStrokeWidthChange',
    'anchorStrokeChange',
    'anchorStrokeWidthChange',
    'anchorFillChange'
  ].join(' ');

  var NODE_RECT = 'nodeRect';

  var TRANSFORM_CHANGE_STR = [
    'xChange.resizer',
    'yChange.resizer',
    'widthChange.resizer',
    'heightChange.resizer',
    'scaleXChange.resizer',
    'scaleYChange.resizer',
    'skewXChange.resizer',
    'skewYChange.resizer',
    'rotationChange.resizer',
    'offsetXChange.resizer',
    'offsetYChange.resizer',
    'transformsEnabledChange.resizer'
  ].join(' ');

  var REDRAW_CHANGE_STR = [
    'widthChange.resizer',
    'heightChange.resizer',
    'scaleXChange.resizer',
    'scaleYChange.resizer',
    'skewXChange.resizer',
    'skewYChange.resizer',
    'rotationChange.resizer',
    'offsetXChange.resizer',
    'offsetYChange.resizer'
  ].join(' ');

  var ANGLES = {
    'top-left': -45,
    'top-center': 0,
    'top-right': 45,
    'middle-right': -90,
    'middle-left': 90,
    'bottom-left': -135,
    'bottom-center': 180,
    'bottom-right': 135
  };

  function getCursor(anchorName, rad, isMirrored) {
    if (anchorName === 'rotater') {
      return 'crosshair';
    }

    rad += Konva.Util._degToRad(ANGLES[anchorName] || 0);
    // If we are mirrored, we need to mirror the angle (this is not the same as
    // rotate).
    if (isMirrored) {
      rad *= -1;
    }
    var angle = (Konva.Util._radToDeg(rad) % 360 + 360) % 360;

    if (
      Konva.Util._inRange(angle, 315 + 22.5, 360) ||
      Konva.Util._inRange(angle, 0, 22.5)
    ) {
      // TOP
      return 'ns-resize';
    } else if (Konva.Util._inRange(angle, 45 - 22.5, 45 + 22.5)) {
      // TOP - RIGHT
      return 'nesw-resize';
    } else if (Konva.Util._inRange(angle, 90 - 22.5, 90 + 22.5)) {
      // RIGHT
      return 'ew-resize';
    } else if (Konva.Util._inRange(angle, 135 - 22.5, 135 + 22.5)) {
      // BOTTOM - RIGHT
      return 'nwse-resize';
    } else if (Konva.Util._inRange(angle, 180 - 22.5, 180 + 22.5)) {
      // BOTTOM
      return 'ns-resize';
    } else if (Konva.Util._inRange(angle, 225 - 22.5, 225 + 22.5)) {
      // BOTTOM - LEFT
      return 'nesw-resize';
    } else if (Konva.Util._inRange(angle, 270 - 22.5, 270 + 22.5)) {
      // RIGHT
      return 'ew-resize';
    } else if (Konva.Util._inRange(angle, 315 - 22.5, 315 + 22.5)) {
      // BOTTOM - RIGHT
      return 'nwse-resize';
    } else {
      // how can we can there?
      // TODO: throw error
      Konva.Util.error(
        'Transformer has unknown angle for cursor detection: ' + angle
      );
      return 'pointer';
    }
  }

  /**
   * Transformer constructor.  Transformer is a special type of group that allow you transform Konva
   * primitives and shapes. Transforming tool is not changing `width` and `height` properties of nodes
   * when you resize them. Instead it changes `scaleX` and `scaleY` properties.
   * @constructor
   * @memberof Konva
   * @param {Object} config
   * @param {Boolean} [config.resizeEnabled] Default is true
   * @param {Boolean} [config.rotateEnabled] Default is true
   * @param {Array} [config.rotationSnaps] Array of angles for rotation snaps. Default is []
   * @param {Number} [config.rotateAnchorOffset] Default is 50
   * @param {Number} [config.padding] Default is 0
   * @param {Number} [config.borderEnabled] Should we draw border? Default is true
   * @param {String} [config.borderStroke] Border stroke color
   * @param {Number} [config.borderStrokeWidth] Border stroke size
   * @param {Array} [config.borderDash] Array for border dash.
   * @param {String} [config.anchorFill] Anchor fill color
   * @param {String} [config.anchorStroke] Anchor stroke color
   * @param {Number} [config.anchorStrokeWidth] Anchor stroke size
   * @param {Number} [config.anchorSize] Default is 10
   * @param {Boolean} [config.keepRatio] Should we keep ratio when we are moving edges? Default is true
   * @param {Array} [config.enabledAnchors] Array of names of enabled handles
   * @param {Function} [config.boundBoxFunc] Bounding box function
   * @example
   * var transformer = new Konva.Transformer({
   *   node: rectangle,
   *   rotateAnchorOffset: 60,
   *   enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
   * });
   * layer.add(transformer);
   */

  Konva.Transformer = function(config) {
    this.____init(config);
  };

  var RESIZERS_NAMES = [
    'top-left',
    'top-center',
    'top-right',
    'middle-right',
    'middle-left',
    'bottom-left',
    'bottom-center',
    'bottom-right'
  ];

  Konva.Transformer.prototype = {
    _centroid: false,
    ____init: function(config) {
      // call super constructor
      Konva.Group.call(this, config);
      this.className = 'Transformer';
      this._createElements();

      // bindings
      this._handleMouseMove = this._handleMouseMove.bind(this);
      this._handleMouseUp = this._handleMouseUp.bind(this);
      this.update = this.update.bind(this);

      // update transformer data for certain attr changes
      this.on(ATTR_CHANGE_LIST, this.update);

      if (this.getNode()) {
        this.update();
      }
    },

    /**
     * alias to `setNode`
     * @method
     * @memberof Konva.Transformer.prototype
     * @returns {Konva.Transformer}
     * @example
     * transformer.attachTo(shape);
     */
    attachTo: function(node) {
      this.setNode(node);
    },

    /**
     * attach transformer to a Konva.Node. Transformer will adapt to its size and listen its events
     * @method
     * @memberof Konva.Transformer.prototype
     * @returns {Konva.Transformer}
     * @example
     * transformer.setNode(shape);
     */
    setNode: function(node) {
      if (this._node) {
        this.detach();
      }
      this._node = node;
      this._resetTransformCache();

      node.on(TRANSFORM_CHANGE_STR, this._resetTransformCache.bind(this));
      node.on(
        REDRAW_CHANGE_STR,
        function() {
          if (!this._transforming) {
            this.update();
          }
        }.bind(this)
      );

      // TODO: why do we need this?
      var elementsCreated = !!this.findOne('.top-left');
      if (elementsCreated) {
        this.update();
      }
      return this;
    },

    getNode: function() {
      return this._node;
    },

    /**
     * detach transformer from a attached node
     * @method
     * @memberof Konva.Transformer.prototype
     * @returns {Konva.Transformer}
     * @example
     * transformer.detach();
     */
    detach: function() {
      if (this.getNode()) {
        this.getNode().off('.resizer');
        this._node = undefined;
      }
      this._resetTransformCache();
    },

    _resetTransformCache: function() {
      this._clearCache(NODE_RECT);
      this._clearCache('transform');
      this._clearSelfAndDescendantCache('absoluteTransform');
    },

    _getNodeRect: function() {
      return this._getCache(NODE_RECT, this.__getNodeRect);
    },

    __getNodeRect: function() {
      var node = this.getNode();
      if (!node) {
        return {
          x: -Number.MAX_SAFE_INTEGER,
          y: -Number.MAX_SAFE_INTEGER,
          width: 0,
          height: 0,
          rotation: 0
        };
      }
      var rect = node.getClientRect({ skipTransform: true });
      var rotation = Konva.getAngle(node.rotation());

      var dx = rect.x * node.scaleX() - node.offsetX() * node.scaleX();
      var dy = rect.y * node.scaleY() - node.offsetY() * node.scaleY();

      return {
        x: node.x() + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
        y: node.y() + dy * Math.cos(rotation) + dx * Math.sin(rotation),
        width: rect.width * node.scaleX(),
        height: rect.height * node.scaleY(),
        rotation: node.rotation()
      };
    },

    getX: function() {
      return this._getNodeRect().x;
    },

    getY: function() {
      return this._getNodeRect().y;
    },

    getRotation: function() {
      return this._getNodeRect().rotation;
    },

    getWidth: function() {
      return this._getNodeRect().width;
    },

    getHeight: function() {
      return this._getNodeRect().height;
    },

    _createElements: function() {
      this._createBack();

      RESIZERS_NAMES.forEach(
        function(name) {
          this._createAnchor(name);
        }.bind(this)
      );

      this._createAnchor('rotater');
    },

    _createAnchor: function(name) {
      var anchor = new Konva.Rect({
        stroke: 'rgb(0, 161, 255)',
        fill: 'white',
        strokeWidth: 1,
        name: name + ' _anchor',
        dragDistance: 0,
        draggable: true
      });
      var self = this;
      anchor.on('mousedown touchstart', function(e) {
        self._handleMouseDown(e);
      });
      anchor.on('dragstart', function(e) {
        e.cancelBubble = true;
      });
      anchor.on('dragmove', function(e) {
        e.cancelBubble = true;
      });
      anchor.on('dragend', function(e) {
        e.cancelBubble = true;
      });

      // add hover styling
      anchor.on('mouseenter', function() {
        var layer = this.getLayer();
        var tr = this.getParent();

        // TODO: I guess there are some ways to simplify that calculations
        // the basic idea is to find "angle" of handler
        var rad = Konva.getAngle(tr.rotation());

        // var cdx = tr.getWidth() / 2;
        // var cdy = tr.getHeight() / 2;

        // var parentPos = tr.getAbsolutePosition(tr.getParent());
        // var center = {
        //   x: parentPos.x + (cdx * Math.cos(rad) + cdy * Math.sin(-rad)),
        //   y: parentPos.y + (cdy * Math.cos(rad) + cdx * Math.sin(rad))
        // };

        // var pos = this.getAbsolutePosition(tr.getParent());

        // var dx = -pos.x + center.x;
        // var dy = -pos.y + center.y;

        // var angle = -Math.atan2(-dy, dx) - Math.PI / 2;
        var scale = tr.getNode().getAbsoluteScale();
        // If scale.y < 0 xor scale.x < 0 we need to flip (not rotate).
        var isMirrored = scale.y * scale.x < 0;
        var cursor = getCursor(name, rad, isMirrored);
        anchor.getStage().content.style.cursor = cursor;
        layer.batchDraw();
      });
      anchor.on('mouseout', function() {
        var layer = this.getLayer();
        if (!layer) {
          return;
        }
        anchor.getStage().content.style.cursor = '';
        layer.batchDraw();
      });
      this.add(anchor);
    },

    _createBack: function() {
      var back = new Konva.Shape({
        name: 'back',
        width: 0,
        height: 0,
        listening: false,
        sceneFunc: function(ctx) {
          var tr = this.getParent();
          var padding = tr.getPadding();
          ctx.beginPath();
          ctx.rect(
            -padding,
            -padding,
            this.width() + padding * 2,
            this.height() + padding * 2
          );
          ctx.moveTo(this.width() / 2, -padding);
          if (tr.rotateEnabled()) {
            ctx.lineTo(
              this.width() / 2,
              -tr.rotateAnchorOffset() * Konva.Util._sign(this.height())
            );
          }

          ctx.fillStrokeShape(this);
        }
      });
      this.add(back);
    },

    _handleMouseDown: function(e) {
      this.movingResizer = e.target.name().split(' ')[0];

      // var node = this.getNode();
      var attrs = this._getNodeRect();
      var width = attrs.width;
      var height = attrs.height;
      var hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
      this.sin = height / hypotenuse;
      this.cos = width / hypotenuse;

      window.addEventListener('mousemove', this._handleMouseMove);
      window.addEventListener('touchmove', this._handleMouseMove);
      window.addEventListener('mouseup', this._handleMouseUp, true);
      window.addEventListener('touchend', this._handleMouseUp, true);

      this._transforming = true;

      this.fire('transformstart');
      this.getNode().fire('transformstart');
    },

    _handleMouseMove: function(e) {
      var x, y, newHypotenuse;
      var resizerNode = this.findOne('.' + this.movingResizer);
      var stage = resizerNode.getStage();

      var box = stage.getContent().getBoundingClientRect();
      var zeroPoint = {
        x: box.left,
        y: box.top
      };
      var pointerPos = {
        left: e.clientX !== undefined ? e.clientX : e.touches[0].clientX,
        top: e.clientX !== undefined ? e.clientY : e.touches[0].clientY
      };
      var newAbsPos = {
        x: pointerPos.left - zeroPoint.x,
        y: pointerPos.top - zeroPoint.y
      };

      resizerNode.setAbsolutePosition(newAbsPos);

      var keepProportion = this.keepRatio() || e.shiftKey;

      if (this.movingResizer === 'top-left') {
        if (keepProportion) {
          newHypotenuse = Math.sqrt(
            Math.pow(this.findOne('.bottom-right').x() - resizerNode.x(), 2) +
              Math.pow(this.findOne('.bottom-right').y() - resizerNode.y(), 2)
          );

          x = newHypotenuse * this.cos;
          y = newHypotenuse * this.sin;

          this.findOne('.top-left').x(this.findOne('.bottom-right').x() - x);
          this.findOne('.top-left').y(this.findOne('.bottom-right').y() - y);
        }
      } else if (this.movingResizer === 'top-center') {
        this.findOne('.top-left').y(resizerNode.y());
      } else if (this.movingResizer === 'top-right') {
        if (keepProportion) {
          newHypotenuse = Math.sqrt(
            Math.pow(this.findOne('.bottom-left').x() - resizerNode.x(), 2) +
              Math.pow(this.findOne('.bottom-left').y() - resizerNode.y(), 2)
          );

          x = newHypotenuse * this.cos;
          y = newHypotenuse * this.sin;

          this.findOne('.top-right').x(x);
          this.findOne('.top-right').y(this.findOne('.bottom-left').y() - y);
        }
        var pos = resizerNode.position();

        this.findOne('.top-left').y(pos.y);
        this.findOne('.bottom-right').x(pos.x);
      } else if (this.movingResizer === 'middle-left') {
        this.findOne('.top-left').x(resizerNode.x());
      } else if (this.movingResizer === 'middle-right') {
        this.findOne('.bottom-right').x(resizerNode.x());
      } else if (this.movingResizer === 'bottom-left') {
        if (keepProportion) {
          newHypotenuse = Math.sqrt(
            Math.pow(this.findOne('.top-right').x() - resizerNode.x(), 2) +
              Math.pow(this.findOne('.top-right').y() - resizerNode.y(), 2)
          );

          x = newHypotenuse * this.cos;
          y = newHypotenuse * this.sin;

          this.findOne('.bottom-left').x(this.findOne('.top-right').x() - x);
          this.findOne('.bottom-left').y(y);
        }

        pos = resizerNode.position();

        this.findOne('.top-left').x(pos.x);
        this.findOne('.bottom-right').y(pos.y);
      } else if (this.movingResizer === 'bottom-center') {
        this.findOne('.bottom-right').y(resizerNode.y());
      } else if (this.movingResizer === 'bottom-right') {
        if (keepProportion) {
          newHypotenuse = Math.sqrt(
            Math.pow(this.findOne('.bottom-right').x(), 2) +
              Math.pow(this.findOne('.bottom-right').y(), 2)
          );

          x = newHypotenuse * this.cos;
          y = newHypotenuse * this.sin;

          this.findOne('.bottom-right').x(x);
          this.findOne('.bottom-right').y(y);
        }
      } else if (this.movingResizer === 'rotater') {
        var padding = this.getPadding();
        var attrs = this._getNodeRect();
        x = resizerNode.x() - attrs.width / 2;
        y = -resizerNode.y() + attrs.height / 2;

        var dAlpha = Math.atan2(-y, x) + Math.PI / 2;

        if (attrs.height < 0) {
          dAlpha -= Math.PI;
        }

        var rot = Konva.getAngle(this.rotation());

        var newRotation =
          Konva.Util._radToDeg(rot) + Konva.Util._radToDeg(dAlpha);

        var alpha = Konva.getAngle(this.getNode().rotation());
        var newAlpha = Konva.Util._degToRad(newRotation);

        var snaps = this.rotationSnaps();
        var offset = 0.1;
        for (var i = 0; i < snaps.length; i++) {
          var angle = Konva.getAngle(snaps[i]);

          var dif =
            Math.abs(angle - Konva.Util._degToRad(newRotation)) % (Math.PI * 2);

          if (dif < offset) {
            newRotation = Konva.Util._radToDeg(angle);
            newAlpha = Konva.Util._degToRad(newRotation);
          }
        }

        var dx = padding;
        var dy = padding;

        this._fitNodeInto({
          rotation: Konva.angleDeg
            ? newRotation
            : Konva.Util._degToRad(newRotation),
          x:
            attrs.x +
            (attrs.width / 2 + padding) *
              (Math.cos(alpha) - Math.cos(newAlpha)) +
            (attrs.height / 2 + padding) *
              (Math.sin(-alpha) - Math.sin(-newAlpha)) -
            (dx * Math.cos(rot) + dy * Math.sin(-rot)),
          y:
            attrs.y +
            (attrs.height / 2 + padding) *
              (Math.cos(alpha) - Math.cos(newAlpha)) +
            (attrs.width / 2 + padding) *
              (Math.sin(alpha) - Math.sin(newAlpha)) -
            (dy * Math.cos(rot) + dx * Math.sin(rot)),
          width: attrs.width + padding * 2,
          height: attrs.height + padding * 2
        });
      } else {
        console.error(
          new Error(
            'Wrong position argument of selection resizer: ',
            this.movingResizer
          )
        );
      }

      if (this.movingResizer === 'rotater') {
        return;
      }

      var absPos = this.findOne('.top-left').getAbsolutePosition(
        this.getParent()
      );

      x = absPos.x;
      y = absPos.y;
      var width =
        this.findOne('.bottom-right').x() - this.findOne('.top-left').x();

      var height =
        this.findOne('.bottom-right').y() - this.findOne('.top-left').y();

      this._fitNodeInto({
        x: x + this.offsetX(),
        y: y + this.offsetY(),
        width: width,
        height: height
      });
    },

    _handleMouseUp: function() {
      this._removeEvents();
    },

    _removeEvents: function() {
      if (this._transforming) {
        this._transforming = false;
        window.removeEventListener('mousemove', this._handleMouseMove);
        window.removeEventListener('touchmove', this._handleMouseMove);
        window.removeEventListener('mouseup', this._handleMouseUp, true);
        window.removeEventListener('touchend', this._handleMouseUp, true);
        this.fire('transformend');
        var node = this.getNode();
        if (node) {
          node.fire('transformend');
        }
      }
    },

    _fitNodeInto: function(newAttrs) {
      // waring! in this attrs padding may be included
      var boundBoxFunc = this.getBoundBoxFunc();
      if (boundBoxFunc) {
        var oldAttrs = this._getNodeRect();
        newAttrs = boundBoxFunc.call(this, oldAttrs, newAttrs);
      }
      this._settings = true;
      var node = this.getNode();
      if (newAttrs.rotation !== undefined) {
        this.getNode().rotation(newAttrs.rotation);
      }
      var pure = node.getClientRect({ skipTransform: true });
      var padding = this.getPadding();
      var scaleX = (newAttrs.width - padding * 2) / pure.width;
      var scaleY = (newAttrs.height - padding * 2) / pure.height;

      var rotation = Konva.getAngle(node.getRotation());
      var dx = pure.x * scaleX - padding - node.offsetX() * scaleX;
      var dy = pure.y * scaleY - padding - node.offsetY() * scaleY;

      this.getNode().setAttrs({
        scaleX: scaleX,
        scaleY: scaleY,
        x: newAttrs.x - (dx * Math.cos(rotation) + dy * Math.sin(-rotation)),
        y: newAttrs.y - (dy * Math.cos(rotation) + dx * Math.sin(rotation))
      });
      this._settings = false;

      this.fire('transform');
      this.getNode().fire('transform');
      this.update();
      this.getLayer().batchDraw();
    },
    /**
     * force update of Konva.Transformer.
     * Use it when you updated attached Konva.Group and now you need to reset transformer size
     * @method
     * @memberof Konva.Transformer.prototype
     */
    forceUpdate: function() {
      this._resetTransformCache();
      this.update();
    },
    update: function() {
      var attrs = this._getNodeRect();
      var node = this.getNode();
      var scale = { x: 1, y: 1 };
      if (node && node.getParent()) {
        scale = node.getParent().getAbsoluteScale();
      }
      var invertedScale = {
        x: 1 / scale.x,
        y: 1 / scale.y
      };
      var width = attrs.width;
      var height = attrs.height;

      var enabledAnchors = this.enabledAnchors();
      var resizeEnabled = this.resizeEnabled();
      var padding = this.getPadding();

      var anchorSize = this.getAnchorSize();
      this.find('._anchor').setAttrs({
        width: anchorSize,
        height: anchorSize,
        offsetX: anchorSize / 2,
        offsetY: anchorSize / 2,
        stroke: this.getAnchorStroke(),
        strokeWidth: this.getAnchorStrokeWidth(),
        fill: this.getAnchorFill()
      });

      this.findOne('.top-left').setAttrs({
        x: -padding,
        y: -padding,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('top-left') >= 0
      });
      this.findOne('.top-center').setAttrs({
        x: width / 2,
        y: -padding,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('top-center') >= 0
      });
      this.findOne('.top-right').setAttrs({
        x: width + padding,
        y: -padding,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('top-right') >= 0
      });
      this.findOne('.middle-left').setAttrs({
        x: -padding,
        y: height / 2,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('middle-left') >= 0
      });
      this.findOne('.middle-right').setAttrs({
        x: width + padding,
        y: height / 2,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('middle-right') >= 0
      });
      this.findOne('.bottom-left').setAttrs({
        x: -padding,
        y: height + padding,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('bottom-left') >= 0
      });
      this.findOne('.bottom-center').setAttrs({
        x: width / 2,
        y: height + padding,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('bottom-center') >= 0
      });
      this.findOne('.bottom-right').setAttrs({
        x: width + padding,
        y: height + padding,
        scale: invertedScale,
        visible: resizeEnabled && enabledAnchors.indexOf('bottom-right') >= 0
      });

      var scaledRotateAnchorOffset =
        -this.rotateAnchorOffset() * Math.abs(invertedScale.y);
      this.findOne('.rotater').setAttrs({
        x: width / 2,
        y: scaledRotateAnchorOffset * Konva.Util._sign(height),
        scale: invertedScale,
        visible: this.rotateEnabled()
      });

      this.findOne('.back').setAttrs({
        width: width * scale.x,
        height: height * scale.y,
        scale: invertedScale,
        visible: this.borderEnabled(),
        stroke: this.getBorderStroke(),
        strokeWidth: this.getBorderStrokeWidth(),
        dash: this.getBorderDash()
      });
    },
    /**
     * determine if transformer is in active transform
     * @method
     * @memberof Konva.Transformer.prototype
     * @returns {Boolean}
     */
    isTransforming: function() {
      return this._transforming;
    },
    /**
     * Stop active transform action
     * @method
     * @memberof Konva.Transformer.prototype
     * @returns {Boolean}
     */
    stopTransform: function() {
      if (this._transforming) {
        this._removeEvents();
        var resizerNode = this.findOne('.' + this.movingResizer);
        if (resizerNode) {
          resizerNode.stopDrag();
        }
      }
    },
    destroy: function() {
      Konva.Group.prototype.destroy.call(this);
      this.detach();
      this._removeEvents();
    },
    // do not work as a container
    // we will recreate inner nodes manually
    toObject: function() {
      return Konva.Node.prototype.toObject.call(this);
    }
  };
  Konva.Util.extend(Konva.Transformer, Konva.Group);

  function validateResizers(val) {
    if (!(val instanceof Array)) {
      Konva.Util.warn('enabledAnchors value should be an array');
    }
    if (val instanceof Array) {
      val.forEach(function(name) {
        if (RESIZERS_NAMES.indexOf(name) === -1) {
          Konva.Util.warn(
            'Unknown resizer name: ' +
              name +
              '. Available names are: ' +
              RESIZERS_NAMES.join(', ')
          );
        }
      });
    }
    return val || [];
  }

  /**
   * get/set enabled handlers
   * @name enabledAnchors
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Array} array
   * @returns {Array}
   * @example
   * // get list of handlers
   * var enabledAnchors = transformer.enabledAnchors();
   *
   * // set handlers
   * transformer.enabledAnchors(['top-left', 'top-center', 'top-right', 'middle-right', 'middle-left', 'bottom-left', 'bottom-center', 'bottom-right']);
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'enabledAnchors',
    RESIZERS_NAMES,
    validateResizers
  );

  /**
   * get/set resize ability. If false it will automatically hide resizing handlers
   * @name resizeEnabled
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Array} array
   * @returns {Array}
   * @example
   * // get
   * var resizeEnabled = transformer.resizeEnabled();
   *
   * // set
   * transformer.resizeEnabled(false);
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'resizeEnabled', true);
  /**
   * get/set anchor size. Default is 10
   * @name validateAnchors
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Number} 10
   * @returns {Number}
   * @example
   * // get
   * var anchorSize = transformer.anchorSize();
   *
   * // set
   * transformer.anchorSize(20)
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'anchorSize',
    10,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set ability to rotate.
   * @name rotateEnabled
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var rotateEnabled = transformer.rotateEnabled();
   *
   * // set
   * transformer.rotateEnabled(false);
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'rotateEnabled', true);

  /**
   * get/set rotation snaps angles.
   * @name rotationSnaps
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Array} array
   * @returns {Array}
   * @example
   * // get
   * var rotationSnaps = transformer.rotationSnaps();
   *
   * // set
   * transformer.rotationSnaps([0, 90, 180, 270]);
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'rotationSnaps', []);

  /**
   * get/set distance for rotation handler
   * @name rotateAnchorOffset
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Number} offset
   * @returns {Number}
   * @example
   * // get
   * var rotateAnchorOffset = transformer.rotateAnchorOffset();
   *
   * // set
   * transformer.rotateAnchorOffset(100);
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'rotateAnchorOffset',
    50,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set visibility of border
   * @name borderEnabled
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var borderEnabled = transformer.borderEnabled();
   *
   * // set
   * transformer.borderEnabled(false);
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'borderEnabled', true);

  /**
   * get/set anchor stroke color
   * @name anchorStroke
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var anchorStroke = transformer.anchorStroke();
   *
   * // set
   * transformer.anchorStroke('red');
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'anchorStroke',
    'rgb(0, 161, 255)'
  );

  /**
   * get/set anchor stroke width
   * @name anchorStrokeWidth
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var anchorStrokeWidth = transformer.anchorStrokeWidth();
   *
   * // set
   * transformer.anchorStrokeWidth(3);
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'anchorStrokeWidth',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set anchor fill color
   * @name anchorFill
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var anchorFill = transformer.anchorFill();
   *
   * // set
   * transformer.anchorFill('red');
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'anchorFill', 'white');

  /**
   * get/set border stroke color
   * @name borderStroke
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var borderStroke = transformer.borderStroke();
   *
   * // set
   * transformer.borderStroke('red');
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'borderStroke',
    'rgb(0, 161, 255)'
  );

  /**
   * get/set border stroke width
   * @name borderStrokeWidth
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var borderStrokeWidth = transformer.borderStrokeWidth();
   *
   * // set
   * transformer.borderStrokeWidth(3);
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'borderStrokeWidth',
    1,
    Konva.Validators.getNumberValidator()
  );

  /**
   * get/set border dash array
   * @name borderDash
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} enabled
   * @returns {Boolean}
   * @example
   * // get
   * var borderDash = transformer.borderDash();
   *
   * // set
   * transformer.borderDash([2, 2]);
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'borderDash');

  /**
   * get/set should we keep ration of resize?
   * @name keepRatio
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Boolean} keepRatio
   * @returns {Boolean}
   * @example
   * // get
   * var keepRatio = transformer.keepRatio();
   *
   * // set
   * transformer.keepRatio(false);
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'keepRatio', true);

  /**
   * get/set padding
   * @name padding
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Number} padding
   * @returns {Number}
   * @example
   * // get
   * var padding = transformer.padding();
   *
   * // set
   * transformer.padding(10);
   */
  Konva.Factory.addGetterSetter(
    Konva.Transformer,
    'padding',
    0,
    Konva.Validators.getNumberValidator()
  );

  Konva.Factory.addOverloadedGetterSetter(Konva.Transformer, 'node');

  /**
   * get/set bounding box function
   * @name boundBoxFunc
   * @method
   * @memberof Konva.Transformer.prototype
   * @param {Function} func
   * @returns {Function}
   * @example
   * // get
   * var boundBoxFunc = transformer.boundBoxFunc();
   *
   * // set
   * transformer.boundBoxFunc(function(oldBox, newBox) {
   *   if (newBox.width > 200) {
   *     return oldBox;
   *   }
   *   return newBox;
   * });
   */
  Konva.Factory.addGetterSetter(Konva.Transformer, 'boundBoxFunc');

  Konva.Factory.backCompat(Konva.Transformer, {
    lineEnabled: 'borderEnabled',
    rotateHandlerOffset: 'rotateAnchorOffset',
    enabledHandlers: 'enabledAnchors'
  });

  Konva.Collection.mapMethods(Konva.Transformer);
})(Konva);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-konva/lib/ReactDOMComponentTree.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-konva/lib/ReactDOMComponentTree.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getClosestInstanceFromNode = getClosestInstanceFromNode;
// from https://github.com/facebook/react/blob/87ae211ccd8d61796cfdef138d1e12fb7a74f85d/packages/shared/ReactTypeOfWork.js
var HostComponent = 5;
var HostText = 6;

// adapted FROM: https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMComponentTree.js

var randomKey = Math.random().toString(36).slice(2);
var internalInstanceKey = '__reactInternalInstance$' + randomKey;

/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function getClosestInstanceFromNode(node) {
  if (node[internalInstanceKey]) {
    return node[internalInstanceKey];
  }

  while (!node[internalInstanceKey]) {
    if (node.parentNode) {
      node = node.parentNode;
    } else {
      // Top of the tree. This node must not be part of a React tree (or is
      // unmounted, potentially).
      return null;
    }
  }

  var inst = node[internalInstanceKey];
  if (inst.tag === HostComponent || inst.tag === HostText) {
    // In Fiber, this will always be the deepest root.
    return inst;
  }

  return null;
}

/***/ }),

/***/ "./node_modules/react-konva/lib/ReactDOMFrameScheduling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-konva/lib/ReactDOMFrameScheduling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// adapted FROM: https://github.com/facebook/react/blob/3019210df2b486416ed94d7b9becffaf254e81c4/src/renderers/shared/ReactDOMFrameScheduling.js



// This is a built-in polyfill for requestIdleCallback. It works by scheduling
// a requestAnimationFrame, storing the time for the start of the frame, then
// scheduling a postMessage which gets scheduled after paint. Within the
// postMessage handler do as much work as possible until time + frame rate.
// By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

var hasNativePerformanceNow = (typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) === 'object' && typeof performance.now === 'function';

var now = void 0;
if (hasNativePerformanceNow) {
  now = function now() {
    return performance.now();
  };
} else {
  now = function now() {
    return Date.now();
  };
}

// TODO: There's no way to cancel, because Fiber doesn't atm.
var rIC = void 0;

if (!ExecutionEnvironment.canUseDOM) {
  rIC = function rIC(frameCallback) {
    setTimeout(function () {
      frameCallback({
        timeRemaining: function timeRemaining() {
          return Infinity;
        }
      });
    });
    return 0;
  };
} else if (typeof requestIdleCallback !== 'function') {
  // Polyfill requestIdleCallback.

  var scheduledRAFCallback = null;
  var scheduledRICCallback = null;

  var isIdleScheduled = false;
  var isAnimationFrameScheduled = false;

  var frameDeadline = 0;
  // We start out assuming that we run at 30fps but then the heuristic tracking
  // will adjust this value to a faster fps if we get more frequent animation
  // frames.
  var previousFrameTime = 33;
  var activeFrameTime = 33;

  var frameDeadlineObject;
  if (hasNativePerformanceNow) {
    frameDeadlineObject = {
      timeRemaining: function timeRemaining() {
        // We assume that if we have a performance timer that the rAF callback
        // gets a performance timer value. Not sure if this is always true.
        return frameDeadline - performance.now();
      }
    };
  } else {
    frameDeadlineObject = {
      timeRemaining: function timeRemaining() {
        // Fallback to Date.now()
        return frameDeadline - Date.now();
      }
    };
  }

  // We use the postMessage trick to defer idle work until after the repaint.
  var messageKey = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
  var idleTick = function idleTick(event) {
    if (event.source !== window || event.data !== messageKey) {
      return;
    }
    isIdleScheduled = false;
    var callback = scheduledRICCallback;
    scheduledRICCallback = null;
    if (callback !== null) {
      callback(frameDeadlineObject);
    }
  };
  // Assumes that we have addEventListener in this environment. Might need
  // something better for old IE.
  window.addEventListener('message', idleTick, false);

  var animationTick = function animationTick(rafTime) {
    isAnimationFrameScheduled = false;
    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
      if (nextFrameTime < 8) {
        // Defensive coding. We don't support higher frame rates than 120hz.
        // If we get lower than that, it is probably a bug.
        nextFrameTime = 8;
      }
      // If one frame goes long, then the next one can be short to catch up.
      // If two frames are short in a row, then that's an indication that we
      // actually have a higher frame rate than what we're currently optimizing.
      // We adjust our heuristic dynamically accordingly. For example, if we're
      // running on 120hz display or 90hz VR display.
      // Take the max of the two in case one of them was an anomaly due to
      // missed frame deadlines.
      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
    } else {
      previousFrameTime = nextFrameTime;
    }
    frameDeadline = rafTime + activeFrameTime;
    if (!isIdleScheduled) {
      isIdleScheduled = true;
      window.postMessage(messageKey, '*');
    }
    var callback = scheduledRAFCallback;
    scheduledRAFCallback = null;
    if (callback !== null) {
      callback(rafTime);
    }
  };

  rIC = function rIC(callback) {
    // This assumes that we only schedule one callback at a time because that's
    // how Fiber uses it.
    scheduledRICCallback = callback;
    if (!isAnimationFrameScheduled) {
      // If rAF didn't already schedule one, we need to schedule a frame.
      // TODO: If this rAF doesn't materialize because the browser throttles, we
      // might want to still have setTimeout trigger rIC as a backup to ensure
      // that we keep performing work.
      isAnimationFrameScheduled = true;
      requestAnimationFrame(animationTick);
    }
    return 0;
  };
} else {
  rIC = requestIdleCallback;
}

exports.now = now;
exports.rIC = rIC;

/***/ }),

/***/ "./node_modules/react-konva/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-konva/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Based on ReactKonva.js
 * Copyright (c) 2017-present Lavrenov Anton.
 * All rights reserved.
 *
 * MIT
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var React = __webpack_require__(/*! react */ "react");
var Konva = __webpack_require__(/*! konva */ "./node_modules/konva/konva.js");
var ReactFiberReconciler = __webpack_require__(/*! react-reconciler */ "./node_modules/react-reconciler/index.js");
// const ReactScheduler = require('react-scheduler');
var ReactDOMFrameScheduling = __webpack_require__(/*! ./ReactDOMFrameScheduling */ "./node_modules/react-konva/lib/ReactDOMFrameScheduling.js");
var ReactDOMComponentTree = __webpack_require__(/*! ./ReactDOMComponentTree */ "./node_modules/react-konva/lib/ReactDOMComponentTree.js");

var Component = React.Component;


var EVENTS_NAMESPACE = '.react-konva-event';

var propsToSkip = { children: true, ref: true, key: true, style: true };

var idWarningShowed = false;
var zIndexWarningShowed = false;

function applyNodeProps(instance, props) {
  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!idWarningShowed && 'id' in props) {
    var message = 'ReactKonva: You are using "id" attribute for a Konva node. In some very rare cases it may produce bugs. Currently we recommend not to use it and use "name" attribute instead.\nYou are using id = "' + props.id + '".\nFor me info see: https://github.com/konvajs/react-konva/issues/119';
    console.warn(message);
    idWarningShowed = true;
  }

  if (!zIndexWarningShowed && 'zIndex' in props) {
    var _message = 'ReactKonva: You are using "zIndex" attribute for a Konva node.\nreact-konva may get confused with ordering. Just define correct order of elements in your render function of a component.\nFor me info see: https://github.com/konvajs/react-konva/issues/194\n';
    console.warn(_message);
    zIndexWarningShowed = true;
  }

  var updatedProps = {};
  var hasUpdates = false;
  for (var key in oldProps) {
    if (propsToSkip[key]) {
      continue;
    }
    var isEvent = key.slice(0, 2) === 'on';
    var propChanged = oldProps[key] !== props[key];
    if (isEvent && propChanged) {
      var eventName = key.substr(2).toLowerCase();
      if (eventName.substr(0, 7) === 'content') {
        eventName = 'content' + eventName.substr(7, 1).toUpperCase() + eventName.substr(8);
      }
      instance.off(eventName, oldProps[key]);
    }
    var toRemove = !props.hasOwnProperty(key);
    if (toRemove) {
      instance.setAttr(key, undefined);
    }
  }
  for (var key in props) {
    if (propsToSkip[key]) {
      continue;
    }
    var isEvent = key.slice(0, 2) === 'on';
    var toAdd = oldProps[key] !== props[key];
    if (isEvent && toAdd) {
      var eventName = key.substr(2).toLowerCase();
      if (eventName.substr(0, 7) === 'content') {
        eventName = 'content' + eventName.substr(7, 1).toUpperCase() + eventName.substr(8);
      }
      if (props[key]) {
        instance.on(eventName + EVENTS_NAMESPACE, props[key]);
      }
    }
    if (!isEvent && (props[key] !== oldProps[key] || props[key] !== instance.getAttr(key))) {
      hasUpdates = true;
      updatedProps[key] = props[key];
    }
  }

  if (hasUpdates) {
    instance.setAttrs(updatedProps);
    updatePicture(instance);
  }
}

function updatePicture(node) {
  var drawingNode = node.getLayer() || node.getStage();
  drawingNode && drawingNode.batchDraw();
}

var Stage = function (_Component) {
  _inherits(Stage, _Component);

  function Stage() {
    _classCallCheck(this, Stage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Stage.prototype.componentDidMount = function componentDidMount() {
    if (!Konva.isBrowser) {
      return;
    }
    this._stage = new Konva.Stage({
      width: this.props.width,
      height: this.props.height,
      container: this._tagRef
    });

    applyNodeProps(this._stage, this.props);

    this._mountNode = KonvaRenderer.createContainer(this._stage);
    KonvaRenderer.updateContainer(this.props.children, this._mountNode, this);
  };

  Stage.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (!Konva.isBrowser) {
      return;
    }
    applyNodeProps(this._stage, this.props, prevProps);

    KonvaRenderer.updateContainer(this.props.children, this._mountNode, this);
  };

  Stage.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!Konva.isBrowser) {
      return;
    }
    KonvaRenderer.updateContainer(null, this._mountNode, this);
    this._stage.destroy();
  };

  Stage.prototype.getStage = function getStage() {
    return this._stage;
  };

  Stage.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;

    return React.createElement('div', {
      ref: function ref(_ref) {
        return _this2._tagRef = _ref;
      },
      accessKey: props.accessKey,
      className: props.className,
      role: props.role,
      style: props.style,
      tabIndex: props.tabIndex,
      title: props.title
    });
  };

  return Stage;
}(Component);

var KONVA_NODES = ['Layer', 'FastLayer', 'Group', 'Label', 'Rect', 'Circle', 'Ellipse', 'Wedge', 'Line', 'Sprite', 'Image', 'Text', 'TextPath', 'Star', 'Ring', 'Arc', 'Tag', 'Path', 'RegularPolygon', 'Arrow', 'Shape', 'Transformer'];

var TYPES = {};

KONVA_NODES.forEach(function (nodeName) {
  TYPES[nodeName] = nodeName;
});

var UPDATE_SIGNAL = {};

var KonvaRenderer = ReactFiberReconciler({
  appendInitialChild: function appendInitialChild(parentInstance, child) {
    if (typeof child === 'string') {
      // Noop for string children of Text (eg <Text>{'foo'}{'bar'}</Text>)
      invariant(false, 'Don not use plain text as child of Konva.Node. You are using text: "%s"', child);
      return;
    }

    parentInstance.add(child);

    updatePicture(parentInstance);
  },
  createInstance: function createInstance(type, props, internalInstanceHandle) {
    var NodeClass = Konva[type];
    if (!NodeClass) {
      invariant(instance, 'ReactKonva does not support the type "%s"', type);
      return;
    }

    var instance = new NodeClass();
    instance._applyProps = applyNodeProps;
    instance._applyProps(instance, props);

    return instance;
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    invariant(false, 'Text components are not supported for now in ReactKonva. You text is: "' + text + '"');
  },
  finalizeInitialChildren: function finalizeInitialChildren(domElement, type, props) {
    return false;
  },
  getPublicInstance: function getPublicInstance(instance) {
    return instance;
  },
  prepareForCommit: function prepareForCommit() {
    // Noop
  },
  prepareUpdate: function prepareUpdate(domElement, type, oldProps, newProps) {
    return UPDATE_SIGNAL;
  },
  resetAfterCommit: function resetAfterCommit() {
    // Noop
  },
  resetTextContent: function resetTextContent(domElement) {
    // Noop
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree(type, props) {
    return false;
  },
  getRootHostContext: function getRootHostContext() {
    return emptyObject;
  },
  getChildHostContext: function getChildHostContext() {
    return emptyObject;
  },


  scheduleDeferredCallback: ReactDOMFrameScheduling.rIC,

  shouldSetTextContent: function shouldSetTextContent(type, props) {
    return false;
  },


  // cancelDeferredCallback: ReactScheduler.cancelDeferredCallback,
  now: ReactDOMFrameScheduling.now,

  // The Konva renderer is secondary to the React DOM renderer.
  isPrimaryRenderer: false,

  supportsMutation: true,

  // useSyncScheduling: true,

  appendChild: function appendChild(parentInstance, child) {
    if (child.parent === parentInstance) {
      child.moveToTop();
    } else {
      parentInstance.add(child);
    }

    updatePicture(parentInstance);
  },
  appendChildToContainer: function appendChildToContainer(parentInstance, child) {
    if (child.parent === parentInstance) {
      child.moveToTop();
    } else {
      parentInstance.add(child);
    }
    updatePicture(parentInstance);
  },
  insertBefore: function insertBefore(parentInstance, child, beforeChild) {
    invariant(child !== beforeChild, 'ReactKonva: Can not insert node before itself');
    // remove and add back to reset zIndex
    child.remove();
    parentInstance.add(child);
    child.setZIndex(beforeChild.getZIndex());
    updatePicture(parentInstance);
  },
  insertInContainerBefore: function insertInContainerBefore(parentInstance, child, beforeChild) {
    invariant(child !== beforeChild, 'ReactKonva: Can not insert node before itself');
    // remove and add back to reset zIndex
    child.remove();
    parentInstance.add(child);
    child.setZIndex(beforeChild.getZIndex());
    updatePicture(parentInstance);
  },
  removeChild: function removeChild(parentInstance, child) {
    child.destroy();
    child.off(EVENTS_NAMESPACE);
    updatePicture(parentInstance);
  },
  removeChildFromContainer: function removeChildFromContainer(parentInstance, child) {
    child.destroy();
    child.off(EVENTS_NAMESPACE);
    updatePicture(parentInstance);
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
    invariant(false, 'Text components are not yet supported in ReactKonva. You text is: "' + newText + '"');
  },
  commitMount: function commitMount(instance, type, newProps) {
    // Noop
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    instance._applyProps(instance, newProps, oldProps);
  }
});

var foundDevTools = KonvaRenderer.injectIntoDevTools({
  findFiberByHostInstance: ReactDOMComponentTree.getClosestInstanceFromNode,
  bundleType:  true ? 1 : undefined,
  version: React.version || 16,
  rendererPackageName: 'react-konva',
  getInspectorDataForViewTag: function getInspectorDataForViewTag() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log(args);
  }
});

/** API */

module.exports = Object.assign({}, TYPES, { Stage: Stage });

/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react-reconciler.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  module.exports = function $$$reconciler($$$hostConfig) {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var React = __webpack_require__(/*! react */ "react");
var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");
var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/fbjs/lib/shallowEqual.js");

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */

/**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */


function get(key) {
  return key._reactInternalFiber;
}



function set(key, value) {
  key._reactInternalFiber = value;
}

var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ReactCurrentOwner = ReactInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame = ReactInternals.ReactDebugCurrentFrame;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_CONTEXT_TYPE:
      return 'Context.Consumer';
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_PROFILER_TYPE:
      return 'Profiler(' + fiber.pendingProps.id + ')';
    case REACT_PROVIDER_TYPE:
      return 'Context.Provider';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_TIMEOUT_TYPE:
      return 'Timeout';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

var IndeterminateComponent = 0; // Before we know whether it is functional or class
var FunctionalComponent = 1;
var ClassComponent = 2;
var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
var HostComponent = 5;
var HostText = 6;



var Fragment = 10;
var Mode = 11;
var ContextConsumer = 12;
var ContextProvider = 13;
var ForwardRef = 14;
var Profiler = 15;
var TimeoutComponent = 16;

// Don't change these two values. They're used by React Dev Tools.
var NoEffect = /*              */0;
var PerformedWork = /*         */1;

// You can change the rest (and add more).
var Placement = /*             */2;
var Update = /*                */4;
var PlacementAndUpdate = /*    */6;
var Deletion = /*              */8;
var ContentReset = /*          */16;
var Callback = /*              */32;
var DidCapture = /*            */64;
var Ref = /*                   */128;
var Snapshot = /*              */256;

// Union of all host effects
var HostEffectMask = /*        */511;

var Incomplete = /*            */512;
var ShouldCapture = /*         */1024;

var MOUNTING = 1;
var MOUNTED = 2;
var UNMOUNTED = 3;

function isFiberMountedImpl(fiber) {
  var node = fiber;
  if (!fiber.alternate) {
    // If there is no alternate, this might be a new tree that isn't inserted
    // yet. If it is, then it will have a pending insertion effect on it.
    if ((node.effectTag & Placement) !== NoEffect) {
      return MOUNTING;
    }
    while (node.return) {
      node = node.return;
      if ((node.effectTag & Placement) !== NoEffect) {
        return MOUNTING;
      }
    }
  } else {
    while (node.return) {
      node = node.return;
    }
  }
  if (node.tag === HostRoot) {
    // TODO: Check if this was a nested HostRoot when used with
    // renderContainerIntoSubtree.
    return MOUNTED;
  }
  // If we didn't hit the root, that means that we're in an disconnected tree
  // that has been unmounted.
  return UNMOUNTED;
}

function isFiberMounted(fiber) {
  return isFiberMountedImpl(fiber) === MOUNTED;
}

function isMounted(component) {
  {
    var owner = ReactCurrentOwner.current;
    if (owner !== null && owner.tag === ClassComponent) {
      var ownerFiber = owner;
      var instance = ownerFiber.stateNode;
      !instance._warnedAboutRefsInRender ? warning(false, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber) || 'A component') : void 0;
      instance._warnedAboutRefsInRender = true;
    }
  }

  var fiber = get(component);
  if (!fiber) {
    return false;
  }
  return isFiberMountedImpl(fiber) === MOUNTED;
}

function assertIsMounted(fiber) {
  !(isFiberMountedImpl(fiber) === MOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
}

function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    // If there is no alternate, then we only need to check if it is mounted.
    var state = isFiberMountedImpl(fiber);
    !(state !== UNMOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
    if (state === MOUNTING) {
      return null;
    }
    return fiber;
  }
  // If we have two possible branches, we'll walk backwards up to the root
  // to see what path the root points to. On the way we may hit one of the
  // special cases and we'll deal with them.
  var a = fiber;
  var b = alternate;
  while (true) {
    var parentA = a.return;
    var parentB = parentA ? parentA.alternate : null;
    if (!parentA || !parentB) {
      // We're at the root.
      break;
    }

    // If both copies of the parent fiber point to the same child, we can
    // assume that the child is current. This happens when we bailout on low
    // priority: the bailed out fiber's child reuses the current child.
    if (parentA.child === parentB.child) {
      var child = parentA.child;
      while (child) {
        if (child === a) {
          // We've determined that A is the current branch.
          assertIsMounted(parentA);
          return fiber;
        }
        if (child === b) {
          // We've determined that B is the current branch.
          assertIsMounted(parentA);
          return alternate;
        }
        child = child.sibling;
      }
      // We should never have an alternate for any mounting node. So the only
      // way this could possibly happen is if this was unmounted, if at all.
      invariant(false, 'Unable to find node on an unmounted component.');
    }

    if (a.return !== b.return) {
      // The return pointer of A and the return pointer of B point to different
      // fibers. We assume that return pointers never criss-cross, so A must
      // belong to the child set of A.return, and B must belong to the child
      // set of B.return.
      a = parentA;
      b = parentB;
    } else {
      // The return pointers point to the same fiber. We'll have to use the
      // default, slow path: scan the child sets of each parent alternate to see
      // which child belongs to which set.
      //
      // Search parent A's child set
      var didFindChild = false;
      var _child = parentA.child;
      while (_child) {
        if (_child === a) {
          didFindChild = true;
          a = parentA;
          b = parentB;
          break;
        }
        if (_child === b) {
          didFindChild = true;
          b = parentA;
          a = parentB;
          break;
        }
        _child = _child.sibling;
      }
      if (!didFindChild) {
        // Search parent B's child set
        _child = parentB.child;
        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentB;
            b = parentA;
            break;
          }
          if (_child === b) {
            didFindChild = true;
            b = parentB;
            a = parentA;
            break;
          }
          _child = _child.sibling;
        }
        !didFindChild ? invariant(false, 'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.') : void 0;
      }
    }

    !(a.alternate === b) ? invariant(false, 'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  }
  // If the root is not a host container, we're in a disconnected tree. I.e.
  // unmounted.
  !(a.tag === HostRoot) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
  if (a.stateNode.current === a) {
    // We've determined that A is the current branch.
    return fiber;
  }
  // Otherwise B has to be current branch.
  return alternate;
}

function findCurrentHostFiber(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);
  if (!currentParent) {
    return null;
  }

  // Next we'll drill down this component to find the first HostComponent/Text.
  var node = currentParent;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      return node;
    } else if (node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === currentParent) {
      return null;
    }
    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;
}

function findCurrentHostFiberWithNoPortals(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);
  if (!currentParent) {
    return null;
  }

  // Next we'll drill down this component to find the first HostComponent/Text.
  var node = currentParent;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      return node;
    } else if (node.child && node.tag !== HostPortal) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === currentParent) {
      return null;
    }
    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;
}

// eslint-disable-line no-undef

// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
var getPublicInstance = $$$hostConfig.getPublicInstance; // eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// This is a host config that's used for the `react-reconciler` package on npm.
// It is only used by third-party renderers.
//
// Its API lets you pass the host config as an argument.
// However, inside the `react-reconciler` we treat host config as a module.
// This file is a shim between two worlds.
//
// It works because the `react-reconciler` bundle is wrapped in something like:
//
// module.exports = function ($$$config) {
//   /* reconciler code */
// }
//
// So `$$$config` looks like a global variable, but it's
// really an argument to a top-level wrapping function.

var getRootHostContext = $$$hostConfig.getRootHostContext;
var getChildHostContext = $$$hostConfig.getChildHostContext;
var prepareForCommit = $$$hostConfig.prepareForCommit;
var resetAfterCommit = $$$hostConfig.resetAfterCommit;
var createInstance = $$$hostConfig.createInstance;
var appendInitialChild = $$$hostConfig.appendInitialChild;
var finalizeInitialChildren = $$$hostConfig.finalizeInitialChildren;
var prepareUpdate = $$$hostConfig.prepareUpdate;
var shouldSetTextContent = $$$hostConfig.shouldSetTextContent;
var shouldDeprioritizeSubtree = $$$hostConfig.shouldDeprioritizeSubtree;
var createTextInstance = $$$hostConfig.createTextInstance;
var scheduleDeferredCallback = $$$hostConfig.scheduleDeferredCallback;
var cancelDeferredCallback = $$$hostConfig.cancelDeferredCallback;
var now = $$$hostConfig.now;
var isPrimaryRenderer = $$$hostConfig.isPrimaryRenderer;
var supportsMutation = $$$hostConfig.supportsMutation;
var supportsPersistence = $$$hostConfig.supportsPersistence;
var supportsHydration = $$$hostConfig.supportsHydration;

// -------------------
//      Mutation
//     (optional)
// -------------------
var appendChild = $$$hostConfig.appendChild;
var appendChildToContainer = $$$hostConfig.appendChildToContainer;
var commitTextUpdate = $$$hostConfig.commitTextUpdate;
var commitMount = $$$hostConfig.commitMount;
var commitUpdate = $$$hostConfig.commitUpdate;
var insertBefore = $$$hostConfig.insertBefore;
var insertInContainerBefore = $$$hostConfig.insertInContainerBefore;
var removeChild = $$$hostConfig.removeChild;
var removeChildFromContainer = $$$hostConfig.removeChildFromContainer;
var resetTextContent = $$$hostConfig.resetTextContent;

// -------------------
//     Persistence
//     (optional)
// -------------------
var cloneInstance = $$$hostConfig.cloneInstance;
var createContainerChildSet = $$$hostConfig.createContainerChildSet;
var appendChildToContainerChildSet = $$$hostConfig.appendChildToContainerChildSet;
var finalizeContainerChildren = $$$hostConfig.finalizeContainerChildren;
var replaceContainerChildren = $$$hostConfig.replaceContainerChildren;

// -------------------
//     Hydration
//     (optional)
// -------------------
var canHydrateInstance = $$$hostConfig.canHydrateInstance;
var canHydrateTextInstance = $$$hostConfig.canHydrateTextInstance;
var getNextHydratableSibling = $$$hostConfig.getNextHydratableSibling;
var getFirstHydratableChild = $$$hostConfig.getFirstHydratableChild;
var hydrateInstance = $$$hostConfig.hydrateInstance;
var hydrateTextInstance = $$$hostConfig.hydrateTextInstance;
var didNotMatchHydratedContainerTextInstance = $$$hostConfig.didNotMatchHydratedContainerTextInstance;
var didNotMatchHydratedTextInstance = $$$hostConfig.didNotMatchHydratedTextInstance;
var didNotHydrateContainerInstance = $$$hostConfig.didNotHydrateContainerInstance;
var didNotHydrateInstance = $$$hostConfig.didNotHydrateInstance;
var didNotFindHydratableContainerInstance = $$$hostConfig.didNotFindHydratableContainerInstance;
var didNotFindHydratableContainerTextInstance = $$$hostConfig.didNotFindHydratableContainerTextInstance;
var didNotFindHydratableInstance = $$$hostConfig.didNotFindHydratableInstance;
var didNotFindHydratableTextInstance = $$$hostConfig.didNotFindHydratableTextInstance;

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function describeFiber(fiber) {
  switch (fiber.tag) {
    case IndeterminateComponent:
    case FunctionalComponent:
    case ClassComponent:
    case HostComponent:
      var owner = fiber._debugOwner;
      var source = fiber._debugSource;
      var name = getComponentName(fiber);
      var ownerName = null;
      if (owner) {
        ownerName = getComponentName(owner);
      }
      return describeComponentFrame(name, source, ownerName);
    default:
      return '';
  }
}

// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function getStackAddendumByWorkInProgressFiber(workInProgress) {
  var info = '';
  var node = workInProgress;
  do {
    info += describeFiber(node);
    // Otherwise this return pointer might point to the wrong tree:
    node = node.return;
  } while (node);
  return info;
}

function getCurrentFiberOwnerName() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    var owner = fiber._debugOwner;
    if (owner !== null && typeof owner !== 'undefined') {
      return getComponentName(owner);
    }
  }
  return null;
}

function getCurrentFiberStackAddendum() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    // Safe because if current fiber exists, we are reconciling,
    // and it is guaranteed to be the work-in-progress version.
    return getStackAddendumByWorkInProgressFiber(fiber);
  }
  return null;
}

function resetCurrentFiber() {
  ReactDebugCurrentFrame.getCurrentStack = null;
  ReactDebugCurrentFiber.current = null;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentFiber(fiber) {
  ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackAddendum;
  ReactDebugCurrentFiber.current = fiber;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentPhase(phase) {
  ReactDebugCurrentFiber.phase = phase;
}

var ReactDebugCurrentFiber = {
  current: null,
  phase: null,
  resetCurrentFiber: resetCurrentFiber,
  setCurrentFiber: setCurrentFiber,
  setCurrentPhase: setCurrentPhase,
  getCurrentFiberOwnerName: getCurrentFiberOwnerName,
  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum
};

// Exports ReactDOM.createRoot
var enableUserTimingAPI = true;

// Experimental error-boundary API that can recover from errors within a single
// render phase
var enableGetDerivedStateFromCatch = false;
// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
var debugRenderPhaseSideEffects = false;

// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:
var debugRenderPhaseSideEffectsForStrictMode = true;

// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
var replayFailedUnitOfWorkWithInvokeGuardedCallback = true;

// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Warn about legacy context API
var warnAboutLegacyContextAPI = false;

// Gather advanced timing metrics for Profiler subtrees.
var enableProfilerTimer = true;

// Only used in www builds.

// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var reactEmoji = '\u269B';
var warningEmoji = '\u26D4';
var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

// Keep track of current fiber so that we know the path to unwind on pause.
// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
var currentFiber = null;
// If we're in the middle of user code, which fiber and method is it?
// Reusing `currentFiber` would be confusing for this because user code fiber
// can change during commit phase too, but we don't need to unwind it (since
// lifecycles in the commit phase don't resemble a tree).
var currentPhase = null;
var currentPhaseFiber = null;
// Did lifecycle hook schedule an update? This is often a performance problem,
// so we will keep track of it, and include it in the report.
// Track commits caused by cascading updates.
var isCommitting = false;
var hasScheduledUpdateInCurrentCommit = false;
var hasScheduledUpdateInCurrentPhase = false;
var commitCountInCurrentWorkLoop = 0;
var effectCountInCurrentCommit = 0;
var isWaitingForCallback = false;
// During commits, we only show a measurement once per method name
// to avoid stretch the commit phase with measurement overhead.
var labelsInCurrentCommit = new Set();

var formatMarkName = function (markName) {
  return reactEmoji + ' ' + markName;
};

var formatLabel = function (label, warning$$1) {
  var prefix = warning$$1 ? warningEmoji + ' ' : reactEmoji + ' ';
  var suffix = warning$$1 ? ' Warning: ' + warning$$1 : '';
  return '' + prefix + label + suffix;
};

var beginMark = function (markName) {
  performance.mark(formatMarkName(markName));
};

var clearMark = function (markName) {
  performance.clearMarks(formatMarkName(markName));
};

var endMark = function (label, markName, warning$$1) {
  var formattedMarkName = formatMarkName(markName);
  var formattedLabel = formatLabel(label, warning$$1);
  try {
    performance.measure(formattedLabel, formattedMarkName);
  } catch (err) {}
  // If previous mark was missing for some reason, this will throw.
  // This could only happen if React crashed in an unexpected place earlier.
  // Don't pile on with more errors.

  // Clear marks immediately to avoid growing buffer.
  performance.clearMarks(formattedMarkName);
  performance.clearMeasures(formattedLabel);
};

var getFiberMarkName = function (label, debugID) {
  return label + ' (#' + debugID + ')';
};

var getFiberLabel = function (componentName, isMounted, phase) {
  if (phase === null) {
    // These are composite component total time measurements.
    return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
  } else {
    // Composite component methods.
    return componentName + '.' + phase;
  }
};

var beginFiberMark = function (fiber, phase) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);

  if (isCommitting && labelsInCurrentCommit.has(label)) {
    // During the commit phase, we don't show duplicate labels because
    // there is a fixed overhead for every measurement, and we don't
    // want to stretch the commit phase beyond necessary.
    return false;
  }
  labelsInCurrentCommit.add(label);

  var markName = getFiberMarkName(label, debugID);
  beginMark(markName);
  return true;
};

var clearFiberMark = function (fiber, phase) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);
  var markName = getFiberMarkName(label, debugID);
  clearMark(markName);
};

var endFiberMark = function (fiber, phase, warning$$1) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);
  var markName = getFiberMarkName(label, debugID);
  endMark(label, markName, warning$$1);
};

var shouldIgnoreFiber = function (fiber) {
  // Host components should be skipped in the timeline.
  // We could check typeof fiber.type, but does this work with RN?
  switch (fiber.tag) {
    case HostRoot:
    case HostComponent:
    case HostText:
    case HostPortal:
    case Fragment:
    case ContextProvider:
    case ContextConsumer:
    case Mode:
      return true;
    default:
      return false;
  }
};

var clearPendingPhaseMeasurement = function () {
  if (currentPhase !== null && currentPhaseFiber !== null) {
    clearFiberMark(currentPhaseFiber, currentPhase);
  }
  currentPhaseFiber = null;
  currentPhase = null;
  hasScheduledUpdateInCurrentPhase = false;
};

var pauseTimers = function () {
  // Stops all currently active measurements so that they can be resumed
  // if we continue in a later deferred loop from the same unit of work.
  var fiber = currentFiber;
  while (fiber) {
    if (fiber._debugIsCurrentlyTiming) {
      endFiberMark(fiber, null, null);
    }
    fiber = fiber.return;
  }
};

var resumeTimersRecursively = function (fiber) {
  if (fiber.return !== null) {
    resumeTimersRecursively(fiber.return);
  }
  if (fiber._debugIsCurrentlyTiming) {
    beginFiberMark(fiber, null);
  }
};

var resumeTimers = function () {
  // Resumes all measurements that were active during the last deferred loop.
  if (currentFiber !== null) {
    resumeTimersRecursively(currentFiber);
  }
};

function recordEffect() {
  if (enableUserTimingAPI) {
    effectCountInCurrentCommit++;
  }
}

function recordScheduleUpdate() {
  if (enableUserTimingAPI) {
    if (isCommitting) {
      hasScheduledUpdateInCurrentCommit = true;
    }
    if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
      hasScheduledUpdateInCurrentPhase = true;
    }
  }
}

function startRequestCallbackTimer() {
  if (enableUserTimingAPI) {
    if (supportsUserTiming && !isWaitingForCallback) {
      isWaitingForCallback = true;
      beginMark('(Waiting for async callback...)');
    }
  }
}

function stopRequestCallbackTimer(didExpire, expirationTime) {
  if (enableUserTimingAPI) {
    if (supportsUserTiming) {
      isWaitingForCallback = false;
      var warning$$1 = didExpire ? 'React was blocked by main thread' : null;
      endMark('(Waiting for async callback... will force flush in ' + expirationTime + ' ms)', '(Waiting for async callback...)', warning$$1);
    }
  }
}

function startWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, this is the fiber to unwind from.
    currentFiber = fiber;
    if (!beginFiberMark(fiber, null)) {
      return;
    }
    fiber._debugIsCurrentlyTiming = true;
  }
}

function cancelWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // Remember we shouldn't complete measurement for this fiber.
    // Otherwise flamechart will be deep even for small updates.
    fiber._debugIsCurrentlyTiming = false;
    clearFiberMark(fiber, null);
  }
}

function stopWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, its parent is the fiber to unwind from.
    currentFiber = fiber.return;
    if (!fiber._debugIsCurrentlyTiming) {
      return;
    }
    fiber._debugIsCurrentlyTiming = false;
    endFiberMark(fiber, null, null);
  }
}

function stopFailedWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, its parent is the fiber to unwind from.
    currentFiber = fiber.return;
    if (!fiber._debugIsCurrentlyTiming) {
      return;
    }
    fiber._debugIsCurrentlyTiming = false;
    var warning$$1 = 'An error was thrown inside this error boundary';
    endFiberMark(fiber, null, warning$$1);
  }
}

function startPhaseTimer(fiber, phase) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    clearPendingPhaseMeasurement();
    if (!beginFiberMark(fiber, phase)) {
      return;
    }
    currentPhaseFiber = fiber;
    currentPhase = phase;
  }
}

function stopPhaseTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    if (currentPhase !== null && currentPhaseFiber !== null) {
      var warning$$1 = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
      endFiberMark(currentPhaseFiber, currentPhase, warning$$1);
    }
    currentPhase = null;
    currentPhaseFiber = null;
  }
}

function startWorkLoopTimer(nextUnitOfWork) {
  if (enableUserTimingAPI) {
    currentFiber = nextUnitOfWork;
    if (!supportsUserTiming) {
      return;
    }
    commitCountInCurrentWorkLoop = 0;
    // This is top level call.
    // Any other measurements are performed within.
    beginMark('(React Tree Reconciliation)');
    // Resume any measurements that were in progress during the last loop.
    resumeTimers();
  }
}

function stopWorkLoopTimer(interruptedBy, didCompleteRoot) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var warning$$1 = null;
    if (interruptedBy !== null) {
      if (interruptedBy.tag === HostRoot) {
        warning$$1 = 'A top-level update interrupted the previous render';
      } else {
        var componentName = getComponentName(interruptedBy) || 'Unknown';
        warning$$1 = 'An update to ' + componentName + ' interrupted the previous render';
      }
    } else if (commitCountInCurrentWorkLoop > 1) {
      warning$$1 = 'There were cascading updates';
    }
    commitCountInCurrentWorkLoop = 0;
    var label = didCompleteRoot ? '(React Tree Reconciliation: Completed Root)' : '(React Tree Reconciliation: Yielded)';
    // Pause any measurements until the next loop.
    pauseTimers();
    endMark(label, '(React Tree Reconciliation)', warning$$1);
  }
}

function startCommitTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    isCommitting = true;
    hasScheduledUpdateInCurrentCommit = false;
    labelsInCurrentCommit.clear();
    beginMark('(Committing Changes)');
  }
}

function stopCommitTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }

    var warning$$1 = null;
    if (hasScheduledUpdateInCurrentCommit) {
      warning$$1 = 'Lifecycle hook scheduled a cascading update';
    } else if (commitCountInCurrentWorkLoop > 0) {
      warning$$1 = 'Caused by a cascading update in earlier commit';
    }
    hasScheduledUpdateInCurrentCommit = false;
    commitCountInCurrentWorkLoop++;
    isCommitting = false;
    labelsInCurrentCommit.clear();

    endMark('(Committing Changes)', '(Committing Changes)', warning$$1);
  }
}

function startCommitSnapshotEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Committing Snapshot Effects)');
  }
}

function stopCommitSnapshotEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Committing Snapshot Effects: ' + count + ' Total)', '(Committing Snapshot Effects)', null);
  }
}

function startCommitHostEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Committing Host Effects)');
  }
}

function stopCommitHostEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
  }
}

function startCommitLifeCyclesTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Calling Lifecycle Methods)');
  }
}

function stopCommitLifeCyclesTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
  }
}

var valueStack = [];

var fiberStack = void 0;

{
  fiberStack = [];
}

var index = -1;

function createCursor(defaultValue) {
  return {
    current: defaultValue
  };
}

function pop(cursor, fiber) {
  if (index < 0) {
    {
      warning(false, 'Unexpected pop.');
    }
    return;
  }

  {
    if (fiber !== fiberStack[index]) {
      warning(false, 'Unexpected Fiber popped.');
    }
  }

  cursor.current = valueStack[index];

  valueStack[index] = null;

  {
    fiberStack[index] = null;
  }

  index--;
}

function push(cursor, value, fiber) {
  index++;

  valueStack[index] = cursor.current;

  {
    fiberStack[index] = fiber;
  }

  cursor.current = value;
}

function checkThatStackIsEmpty() {
  {
    if (index !== -1) {
      warning(false, 'Expected an empty stack. Something was not reset properly.');
    }
  }
}

function resetStackAfterFatalErrorInDev() {
  {
    index = -1;
    valueStack.length = 0;
    fiberStack.length = 0;
  }
}

var warnedAboutMissingGetChildContext = void 0;

{
  warnedAboutMissingGetChildContext = {};
}

// A cursor to the current merged context object on the stack.
var contextStackCursor = createCursor(emptyObject);
// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor = createCursor(false);
// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext = emptyObject;

function getUnmaskedContext(workInProgress) {
  var hasOwnContext = isContextProvider(workInProgress);
  if (hasOwnContext) {
    // If the fiber is a context provider itself, when we read its context
    // we have already pushed its own child context on the stack. A context
    // provider should not "see" its own child context. Therefore we read the
    // previous (parent) context instead for a context provider.
    return previousContext;
  }
  return contextStackCursor.current;
}

function cacheContext(workInProgress, unmaskedContext, maskedContext) {
  var instance = workInProgress.stateNode;
  instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
  instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
}

function getMaskedContext(workInProgress, unmaskedContext) {
  var type = workInProgress.type;
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }

  // Avoid recreating masked context unless unmasked context has changed.
  // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
  // This may trigger infinite loops if componentWillReceiveProps calls setState.
  var instance = workInProgress.stateNode;
  if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
    return instance.__reactInternalMemoizedMaskedChildContext;
  }

  var context = {};
  for (var key in contextTypes) {
    context[key] = unmaskedContext[key];
  }

  {
    var name = getComponentName(workInProgress) || 'Unknown';
    checkPropTypes(contextTypes, context, 'context', name, ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
  }

  // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // Context is created before the class component is instantiated so check for instance.
  if (instance) {
    cacheContext(workInProgress, unmaskedContext, context);
  }

  return context;
}

function hasContextChanged() {
  return didPerformWorkStackCursor.current;
}

function isContextConsumer(fiber) {
  return fiber.tag === ClassComponent && fiber.type.contextTypes != null;
}

function isContextProvider(fiber) {
  return fiber.tag === ClassComponent && fiber.type.childContextTypes != null;
}

function popContextProvider(fiber) {
  if (!isContextProvider(fiber)) {
    return;
  }

  pop(didPerformWorkStackCursor, fiber);
  pop(contextStackCursor, fiber);
}

function popTopLevelContextObject(fiber) {
  pop(didPerformWorkStackCursor, fiber);
  pop(contextStackCursor, fiber);
}

function pushTopLevelContextObject(fiber, context, didChange) {
  !(contextStackCursor.current === emptyObject) ? invariant(false, 'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  push(contextStackCursor, context, fiber);
  push(didPerformWorkStackCursor, didChange, fiber);
}

function processChildContext(fiber, parentContext) {
  var instance = fiber.stateNode;
  var childContextTypes = fiber.type.childContextTypes;

  // TODO (bvaughn) Replace this behavior with an invariant() in the future.
  // It has only been added in Fiber to match the (unintentional) behavior in Stack.
  if (typeof instance.getChildContext !== 'function') {
    {
      var componentName = getComponentName(fiber) || 'Unknown';

      if (!warnedAboutMissingGetChildContext[componentName]) {
        warnedAboutMissingGetChildContext[componentName] = true;
        warning(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
      }
    }
    return parentContext;
  }

  var childContext = void 0;
  {
    ReactDebugCurrentFiber.setCurrentPhase('getChildContext');
  }
  startPhaseTimer(fiber, 'getChildContext');
  childContext = instance.getChildContext();
  stopPhaseTimer();
  {
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }
  for (var contextKey in childContext) {
    !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(fiber) || 'Unknown', contextKey) : void 0;
  }
  {
    var name = getComponentName(fiber) || 'Unknown';
    checkPropTypes(childContextTypes, childContext, 'child context', name,
    // In practice, there is one case in which we won't get a stack. It's when
    // somebody calls unstable_renderSubtreeIntoContainer() and we process
    // context from the parent component instance. The stack will be missing
    // because it's outside of the reconciliation, and so the pointer has not
    // been set. This is rare and doesn't matter. We'll also remove that API.
    ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
  }

  return _assign({}, parentContext, childContext);
}

function pushContextProvider(workInProgress) {
  if (!isContextProvider(workInProgress)) {
    return false;
  }

  var instance = workInProgress.stateNode;
  // We push the context as early as possible to ensure stack integrity.
  // If the instance does not exist yet, we will push null at first,
  // and replace it on the stack later when invalidating the context.
  var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyObject;

  // Remember the parent context so we can merge with it later.
  // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
  previousContext = contextStackCursor.current;
  push(contextStackCursor, memoizedMergedChildContext, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);

  return true;
}

function invalidateContextProvider(workInProgress, didChange) {
  var instance = workInProgress.stateNode;
  !instance ? invariant(false, 'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  if (didChange) {
    // Merge parent and own context.
    // Skip this if we're not updating due to sCU.
    // This avoids unnecessarily recomputing memoized values.
    var mergedContext = processChildContext(workInProgress, previousContext);
    instance.__reactInternalMemoizedMergedChildContext = mergedContext;

    // Replace the old (or empty) context with the new one.
    // It is important to unwind the context in the reverse order.
    pop(didPerformWorkStackCursor, workInProgress);
    pop(contextStackCursor, workInProgress);
    // Now push the new context and mark that it has changed.
    push(contextStackCursor, mergedContext, workInProgress);
    push(didPerformWorkStackCursor, didChange, workInProgress);
  } else {
    pop(didPerformWorkStackCursor, workInProgress);
    push(didPerformWorkStackCursor, didChange, workInProgress);
  }
}

function findCurrentUnmaskedContext(fiber) {
  // Currently this is only used with renderSubtreeIntoContainer; not sure if it
  // makes sense elsewhere
  !(isFiberMounted(fiber) && fiber.tag === ClassComponent) ? invariant(false, 'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  var node = fiber;
  while (node.tag !== HostRoot) {
    if (isContextProvider(node)) {
      return node.stateNode.__reactInternalMemoizedMergedChildContext;
    }
    var parent = node.return;
    !parent ? invariant(false, 'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
    node = parent;
  }
  return node.stateNode.context;
}

// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var MAX_SIGNED_31_BIT_INT = 1073741823;

// TODO: Use an opaque type once ESLint et al support the syntax


var NoWork = 0;
var Sync = 1;
var Never = MAX_SIGNED_31_BIT_INT;

var UNIT_SIZE = 10;
var MAGIC_NUMBER_OFFSET = 2;

// 1 unit of expiration time represents 10ms.
function msToExpirationTime(ms) {
  // Always add an offset so that we don't clash with the magic number for NoWork.
  return (ms / UNIT_SIZE | 0) + MAGIC_NUMBER_OFFSET;
}

function expirationTimeToMs(expirationTime) {
  return (expirationTime - MAGIC_NUMBER_OFFSET) * UNIT_SIZE;
}

function ceiling(num, precision) {
  return ((num / precision | 0) + 1) * precision;
}

function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
  return MAGIC_NUMBER_OFFSET + ceiling(currentTime - MAGIC_NUMBER_OFFSET + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE);
}

var NoContext = 0;
var AsyncMode = 1;
var StrictMode = 2;
var ProfileMode = 4;

var hasBadMapPolyfill = void 0;

{
  hasBadMapPolyfill = false;
  try {
    var nonExtensibleObject = Object.preventExtensions({});
    var testMap = new Map([[nonExtensibleObject, null]]);
    var testSet = new Set([nonExtensibleObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.


var debugCounter = void 0;

{
  debugCounter = 1;
}

function FiberNode(tag, pendingProps, key, mode) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;

  this.mode = mode;

  // Effects
  this.effectTag = NoEffect;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  this.expirationTime = NoWork;

  this.alternate = null;

  if (enableProfilerTimer) {
    this.actualDuration = 0;
    this.actualStartTime = 0;
    this.selfBaseTime = 0;
    this.treeBaseTime = 0;
  }

  {
    this._debugID = debugCounter++;
    this._debugSource = null;
    this._debugOwner = null;
    this._debugIsCurrentlyTiming = false;
    if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
      Object.preventExtensions(this);
    }
  }
}

// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber = function (tag, pendingProps, key, mode) {
  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode(tag, pendingProps, key, mode);
};

function shouldConstruct(Component) {
  return !!(Component.prototype && Component.prototype.isReactComponent);
}

// This is used to create an alternate fiber to do work on.
function createWorkInProgress(current, pendingProps, expirationTime) {
  var workInProgress = current.alternate;
  if (workInProgress === null) {
    // We use a double buffering pooling technique because we know that we'll
    // only ever need at most two versions of a tree. We pool the "other" unused
    // node that we're free to reuse. This is lazily created to avoid allocating
    // extra objects for things that are never updated. It also allow us to
    // reclaim the extra memory if needed.
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
    workInProgress.type = current.type;
    workInProgress.stateNode = current.stateNode;

    {
      // DEV-only fields
      workInProgress._debugID = current._debugID;
      workInProgress._debugSource = current._debugSource;
      workInProgress._debugOwner = current._debugOwner;
    }

    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    workInProgress.pendingProps = pendingProps;

    // We already have an alternate.
    // Reset the effect tag.
    workInProgress.effectTag = NoEffect;

    // The effect list is no longer valid.
    workInProgress.nextEffect = null;
    workInProgress.firstEffect = null;
    workInProgress.lastEffect = null;

    if (enableProfilerTimer) {
      // We intentionally reset, rather than copy, actualDuration & actualStartTime.
      // This prevents time from endlessly accumulating in new commits.
      // This has the downside of resetting values for different priority renders,
      // But works for yielding (the common case) and should support resuming.
      workInProgress.actualDuration = 0;
      workInProgress.actualStartTime = 0;
    }
  }

  workInProgress.expirationTime = expirationTime;

  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;

  // These will be overridden during the parent's reconciliation
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;

  if (enableProfilerTimer) {
    workInProgress.selfBaseTime = current.selfBaseTime;
    workInProgress.treeBaseTime = current.treeBaseTime;
  }

  return workInProgress;
}

function createHostRootFiber(isAsync) {
  var mode = isAsync ? AsyncMode | StrictMode : NoContext;
  return createFiber(HostRoot, null, null, mode);
}

function createFiberFromElement(element, mode, expirationTime) {
  var owner = null;
  {
    owner = element._owner;
  }

  var fiber = void 0;
  var type = element.type;
  var key = element.key;
  var pendingProps = element.props;

  var fiberTag = void 0;
  if (typeof type === 'function') {
    fiberTag = shouldConstruct(type) ? ClassComponent : IndeterminateComponent;
  } else if (typeof type === 'string') {
    fiberTag = HostComponent;
  } else {
    switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);
      case REACT_ASYNC_MODE_TYPE:
        fiberTag = Mode;
        mode |= AsyncMode | StrictMode;
        break;
      case REACT_STRICT_MODE_TYPE:
        fiberTag = Mode;
        mode |= StrictMode;
        break;
      case REACT_PROFILER_TYPE:
        return createFiberFromProfiler(pendingProps, mode, expirationTime, key);
      case REACT_TIMEOUT_TYPE:
        fiberTag = TimeoutComponent;
        // Suspense does not require async, but its children should be strict
        // mode compatible.
        mode |= StrictMode;
        break;
      default:
        fiberTag = getFiberTagFromObjectType(type, owner);
        break;
    }
  }

  fiber = createFiber(fiberTag, pendingProps, key, mode);
  fiber.type = type;
  fiber.expirationTime = expirationTime;

  {
    fiber._debugSource = element._source;
    fiber._debugOwner = element._owner;
  }

  return fiber;
}

function getFiberTagFromObjectType(type, owner) {
  var $$typeof = typeof type === 'object' && type !== null ? type.$$typeof : null;

  switch ($$typeof) {
    case REACT_PROVIDER_TYPE:
      return ContextProvider;
    case REACT_CONTEXT_TYPE:
      // This is a consumer
      return ContextConsumer;
    case REACT_FORWARD_REF_TYPE:
      return ForwardRef;
    default:
      {
        var info = '';
        {
          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
          }
          var ownerName = owner ? getComponentName(owner) : null;
          if (ownerName) {
            info += '\n\nCheck the render method of `' + ownerName + '`.';
          }
        }
        invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info);
      }
  }
}

function createFiberFromFragment(elements, mode, expirationTime, key) {
  var fiber = createFiber(Fragment, elements, key, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
  {
    if (typeof pendingProps.id !== 'string' || typeof pendingProps.onRender !== 'function') {
      invariant(false, 'Profiler must specify an "id" string and "onRender" function as props');
    }
  }

  var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
  fiber.type = REACT_PROFILER_TYPE;
  fiber.expirationTime = expirationTime;

  return fiber;
}

function createFiberFromText(content, mode, expirationTime) {
  var fiber = createFiber(HostText, content, null, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromHostInstanceForDeletion() {
  var fiber = createFiber(HostComponent, null, null, NoContext);
  fiber.type = 'DELETED';
  return fiber;
}

function createFiberFromPortal(portal, mode, expirationTime) {
  var pendingProps = portal.children !== null ? portal.children : [];
  var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
  fiber.expirationTime = expirationTime;
  fiber.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null, // Used by persistent updates
    implementation: portal.implementation
  };
  return fiber;
}

// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(target, source) {
  if (target === null) {
    // This Fiber's initial properties will always be overwritten.
    // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
    target = createFiber(IndeterminateComponent, null, null, NoContext);
  }

  // This is intentionally written as a list of all properties.
  // We tried to use Object.assign() instead but this is called in
  // the hottest path, and Object.assign() was too slow:
  // https://github.com/facebook/react/issues/12502
  // This code is DEV-only so size is not a concern.

  target.tag = source.tag;
  target.key = source.key;
  target.type = source.type;
  target.stateNode = source.stateNode;
  target.return = source.return;
  target.child = source.child;
  target.sibling = source.sibling;
  target.index = source.index;
  target.ref = source.ref;
  target.pendingProps = source.pendingProps;
  target.memoizedProps = source.memoizedProps;
  target.updateQueue = source.updateQueue;
  target.memoizedState = source.memoizedState;
  target.mode = source.mode;
  target.effectTag = source.effectTag;
  target.nextEffect = source.nextEffect;
  target.firstEffect = source.firstEffect;
  target.lastEffect = source.lastEffect;
  target.expirationTime = source.expirationTime;
  target.alternate = source.alternate;
  if (enableProfilerTimer) {
    target.actualDuration = source.actualDuration;
    target.actualStartTime = source.actualStartTime;
    target.selfBaseTime = source.selfBaseTime;
    target.treeBaseTime = source.treeBaseTime;
  }
  target._debugID = source._debugID;
  target._debugSource = source._debugSource;
  target._debugOwner = source._debugOwner;
  target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
  return target;
}

// TODO: This should be lifted into the renderer.


function createFiberRoot(containerInfo, isAsync, hydrate) {
  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  var uninitializedFiber = createHostRootFiber(isAsync);
  var root = {
    current: uninitializedFiber,
    containerInfo: containerInfo,
    pendingChildren: null,

    earliestPendingTime: NoWork,
    latestPendingTime: NoWork,
    earliestSuspendedTime: NoWork,
    latestSuspendedTime: NoWork,
    latestPingedTime: NoWork,

    pendingCommitExpirationTime: NoWork,
    finishedWork: null,
    context: null,
    pendingContext: null,
    hydrate: hydrate,
    remainingExpirationTime: NoWork,
    firstBatch: null,
    nextScheduledRoot: null
  };
  uninitializedFiber.stateNode = root;
  return root;
}

var onCommitFiberRoot = null;
var onCommitFiberUnmount = null;
var hasLoggedError = false;

function catchErrors(fn) {
  return function (arg) {
    try {
      return fn(arg);
    } catch (err) {
      if (true && !hasLoggedError) {
        hasLoggedError = true;
        warning(false, 'React DevTools encountered an error: %s', err);
      }
    }
  };
}

function injectInternals(internals) {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
    // No DevTools
    return false;
  }
  var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (hook.isDisabled) {
    // This isn't a real property on the hook, but it can be set to opt out
    // of DevTools integration and associated warnings and logs.
    // https://github.com/facebook/react/issues/3877
    return true;
  }
  if (!hook.supportsFiber) {
    {
      warning(false, 'The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://fb.me/react-devtools');
    }
    // DevTools exists, even though it doesn't support Fiber.
    return true;
  }
  try {
    var rendererID = hook.inject(internals);
    // We have successfully injected, so now it is safe to set up hooks.
    onCommitFiberRoot = catchErrors(function (root) {
      return hook.onCommitFiberRoot(rendererID, root);
    });
    onCommitFiberUnmount = catchErrors(function (fiber) {
      return hook.onCommitFiberUnmount(rendererID, fiber);
    });
  } catch (err) {
    // Catch all errors because it is unsafe to throw during initialization.
    {
      warning(false, 'React DevTools encountered an error: %s.', err);
    }
  }
  // DevTools exists
  return true;
}

function onCommitRoot(root) {
  if (typeof onCommitFiberRoot === 'function') {
    onCommitFiberRoot(root);
  }
}

function onCommitUnmount(fiber) {
  if (typeof onCommitFiberUnmount === 'function') {
    onCommitFiberUnmount(fiber);
  }
}

var invokeGuardedCallback$1 = function (name, func, context, a, b, c, d, e, f) {
  this._hasCaughtError = false;
  this._caughtError = null;
  var funcArgs = Array.prototype.slice.call(arguments, 3);
  try {
    func.apply(context, funcArgs);
  } catch (error) {
    this._caughtError = error;
    this._hasCaughtError = true;
  }
};

{
  // In DEV mode, we swap out invokeGuardedCallback for a special version
  // that plays more nicely with the browser's DevTools. The idea is to preserve
  // "Pause on exceptions" behavior. Because React wraps all user-provided
  // functions in invokeGuardedCallback, and the production version of
  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
  // like caught exceptions, and the DevTools won't pause unless the developer
  // takes the extra step of enabling pause on caught exceptions. This is
  // untintuitive, though, because even though React has caught the error, from
  // the developer's perspective, the error is uncaught.
  //
  // To preserve the expected "Pause on exceptions" behavior, we don't use a
  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
  // DOM node, and call the user-provided callback from inside an event handler
  // for that fake event. If the callback throws, the error is "captured" using
  // a global event handler. But because the error happens in a different
  // event loop context, it does not interrupt the normal program flow.
  // Effectively, this gives us try-catch behavior without actually using
  // try-catch. Neat!

  // Check that the browser supports the APIs we need to implement our special
  // DEV version of invokeGuardedCallback
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');

    var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
      // If document doesn't exist we know for sure we will crash in this method
      // when we call document.createEvent(). However this can cause confusing
      // errors: https://github.com/facebookincubator/create-react-app/issues/3482
      // So we preemptively throw with a better message instead.
      !(typeof document !== 'undefined') ? invariant(false, 'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.') : void 0;
      var evt = document.createEvent('Event');

      // Keeps track of whether the user-provided callback threw an error. We
      // set this to true at the beginning, then set it to false right after
      // calling the function. If the function errors, `didError` will never be
      // set to false. This strategy works even if the browser is flaky and
      // fails to call our global error handler, because it doesn't rely on
      // the error event at all.
      var didError = true;

      // Create an event handler for our fake event. We will synchronously
      // dispatch our fake event using `dispatchEvent`. Inside the handler, we
      // call the user-provided callback.
      var funcArgs = Array.prototype.slice.call(arguments, 3);
      function callCallback() {
        // We immediately remove the callback from event listeners so that
        // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
        // nested call would trigger the fake event handlers of any call higher
        // in the stack.
        fakeNode.removeEventListener(evtType, callCallback, false);
        func.apply(context, funcArgs);
        didError = false;
      }

      // Create a global error event handler. We use this to capture the value
      // that was thrown. It's possible that this error handler will fire more
      // than once; for example, if non-React code also calls `dispatchEvent`
      // and a handler for that event throws. We should be resilient to most of
      // those cases. Even if our error event handler fires more than once, the
      // last error event is always used. If the callback actually does error,
      // we know that the last error event is the correct one, because it's not
      // possible for anything else to have happened in between our callback
      // erroring and the code that follows the `dispatchEvent` call below. If
      // the callback doesn't error, but the error event was fired, we know to
      // ignore it because `didError` will be false, as described above.
      var error = void 0;
      // Use this to track whether the error event is ever called.
      var didSetError = false;
      var isCrossOriginError = false;

      function onError(event) {
        error = event.error;
        didSetError = true;
        if (error === null && event.colno === 0 && event.lineno === 0) {
          isCrossOriginError = true;
        }
      }

      // Create a fake event type.
      var evtType = 'react-' + (name ? name : 'invokeguardedcallback');

      // Attach our event handlers
      window.addEventListener('error', onError);
      fakeNode.addEventListener(evtType, callCallback, false);

      // Synchronously dispatch our fake event. If the user-provided function
      // errors, it will trigger our global error handler.
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);

      if (didError) {
        if (!didSetError) {
          // The callback errored, but the error event never fired.
          error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
        } else if (isCrossOriginError) {
          error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://fb.me/react-crossorigin-error for more information.');
        }
        this._hasCaughtError = true;
        this._caughtError = error;
      } else {
        this._hasCaughtError = false;
        this._caughtError = null;
      }

      // Remove our event listeners
      window.removeEventListener('error', onError);
    };

    invokeGuardedCallback$1 = invokeGuardedCallbackDev;
  }
}

var invokeGuardedCallback$2 = invokeGuardedCallback$1;

var ReactErrorUtils = {
  // Used by Fiber to simulate a try-catch.
  _caughtError: null,
  _hasCaughtError: false,

  // Used by event system to capture/rethrow the first error.
  _rethrowError: null,
  _hasRethrowError: false,

  /**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
  invokeGuardedCallback: function (name, func, context, a, b, c, d, e, f) {
    invokeGuardedCallback$2.apply(ReactErrorUtils, arguments);
  },

  /**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if _caughtError and _rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
  invokeGuardedCallbackAndCatchFirstError: function (name, func, context, a, b, c, d, e, f) {
    ReactErrorUtils.invokeGuardedCallback.apply(this, arguments);
    if (ReactErrorUtils.hasCaughtError()) {
      var error = ReactErrorUtils.clearCaughtError();
      if (!ReactErrorUtils._hasRethrowError) {
        ReactErrorUtils._hasRethrowError = true;
        ReactErrorUtils._rethrowError = error;
      }
    }
  },

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    return rethrowCaughtError.apply(ReactErrorUtils, arguments);
  },

  hasCaughtError: function () {
    return ReactErrorUtils._hasCaughtError;
  },

  clearCaughtError: function () {
    if (ReactErrorUtils._hasCaughtError) {
      var error = ReactErrorUtils._caughtError;
      ReactErrorUtils._caughtError = null;
      ReactErrorUtils._hasCaughtError = false;
      return error;
    } else {
      invariant(false, 'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');
    }
  }
};

var rethrowCaughtError = function () {
  if (ReactErrorUtils._hasRethrowError) {
    var error = ReactErrorUtils._rethrowError;
    ReactErrorUtils._rethrowError = null;
    ReactErrorUtils._hasRethrowError = false;
    throw error;
  }
};

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var ReactStrictModeWarnings = {
  discardPendingWarnings: function () {},
  flushPendingDeprecationWarnings: function () {},
  flushPendingUnsafeLifecycleWarnings: function () {},
  recordDeprecationWarnings: function (fiber, instance) {},
  recordUnsafeLifecycleWarnings: function (fiber, instance) {},
  recordLegacyContextWarning: function (fiber, instance) {},
  flushLegacyContextWarning: function () {}
};

{
  var LIFECYCLE_SUGGESTIONS = {
    UNSAFE_componentWillMount: 'componentDidMount',
    UNSAFE_componentWillReceiveProps: 'static getDerivedStateFromProps',
    UNSAFE_componentWillUpdate: 'componentDidUpdate'
  };

  var pendingComponentWillMountWarnings = [];
  var pendingComponentWillReceivePropsWarnings = [];
  var pendingComponentWillUpdateWarnings = [];
  var pendingUnsafeLifecycleWarnings = new Map();
  var pendingLegacyContextWarning = new Map();

  // Tracks components we have already warned about.
  var didWarnAboutDeprecatedLifecycles = new Set();
  var didWarnAboutUnsafeLifecycles = new Set();
  var didWarnAboutLegacyContext = new Set();

  var setToSortedString = function (set) {
    var array = [];
    set.forEach(function (value) {
      array.push(value);
    });
    return array.sort().join(', ');
  };

  ReactStrictModeWarnings.discardPendingWarnings = function () {
    pendingComponentWillMountWarnings = [];
    pendingComponentWillReceivePropsWarnings = [];
    pendingComponentWillUpdateWarnings = [];
    pendingUnsafeLifecycleWarnings = new Map();
    pendingLegacyContextWarning = new Map();
  };

  ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
    pendingUnsafeLifecycleWarnings.forEach(function (lifecycleWarningsMap, strictRoot) {
      var lifecyclesWarningMesages = [];

      Object.keys(lifecycleWarningsMap).forEach(function (lifecycle) {
        var lifecycleWarnings = lifecycleWarningsMap[lifecycle];
        if (lifecycleWarnings.length > 0) {
          var componentNames = new Set();
          lifecycleWarnings.forEach(function (fiber) {
            componentNames.add(getComponentName(fiber) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });

          var formatted = lifecycle.replace('UNSAFE_', '');
          var suggestion = LIFECYCLE_SUGGESTIONS[lifecycle];
          var sortedComponentNames = setToSortedString(componentNames);

          lifecyclesWarningMesages.push(formatted + ': Please update the following components to use ' + (suggestion + ' instead: ' + sortedComponentNames));
        }
      });

      if (lifecyclesWarningMesages.length > 0) {
        var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);

        warning(false, 'Unsafe lifecycle methods were found within a strict-mode tree:%s' + '\n\n%s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, lifecyclesWarningMesages.join('\n\n'));
      }
    });

    pendingUnsafeLifecycleWarnings = new Map();
  };

  var findStrictRoot = function (fiber) {
    var maybeStrictRoot = null;

    var node = fiber;
    while (node !== null) {
      if (node.mode & StrictMode) {
        maybeStrictRoot = node;
      }
      node = node.return;
    }

    return maybeStrictRoot;
  };

  ReactStrictModeWarnings.flushPendingDeprecationWarnings = function () {
    if (pendingComponentWillMountWarnings.length > 0) {
      var uniqueNames = new Set();
      pendingComponentWillMountWarnings.forEach(function (fiber) {
        uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var sortedNames = setToSortedString(uniqueNames);

      lowPriorityWarning$1(false, 'componentWillMount is deprecated and will be removed in the next major version. ' + 'Use componentDidMount instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillMount.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', sortedNames);

      pendingComponentWillMountWarnings = [];
    }

    if (pendingComponentWillReceivePropsWarnings.length > 0) {
      var _uniqueNames = new Set();
      pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
        _uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var _sortedNames = setToSortedString(_uniqueNames);

      lowPriorityWarning$1(false, 'componentWillReceiveProps is deprecated and will be removed in the next major version. ' + 'Use static getDerivedStateFromProps instead.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames);

      pendingComponentWillReceivePropsWarnings = [];
    }

    if (pendingComponentWillUpdateWarnings.length > 0) {
      var _uniqueNames2 = new Set();
      pendingComponentWillUpdateWarnings.forEach(function (fiber) {
        _uniqueNames2.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var _sortedNames2 = setToSortedString(_uniqueNames2);

      lowPriorityWarning$1(false, 'componentWillUpdate is deprecated and will be removed in the next major version. ' + 'Use componentDidUpdate instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillUpdate.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames2);

      pendingComponentWillUpdateWarnings = [];
    }
  };

  ReactStrictModeWarnings.recordDeprecationWarnings = function (fiber, instance) {
    // Dedup strategy: Warn once per component.
    if (didWarnAboutDeprecatedLifecycles.has(fiber.type)) {
      return;
    }

    // Don't warn about react-lifecycles-compat polyfilled components.
    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
      pendingComponentWillMountWarnings.push(fiber);
    }
    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
      pendingComponentWillReceivePropsWarnings.push(fiber);
    }
    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
      pendingComponentWillUpdateWarnings.push(fiber);
    }
  };

  ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
    var strictRoot = findStrictRoot(fiber);
    if (strictRoot === null) {
      warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
      return;
    }

    // Dedup strategy: Warn once per component.
    // This is difficult to track any other way since component names
    // are often vague and are likely to collide between 3rd party libraries.
    // An expand property is probably okay to use here since it's DEV-only,
    // and will only be set in the event of serious warnings.
    if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
      return;
    }

    var warningsForRoot = void 0;
    if (!pendingUnsafeLifecycleWarnings.has(strictRoot)) {
      warningsForRoot = {
        UNSAFE_componentWillMount: [],
        UNSAFE_componentWillReceiveProps: [],
        UNSAFE_componentWillUpdate: []
      };

      pendingUnsafeLifecycleWarnings.set(strictRoot, warningsForRoot);
    } else {
      warningsForRoot = pendingUnsafeLifecycleWarnings.get(strictRoot);
    }

    var unsafeLifecycles = [];
    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillMount === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillMount');
    }
    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillReceiveProps');
    }
    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillUpdate === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillUpdate');
    }

    if (unsafeLifecycles.length > 0) {
      unsafeLifecycles.forEach(function (lifecycle) {
        warningsForRoot[lifecycle].push(fiber);
      });
    }
  };

  ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
    var strictRoot = findStrictRoot(fiber);
    if (strictRoot === null) {
      warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
      return;
    }

    // Dedup strategy: Warn once per component.
    if (didWarnAboutLegacyContext.has(fiber.type)) {
      return;
    }

    var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);

    if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === 'function') {
      if (warningsForRoot === undefined) {
        warningsForRoot = [];
        pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
      }
      warningsForRoot.push(fiber);
    }
  };

  ReactStrictModeWarnings.flushLegacyContextWarning = function () {
    pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
      var uniqueNames = new Set();
      fiberArray.forEach(function (fiber) {
        uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutLegacyContext.add(fiber.type);
      });

      var sortedNames = setToSortedString(uniqueNames);
      var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);

      warning(false, 'Legacy context API has been detected within a strict-mode tree: %s' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, sortedNames);
    });
  };
}

// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var ReactFiberInstrumentation = {
  debugTool: null
};

var ReactFiberInstrumentation_1 = ReactFiberInstrumentation;

// TODO: Offscreen updates

function markPendingPriorityLevel(root, expirationTime) {
  if (enableSuspense) {
    // Update the latest and earliest pending times
    var earliestPendingTime = root.earliestPendingTime;
    if (earliestPendingTime === NoWork) {
      // No other pending updates.
      root.earliestPendingTime = root.latestPendingTime = expirationTime;
    } else {
      if (earliestPendingTime > expirationTime) {
        // This is the earliest pending update.
        root.earliestPendingTime = expirationTime;
      } else {
        var latestPendingTime = root.latestPendingTime;
        if (latestPendingTime < expirationTime) {
          // This is the latest pending update
          root.latestPendingTime = expirationTime;
        }
      }
    }
  }
}

function markCommittedPriorityLevels(root, currentTime, earliestRemainingTime) {
  if (enableSuspense) {
    if (earliestRemainingTime === NoWork) {
      // Fast path. There's no remaining work. Clear everything.
      root.earliestPendingTime = NoWork;
      root.latestPendingTime = NoWork;
      root.earliestSuspendedTime = NoWork;
      root.latestSuspendedTime = NoWork;
      root.latestPingedTime = NoWork;
      return;
    }

    // Let's see if the previous latest known pending level was just flushed.
    var latestPendingTime = root.latestPendingTime;
    if (latestPendingTime !== NoWork) {
      if (latestPendingTime < earliestRemainingTime) {
        // We've flushed all the known pending levels.
        root.earliestPendingTime = root.latestPendingTime = NoWork;
      } else {
        var earliestPendingTime = root.earliestPendingTime;
        if (earliestPendingTime < earliestRemainingTime) {
          // We've flushed the earliest known pending level. Set this to the
          // latest pending time.
          root.earliestPendingTime = root.latestPendingTime;
        }
      }
    }

    // Now let's handle the earliest remaining level in the whole tree. We need to
    // decide whether to treat it as a pending level or as suspended. Check
    // it falls within the range of known suspended levels.

    var earliestSuspendedTime = root.earliestSuspendedTime;
    if (earliestSuspendedTime === NoWork) {
      // There's no suspended work. Treat the earliest remaining level as a
      // pending level.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    var latestSuspendedTime = root.latestSuspendedTime;
    if (earliestRemainingTime > latestSuspendedTime) {
      // The earliest remaining level is later than all the suspended work. That
      // means we've flushed all the suspended work.
      root.earliestSuspendedTime = NoWork;
      root.latestSuspendedTime = NoWork;
      root.latestPingedTime = NoWork;

      // There's no suspended work. Treat the earliest remaining level as a
      // pending level.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    if (earliestRemainingTime < earliestSuspendedTime) {
      // The earliest remaining time is earlier than all the suspended work.
      // Treat it as a pending update.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    // The earliest remaining time falls within the range of known suspended
    // levels. We should treat this as suspended work.
  }
}

function markSuspendedPriorityLevel(root, suspendedTime) {
  if (enableSuspense) {
    // First, check the known pending levels and update them if needed.
    var earliestPendingTime = root.earliestPendingTime;
    var latestPendingTime = root.latestPendingTime;
    if (earliestPendingTime === suspendedTime) {
      if (latestPendingTime === suspendedTime) {
        // Both known pending levels were suspended. Clear them.
        root.earliestPendingTime = root.latestPendingTime = NoWork;
      } else {
        // The earliest pending level was suspended. Clear by setting it to the
        // latest pending level.
        root.earliestPendingTime = latestPendingTime;
      }
    } else if (latestPendingTime === suspendedTime) {
      // The latest pending level was suspended. Clear by setting it to the
      // latest pending level.
      root.latestPendingTime = earliestPendingTime;
    }

    // Next, if we're working on the lowest known suspended level, clear the ping.
    // TODO: What if a promise suspends and pings before the root completes?
    var latestSuspendedTime = root.latestSuspendedTime;
    if (latestSuspendedTime === suspendedTime) {
      root.latestPingedTime = NoWork;
    }

    // Finally, update the known suspended levels.
    var earliestSuspendedTime = root.earliestSuspendedTime;
    if (earliestSuspendedTime === NoWork) {
      // No other suspended levels.
      root.earliestSuspendedTime = root.latestSuspendedTime = suspendedTime;
    } else {
      if (earliestSuspendedTime > suspendedTime) {
        // This is the earliest suspended level.
        root.earliestSuspendedTime = suspendedTime;
      } else if (latestSuspendedTime < suspendedTime) {
        // This is the latest suspended level
        root.latestSuspendedTime = suspendedTime;
      }
    }
  }
}

function markPingedPriorityLevel(root, pingedTime) {
  if (enableSuspense) {
    var latestSuspendedTime = root.latestSuspendedTime;
    if (latestSuspendedTime !== NoWork && latestSuspendedTime <= pingedTime) {
      var latestPingedTime = root.latestPingedTime;
      if (latestPingedTime === NoWork || latestPingedTime < pingedTime) {
        root.latestPingedTime = pingedTime;
      }
    }
  }
}

function findNextPendingPriorityLevel(root) {
  if (enableSuspense) {
    var earliestSuspendedTime = root.earliestSuspendedTime;
    var earliestPendingTime = root.earliestPendingTime;
    if (earliestSuspendedTime === NoWork) {
      // Fast path. There's no suspended work.
      return earliestPendingTime;
    }

    // First, check if there's known pending work.
    if (earliestPendingTime !== NoWork) {
      return earliestPendingTime;
    }

    // Finally, if a suspended level was pinged, work on that. Otherwise there's
    // nothing to work on.
    return root.latestPingedTime;
  } else {
    return root.current.expirationTime;
  }
}

// UpdateQueue is a linked list of prioritized updates.
//
// Like fibers, update queues come in pairs: a current queue, which represents
// the visible state of the screen, and a work-in-progress queue, which is
// can be mutated and processed asynchronously before it is committed — a form
// of double buffering. If a work-in-progress render is discarded before
// finishing, we create a new work-in-progress by cloning the current queue.
//
// Both queues share a persistent, singly-linked list structure. To schedule an
// update, we append it to the end of both queues. Each queue maintains a
// pointer to first update in the persistent list that hasn't been processed.
// The work-in-progress pointer always has a position equal to or greater than
// the current queue, since we always work on that one. The current queue's
// pointer is only updated during the commit phase, when we swap in the
// work-in-progress.
//
// For example:
//
//   Current pointer:           A - B - C - D - E - F
//   Work-in-progress pointer:              D - E - F
//                                          ^
//                                          The work-in-progress queue has
//                                          processed more updates than current.
//
// The reason we append to both queues is because otherwise we might drop
// updates without ever processing them. For example, if we only add updates to
// the work-in-progress queue, some updates could be lost whenever a work-in
// -progress render restarts by cloning from current. Similarly, if we only add
// updates to the current queue, the updates will be lost whenever an already
// in-progress queue commits and swaps with the current queue. However, by
// adding to both queues, we guarantee that the update will be part of the next
// work-in-progress. (And because the work-in-progress queue becomes the
// current queue once it commits, there's no danger of applying the same
// update twice.)
//
// Prioritization
// --------------
//
// Updates are not sorted by priority, but by insertion; new updates are always
// appended to the end of the list.
//
// The priority is still important, though. When processing the update queue
// during the render phase, only the updates with sufficient priority are
// included in the result. If we skip an update because it has insufficient
// priority, it remains in the queue to be processed later, during a lower
// priority render. Crucially, all updates subsequent to a skipped update also
// remain in the queue *regardless of their priority*. That means high priority
// updates are sometimes processed twice, at two separate priorities. We also
// keep track of a base state, that represents the state before the first
// update in the queue is applied.
//
// For example:
//
//   Given a base state of '', and the following queue of updates
//
//     A1 - B2 - C1 - D2
//
//   where the number indicates the priority, and the update is applied to the
//   previous state by appending a letter, React will process these updates as
//   two separate renders, one per distinct priority level:
//
//   First render, at priority 1:
//     Base state: ''
//     Updates: [A1, C1]
//     Result state: 'AC'
//
//   Second render, at priority 2:
//     Base state: 'A'            <-  The base state does not include C1,
//                                    because B2 was skipped.
//     Updates: [B2, C1, D2]      <-  C1 was rebased on top of B2
//     Result state: 'ABCD'
//
// Because we process updates in insertion order, and rebase high priority
// updates when preceding updates are skipped, the final result is deterministic
// regardless of priority. Intermediate state may vary according to system
// resources, but the final state is always the same.

var UpdateState = 0;
var ReplaceState = 1;
var ForceUpdate = 2;
var CaptureUpdate = 3;

// Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.
var hasForceUpdate = false;

var didWarnUpdateInsideUpdate = void 0;
var currentlyProcessingQueue = void 0;
var resetCurrentlyProcessingQueue = void 0;
{
  didWarnUpdateInsideUpdate = false;
  currentlyProcessingQueue = null;
  resetCurrentlyProcessingQueue = function () {
    currentlyProcessingQueue = null;
  };
}

function createUpdateQueue(baseState) {
  var queue = {
    expirationTime: NoWork,
    baseState: baseState,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
  return queue;
}

function cloneUpdateQueue(currentQueue) {
  var queue = {
    expirationTime: currentQueue.expirationTime,
    baseState: currentQueue.baseState,
    firstUpdate: currentQueue.firstUpdate,
    lastUpdate: currentQueue.lastUpdate,

    // TODO: With resuming, if we bail out and resuse the child tree, we should
    // keep these effects.
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,

    firstEffect: null,
    lastEffect: null,

    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
  return queue;
}

function createUpdate(expirationTime) {
  return {
    expirationTime: expirationTime,

    tag: UpdateState,
    payload: null,
    callback: null,

    next: null,
    nextEffect: null
  };
}

function appendUpdateToQueue(queue, update, expirationTime) {
  // Append the update to the end of the list.
  if (queue.lastUpdate === null) {
    // Queue is empty
    queue.firstUpdate = queue.lastUpdate = update;
  } else {
    queue.lastUpdate.next = update;
    queue.lastUpdate = update;
  }
  if (queue.expirationTime === NoWork || queue.expirationTime > expirationTime) {
    // The incoming update has the earliest expiration of any update in the
    // queue. Update the queue's expiration time.
    queue.expirationTime = expirationTime;
  }
}

function enqueueUpdate(fiber, update, expirationTime) {
  // Update queues are created lazily.
  var alternate = fiber.alternate;
  var queue1 = void 0;
  var queue2 = void 0;
  if (alternate === null) {
    // There's only one fiber.
    queue1 = fiber.updateQueue;
    queue2 = null;
    if (queue1 === null) {
      queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
    }
  } else {
    // There are two owners.
    queue1 = fiber.updateQueue;
    queue2 = alternate.updateQueue;
    if (queue1 === null) {
      if (queue2 === null) {
        // Neither fiber has an update queue. Create new ones.
        queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
        queue2 = alternate.updateQueue = createUpdateQueue(alternate.memoizedState);
      } else {
        // Only one fiber has an update queue. Clone to create a new one.
        queue1 = fiber.updateQueue = cloneUpdateQueue(queue2);
      }
    } else {
      if (queue2 === null) {
        // Only one fiber has an update queue. Clone to create a new one.
        queue2 = alternate.updateQueue = cloneUpdateQueue(queue1);
      } else {
        // Both owners have an update queue.
      }
    }
  }
  if (queue2 === null || queue1 === queue2) {
    // There's only a single queue.
    appendUpdateToQueue(queue1, update, expirationTime);
  } else {
    // There are two queues. We need to append the update to both queues,
    // while accounting for the persistent structure of the list — we don't
    // want the same update to be added multiple times.
    if (queue1.lastUpdate === null || queue2.lastUpdate === null) {
      // One of the queues is not empty. We must add the update to both queues.
      appendUpdateToQueue(queue1, update, expirationTime);
      appendUpdateToQueue(queue2, update, expirationTime);
    } else {
      // Both queues are non-empty. The last update is the same in both lists,
      // because of structural sharing. So, only append to one of the lists.
      appendUpdateToQueue(queue1, update, expirationTime);
      // But we still need to update the `lastUpdate` pointer of queue2.
      queue2.lastUpdate = update;
    }
  }

  {
    if (fiber.tag === ClassComponent && (currentlyProcessingQueue === queue1 || queue2 !== null && currentlyProcessingQueue === queue2) && !didWarnUpdateInsideUpdate) {
      warning(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
      didWarnUpdateInsideUpdate = true;
    }
  }
}

function enqueueCapturedUpdate(workInProgress, update, renderExpirationTime) {
  // Captured updates go into a separate list, and only on the work-in-
  // progress queue.
  var workInProgressQueue = workInProgress.updateQueue;
  if (workInProgressQueue === null) {
    workInProgressQueue = workInProgress.updateQueue = createUpdateQueue(workInProgress.memoizedState);
  } else {
    // TODO: I put this here rather than createWorkInProgress so that we don't
    // clone the queue unnecessarily. There's probably a better way to
    // structure this.
    workInProgressQueue = ensureWorkInProgressQueueIsAClone(workInProgress, workInProgressQueue);
  }

  // Append the update to the end of the list.
  if (workInProgressQueue.lastCapturedUpdate === null) {
    // This is the first render phase update
    workInProgressQueue.firstCapturedUpdate = workInProgressQueue.lastCapturedUpdate = update;
  } else {
    workInProgressQueue.lastCapturedUpdate.next = update;
    workInProgressQueue.lastCapturedUpdate = update;
  }
  if (workInProgressQueue.expirationTime === NoWork || workInProgressQueue.expirationTime > renderExpirationTime) {
    // The incoming update has the earliest expiration of any update in the
    // queue. Update the queue's expiration time.
    workInProgressQueue.expirationTime = renderExpirationTime;
  }
}

function ensureWorkInProgressQueueIsAClone(workInProgress, queue) {
  var current = workInProgress.alternate;
  if (current !== null) {
    // If the work-in-progress queue is equal to the current queue,
    // we need to clone it first.
    if (queue === current.updateQueue) {
      queue = workInProgress.updateQueue = cloneUpdateQueue(queue);
    }
  }
  return queue;
}

function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
  switch (update.tag) {
    case ReplaceState:
      {
        var _payload = update.payload;
        if (typeof _payload === 'function') {
          // Updater function
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              _payload.call(instance, prevState, nextProps);
            }
          }
          return _payload.call(instance, prevState, nextProps);
        }
        // State object
        return _payload;
      }
    case CaptureUpdate:
      {
        workInProgress.effectTag = workInProgress.effectTag & ~ShouldCapture | DidCapture;
      }
    // Intentional fallthrough
    case UpdateState:
      {
        var _payload2 = update.payload;
        var partialState = void 0;
        if (typeof _payload2 === 'function') {
          // Updater function
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              _payload2.call(instance, prevState, nextProps);
            }
          }
          partialState = _payload2.call(instance, prevState, nextProps);
        } else {
          // Partial state object
          partialState = _payload2;
        }
        if (partialState === null || partialState === undefined) {
          // Null and undefined are treated as no-ops.
          return prevState;
        }
        // Merge the partial state and the previous state.
        return _assign({}, prevState, partialState);
      }
    case ForceUpdate:
      {
        hasForceUpdate = true;
        return prevState;
      }
  }
  return prevState;
}

function processUpdateQueue(workInProgress, queue, props, instance, renderExpirationTime) {
  hasForceUpdate = false;

  if (queue.expirationTime === NoWork || queue.expirationTime > renderExpirationTime) {
    // Insufficient priority. Bailout.
    return;
  }

  queue = ensureWorkInProgressQueueIsAClone(workInProgress, queue);

  {
    currentlyProcessingQueue = queue;
  }

  // These values may change as we process the queue.
  var newBaseState = queue.baseState;
  var newFirstUpdate = null;
  var newExpirationTime = NoWork;

  // Iterate through the list of updates to compute the result.
  var update = queue.firstUpdate;
  var resultState = newBaseState;
  while (update !== null) {
    var updateExpirationTime = update.expirationTime;
    if (updateExpirationTime > renderExpirationTime) {
      // This update does not have sufficient priority. Skip it.
      if (newFirstUpdate === null) {
        // This is the first skipped update. It will be the first update in
        // the new list.
        newFirstUpdate = update;
        // Since this is the first update that was skipped, the current result
        // is the new base state.
        newBaseState = resultState;
      }
      // Since this update will remain in the list, update the remaining
      // expiration time.
      if (newExpirationTime === NoWork || newExpirationTime > updateExpirationTime) {
        newExpirationTime = updateExpirationTime;
      }
    } else {
      // This update does have sufficient priority. Process it and compute
      // a new result.
      resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
      var _callback = update.callback;
      if (_callback !== null) {
        workInProgress.effectTag |= Callback;
        // Set this to null, in case it was mutated during an aborted render.
        update.nextEffect = null;
        if (queue.lastEffect === null) {
          queue.firstEffect = queue.lastEffect = update;
        } else {
          queue.lastEffect.nextEffect = update;
          queue.lastEffect = update;
        }
      }
    }
    // Continue to the next update.
    update = update.next;
  }

  // Separately, iterate though the list of captured updates.
  var newFirstCapturedUpdate = null;
  update = queue.firstCapturedUpdate;
  while (update !== null) {
    var _updateExpirationTime = update.expirationTime;
    if (_updateExpirationTime > renderExpirationTime) {
      // This update does not have sufficient priority. Skip it.
      if (newFirstCapturedUpdate === null) {
        // This is the first skipped captured update. It will be the first
        // update in the new list.
        newFirstCapturedUpdate = update;
        // If this is the first update that was skipped, the current result is
        // the new base state.
        if (newFirstUpdate === null) {
          newBaseState = resultState;
        }
      }
      // Since this update will remain in the list, update the remaining
      // expiration time.
      if (newExpirationTime === NoWork || newExpirationTime > _updateExpirationTime) {
        newExpirationTime = _updateExpirationTime;
      }
    } else {
      // This update does have sufficient priority. Process it and compute
      // a new result.
      resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
      var _callback2 = update.callback;
      if (_callback2 !== null) {
        workInProgress.effectTag |= Callback;
        // Set this to null, in case it was mutated during an aborted render.
        update.nextEffect = null;
        if (queue.lastCapturedEffect === null) {
          queue.firstCapturedEffect = queue.lastCapturedEffect = update;
        } else {
          queue.lastCapturedEffect.nextEffect = update;
          queue.lastCapturedEffect = update;
        }
      }
    }
    update = update.next;
  }

  if (newFirstUpdate === null) {
    queue.lastUpdate = null;
  }
  if (newFirstCapturedUpdate === null) {
    queue.lastCapturedUpdate = null;
  } else {
    workInProgress.effectTag |= Callback;
  }
  if (newFirstUpdate === null && newFirstCapturedUpdate === null) {
    // We processed every update, without skipping. That means the new base
    // state is the same as the result state.
    newBaseState = resultState;
  }

  queue.baseState = newBaseState;
  queue.firstUpdate = newFirstUpdate;
  queue.firstCapturedUpdate = newFirstCapturedUpdate;
  queue.expirationTime = newExpirationTime;

  workInProgress.memoizedState = resultState;

  {
    currentlyProcessingQueue = null;
  }
}

function callCallback(callback, context) {
  !(typeof callback === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', callback) : void 0;
  callback.call(context);
}

function resetHasForceUpdateBeforeProcessing() {
  hasForceUpdate = false;
}

function checkHasForceUpdateAfterProcessing() {
  return hasForceUpdate;
}

function commitUpdateQueue(finishedWork, finishedQueue, instance, renderExpirationTime) {
  // If the finished render included captured updates, and there are still
  // lower priority updates left over, we need to keep the captured updates
  // in the queue so that they are rebased and not dropped once we process the
  // queue again at the lower priority.
  if (finishedQueue.firstCapturedUpdate !== null) {
    // Join the captured update list to the end of the normal list.
    if (finishedQueue.lastUpdate !== null) {
      finishedQueue.lastUpdate.next = finishedQueue.firstCapturedUpdate;
      finishedQueue.lastUpdate = finishedQueue.lastCapturedUpdate;
    }
    // Clear the list of captured updates.
    finishedQueue.firstCapturedUpdate = finishedQueue.lastCapturedUpdate = null;
  }

  // Commit the effects
  var effect = finishedQueue.firstEffect;
  finishedQueue.firstEffect = finishedQueue.lastEffect = null;
  while (effect !== null) {
    var _callback3 = effect.callback;
    if (_callback3 !== null) {
      effect.callback = null;
      callCallback(_callback3, instance);
    }
    effect = effect.nextEffect;
  }

  effect = finishedQueue.firstCapturedEffect;
  finishedQueue.firstCapturedEffect = finishedQueue.lastCapturedEffect = null;
  while (effect !== null) {
    var _callback4 = effect.callback;
    if (_callback4 !== null) {
      effect.callback = null;
      callCallback(_callback4, instance);
    }
    effect = effect.nextEffect;
  }
}

function createCapturedValue(value, source) {
  // If the value is an error, call this function immediately after it is thrown
  // so the stack is accurate.
  return {
    value: value,
    source: source,
    stack: getStackAddendumByWorkInProgressFiber(source)
  };
}

var providerCursor = createCursor(null);
var valueCursor = createCursor(null);
var changedBitsCursor = createCursor(0);

var rendererSigil = void 0;
{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
}

function pushProvider(providerFiber) {
  var context = providerFiber.type._context;

  if (isPrimaryRenderer) {
    push(changedBitsCursor, context._changedBits, providerFiber);
    push(valueCursor, context._currentValue, providerFiber);
    push(providerCursor, providerFiber, providerFiber);

    context._currentValue = providerFiber.pendingProps.value;
    context._changedBits = providerFiber.stateNode;
    {
      !(context._currentRenderer === undefined || context._currentRenderer === null || context._currentRenderer === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
      context._currentRenderer = rendererSigil;
    }
  } else {
    push(changedBitsCursor, context._changedBits2, providerFiber);
    push(valueCursor, context._currentValue2, providerFiber);
    push(providerCursor, providerFiber, providerFiber);

    context._currentValue2 = providerFiber.pendingProps.value;
    context._changedBits2 = providerFiber.stateNode;
    {
      !(context._currentRenderer2 === undefined || context._currentRenderer2 === null || context._currentRenderer2 === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
      context._currentRenderer2 = rendererSigil;
    }
  }
}

function popProvider(providerFiber) {
  var changedBits = changedBitsCursor.current;
  var currentValue = valueCursor.current;

  pop(providerCursor, providerFiber);
  pop(valueCursor, providerFiber);
  pop(changedBitsCursor, providerFiber);

  var context = providerFiber.type._context;
  if (isPrimaryRenderer) {
    context._currentValue = currentValue;
    context._changedBits = changedBits;
  } else {
    context._currentValue2 = currentValue;
    context._changedBits2 = changedBits;
  }
}

function getContextCurrentValue(context) {
  return isPrimaryRenderer ? context._currentValue : context._currentValue2;
}

function getContextChangedBits(context) {
  return isPrimaryRenderer ? context._changedBits : context._changedBits2;
}

var NO_CONTEXT = {};

var contextStackCursor$1 = createCursor(NO_CONTEXT);
var contextFiberStackCursor = createCursor(NO_CONTEXT);
var rootInstanceStackCursor = createCursor(NO_CONTEXT);

function requiredContext(c) {
  !(c !== NO_CONTEXT) ? invariant(false, 'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  return c;
}

function getRootHostContainer() {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  return rootInstance;
}

function pushHostContainer(fiber, nextRootInstance) {
  // Push current root instance onto the stack;
  // This allows us to reset root when portals are popped.
  push(rootInstanceStackCursor, nextRootInstance, fiber);
  // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor, fiber, fiber);

  // Finally, we need to push the host context to the stack.
  // However, we can't just call getRootHostContext() and push it because
  // we'd have a different number of entries on the stack depending on
  // whether getRootHostContext() throws somewhere in renderer code or not.
  // So we push an empty value first. This lets us safely unwind on errors.
  push(contextStackCursor$1, NO_CONTEXT, fiber);
  var nextRootContext = getRootHostContext(nextRootInstance);
  // Now that we know this function doesn't throw, replace it.
  pop(contextStackCursor$1, fiber);
  push(contextStackCursor$1, nextRootContext, fiber);
}

function popHostContainer(fiber) {
  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
  pop(rootInstanceStackCursor, fiber);
}

function getHostContext() {
  var context = requiredContext(contextStackCursor$1.current);
  return context;
}

function pushHostContext(fiber) {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  var context = requiredContext(contextStackCursor$1.current);
  var nextContext = getChildHostContext(context, fiber.type, rootInstance);

  // Don't push this Fiber's context unless it's unique.
  if (context === nextContext) {
    return;
  }

  // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor, fiber, fiber);
  push(contextStackCursor$1, nextContext, fiber);
}

function popHostContext(fiber) {
  // Do not pop unless this Fiber provided the current context.
  // pushHostContext() only pushes Fibers that provide unique contexts.
  if (contextFiberStackCursor.current !== fiber) {
    return;
  }

  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
}

var commitTime = 0;

function getCommitTime() {
  return commitTime;
}

function recordCommitTime() {
  if (!enableProfilerTimer) {
    return;
  }
  commitTime = now();
}

/**
 * The "actual" render time is total time required to render the descendants of a Profiler component.
 * This time is stored as a stack, since Profilers can be nested.
 * This time is started during the "begin" phase and stopped during the "complete" phase.
 * It is paused (and accumulated) in the event of an interruption or an aborted render.
 */

var fiberStack$1 = void 0;

{
  fiberStack$1 = [];
}

var timerPausedAt = 0;
var totalElapsedPauseTime = 0;

function checkActualRenderTimeStackEmpty() {
  if (!enableProfilerTimer) {
    return;
  }
  {
    !(fiberStack$1.length === 0) ? warning(false, 'Expected an empty stack. Something was not reset properly.') : void 0;
  }
}

function markActualRenderTimeStarted(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  {
    fiberStack$1.push(fiber);
  }

  fiber.actualDuration = now() - fiber.actualDuration - totalElapsedPauseTime;
  fiber.actualStartTime = now();
}

function pauseActualRenderTimerIfRunning() {
  if (!enableProfilerTimer) {
    return;
  }
  if (timerPausedAt === 0) {
    timerPausedAt = now();
  }
}

function recordElapsedActualRenderTime(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  {
    !(fiber === fiberStack$1.pop()) ? warning(false, 'Unexpected Fiber (%s) popped.', getComponentName(fiber)) : void 0;
  }

  fiber.actualDuration = now() - totalElapsedPauseTime - fiber.actualDuration;
}

function resetActualRenderTimer() {
  if (!enableProfilerTimer) {
    return;
  }
  totalElapsedPauseTime = 0;
}

function resumeActualRenderTimerIfPaused() {
  if (!enableProfilerTimer) {
    return;
  }
  if (timerPausedAt > 0) {
    totalElapsedPauseTime += now() - timerPausedAt;
    timerPausedAt = 0;
  }
}

/**
 * The "base" render time is the duration of the “begin” phase of work for a particular fiber.
 * This time is measured and stored on each fiber.
 * The time for all sibling fibers are accumulated and stored on their parent during the "complete" phase.
 * If a fiber bails out (sCU false) then its "base" timer is cancelled and the fiber is not updated.
 */

var baseStartTime = -1;

function recordElapsedBaseRenderTimeIfRunning(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  if (baseStartTime !== -1) {
    fiber.selfBaseTime = now() - baseStartTime;
  }
}

function startBaseRenderTimer() {
  if (!enableProfilerTimer) {
    return;
  }
  {
    if (baseStartTime !== -1) {
      warning(false, 'Cannot start base timer that is already running. ' + 'This error is likely caused by a bug in React. ' + 'Please file an issue.');
    }
  }
  baseStartTime = now();
}

function stopBaseRenderTimerIfRunning() {
  if (!enableProfilerTimer) {
    return;
  }
  baseStartTime = -1;
}

var fakeInternalInstance = {};
var isArray = Array.isArray;

var didWarnAboutStateAssignmentForComponent = void 0;
var didWarnAboutUninitializedState = void 0;
var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = void 0;
var didWarnAboutLegacyLifecyclesAndDerivedState = void 0;
var didWarnAboutUndefinedDerivedState = void 0;
var warnOnUndefinedDerivedState = void 0;
var warnOnInvalidCallback = void 0;

{
  didWarnAboutStateAssignmentForComponent = new Set();
  didWarnAboutUninitializedState = new Set();
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
  didWarnAboutUndefinedDerivedState = new Set();

  var didWarnOnInvalidCallback = new Set();

  warnOnInvalidCallback = function (callback, callerName) {
    if (callback === null || typeof callback === 'function') {
      return;
    }
    var key = callerName + '_' + callback;
    if (!didWarnOnInvalidCallback.has(key)) {
      didWarnOnInvalidCallback.add(key);
      warning(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
    }
  };

  warnOnUndefinedDerivedState = function (workInProgress, partialState) {
    if (partialState === undefined) {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
        didWarnAboutUndefinedDerivedState.add(componentName);
        warning(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
      }
    }
  };

  // This is so gross but it's at least non-critical and can be removed if
  // it causes problems. This is meant to give a nicer error message for
  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
  // ...)) which otherwise throws a "_processChildContext is not a function"
  // exception.
  Object.defineProperty(fakeInternalInstance, '_processChildContext', {
    enumerable: false,
    value: function () {
      invariant(false, '_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).');
    }
  });
  Object.freeze(fakeInternalInstance);
}

function applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, nextProps) {
  var prevState = workInProgress.memoizedState;

  {
    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
      // Invoke the function an extra time to help detect side-effects.
      getDerivedStateFromProps(nextProps, prevState);
    }
  }

  var partialState = getDerivedStateFromProps(nextProps, prevState);

  {
    warnOnUndefinedDerivedState(workInProgress, partialState);
  }
  // Merge the partial state and the previous state.
  var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
  workInProgress.memoizedState = memoizedState;

  // Once the update queue is empty, persist the derived state onto the
  // base state.
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null && updateQueue.expirationTime === NoWork) {
    updateQueue.baseState = memoizedState;
  }
}

var classComponentUpdater = {
  isMounted: isMounted,
  enqueueSetState: function (inst, payload, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.payload = payload;
    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'setState');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork(fiber, expirationTime);
  },
  enqueueReplaceState: function (inst, payload, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.tag = ReplaceState;
    update.payload = payload;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'replaceState');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork(fiber, expirationTime);
  },
  enqueueForceUpdate: function (inst, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.tag = ForceUpdate;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'forceUpdate');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork(fiber, expirationTime);
  }
};

function checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext) {
  var instance = workInProgress.stateNode;
  var ctor = workInProgress.type;
  if (typeof instance.shouldComponentUpdate === 'function') {
    startPhaseTimer(workInProgress, 'shouldComponentUpdate');
    var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
    stopPhaseTimer();

    {
      !(shouldUpdate !== undefined) ? warning(false, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(workInProgress) || 'Component') : void 0;
    }

    return shouldUpdate;
  }

  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
  }

  return true;
}

function checkClassInstance(workInProgress) {
  var instance = workInProgress.stateNode;
  var type = workInProgress.type;
  {
    var name = getComponentName(workInProgress) || 'Component';
    var renderPresent = instance.render;

    if (!renderPresent) {
      if (type.prototype && typeof type.prototype.render === 'function') {
        warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
      } else {
        warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
      }
    }

    var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
    !noGetInitialStateOnES6 ? warning(false, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name) : void 0;
    var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
    !noGetDefaultPropsOnES6 ? warning(false, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name) : void 0;
    var noInstancePropTypes = !instance.propTypes;
    !noInstancePropTypes ? warning(false, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name) : void 0;
    var noInstanceContextTypes = !instance.contextTypes;
    !noInstanceContextTypes ? warning(false, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name) : void 0;
    var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
    !noComponentShouldUpdate ? warning(false, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name) : void 0;
    if (type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
      warning(false, '%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(workInProgress) || 'A pure component');
    }
    var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
    !noComponentDidUnmount ? warning(false, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name) : void 0;
    var noComponentDidReceiveProps = typeof instance.componentDidReceiveProps !== 'function';
    !noComponentDidReceiveProps ? warning(false, '%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name) : void 0;
    var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
    !noComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name) : void 0;
    var noUnsafeComponentWillRecieveProps = typeof instance.UNSAFE_componentWillRecieveProps !== 'function';
    !noUnsafeComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name) : void 0;
    var hasMutatedProps = instance.props !== workInProgress.pendingProps;
    !(instance.props === undefined || !hasMutatedProps) ? warning(false, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name) : void 0;
    var noInstanceDefaultProps = !instance.defaultProps;
    !noInstanceDefaultProps ? warning(false, 'Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name) : void 0;

    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type)) {
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type);
      warning(false, '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentName(workInProgress));
    }

    var noInstanceGetDerivedStateFromProps = typeof instance.getDerivedStateFromProps !== 'function';
    !noInstanceGetDerivedStateFromProps ? warning(false, '%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
    var noInstanceGetDerivedStateFromCatch = typeof instance.getDerivedStateFromCatch !== 'function';
    !noInstanceGetDerivedStateFromCatch ? warning(false, '%s: getDerivedStateFromCatch() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
    var noStaticGetSnapshotBeforeUpdate = typeof type.getSnapshotBeforeUpdate !== 'function';
    !noStaticGetSnapshotBeforeUpdate ? warning(false, '%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name) : void 0;
    var _state = instance.state;
    if (_state && (typeof _state !== 'object' || isArray(_state))) {
      warning(false, '%s.state: must be set to an object or null', name);
    }
    if (typeof instance.getChildContext === 'function') {
      !(typeof type.childContextTypes === 'object') ? warning(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name) : void 0;
    }
  }
}

function adoptClassInstance(workInProgress, instance) {
  instance.updater = classComponentUpdater;
  workInProgress.stateNode = instance;
  // The instance needs access to the fiber so that it can schedule updates
  set(instance, workInProgress);
  {
    instance._reactInternalInstance = fakeInternalInstance;
  }
}

function constructClassInstance(workInProgress, props, renderExpirationTime) {
  var ctor = workInProgress.type;
  var unmaskedContext = getUnmaskedContext(workInProgress);
  var needsContext = isContextConsumer(workInProgress);
  var context = needsContext ? getMaskedContext(workInProgress, unmaskedContext) : emptyObject;

  // Instantiate twice to help detect side-effects.
  {
    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
      new ctor(props, context); // eslint-disable-line no-new
    }
  }

  var instance = new ctor(props, context);
  var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
  adoptClassInstance(workInProgress, instance);

  {
    if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutUninitializedState.has(componentName)) {
        didWarnAboutUninitializedState.add(componentName);
        warning(false, '%s: Did not properly initialize state during construction. ' + 'Expected state to be an object, but it was %s.', componentName, instance.state === null ? 'null' : 'undefined');
      }
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Warn about these lifecycles if they are present.
    // Don't warn about react-lifecycles-compat polyfilled methods though.
    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;
      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
        foundWillMountName = 'componentWillMount';
      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }
      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }
      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }
      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var _componentName = getComponentName(workInProgress) || 'Component';
        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
          warning(false, 'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks', _componentName, newApiName, foundWillMountName !== null ? '\n  ' + foundWillMountName : '', foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '', foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '');
        }
      }
    }
  }

  // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // ReactFiberContext usually updates this cache but can't for newly-created instances.
  if (needsContext) {
    cacheContext(workInProgress, unmaskedContext, context);
  }

  return instance;
}

function callComponentWillMount(workInProgress, instance) {
  startPhaseTimer(workInProgress, 'componentWillMount');
  var oldState = instance.state;

  if (typeof instance.componentWillMount === 'function') {
    instance.componentWillMount();
  }
  if (typeof instance.UNSAFE_componentWillMount === 'function') {
    instance.UNSAFE_componentWillMount();
  }

  stopPhaseTimer();

  if (oldState !== instance.state) {
    {
      warning(false, '%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress) || 'Component');
    }
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

function callComponentWillReceiveProps(workInProgress, instance, newProps, newContext) {
  var oldState = instance.state;
  startPhaseTimer(workInProgress, 'componentWillReceiveProps');
  if (typeof instance.componentWillReceiveProps === 'function') {
    instance.componentWillReceiveProps(newProps, newContext);
  }
  if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
    instance.UNSAFE_componentWillReceiveProps(newProps, newContext);
  }
  stopPhaseTimer();

  if (instance.state !== oldState) {
    {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
        didWarnAboutStateAssignmentForComponent.add(componentName);
        warning(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
      }
    }
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;

  {
    checkClassInstance(workInProgress);
  }

  var instance = workInProgress.stateNode;
  var props = workInProgress.pendingProps;
  var unmaskedContext = getUnmaskedContext(workInProgress);

  instance.props = props;
  instance.state = workInProgress.memoizedState;
  instance.refs = emptyObject;
  instance.context = getMaskedContext(workInProgress, unmaskedContext);

  {
    if (workInProgress.mode & StrictMode) {
      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);

      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
    }

    if (warnAboutDeprecatedLifecycles) {
      ReactStrictModeWarnings.recordDeprecationWarnings(workInProgress, instance);
    }
  }

  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
    instance.state = workInProgress.memoizedState;
  }

  var getDerivedStateFromProps = workInProgress.type.getDerivedStateFromProps;
  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
    instance.state = workInProgress.memoizedState;
  }

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
    callComponentWillMount(workInProgress, instance);
    // If we had additional state updates during this life-cycle, let's
    // process them now.
    updateQueue = workInProgress.updateQueue;
    if (updateQueue !== null) {
      processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
      instance.state = workInProgress.memoizedState;
    }
  }

  if (typeof instance.componentDidMount === 'function') {
    workInProgress.effectTag |= Update;
  }
}

function resumeMountClassInstance(workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  var oldProps = workInProgress.memoizedProps;
  var newProps = workInProgress.pendingProps;
  instance.props = oldProps;

  var oldContext = instance.context;
  var newUnmaskedContext = getUnmaskedContext(workInProgress);
  var newContext = getMaskedContext(workInProgress, newUnmaskedContext);

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';

  // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== newContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();

  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
    newState = workInProgress.memoizedState;
  }
  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }
    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
      startPhaseTimer(workInProgress, 'componentWillMount');
      if (typeof instance.componentWillMount === 'function') {
        instance.componentWillMount();
      }
      if (typeof instance.UNSAFE_componentWillMount === 'function') {
        instance.UNSAFE_componentWillMount();
      }
      stopPhaseTimer();
    }
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }

    // If shouldComponentUpdate returned false, we should still update the
    // memoized state to indicate that this work can be reused.
    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  }

  // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props = newProps;
  instance.state = newState;
  instance.context = newContext;

  return shouldUpdate;
}

// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current, workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  var oldProps = workInProgress.memoizedProps;
  var newProps = workInProgress.pendingProps;
  instance.props = oldProps;

  var oldContext = instance.context;
  var newUnmaskedContext = getUnmaskedContext(workInProgress);
  var newContext = getMaskedContext(workInProgress, newUnmaskedContext);

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';

  // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== newContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();

  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
    newState = workInProgress.memoizedState;
  }

  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Update;
      }
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Snapshot;
      }
    }
    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
      startPhaseTimer(workInProgress, 'componentWillUpdate');
      if (typeof instance.componentWillUpdate === 'function') {
        instance.componentWillUpdate(newProps, newState, newContext);
      }
      if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        instance.UNSAFE_componentWillUpdate(newProps, newState, newContext);
      }
      stopPhaseTimer();
    }
    if (typeof instance.componentDidUpdate === 'function') {
      workInProgress.effectTag |= Update;
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      workInProgress.effectTag |= Snapshot;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Update;
      }
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Snapshot;
      }
    }

    // If shouldComponentUpdate returned false, we should still update the
    // memoized props/state to indicate that this work can be reused.
    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  }

  // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props = newProps;
  instance.state = newState;
  instance.context = newContext;

  return shouldUpdate;
}

var getCurrentFiberStackAddendum$2 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


var didWarnAboutMaps = void 0;
var didWarnAboutStringRefInStrictMode = void 0;
var ownerHasKeyUseWarning = void 0;
var ownerHasFunctionTypeWarning = void 0;
var warnForMissingKey = function (child) {};

{
  didWarnAboutMaps = false;
  didWarnAboutStringRefInStrictMode = {};

  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
  ownerHasKeyUseWarning = {};
  ownerHasFunctionTypeWarning = {};

  warnForMissingKey = function (child) {
    if (child === null || typeof child !== 'object') {
      return;
    }
    if (!child._store || child._store.validated || child.key != null) {
      return;
    }
    !(typeof child._store === 'object') ? invariant(false, 'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.') : void 0;
    child._store.validated = true;

    var currentComponentErrorInfo = 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.' + (getCurrentFiberStackAddendum$2() || '');
    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }
    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

    warning(false, 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.%s', getCurrentFiberStackAddendum$2());
  };
}

var isArray$1 = Array.isArray;

function coerceRef(returnFiber, current, element) {
  var mixedRef = element.ref;
  if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
    {
      if (returnFiber.mode & StrictMode) {
        var componentName = getComponentName(returnFiber) || 'Component';
        if (!didWarnAboutStringRefInStrictMode[componentName]) {
          warning(false, 'A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using createRef() instead.' + '\n%s' + '\n\nLearn more about using refs safely here:' + '\nhttps://fb.me/react-strict-mode-string-ref', mixedRef, getStackAddendumByWorkInProgressFiber(returnFiber));
          didWarnAboutStringRefInStrictMode[componentName] = true;
        }
      }
    }

    if (element._owner) {
      var owner = element._owner;
      var inst = void 0;
      if (owner) {
        var ownerFiber = owner;
        !(ownerFiber.tag === ClassComponent) ? invariant(false, 'Stateless function components cannot have refs.') : void 0;
        inst = ownerFiber.stateNode;
      }
      !inst ? invariant(false, 'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.', mixedRef) : void 0;
      var stringRef = '' + mixedRef;
      // Check if previous string ref matches new string ref
      if (current !== null && current.ref !== null && typeof current.ref === 'function' && current.ref._stringRef === stringRef) {
        return current.ref;
      }
      var ref = function (value) {
        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
        if (value === null) {
          delete refs[stringRef];
        } else {
          refs[stringRef] = value;
        }
      };
      ref._stringRef = stringRef;
      return ref;
    } else {
      !(typeof mixedRef === 'string') ? invariant(false, 'Expected ref to be a function or a string.') : void 0;
      !element._owner ? invariant(false, 'Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a functional component\n2. You may be adding a ref to a component that was not created inside a component\'s render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.', mixedRef) : void 0;
    }
  }
  return mixedRef;
}

function throwOnInvalidObjectType(returnFiber, newChild) {
  if (returnFiber.type !== 'textarea') {
    var addendum = '';
    {
      addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + (getCurrentFiberStackAddendum$2() || '');
    }
    invariant(false, 'Objects are not valid as a React child (found: %s).%s', Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild, addendum);
  }
}

function warnOnFunctionType() {
  var currentComponentErrorInfo = 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.' + (getCurrentFiberStackAddendum$2() || '');

  if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;

  warning(false, 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.%s', getCurrentFiberStackAddendum$2() || '');
}

// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return;
    }
    // Deletions are added in reversed order so we add it to the front.
    // At this point, the return fiber's effect list is empty except for
    // deletions, so we can just append the deletion to the list. The remaining
    // effects aren't added until the complete phase. Once we implement
    // resuming, this may not be true.
    var last = returnFiber.lastEffect;
    if (last !== null) {
      last.nextEffect = childToDelete;
      returnFiber.lastEffect = childToDelete;
    } else {
      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
    }
    childToDelete.nextEffect = null;
    childToDelete.effectTag = Deletion;
  }

  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return null;
    }

    // TODO: For the shouldClone case, this could be micro-optimized a bit by
    // assuming that after the first child we've already added everything.
    var childToDelete = currentFirstChild;
    while (childToDelete !== null) {
      deleteChild(returnFiber, childToDelete);
      childToDelete = childToDelete.sibling;
    }
    return null;
  }

  function mapRemainingChildren(returnFiber, currentFirstChild) {
    // Add the remaining children to a temporary map so that we can find them by
    // keys quickly. Implicit (null) keys get added to this set with their index
    var existingChildren = new Map();

    var existingChild = currentFirstChild;
    while (existingChild !== null) {
      if (existingChild.key !== null) {
        existingChildren.set(existingChild.key, existingChild);
      } else {
        existingChildren.set(existingChild.index, existingChild);
      }
      existingChild = existingChild.sibling;
    }
    return existingChildren;
  }

  function useFiber(fiber, pendingProps, expirationTime) {
    // We currently set sibling to null and index to 0 here because it is easy
    // to forget to do before returning it. E.g. for the single child case.
    var clone = createWorkInProgress(fiber, pendingProps, expirationTime);
    clone.index = 0;
    clone.sibling = null;
    return clone;
  }

  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects) {
      // Noop.
      return lastPlacedIndex;
    }
    var current = newFiber.alternate;
    if (current !== null) {
      var oldIndex = current.index;
      if (oldIndex < lastPlacedIndex) {
        // This is a move.
        newFiber.effectTag = Placement;
        return lastPlacedIndex;
      } else {
        // This item can stay in place.
        return oldIndex;
      }
    } else {
      // This is an insertion.
      newFiber.effectTag = Placement;
      return lastPlacedIndex;
    }
  }

  function placeSingleChild(newFiber) {
    // This is simpler for the single child case. We only need to do a
    // placement for inserting new children.
    if (shouldTrackSideEffects && newFiber.alternate === null) {
      newFiber.effectTag = Placement;
    }
    return newFiber;
  }

  function updateTextNode(returnFiber, current, textContent, expirationTime) {
    if (current === null || current.tag !== HostText) {
      // Insert
      var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, textContent, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateElement(returnFiber, current, element, expirationTime) {
    if (current !== null && current.type === element.type) {
      // Move based on index
      var existing = useFiber(current, element.props, expirationTime);
      existing.ref = coerceRef(returnFiber, current, element);
      existing.return = returnFiber;
      {
        existing._debugSource = element._source;
        existing._debugOwner = element._owner;
      }
      return existing;
    } else {
      // Insert
      var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
      created.ref = coerceRef(returnFiber, current, element);
      created.return = returnFiber;
      return created;
    }
  }

  function updatePortal(returnFiber, current, portal, expirationTime) {
    if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
      // Insert
      var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, portal.children || [], expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateFragment(returnFiber, current, fragment, expirationTime, key) {
    if (current === null || current.tag !== Fragment) {
      // Insert
      var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, fragment, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function createChild(returnFiber, newChild, expirationTime) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      var created = createFiberFromText('' + newChild, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);
            _created.ref = coerceRef(returnFiber, null, newChild);
            _created.return = returnFiber;
            return _created;
          }
        case REACT_PORTAL_TYPE:
          {
            var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);
            _created2.return = returnFiber;
            return _created2;
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);
        _created3.return = returnFiber;
        return _created3;
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
    // Update the fiber if the keys match, otherwise return null.

    var key = oldFiber !== null ? oldFiber.key : null;

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      if (key !== null) {
        return null;
      }
      return updateTextNode(returnFiber, oldFiber, '' + newChild, expirationTime);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            if (newChild.key === key) {
              if (newChild.type === REACT_FRAGMENT_TYPE) {
                return updateFragment(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
              }
              return updateElement(returnFiber, oldFiber, newChild, expirationTime);
            } else {
              return null;
            }
          }
        case REACT_PORTAL_TYPE:
          {
            if (newChild.key === key) {
              return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
            } else {
              return null;
            }
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        if (key !== null) {
          return null;
        }

        return updateFragment(returnFiber, oldFiber, newChild, expirationTime, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys, so we neither have to check the old nor
      // new node for the key. If both are text nodes, they match.
      var matchedFiber = existingChildren.get(newIdx) || null;
      return updateTextNode(returnFiber, matchedFiber, '' + newChild, expirationTime);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
            if (newChild.type === REACT_FRAGMENT_TYPE) {
              return updateFragment(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key);
            }
            return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
          }
        case REACT_PORTAL_TYPE:
          {
            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
            return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _matchedFiber3 = existingChildren.get(newIdx) || null;
        return updateFragment(returnFiber, _matchedFiber3, newChild, expirationTime, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  /**
   * Warns if there is a duplicate or missing key
   */
  function warnOnInvalidKey(child, knownKeys) {
    {
      if (typeof child !== 'object' || child === null) {
        return knownKeys;
      }
      switch (child.$$typeof) {
        case REACT_ELEMENT_TYPE:
        case REACT_PORTAL_TYPE:
          warnForMissingKey(child);
          var key = child.key;
          if (typeof key !== 'string') {
            break;
          }
          if (knownKeys === null) {
            knownKeys = new Set();
            knownKeys.add(key);
            break;
          }
          if (!knownKeys.has(key)) {
            knownKeys.add(key);
            break;
          }
          warning(false, 'Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.%s', key, getCurrentFiberStackAddendum$2());
          break;
        default:
          break;
      }
    }
    return knownKeys;
  }

  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
    // This algorithm can't optimize by searching from boths ends since we
    // don't have backpointers on fibers. I'm trying to see how far we can get
    // with that model. If it ends up not being worth the tradeoffs, we can
    // add it later.

    // Even with a two ended optimization, we'd want to optimize for the case
    // where there are few changes and brute force the comparison instead of
    // going for the Map. It'd like to explore hitting that path first in
    // forward-only mode and only go for the Map once we notice that we need
    // lots of look ahead. This doesn't handle reversal as well as two ended
    // search but that's unusual. Besides, for the two ended optimization to
    // work on Iterables, we'd need to copy the whole set.

    // In this first iteration, we'll just live with hitting the bad case
    // (adding everything to a Map) in for every insert/move.

    // If you change this code, also update reconcileChildrenIterator() which
    // uses the same algorithm.

    {
      // First, validate keys.
      var knownKeys = null;
      for (var i = 0; i < newChildren.length; i++) {
        var child = newChildren[i];
        knownKeys = warnOnInvalidKey(child, knownKeys);
      }
    }

    var resultingFirstChild = null;
    var previousNewFiber = null;

    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;
    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }
      var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);
      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (oldFiber === null) {
          oldFiber = nextOldFiber;
        }
        break;
      }
      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }
      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (newIdx === newChildren.length) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; newIdx < newChildren.length; newIdx++) {
        var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);
        if (!_newFiber) {
          continue;
        }
        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber;
        } else {
          previousNewFiber.sibling = _newFiber;
        }
        previousNewFiber = _newFiber;
      }
      return resultingFirstChild;
    }

    // Add all children to a key map for quick lookups.
    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

    // Keep scanning and use the map to restore deleted items as moves.
    for (; newIdx < newChildren.length; newIdx++) {
      var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);
      if (_newFiber2) {
        if (shouldTrackSideEffects) {
          if (_newFiber2.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
          }
        }
        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber2;
        } else {
          previousNewFiber.sibling = _newFiber2;
        }
        previousNewFiber = _newFiber2;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
    // This is the same implementation as reconcileChildrenArray(),
    // but using the iterator instead.

    var iteratorFn = getIteratorFn(newChildrenIterable);
    !(typeof iteratorFn === 'function') ? invariant(false, 'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.') : void 0;

    {
      // Warn about using Maps as children
      if (newChildrenIterable.entries === iteratorFn) {
        !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getCurrentFiberStackAddendum$2()) : void 0;
        didWarnAboutMaps = true;
      }

      // First, validate keys.
      // We'll get a different iterator later for the main pass.
      var _newChildren = iteratorFn.call(newChildrenIterable);
      if (_newChildren) {
        var knownKeys = null;
        var _step = _newChildren.next();
        for (; !_step.done; _step = _newChildren.next()) {
          var child = _step.value;
          knownKeys = warnOnInvalidKey(child, knownKeys);
        }
      }
    }

    var newChildren = iteratorFn.call(newChildrenIterable);
    !(newChildren != null) ? invariant(false, 'An iterable object provided no iterator.') : void 0;

    var resultingFirstChild = null;
    var previousNewFiber = null;

    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;

    var step = newChildren.next();
    for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);
      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (!oldFiber) {
          oldFiber = nextOldFiber;
        }
        break;
      }
      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }
      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (step.done) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; !step.done; newIdx++, step = newChildren.next()) {
        var _newFiber3 = createChild(returnFiber, step.value, expirationTime);
        if (_newFiber3 === null) {
          continue;
        }
        lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber3;
        } else {
          previousNewFiber.sibling = _newFiber3;
        }
        previousNewFiber = _newFiber3;
      }
      return resultingFirstChild;
    }

    // Add all children to a key map for quick lookups.
    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

    // Keep scanning and use the map to restore deleted items as moves.
    for (; !step.done; newIdx++, step = newChildren.next()) {
      var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);
      if (_newFiber4 !== null) {
        if (shouldTrackSideEffects) {
          if (_newFiber4.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
          }
        }
        lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber4;
        } else {
          previousNewFiber.sibling = _newFiber4;
        }
        previousNewFiber = _newFiber4;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
    // There's no need to check for keys on text nodes since we don't have a
    // way to define them.
    if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
      // We already have an existing node so let's just update it and delete
      // the rest.
      deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
      var existing = useFiber(currentFirstChild, textContent, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
    // The existing first child is not a text node so we need to create one
    // and delete the existing ones.
    deleteRemainingChildren(returnFiber, currentFirstChild);
    var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
    created.return = returnFiber;
    return created;
  }

  function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
    var key = element.key;
    var child = currentFirstChild;
    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        if (child.tag === Fragment ? element.type === REACT_FRAGMENT_TYPE : child.type === element.type) {
          deleteRemainingChildren(returnFiber, child.sibling);
          var existing = useFiber(child, element.type === REACT_FRAGMENT_TYPE ? element.props.children : element.props, expirationTime);
          existing.ref = coerceRef(returnFiber, child, element);
          existing.return = returnFiber;
          {
            existing._debugSource = element._source;
            existing._debugOwner = element._owner;
          }
          return existing;
        } else {
          deleteRemainingChildren(returnFiber, child);
          break;
        }
      } else {
        deleteChild(returnFiber, child);
      }
      child = child.sibling;
    }

    if (element.type === REACT_FRAGMENT_TYPE) {
      var created = createFiberFromFragment(element.props.children, returnFiber.mode, expirationTime, element.key);
      created.return = returnFiber;
      return created;
    } else {
      var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);
      _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
      _created4.return = returnFiber;
      return _created4;
    }
  }

  function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
    var key = portal.key;
    var child = currentFirstChild;
    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
          deleteRemainingChildren(returnFiber, child.sibling);
          var existing = useFiber(child, portal.children || [], expirationTime);
          existing.return = returnFiber;
          return existing;
        } else {
          deleteRemainingChildren(returnFiber, child);
          break;
        }
      } else {
        deleteChild(returnFiber, child);
      }
      child = child.sibling;
    }

    var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
    created.return = returnFiber;
    return created;
  }

  // This API will tag the children with the side-effect of the reconciliation
  // itself. They will be added to the side-effect list as we pass through the
  // children and the parent.
  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, expirationTime) {
    // This function is not recursive.
    // If the top level item is an array, we treat it as a set of children,
    // not as a fragment. Nested arrays on the other hand will be treated as
    // fragment nodes. Recursion happens at the normal flow.

    // Handle top level unkeyed fragments as if they were arrays.
    // This leads to an ambiguity between <>{[...]}</> and <>...</>.
    // We treat the ambiguous cases above the same.
    var isUnkeyedTopLevelFragment = typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
    if (isUnkeyedTopLevelFragment) {
      newChild = newChild.props.children;
    }

    // Handle object types
    var isObject = typeof newChild === 'object' && newChild !== null;

    if (isObject) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime));
        case REACT_PORTAL_TYPE:
          return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime));
      }
    }

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, expirationTime));
    }

    if (isArray$1(newChild)) {
      return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
    }

    if (getIteratorFn(newChild)) {
      return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
    }

    if (isObject) {
      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }
    if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
      // If the new child is undefined, and the return fiber is a composite
      // component, throw an error. If Fiber return types are disabled,
      // we already threw above.
      switch (returnFiber.tag) {
        case ClassComponent:
          {
            {
              var instance = returnFiber.stateNode;
              if (instance.render._isMockFunction) {
                // We allow auto-mocks to proceed as if they're returning null.
                break;
              }
            }
          }
        // Intentionally fall through to the next case, which handles both
        // functions and classes
        // eslint-disable-next-lined no-fallthrough
        case FunctionalComponent:
          {
            var Component = returnFiber.type;
            invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', Component.displayName || Component.name || 'Component');
          }
      }
    }

    // Remaining cases are all treated as empty.
    return deleteRemainingChildren(returnFiber, currentFirstChild);
  }

  return reconcileChildFibers;
}

var reconcileChildFibers = ChildReconciler(true);
var mountChildFibers = ChildReconciler(false);

function cloneChildFibers(current, workInProgress) {
  !(current === null || workInProgress.child === current.child) ? invariant(false, 'Resuming work not yet implemented.') : void 0;

  if (workInProgress.child === null) {
    return;
  }

  var currentChild = workInProgress.child;
  var newChild = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
  workInProgress.child = newChild;

  newChild.return = workInProgress;
  while (currentChild.sibling !== null) {
    currentChild = currentChild.sibling;
    newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
    newChild.return = workInProgress;
  }
  newChild.sibling = null;
}

// The deepest Fiber on the stack involved in a hydration context.
// This may have been an insertion or a hydration.
var hydrationParentFiber = null;
var nextHydratableInstance = null;
var isHydrating = false;

function enterHydrationState(fiber) {
  if (!supportsHydration) {
    return false;
  }

  var parentInstance = fiber.stateNode.containerInfo;
  nextHydratableInstance = getFirstHydratableChild(parentInstance);
  hydrationParentFiber = fiber;
  isHydrating = true;
  return true;
}

function deleteHydratableInstance(returnFiber, instance) {
  {
    switch (returnFiber.tag) {
      case HostRoot:
        didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
        break;
      case HostComponent:
        didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
        break;
    }
  }

  var childToDelete = createFiberFromHostInstanceForDeletion();
  childToDelete.stateNode = instance;
  childToDelete.return = returnFiber;
  childToDelete.effectTag = Deletion;

  // This might seem like it belongs on progressedFirstDeletion. However,
  // these children are not part of the reconciliation list of children.
  // Even if we abort and rereconcile the children, that will try to hydrate
  // again and the nodes are still in the host tree so these will be
  // recreated.
  if (returnFiber.lastEffect !== null) {
    returnFiber.lastEffect.nextEffect = childToDelete;
    returnFiber.lastEffect = childToDelete;
  } else {
    returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
  }
}

function insertNonHydratedInstance(returnFiber, fiber) {
  fiber.effectTag |= Placement;
  {
    switch (returnFiber.tag) {
      case HostRoot:
        {
          var parentContainer = returnFiber.stateNode.containerInfo;
          switch (fiber.tag) {
            case HostComponent:
              var type = fiber.type;
              var props = fiber.pendingProps;
              didNotFindHydratableContainerInstance(parentContainer, type, props);
              break;
            case HostText:
              var text = fiber.pendingProps;
              didNotFindHydratableContainerTextInstance(parentContainer, text);
              break;
          }
          break;
        }
      case HostComponent:
        {
          var parentType = returnFiber.type;
          var parentProps = returnFiber.memoizedProps;
          var parentInstance = returnFiber.stateNode;
          switch (fiber.tag) {
            case HostComponent:
              var _type = fiber.type;
              var _props = fiber.pendingProps;
              didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
              break;
            case HostText:
              var _text = fiber.pendingProps;
              didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
              break;
          }
          break;
        }
      default:
        return;
    }
  }
}

function tryHydrate(fiber, nextInstance) {
  switch (fiber.tag) {
    case HostComponent:
      {
        var type = fiber.type;
        var props = fiber.pendingProps;
        var instance = canHydrateInstance(nextInstance, type, props);
        if (instance !== null) {
          fiber.stateNode = instance;
          return true;
        }
        return false;
      }
    case HostText:
      {
        var text = fiber.pendingProps;
        var textInstance = canHydrateTextInstance(nextInstance, text);
        if (textInstance !== null) {
          fiber.stateNode = textInstance;
          return true;
        }
        return false;
      }
    default:
      return false;
  }
}

function tryToClaimNextHydratableInstance(fiber) {
  if (!isHydrating) {
    return;
  }
  var nextInstance = nextHydratableInstance;
  if (!nextInstance) {
    // Nothing to hydrate. Make it an insertion.
    insertNonHydratedInstance(hydrationParentFiber, fiber);
    isHydrating = false;
    hydrationParentFiber = fiber;
    return;
  }
  var firstAttemptedInstance = nextInstance;
  if (!tryHydrate(fiber, nextInstance)) {
    // If we can't hydrate this instance let's try the next one.
    // We use this as a heuristic. It's based on intuition and not data so it
    // might be flawed or unnecessary.
    nextInstance = getNextHydratableSibling(firstAttemptedInstance);
    if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
      // Nothing to hydrate. Make it an insertion.
      insertNonHydratedInstance(hydrationParentFiber, fiber);
      isHydrating = false;
      hydrationParentFiber = fiber;
      return;
    }
    // We matched the next one, we'll now assume that the first one was
    // superfluous and we'll delete it. Since we can't eagerly delete it
    // we'll have to schedule a deletion. To do that, this node needs a dummy
    // fiber associated with it.
    deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
  }
  hydrationParentFiber = fiber;
  nextHydratableInstance = getFirstHydratableChild(nextInstance);
}

function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
  if (!supportsHydration) {
    invariant(false, 'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
  }

  var instance = fiber.stateNode;
  var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
  // TODO: Type this specific to this type of component.
  fiber.updateQueue = updatePayload;
  // If the update payload indicates that there is a change or if there
  // is a new ref we mark this as an update.
  if (updatePayload !== null) {
    return true;
  }
  return false;
}

function prepareToHydrateHostTextInstance(fiber) {
  if (!supportsHydration) {
    invariant(false, 'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
  }

  var textInstance = fiber.stateNode;
  var textContent = fiber.memoizedProps;
  var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
  {
    if (shouldUpdate) {
      // We assume that prepareToHydrateHostTextInstance is called in a context where the
      // hydration parent is the parent host component of this host text.
      var returnFiber = hydrationParentFiber;
      if (returnFiber !== null) {
        switch (returnFiber.tag) {
          case HostRoot:
            {
              var parentContainer = returnFiber.stateNode.containerInfo;
              didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
              break;
            }
          case HostComponent:
            {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;
              didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
              break;
            }
        }
      }
    }
  }
  return shouldUpdate;
}

function popToNextHostParent(fiber) {
  var parent = fiber.return;
  while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot) {
    parent = parent.return;
  }
  hydrationParentFiber = parent;
}

function popHydrationState(fiber) {
  if (!supportsHydration) {
    return false;
  }
  if (fiber !== hydrationParentFiber) {
    // We're deeper than the current hydration context, inside an inserted
    // tree.
    return false;
  }
  if (!isHydrating) {
    // If we're not currently hydrating but we're in a hydration context, then
    // we were an insertion and now need to pop up reenter hydration of our
    // siblings.
    popToNextHostParent(fiber);
    isHydrating = true;
    return false;
  }

  var type = fiber.type;

  // If we have any remaining hydratable nodes, we need to delete them now.
  // We only do this deeper than head and body since they tend to have random
  // other nodes in them. We also ignore components with pure text content in
  // side of them.
  // TODO: Better heuristic.
  if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
    var nextInstance = nextHydratableInstance;
    while (nextInstance) {
      deleteHydratableInstance(fiber, nextInstance);
      nextInstance = getNextHydratableSibling(nextInstance);
    }
  }

  popToNextHostParent(fiber);
  nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
  return true;
}

function resetHydrationState() {
  if (!supportsHydration) {
    return;
  }

  hydrationParentFiber = null;
  nextHydratableInstance = null;
  isHydrating = false;
}

var getCurrentFiberStackAddendum$1 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


var didWarnAboutBadClass = void 0;
var didWarnAboutGetDerivedStateOnFunctionalComponent = void 0;
var didWarnAboutStatelessRefs = void 0;

{
  didWarnAboutBadClass = {};
  didWarnAboutGetDerivedStateOnFunctionalComponent = {};
  didWarnAboutStatelessRefs = {};
}

// TODO: Remove this and use reconcileChildrenAtExpirationTime directly.
function reconcileChildren(current, workInProgress, nextChildren) {
  reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, workInProgress.expirationTime);
}

function reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime) {
  if (current === null) {
    // If this is a fresh new component that hasn't been rendered yet, we
    // won't update its child set by applying minimal side-effects. Instead,
    // we will add them all to the child before it gets rendered. That means
    // we can optimize this reconciliation pass by not tracking side-effects.
    workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
  } else {
    // If the current child is the same as the work in progress, it means that
    // we haven't yet started any work on these children. Therefore, we use
    // the clone algorithm to create a copy of all the current children.

    // If we had any progressed work already, that is invalid at this point so
    // let's throw it out.
    workInProgress.child = reconcileChildFibers(workInProgress, current.child, nextChildren, renderExpirationTime);
  }
}

function updateForwardRef(current, workInProgress) {
  var render = workInProgress.type.render;
  var nextProps = workInProgress.pendingProps;
  var ref = workInProgress.ref;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextProps) {
    var currentRef = current !== null ? current.ref : null;
    if (ref === currentRef) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
  }

  var nextChildren = void 0;
  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    nextChildren = render(nextProps, ref);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }

  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateFragment(current, workInProgress) {
  var nextChildren = workInProgress.pendingProps;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextChildren);
  return workInProgress.child;
}

function updateMode(current, workInProgress) {
  var nextChildren = workInProgress.pendingProps.children;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextChildren);
  return workInProgress.child;
}

function updateProfiler(current, workInProgress) {
  var nextProps = workInProgress.pendingProps;
  if (enableProfilerTimer) {
    workInProgress.effectTag |= Update;
  }
  if (workInProgress.memoizedProps === nextProps) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  var nextChildren = nextProps.children;
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (current === null && ref !== null || current !== null && current.ref !== ref) {
    // Schedule a Ref effect
    workInProgress.effectTag |= Ref;
  }
}

function updateFunctionalComponent(current, workInProgress) {
  var fn = workInProgress.type;
  var nextProps = workInProgress.pendingProps;

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else {
    if (workInProgress.memoizedProps === nextProps) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    // TODO: consider bringing fn.shouldComponentUpdate() back.
    // It used to be here.
  }

  var unmaskedContext = getUnmaskedContext(workInProgress);
  var context = getMaskedContext(workInProgress, unmaskedContext);

  var nextChildren = void 0;

  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    nextChildren = fn(nextProps, context);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }
  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateClassComponent(current, workInProgress, renderExpirationTime) {
  // Push context providers early to prevent context stack mismatches.
  // During mounting we don't know the child context yet as the instance doesn't exist.
  // We will invalidate the child context in finishClassComponent() right after rendering.
  var hasContext = pushContextProvider(workInProgress);
  var shouldUpdate = void 0;
  if (current === null) {
    if (workInProgress.stateNode === null) {
      // In the initial pass we might need to construct the instance.
      constructClassInstance(workInProgress, workInProgress.pendingProps, renderExpirationTime);
      mountClassInstance(workInProgress, renderExpirationTime);

      shouldUpdate = true;
    } else {
      // In a resume, we'll already have an instance we can reuse.
      shouldUpdate = resumeMountClassInstance(workInProgress, renderExpirationTime);
    }
  } else {
    shouldUpdate = updateClassInstance(current, workInProgress, renderExpirationTime);
  }
  return finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime);
}

function finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime) {
  // Refs should update even if shouldComponentUpdate returns false
  markRef(current, workInProgress);

  var didCaptureError = (workInProgress.effectTag & DidCapture) !== NoEffect;

  if (!shouldUpdate && !didCaptureError) {
    // Context providers should defer to sCU for rendering
    if (hasContext) {
      invalidateContextProvider(workInProgress, false);
    }

    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  // Rerender
  ReactCurrentOwner.current = workInProgress;
  var nextChildren = void 0;
  if (didCaptureError && (!enableGetDerivedStateFromCatch || typeof ctor.getDerivedStateFromCatch !== 'function')) {
    // If we captured an error, but getDerivedStateFrom catch is not defined,
    // unmount all the children. componentDidCatch will schedule an update to
    // re-render a fallback. This is temporary until we migrate everyone to
    // the new API.
    // TODO: Warn in a future release.
    nextChildren = null;

    if (enableProfilerTimer) {
      stopBaseRenderTimerIfRunning();
    }
  } else {
    {
      ReactDebugCurrentFiber.setCurrentPhase('render');
      nextChildren = instance.render();
      if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
        instance.render();
      }
      ReactDebugCurrentFiber.setCurrentPhase(null);
    }
  }

  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  if (didCaptureError) {
    // If we're recovering from an error, reconcile twice: first to delete
    // all the existing children.
    reconcileChildrenAtExpirationTime(current, workInProgress, null, renderExpirationTime);
    workInProgress.child = null;
    // Now we can continue reconciling like normal. This has the effect of
    // remounting all children regardless of whether their their
    // identity matches.
  }
  reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime);
  // Memoize props and state using the values we just used to render.
  // TODO: Restructure so we never read values from the instance.
  memoizeState(workInProgress, instance.state);
  memoizeProps(workInProgress, instance.props);

  // The context might have changed so we need to recalculate it.
  if (hasContext) {
    invalidateContextProvider(workInProgress, true);
  }

  return workInProgress.child;
}

function pushHostRootContext(workInProgress) {
  var root = workInProgress.stateNode;
  if (root.pendingContext) {
    pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
  } else if (root.context) {
    // Should always be set
    pushTopLevelContextObject(workInProgress, root.context, false);
  }
  pushHostContainer(workInProgress, root.containerInfo);
}

function updateHostRoot(current, workInProgress, renderExpirationTime) {
  pushHostRootContext(workInProgress);
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    var nextProps = workInProgress.pendingProps;
    var prevState = workInProgress.memoizedState;
    var prevChildren = prevState !== null ? prevState.element : null;
    processUpdateQueue(workInProgress, updateQueue, nextProps, null, renderExpirationTime);
    var nextState = workInProgress.memoizedState;
    // Caution: React DevTools currently depends on this property
    // being called "element".
    var nextChildren = nextState.element;

    if (nextChildren === prevChildren) {
      // If the state is the same as before, that's a bailout because we had
      // no work that expires at this time.
      resetHydrationState();
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    var root = workInProgress.stateNode;
    if ((current === null || current.child === null) && root.hydrate && enterHydrationState(workInProgress)) {
      // If we don't have any current children this might be the first pass.
      // We always try to hydrate. If this isn't a hydration pass there won't
      // be any children to hydrate which is effectively the same thing as
      // not hydrating.

      // This is a bit of a hack. We track the host root as a placement to
      // know that we're currently in a mounting state. That way isMounted
      // works as expected. We must reset this before committing.
      // TODO: Delete this when we delete isMounted and findDOMNode.
      workInProgress.effectTag |= Placement;

      // Ensure that children mount into this root without tracking
      // side-effects. This ensures that we don't store Placement effects on
      // nodes that will be hydrated.
      workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
    } else {
      // Otherwise reset hydration state in case we aborted and resumed another
      // root.
      resetHydrationState();
      reconcileChildren(current, workInProgress, nextChildren);
    }
    return workInProgress.child;
  }
  resetHydrationState();
  // If there is no update queue, that's a bailout because the root has no props.
  return bailoutOnAlreadyFinishedWork(current, workInProgress);
}

function updateHostComponent(current, workInProgress, renderExpirationTime) {
  pushHostContext(workInProgress);

  if (current === null) {
    tryToClaimNextHydratableInstance(workInProgress);
  }

  var type = workInProgress.type;
  var memoizedProps = workInProgress.memoizedProps;
  var nextProps = workInProgress.pendingProps;
  var prevProps = current !== null ? current.memoizedProps : null;

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (memoizedProps === nextProps) {
    var isHidden = workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps);
    if (isHidden) {
      // Before bailing out, make sure we've deprioritized a hidden component.
      workInProgress.expirationTime = Never;
    }
    if (!isHidden || renderExpirationTime !== Never) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    // If we're rendering a hidden node at hidden priority, don't bailout. The
    // parent is complete, but the children may not be.
  }

  var nextChildren = nextProps.children;
  var isDirectTextChild = shouldSetTextContent(type, nextProps);

  if (isDirectTextChild) {
    // We special case a direct text child of a host node. This is a common
    // case. We won't handle it as a reified child. We will instead handle
    // this in the host environment that also have access to this prop. That
    // avoids allocating another HostText fiber and traversing it.
    nextChildren = null;
  } else if (prevProps && shouldSetTextContent(type, prevProps)) {
    // If we're switching from a direct text child to a normal child, or to
    // empty, we need to schedule the text content to be reset.
    workInProgress.effectTag |= ContentReset;
  }

  markRef(current, workInProgress);

  // Check the host config to see if the children are offscreen/hidden.
  if (renderExpirationTime !== Never && workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps)) {
    // Down-prioritize the children.
    workInProgress.expirationTime = Never;
    // Bailout and come back to this fiber later.
    workInProgress.memoizedProps = nextProps;
    return null;
  }

  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateHostText(current, workInProgress) {
  if (current === null) {
    tryToClaimNextHydratableInstance(workInProgress);
  }
  var nextProps = workInProgress.pendingProps;
  memoizeProps(workInProgress, nextProps);
  // Nothing to do here. This is terminal. We'll do the completion step
  // immediately after.
  return null;
}

function mountIndeterminateComponent(current, workInProgress, renderExpirationTime) {
  !(current === null) ? invariant(false, 'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  var fn = workInProgress.type;
  var props = workInProgress.pendingProps;
  var unmaskedContext = getUnmaskedContext(workInProgress);
  var context = getMaskedContext(workInProgress, unmaskedContext);

  var value = void 0;

  {
    if (fn.prototype && typeof fn.prototype.render === 'function') {
      var componentName = getComponentName(workInProgress) || 'Unknown';

      if (!didWarnAboutBadClass[componentName]) {
        warning(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
        didWarnAboutBadClass[componentName] = true;
      }
    }

    if (workInProgress.mode & StrictMode) {
      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
    }

    ReactCurrentOwner.current = workInProgress;
    value = fn(props, context);
  }
  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;

  if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
    var Component = workInProgress.type;

    // Proceed under the assumption that this is a class instance
    workInProgress.tag = ClassComponent;

    workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;

    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    if (typeof getDerivedStateFromProps === 'function') {
      applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
    }

    // Push context providers early to prevent context stack mismatches.
    // During mounting we don't know the child context yet as the instance doesn't exist.
    // We will invalidate the child context in finishClassComponent() right after rendering.
    var hasContext = pushContextProvider(workInProgress);
    adoptClassInstance(workInProgress, value);
    mountClassInstance(workInProgress, renderExpirationTime);
    return finishClassComponent(current, workInProgress, true, hasContext, renderExpirationTime);
  } else {
    // Proceed under the assumption that this is a functional component
    workInProgress.tag = FunctionalComponent;
    {
      var _Component = workInProgress.type;

      if (_Component) {
        !!_Component.childContextTypes ? warning(false, '%s(...): childContextTypes cannot be defined on a functional component.', _Component.displayName || _Component.name || 'Component') : void 0;
      }
      if (workInProgress.ref !== null) {
        var info = '';
        var ownerName = ReactDebugCurrentFiber.getCurrentFiberOwnerName();
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }

        var warningKey = ownerName || workInProgress._debugID || '';
        var debugSource = workInProgress._debugSource;
        if (debugSource) {
          warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
        }
        if (!didWarnAboutStatelessRefs[warningKey]) {
          didWarnAboutStatelessRefs[warningKey] = true;
          warning(false, 'Stateless function components cannot be given refs. ' + 'Attempts to access this ref will fail.%s%s', info, ReactDebugCurrentFiber.getCurrentFiberStackAddendum());
        }
      }

      if (typeof fn.getDerivedStateFromProps === 'function') {
        var _componentName = getComponentName(workInProgress) || 'Unknown';

        if (!didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName]) {
          warning(false, '%s: Stateless functional components do not support getDerivedStateFromProps.', _componentName);
          didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName] = true;
        }
      }
    }
    reconcileChildren(current, workInProgress, value);
    memoizeProps(workInProgress, props);
    return workInProgress.child;
  }
}

function updateTimeoutComponent(current, workInProgress, renderExpirationTime) {
  if (enableSuspense) {
    var nextProps = workInProgress.pendingProps;
    var prevProps = workInProgress.memoizedProps;

    var prevDidTimeout = workInProgress.memoizedState;

    // Check if we already attempted to render the normal state. If we did,
    // and we timed out, render the placeholder state.
    var alreadyCaptured = (workInProgress.effectTag & DidCapture) === NoEffect;
    var nextDidTimeout = !alreadyCaptured;

    if (hasContextChanged()) {
      // Normally we can bail out on props equality but if context has changed
      // we don't do the bailout and we have to reuse existing props instead.
    } else if (nextProps === prevProps && nextDidTimeout === prevDidTimeout) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }

    var render = nextProps.children;
    var nextChildren = render(nextDidTimeout);
    workInProgress.memoizedProps = nextProps;
    workInProgress.memoizedState = nextDidTimeout;
    reconcileChildren(current, workInProgress, nextChildren);
    return workInProgress.child;
  } else {
    return null;
  }
}

function updatePortalComponent(current, workInProgress, renderExpirationTime) {
  pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
  var nextChildren = workInProgress.pendingProps;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  if (current === null) {
    // Portals are special because we don't append the children during mount
    // but at commit. Therefore we need to track insertions which the normal
    // flow doesn't do during mount. This doesn't happen at the root because
    // the root always starts with a "current" with a null child.
    // TODO: Consider unifying this with how the root works.
    workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
    memoizeProps(workInProgress, nextChildren);
  } else {
    reconcileChildren(current, workInProgress, nextChildren);
    memoizeProps(workInProgress, nextChildren);
  }
  return workInProgress.child;
}

function propagateContextChange(workInProgress, context, changedBits, renderExpirationTime) {
  var fiber = workInProgress.child;
  if (fiber !== null) {
    // Set the return pointer of the child to the work-in-progress fiber.
    fiber.return = workInProgress;
  }
  while (fiber !== null) {
    var nextFiber = void 0;
    // Visit this fiber.
    switch (fiber.tag) {
      case ContextConsumer:
        // Check if the context matches.
        var observedBits = fiber.stateNode | 0;
        if (fiber.type === context && (observedBits & changedBits) !== 0) {
          // Update the expiration time of all the ancestors, including
          // the alternates.
          var node = fiber;
          while (node !== null) {
            var alternate = node.alternate;
            if (node.expirationTime === NoWork || node.expirationTime > renderExpirationTime) {
              node.expirationTime = renderExpirationTime;
              if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
                alternate.expirationTime = renderExpirationTime;
              }
            } else if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
              alternate.expirationTime = renderExpirationTime;
            } else {
              // Neither alternate was updated, which means the rest of the
              // ancestor path already has sufficient priority.
              break;
            }
            node = node.return;
          }
          // Don't scan deeper than a matching consumer. When we render the
          // consumer, we'll continue scanning from that point. This way the
          // scanning work is time-sliced.
          nextFiber = null;
        } else {
          // Traverse down.
          nextFiber = fiber.child;
        }
        break;
      case ContextProvider:
        // Don't scan deeper if this is a matching provider
        nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
        break;
      default:
        // Traverse down.
        nextFiber = fiber.child;
        break;
    }
    if (nextFiber !== null) {
      // Set the return pointer of the child to the work-in-progress fiber.
      nextFiber.return = fiber;
    } else {
      // No child. Traverse to next sibling.
      nextFiber = fiber;
      while (nextFiber !== null) {
        if (nextFiber === workInProgress) {
          // We're back to the root of this subtree. Exit.
          nextFiber = null;
          break;
        }
        var sibling = nextFiber.sibling;
        if (sibling !== null) {
          // Set the return pointer of the sibling to the work-in-progress fiber.
          sibling.return = nextFiber.return;
          nextFiber = sibling;
          break;
        }
        // No more siblings. Traverse up.
        nextFiber = nextFiber.return;
      }
    }
    fiber = nextFiber;
  }
}

function updateContextProvider(current, workInProgress, renderExpirationTime) {
  var providerType = workInProgress.type;
  var context = providerType._context;

  var newProps = workInProgress.pendingProps;
  var oldProps = workInProgress.memoizedProps;
  var canBailOnProps = true;

  if (hasContextChanged()) {
    canBailOnProps = false;
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (oldProps === newProps) {
    workInProgress.stateNode = 0;
    pushProvider(workInProgress);
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  var newValue = newProps.value;
  workInProgress.memoizedProps = newProps;

  {
    var providerPropTypes = workInProgress.type.propTypes;

    if (providerPropTypes) {
      checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider', getCurrentFiberStackAddendum$1);
    }
  }

  var changedBits = void 0;
  if (oldProps === null) {
    // Initial render
    changedBits = MAX_SIGNED_31_BIT_INT;
  } else {
    if (oldProps.value === newProps.value) {
      // No change. Bailout early if children are the same.
      if (oldProps.children === newProps.children && canBailOnProps) {
        workInProgress.stateNode = 0;
        pushProvider(workInProgress);
        return bailoutOnAlreadyFinishedWork(current, workInProgress);
      }
      changedBits = 0;
    } else {
      var oldValue = oldProps.value;
      // Use Object.is to compare the new context value to the old value.
      // Inlined Object.is polyfill.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
      if (oldValue === newValue && (oldValue !== 0 || 1 / oldValue === 1 / newValue) || oldValue !== oldValue && newValue !== newValue // eslint-disable-line no-self-compare
      ) {
          // No change. Bailout early if children are the same.
          if (oldProps.children === newProps.children && canBailOnProps) {
            workInProgress.stateNode = 0;
            pushProvider(workInProgress);
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          changedBits = 0;
        } else {
        changedBits = typeof context._calculateChangedBits === 'function' ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
        {
          !((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits) ? warning(false, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits) : void 0;
        }
        changedBits |= 0;

        if (changedBits === 0) {
          // No change. Bailout early if children are the same.
          if (oldProps.children === newProps.children && canBailOnProps) {
            workInProgress.stateNode = 0;
            pushProvider(workInProgress);
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
        } else {
          propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
        }
      }
    }
  }

  workInProgress.stateNode = changedBits;
  pushProvider(workInProgress);

  var newChildren = newProps.children;
  reconcileChildren(current, workInProgress, newChildren);
  return workInProgress.child;
}

function updateContextConsumer(current, workInProgress, renderExpirationTime) {
  var context = workInProgress.type;
  var newProps = workInProgress.pendingProps;
  var oldProps = workInProgress.memoizedProps;

  var newValue = getContextCurrentValue(context);
  var changedBits = getContextChangedBits(context);

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (changedBits === 0 && oldProps === newProps) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  workInProgress.memoizedProps = newProps;

  var observedBits = newProps.unstable_observedBits;
  if (observedBits === undefined || observedBits === null) {
    // Subscribe to all changes by default
    observedBits = MAX_SIGNED_31_BIT_INT;
  }
  // Store the observedBits on the fiber's stateNode for quick access.
  workInProgress.stateNode = observedBits;

  if ((changedBits & observedBits) !== 0) {
    // Context change propagation stops at matching consumers, for time-
    // slicing. Continue the propagation here.
    propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
  } else if (oldProps === newProps) {
    // Skip over a memoized parent with a bitmask bailout even
    // if we began working on it because of a deeper matching child.
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  // There is no bailout on `children` equality because we expect people
  // to often pass a bound method as a child, but it may reference
  // `this.state` or `this.props` (and thus needs to re-render on `setState`).

  var render = newProps.children;

  {
    !(typeof render === 'function') ? warning(false, 'A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.') : void 0;
  }

  var newChildren = void 0;
  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    newChildren = render(newValue);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }

  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  reconcileChildren(current, workInProgress, newChildren);
  return workInProgress.child;
}

/*
  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
    let child = firstChild;
    do {
      // Ensure that the first and last effect of the parent corresponds
      // to the children's first and last effect.
      if (!returnFiber.firstEffect) {
        returnFiber.firstEffect = child.firstEffect;
      }
      if (child.lastEffect) {
        if (returnFiber.lastEffect) {
          returnFiber.lastEffect.nextEffect = child.firstEffect;
        }
        returnFiber.lastEffect = child.lastEffect;
      }
    } while (child = child.sibling);
  }
  */

function bailoutOnAlreadyFinishedWork(current, workInProgress) {
  cancelWorkTimer(workInProgress);

  if (enableProfilerTimer) {
    // Don't update "base" render times for bailouts.
    stopBaseRenderTimerIfRunning();
  }

  // TODO: We should ideally be able to bail out early if the children have no
  // more work to do. However, since we don't have a separation of this
  // Fiber's priority and its children yet - we don't know without doing lots
  // of the same work we do anyway. Once we have that separation we can just
  // bail out here if the children has no more work at this priority level.
  // if (workInProgress.priorityOfChildren <= priorityLevel) {
  //   // If there are side-effects in these children that have not yet been
  //   // committed we need to ensure that they get properly transferred up.
  //   if (current && current.child !== workInProgress.child) {
  //     reuseChildrenEffects(workInProgress, child);
  //   }
  //   return null;
  // }

  cloneChildFibers(current, workInProgress);
  return workInProgress.child;
}

function bailoutOnLowPriority(current, workInProgress) {
  cancelWorkTimer(workInProgress);

  if (enableProfilerTimer) {
    // Don't update "base" render times for bailouts.
    stopBaseRenderTimerIfRunning();
  }

  // TODO: Handle HostComponent tags here as well and call pushHostContext()?
  // See PR 8590 discussion for context
  switch (workInProgress.tag) {
    case HostRoot:
      pushHostRootContext(workInProgress);
      break;
    case ClassComponent:
      pushContextProvider(workInProgress);
      break;
    case HostPortal:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case ContextProvider:
      pushProvider(workInProgress);
      break;
  }
  // TODO: What if this is currently in progress?
  // How can that happen? How is this not being cloned?
  return null;
}

// TODO: Delete memoizeProps/State and move to reconcile/bailout instead
function memoizeProps(workInProgress, nextProps) {
  workInProgress.memoizedProps = nextProps;
}

function memoizeState(workInProgress, nextState) {
  workInProgress.memoizedState = nextState;
  // Don't reset the updateQueue, in case there are pending updates. Resetting
  // is handled by processUpdateQueue.
}

function beginWork(current, workInProgress, renderExpirationTime) {
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      markActualRenderTimeStarted(workInProgress);
    }
  }

  if (workInProgress.expirationTime === NoWork || workInProgress.expirationTime > renderExpirationTime) {
    return bailoutOnLowPriority(current, workInProgress);
  }

  switch (workInProgress.tag) {
    case IndeterminateComponent:
      return mountIndeterminateComponent(current, workInProgress, renderExpirationTime);
    case FunctionalComponent:
      return updateFunctionalComponent(current, workInProgress);
    case ClassComponent:
      return updateClassComponent(current, workInProgress, renderExpirationTime);
    case HostRoot:
      return updateHostRoot(current, workInProgress, renderExpirationTime);
    case HostComponent:
      return updateHostComponent(current, workInProgress, renderExpirationTime);
    case HostText:
      return updateHostText(current, workInProgress);
    case TimeoutComponent:
      return updateTimeoutComponent(current, workInProgress, renderExpirationTime);
    case HostPortal:
      return updatePortalComponent(current, workInProgress, renderExpirationTime);
    case ForwardRef:
      return updateForwardRef(current, workInProgress);
    case Fragment:
      return updateFragment(current, workInProgress);
    case Mode:
      return updateMode(current, workInProgress);
    case Profiler:
      return updateProfiler(current, workInProgress);
    case ContextProvider:
      return updateContextProvider(current, workInProgress, renderExpirationTime);
    case ContextConsumer:
      return updateContextConsumer(current, workInProgress, renderExpirationTime);
    default:
      invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
  }
}

function markUpdate(workInProgress) {
  // Tag the fiber with an update effect. This turns a Placement into
  // a PlacementAndUpdate.
  workInProgress.effectTag |= Update;
}

function markRef$1(workInProgress) {
  workInProgress.effectTag |= Ref;
}

function appendAllChildren(parent, workInProgress) {
  // We only have the top Fiber that was created but we need recurse down its
  // children to find all the terminal nodes.
  var node = workInProgress.child;
  while (node !== null) {
    if (node.tag === HostComponent || node.tag === HostText) {
      appendInitialChild(parent, node.stateNode);
    } else if (node.tag === HostPortal) {
      // If we have a portal child, then we don't want to traverse
      // down its children. Instead, we'll get insertions from each child in
      // the portal directly.
    } else if (node.child !== null) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === workInProgress) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === workInProgress) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

var updateHostContainer = void 0;
var updateHostComponent$1 = void 0;
var updateHostText$1 = void 0;
if (supportsMutation) {
  // Mutation mode

  updateHostContainer = function (workInProgress) {
    // Noop
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // TODO: Type this specific to this type of component.
    workInProgress.updateQueue = updatePayload;
    // If the update payload indicates that there is a change or if there
    // is a new ref we mark this as an update. All the work is done in commitWork.
    if (updatePayload) {
      markUpdate(workInProgress);
    }
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    // If the text differs, mark it as an update. All the work in done in commitWork.
    if (oldText !== newText) {
      markUpdate(workInProgress);
    }
  };
} else if (supportsPersistence) {
  // Persistent host tree mode

  // An unfortunate fork of appendAllChildren because we have two different parent types.
  var appendAllChildrenToContainer = function (containerChildSet, workInProgress) {
    // We only have the top Fiber that was created but we need recurse down its
    // children to find all the terminal nodes.
    var node = workInProgress.child;
    while (node !== null) {
      if (node.tag === HostComponent || node.tag === HostText) {
        appendChildToContainerChildSet(containerChildSet, node.stateNode);
      } else if (node.tag === HostPortal) {
        // If we have a portal child, then we don't want to traverse
        // down its children. Instead, we'll get insertions from each child in
        // the portal directly.
      } else if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
      if (node === workInProgress) {
        return;
      }
      while (node.sibling === null) {
        if (node.return === null || node.return === workInProgress) {
          return;
        }
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  };
  updateHostContainer = function (workInProgress) {
    var portalOrRoot = workInProgress.stateNode;
    var childrenUnchanged = workInProgress.firstEffect === null;
    if (childrenUnchanged) {
      // No changes, just reuse the existing instance.
    } else {
      var container = portalOrRoot.containerInfo;
      var newChildSet = createContainerChildSet(container);
      // If children might have changed, we have to add them all to the set.
      appendAllChildrenToContainer(newChildSet, workInProgress);
      portalOrRoot.pendingChildren = newChildSet;
      // Schedule an update on the container to swap out the container.
      markUpdate(workInProgress);
      finalizeContainerChildren(container, newChildSet);
    }
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // If there are no effects associated with this node, then none of our children had any updates.
    // This guarantees that we can reuse all of them.
    var childrenUnchanged = workInProgress.firstEffect === null;
    var currentInstance = current.stateNode;
    if (childrenUnchanged && updatePayload === null) {
      // No changes, just reuse the existing instance.
      // Note that this might release a previous clone.
      workInProgress.stateNode = currentInstance;
    } else {
      var recyclableInstance = workInProgress.stateNode;
      var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress, childrenUnchanged, recyclableInstance);
      if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
        markUpdate(workInProgress);
      }
      workInProgress.stateNode = newInstance;
      if (childrenUnchanged) {
        // If there are no other effects in this tree, we need to flag this node as having one.
        // Even though we're not going to use it for anything.
        // Otherwise parents won't know that there are new children to propagate upwards.
        markUpdate(workInProgress);
      } else {
        // If children might have changed, we have to add them all to the set.
        appendAllChildren(newInstance, workInProgress);
      }
    }
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    if (oldText !== newText) {
      // If the text content differs, we'll create a new text instance for it.
      var rootContainerInstance = getRootHostContainer();
      var currentHostContext = getHostContext();
      workInProgress.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress);
      // We'll have to mark it as having an effect, even though we won't use the effect for anything.
      // This lets the parents know that at least one of their children has changed.
      markUpdate(workInProgress);
    }
  };
} else {
  // No host operations
  updateHostContainer = function (workInProgress) {
    // Noop
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // Noop
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    // Noop
  };
}

function completeWork(current, workInProgress, renderExpirationTime) {
  var newProps = workInProgress.pendingProps;

  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      recordElapsedActualRenderTime(workInProgress);
    }
  }

  switch (workInProgress.tag) {
    case FunctionalComponent:
      return null;
    case ClassComponent:
      {
        // We are leaving this subtree, so pop context if any.
        popContextProvider(workInProgress);
        return null;
      }
    case HostRoot:
      {
        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        var fiberRoot = workInProgress.stateNode;
        if (fiberRoot.pendingContext) {
          fiberRoot.context = fiberRoot.pendingContext;
          fiberRoot.pendingContext = null;
        }
        if (current === null || current.child === null) {
          // If we hydrated, pop so that we can delete any remaining children
          // that weren't hydrated.
          popHydrationState(workInProgress);
          // This resets the hacky state to fix isMounted before committing.
          // TODO: Delete this when we delete isMounted and findDOMNode.
          workInProgress.effectTag &= ~Placement;
        }
        updateHostContainer(workInProgress);
        return null;
      }
    case HostComponent:
      {
        popHostContext(workInProgress);
        var rootContainerInstance = getRootHostContainer();
        var type = workInProgress.type;
        if (current !== null && workInProgress.stateNode != null) {
          // If we have an alternate, that means this is an update and we need to
          // schedule a side-effect to do the updates.
          var oldProps = current.memoizedProps;
          // If we get updated because one of our children updated, we don't
          // have newProps so we'll have to reuse them.
          // TODO: Split the update API as separate for the props vs. children.
          // Even better would be if children weren't special cased at all tho.
          var instance = workInProgress.stateNode;
          var currentHostContext = getHostContext();
          // TODO: Experiencing an error where oldProps is null. Suggests a host
          // component is hitting the resume path. Figure out why. Possibly
          // related to `hidden`.
          var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);

          updateHostComponent$1(current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext);

          if (current.ref !== workInProgress.ref) {
            markRef$1(workInProgress);
          }
        } else {
          if (!newProps) {
            !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            // This can happen when we abort work.
            return null;
          }

          var _currentHostContext = getHostContext();
          // TODO: Move createInstance to beginWork and keep it on a context
          // "stack" as the parent. Then append children as we go in beginWork
          // or completeWork depending on we want to add then top->down or
          // bottom->up. Top->down is faster in IE11.
          var wasHydrated = popHydrationState(workInProgress);
          if (wasHydrated) {
            // TODO: Move this and createInstance step into the beginPhase
            // to consolidate.
            if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, _currentHostContext)) {
              // If changes to the hydrated node needs to be applied at the
              // commit-phase we mark this as such.
              markUpdate(workInProgress);
            }
          } else {
            var _instance = createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress);

            appendAllChildren(_instance, workInProgress);

            // Certain renderers require commit-time effects for initial mount.
            // (eg DOM renderer supports auto-focus for certain elements).
            // Make sure such renderers get scheduled for later work.
            if (finalizeInitialChildren(_instance, type, newProps, rootContainerInstance, _currentHostContext)) {
              markUpdate(workInProgress);
            }
            workInProgress.stateNode = _instance;
          }

          if (workInProgress.ref !== null) {
            // If there is a ref on a host node we need to schedule a callback
            markRef$1(workInProgress);
          }
        }
        return null;
      }
    case HostText:
      {
        var newText = newProps;
        if (current && workInProgress.stateNode != null) {
          var oldText = current.memoizedProps;
          // If we have an alternate, that means this is an update and we need
          // to schedule a side-effect to do the updates.
          updateHostText$1(current, workInProgress, oldText, newText);
        } else {
          if (typeof newText !== 'string') {
            !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            // This can happen when we abort work.
            return null;
          }
          var _rootContainerInstance = getRootHostContainer();
          var _currentHostContext2 = getHostContext();
          var _wasHydrated = popHydrationState(workInProgress);
          if (_wasHydrated) {
            if (prepareToHydrateHostTextInstance(workInProgress)) {
              markUpdate(workInProgress);
            }
          } else {
            workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext2, workInProgress);
          }
        }
        return null;
      }
    case ForwardRef:
      return null;
    case TimeoutComponent:
      return null;
    case Fragment:
      return null;
    case Mode:
      return null;
    case Profiler:
      return null;
    case HostPortal:
      popHostContainer(workInProgress);
      updateHostContainer(workInProgress);
      return null;
    case ContextProvider:
      // Pop provider fiber
      popProvider(workInProgress);
      return null;
    case ContextConsumer:
      return null;
    // Error cases
    case IndeterminateComponent:
      invariant(false, 'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');
    // eslint-disable-next-line no-fallthrough
    default:
      invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
  }
}

// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function showErrorDialog(capturedError) {
  return true;
}

function logCapturedError(capturedError) {
  var logError = showErrorDialog(capturedError);

  // Allow injected showErrorDialog() to prevent default console.error logging.
  // This enables renderers like ReactNative to better manage redbox behavior.
  if (logError === false) {
    return;
  }

  var error = capturedError.error;
  var suppressLogging = error && error.suppressReactErrorLogging;
  if (suppressLogging) {
    return;
  }

  {
    var componentName = capturedError.componentName,
        componentStack = capturedError.componentStack,
        errorBoundaryName = capturedError.errorBoundaryName,
        errorBoundaryFound = capturedError.errorBoundaryFound,
        willRetry = capturedError.willRetry;


    var componentNameMessage = componentName ? 'The above error occurred in the <' + componentName + '> component:' : 'The above error occurred in one of your React components:';

    var errorBoundaryMessage = void 0;
    // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
    if (errorBoundaryFound && errorBoundaryName) {
      if (willRetry) {
        errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
      } else {
        errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '.\n' + 'Recreating the tree from scratch failed so React will unmount the tree.';
      }
    } else {
      errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';
    }
    var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage);

    // In development, we provide our own message with just the component stack.
    // We don't include the original error message and JS stack because the browser
    // has already printed it. Even if the application swallows the error, it is still
    // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
    console.error(combinedMessage);
  }
}

var invokeGuardedCallback$3 = ReactErrorUtils.invokeGuardedCallback;
var hasCaughtError$1 = ReactErrorUtils.hasCaughtError;
var clearCaughtError$1 = ReactErrorUtils.clearCaughtError;


var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
{
  didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
}

function logError(boundary, errorInfo) {
  var source = errorInfo.source;
  var stack = errorInfo.stack;
  if (stack === null && source !== null) {
    stack = getStackAddendumByWorkInProgressFiber(source);
  }

  var capturedError = {
    componentName: source !== null ? getComponentName(source) : null,
    componentStack: stack !== null ? stack : '',
    error: errorInfo.value,
    errorBoundary: null,
    errorBoundaryName: null,
    errorBoundaryFound: false,
    willRetry: false
  };

  if (boundary !== null && boundary.tag === ClassComponent) {
    capturedError.errorBoundary = boundary.stateNode;
    capturedError.errorBoundaryName = getComponentName(boundary);
    capturedError.errorBoundaryFound = true;
    capturedError.willRetry = true;
  }

  try {
    logCapturedError(capturedError);
  } catch (e) {
    // Prevent cycle if logCapturedError() throws.
    // A cycle may still occur if logCapturedError renders a component that throws.
    var suppressLogging = e && e.suppressReactErrorLogging;
    if (!suppressLogging) {
      console.error(e);
    }
  }
}

var callComponentWillUnmountWithTimer = function (current, instance) {
  startPhaseTimer(current, 'componentWillUnmount');
  instance.props = current.memoizedProps;
  instance.state = current.memoizedState;
  instance.componentWillUnmount();
  stopPhaseTimer();
};

// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(current, instance) {
  {
    invokeGuardedCallback$3(null, callComponentWillUnmountWithTimer, null, current, instance);
    if (hasCaughtError$1()) {
      var unmountError = clearCaughtError$1();
      captureCommitPhaseError(current, unmountError);
    }
  }
}

function safelyDetachRef(current) {
  var ref = current.ref;
  if (ref !== null) {
    if (typeof ref === 'function') {
      {
        invokeGuardedCallback$3(null, ref, null, null);
        if (hasCaughtError$1()) {
          var refError = clearCaughtError$1();
          captureCommitPhaseError(current, refError);
        }
      }
    } else {
      ref.current = null;
    }
  }
}

function commitBeforeMutationLifeCycles(current, finishedWork) {
  switch (finishedWork.tag) {
    case ClassComponent:
      {
        if (finishedWork.effectTag & Snapshot) {
          if (current !== null) {
            var prevProps = current.memoizedProps;
            var prevState = current.memoizedState;
            startPhaseTimer(finishedWork, 'getSnapshotBeforeUpdate');
            var instance = finishedWork.stateNode;
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            var snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);
            {
              var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
              if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                didWarnSet.add(finishedWork.type);
                warning(false, '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) ' + 'must be returned. You have returned undefined.', getComponentName(finishedWork));
              }
            }
            instance.__reactInternalSnapshotBeforeUpdate = snapshot;
            stopPhaseTimer();
          }
        }
        return;
      }
    case HostRoot:
    case HostComponent:
    case HostText:
    case HostPortal:
      // Nothing to do for these component types
      return;
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitLifeCycles(finishedRoot, current, finishedWork, currentTime, committedExpirationTime) {
  switch (finishedWork.tag) {
    case ClassComponent:
      {
        var instance = finishedWork.stateNode;
        if (finishedWork.effectTag & Update) {
          if (current === null) {
            startPhaseTimer(finishedWork, 'componentDidMount');
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            instance.componentDidMount();
            stopPhaseTimer();
          } else {
            var prevProps = current.memoizedProps;
            var prevState = current.memoizedState;
            startPhaseTimer(finishedWork, 'componentDidUpdate');
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
            stopPhaseTimer();
          }
        }
        var updateQueue = finishedWork.updateQueue;
        if (updateQueue !== null) {
          instance.props = finishedWork.memoizedProps;
          instance.state = finishedWork.memoizedState;
          commitUpdateQueue(finishedWork, updateQueue, instance, committedExpirationTime);
        }
        return;
      }
    case HostRoot:
      {
        var _updateQueue = finishedWork.updateQueue;
        if (_updateQueue !== null) {
          var _instance = null;
          if (finishedWork.child !== null) {
            switch (finishedWork.child.tag) {
              case HostComponent:
                _instance = getPublicInstance(finishedWork.child.stateNode);
                break;
              case ClassComponent:
                _instance = finishedWork.child.stateNode;
                break;
            }
          }
          commitUpdateQueue(finishedWork, _updateQueue, _instance, committedExpirationTime);
        }
        return;
      }
    case HostComponent:
      {
        var _instance2 = finishedWork.stateNode;

        // Renderers may schedule work to be done after host components are mounted
        // (eg DOM renderer may schedule auto-focus for inputs and form controls).
        // These effects should only be committed when components are first mounted,
        // aka when there is no current/alternate.
        if (current === null && finishedWork.effectTag & Update) {
          var type = finishedWork.type;
          var props = finishedWork.memoizedProps;
          commitMount(_instance2, type, props, finishedWork);
        }

        return;
      }
    case HostText:
      {
        // We have no life-cycles associated with text.
        return;
      }
    case HostPortal:
      {
        // We have no life-cycles associated with portals.
        return;
      }
    case Profiler:
      {
        // We have no life-cycles associated with Profiler.
        return;
      }
    case TimeoutComponent:
      {
        // We have no life-cycles associated with Timeouts.
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitAttachRef(finishedWork) {
  var ref = finishedWork.ref;
  if (ref !== null) {
    var instance = finishedWork.stateNode;
    var instanceToUse = void 0;
    switch (finishedWork.tag) {
      case HostComponent:
        instanceToUse = getPublicInstance(instance);
        break;
      default:
        instanceToUse = instance;
    }
    if (typeof ref === 'function') {
      ref(instanceToUse);
    } else {
      {
        if (!ref.hasOwnProperty('current')) {
          warning(false, 'Unexpected ref object provided for %s. ' + 'Use either a ref-setter function or React.createRef().%s', getComponentName(finishedWork), getStackAddendumByWorkInProgressFiber(finishedWork));
        }
      }

      ref.current = instanceToUse;
    }
  }
}

function commitDetachRef(current) {
  var currentRef = current.ref;
  if (currentRef !== null) {
    if (typeof currentRef === 'function') {
      currentRef(null);
    } else {
      currentRef.current = null;
    }
  }
}

// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(current) {
  if (typeof onCommitUnmount === 'function') {
    onCommitUnmount(current);
  }

  switch (current.tag) {
    case ClassComponent:
      {
        safelyDetachRef(current);
        var instance = current.stateNode;
        if (typeof instance.componentWillUnmount === 'function') {
          safelyCallComponentWillUnmount(current, instance);
        }
        return;
      }
    case HostComponent:
      {
        safelyDetachRef(current);
        return;
      }
    case HostPortal:
      {
        // TODO: this is recursive.
        // We are also not using this parent because
        // the portal will get pushed immediately.
        if (supportsMutation) {
          unmountHostComponents(current);
        } else if (supportsPersistence) {
          emptyPortalContainer(current);
        }
        return;
      }
  }
}

function commitNestedUnmounts(root) {
  // While we're inside a removed host node we don't want to call
  // removeChild on the inner nodes because they're removed by the top
  // call anyway. We also want to call componentWillUnmount on all
  // composites before this host node is removed from the tree. Therefore
  var node = root;
  while (true) {
    commitUnmount(node);
    // Visit children because they may contain more composite or host nodes.
    // Skip portals because commitUnmount() currently visits them recursively.
    if (node.child !== null && (
    // If we use mutation we drill down into portals using commitUnmount above.
    // If we don't use mutation we drill down into portals here instead.
    !supportsMutation || node.tag !== HostPortal)) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === root) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === root) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function detachFiber(current) {
  // Cut off the return pointers to disconnect it from the tree. Ideally, we
  // should clear the child pointer of the parent alternate to let this
  // get GC:ed but we don't know which for sure which parent is the current
  // one so we'll settle for GC:ing the subtree of this child. This child
  // itself will be GC:ed when the parent updates the next time.
  current.return = null;
  current.child = null;
  if (current.alternate) {
    current.alternate.child = null;
    current.alternate.return = null;
  }
}

function emptyPortalContainer(current) {
  if (!supportsPersistence) {
    return;
  }

  var portal = current.stateNode;
  var containerInfo = portal.containerInfo;

  var emptyChildSet = createContainerChildSet(containerInfo);
  replaceContainerChildren(containerInfo, emptyChildSet);
}

function commitContainer(finishedWork) {
  if (!supportsPersistence) {
    return;
  }

  switch (finishedWork.tag) {
    case ClassComponent:
      {
        return;
      }
    case HostComponent:
      {
        return;
      }
    case HostText:
      {
        return;
      }
    case HostRoot:
    case HostPortal:
      {
        var portalOrRoot = finishedWork.stateNode;
        var containerInfo = portalOrRoot.containerInfo,
            _pendingChildren = portalOrRoot.pendingChildren;

        replaceContainerChildren(containerInfo, _pendingChildren);
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function getHostParentFiber(fiber) {
  var parent = fiber.return;
  while (parent !== null) {
    if (isHostParent(parent)) {
      return parent;
    }
    parent = parent.return;
  }
  invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
}

function isHostParent(fiber) {
  return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
}

function getHostSibling(fiber) {
  // We're going to search forward into the tree until we find a sibling host
  // node. Unfortunately, if multiple insertions are done in a row we have to
  // search past them. This leads to exponential search for the next sibling.
  var node = fiber;
  siblings: while (true) {
    // If we didn't find anything, let's try the next sibling.
    while (node.sibling === null) {
      if (node.return === null || isHostParent(node.return)) {
        // If we pop out of the root or hit the parent the fiber we are the
        // last sibling.
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
    while (node.tag !== HostComponent && node.tag !== HostText) {
      // If it is not host node and, we might have a host node inside it.
      // Try to search down until we find one.
      if (node.effectTag & Placement) {
        // If we don't have a child, try the siblings instead.
        continue siblings;
      }
      // If we don't have a child, try the siblings instead.
      // We also skip portals because they are not part of this host tree.
      if (node.child === null || node.tag === HostPortal) {
        continue siblings;
      } else {
        node.child.return = node;
        node = node.child;
      }
    }
    // Check if this host node is stable or about to be placed.
    if (!(node.effectTag & Placement)) {
      // Found it!
      return node.stateNode;
    }
  }
}

function commitPlacement(finishedWork) {
  if (!supportsMutation) {
    return;
  }

  // Recursively insert all host nodes into the parent.
  var parentFiber = getHostParentFiber(finishedWork);
  var parent = void 0;
  var isContainer = void 0;
  switch (parentFiber.tag) {
    case HostComponent:
      parent = parentFiber.stateNode;
      isContainer = false;
      break;
    case HostRoot:
      parent = parentFiber.stateNode.containerInfo;
      isContainer = true;
      break;
    case HostPortal:
      parent = parentFiber.stateNode.containerInfo;
      isContainer = true;
      break;
    default:
      invariant(false, 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');
  }
  if (parentFiber.effectTag & ContentReset) {
    // Reset the text content of the parent before doing any insertions
    resetTextContent(parent);
    // Clear ContentReset from the effect tag
    parentFiber.effectTag &= ~ContentReset;
  }

  var before = getHostSibling(finishedWork);
  // We only have the top Fiber that was inserted but we need recurse down its
  // children to find all the terminal nodes.
  var node = finishedWork;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      if (before) {
        if (isContainer) {
          insertInContainerBefore(parent, node.stateNode, before);
        } else {
          insertBefore(parent, node.stateNode, before);
        }
      } else {
        if (isContainer) {
          appendChildToContainer(parent, node.stateNode);
        } else {
          appendChild(parent, node.stateNode);
        }
      }
    } else if (node.tag === HostPortal) {
      // If the insertion itself is a portal, then we don't want to traverse
      // down its children. Instead, we'll get insertions from each child in
      // the portal directly.
    } else if (node.child !== null) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === finishedWork) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === finishedWork) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function unmountHostComponents(current) {
  // We only have the top Fiber that was inserted but we need recurse down its
  var node = current;

  // Each iteration, currentParent is populated with node's host parent if not
  // currentParentIsValid.
  var currentParentIsValid = false;
  var currentParent = void 0;
  var currentParentIsContainer = void 0;

  while (true) {
    if (!currentParentIsValid) {
      var parent = node.return;
      findParent: while (true) {
        !(parent !== null) ? invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        switch (parent.tag) {
          case HostComponent:
            currentParent = parent.stateNode;
            currentParentIsContainer = false;
            break findParent;
          case HostRoot:
            currentParent = parent.stateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;
          case HostPortal:
            currentParent = parent.stateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;
        }
        parent = parent.return;
      }
      currentParentIsValid = true;
    }

    if (node.tag === HostComponent || node.tag === HostText) {
      commitNestedUnmounts(node);
      // After all the children have unmounted, it is now safe to remove the
      // node from the tree.
      if (currentParentIsContainer) {
        removeChildFromContainer(currentParent, node.stateNode);
      } else {
        removeChild(currentParent, node.stateNode);
      }
      // Don't visit children because we already visited them.
    } else if (node.tag === HostPortal) {
      // When we go into a portal, it becomes the parent to remove from.
      // We will reassign it back when we pop the portal on the way up.
      currentParent = node.stateNode.containerInfo;
      // Visit children because portals might contain host components.
      if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
    } else {
      commitUnmount(node);
      // Visit children because we may find more host components below.
      if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
    }
    if (node === current) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === current) {
        return;
      }
      node = node.return;
      if (node.tag === HostPortal) {
        // When we go out of the portal, we need to restore the parent.
        // Since we don't keep a stack of them, we will search for it.
        currentParentIsValid = false;
      }
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function commitDeletion(current) {
  if (supportsMutation) {
    // Recursively delete all host nodes from the parent.
    // Detach refs and call componentWillUnmount() on the whole subtree.
    unmountHostComponents(current);
  } else {
    // Detach refs and call componentWillUnmount() on the whole subtree.
    commitNestedUnmounts(current);
  }
  detachFiber(current);
}

function commitWork(current, finishedWork) {
  if (!supportsMutation) {
    commitContainer(finishedWork);
    return;
  }

  switch (finishedWork.tag) {
    case ClassComponent:
      {
        return;
      }
    case HostComponent:
      {
        var instance = finishedWork.stateNode;
        if (instance != null) {
          // Commit the work prepared earlier.
          var newProps = finishedWork.memoizedProps;
          // For hydration we reuse the update path but we treat the oldProps
          // as the newProps. The updatePayload will contain the real change in
          // this case.
          var oldProps = current !== null ? current.memoizedProps : newProps;
          var type = finishedWork.type;
          // TODO: Type the updateQueue to be specific to host components.
          var updatePayload = finishedWork.updateQueue;
          finishedWork.updateQueue = null;
          if (updatePayload !== null) {
            commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
          }
        }
        return;
      }
    case HostText:
      {
        !(finishedWork.stateNode !== null) ? invariant(false, 'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        var textInstance = finishedWork.stateNode;
        var newText = finishedWork.memoizedProps;
        // For hydration we reuse the update path but we treat the oldProps
        // as the newProps. The updatePayload will contain the real change in
        // this case.
        var oldText = current !== null ? current.memoizedProps : newText;
        commitTextUpdate(textInstance, oldText, newText);
        return;
      }
    case HostRoot:
      {
        return;
      }
    case Profiler:
      {
        if (enableProfilerTimer) {
          var onRender = finishedWork.memoizedProps.onRender;
          onRender(finishedWork.memoizedProps.id, current === null ? 'mount' : 'update', finishedWork.actualDuration, finishedWork.treeBaseTime, finishedWork.actualStartTime, getCommitTime());
        }
        return;
      }
    case TimeoutComponent:
      {
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitResetTextContent(current) {
  if (!supportsMutation) {
    return;
  }
  resetTextContent(current.stateNode);
}

function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
  var update = createUpdate(expirationTime);
  // Unmount the root by rendering null.
  update.tag = CaptureUpdate;
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = { element: null };
  var error = errorInfo.value;
  update.callback = function () {
    onUncaughtError(error);
    logError(fiber, errorInfo);
  };
  return update;
}

function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
  var update = createUpdate(expirationTime);
  update.tag = CaptureUpdate;
  var getDerivedStateFromCatch = fiber.type.getDerivedStateFromCatch;
  if (enableGetDerivedStateFromCatch && typeof getDerivedStateFromCatch === 'function') {
    var error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromCatch(error);
    };
  }

  var inst = fiber.stateNode;
  if (inst !== null && typeof inst.componentDidCatch === 'function') {
    update.callback = function callback() {
      if (!enableGetDerivedStateFromCatch || getDerivedStateFromCatch !== 'function') {
        // To preserve the preexisting retry behavior of error boundaries,
        // we keep track of which ones already failed during this batch.
        // This gets reset before we yield back to the browser.
        // TODO: Warn in strict mode if getDerivedStateFromCatch is
        // not defined.
        markLegacyErrorBoundaryAsFailed(this);
      }
      var error = errorInfo.value;
      var stack = errorInfo.stack;
      logError(fiber, errorInfo);
      this.componentDidCatch(error, {
        componentStack: stack !== null ? stack : ''
      });
    };
  }
  return update;
}

function schedulePing(finishedWork) {
  // Once the promise resolves, we should try rendering the non-
  // placeholder state again.
  var currentTime = recalculateCurrentTime();
  var expirationTime = computeExpirationForFiber(currentTime, finishedWork);
  var recoveryUpdate = createUpdate(expirationTime);
  enqueueUpdate(finishedWork, recoveryUpdate, expirationTime);
  scheduleWork(finishedWork, expirationTime);
}

function throwException(root, returnFiber, sourceFiber, value, renderIsExpired, renderExpirationTime, currentTimeMs) {
  // The source fiber did not complete.
  sourceFiber.effectTag |= Incomplete;
  // Its effect list is no longer valid.
  sourceFiber.firstEffect = sourceFiber.lastEffect = null;

  if (enableSuspense && value !== null && typeof value === 'object' && typeof value.then === 'function') {
    // This is a thenable.
    var thenable = value;

    var expirationTimeMs = expirationTimeToMs(renderExpirationTime);
    var startTimeMs = expirationTimeMs - 5000;
    var elapsedMs = currentTimeMs - startTimeMs;
    if (elapsedMs < 0) {
      elapsedMs = 0;
    }
    var remainingTimeMs = expirationTimeMs - currentTimeMs;

    // Find the earliest timeout of all the timeouts in the ancestor path.
    // TODO: Alternatively, we could store the earliest timeout on the context
    // stack, rather than searching on every suspend.
    var _workInProgress = returnFiber;
    var earliestTimeoutMs = -1;
    searchForEarliestTimeout: do {
      if (_workInProgress.tag === TimeoutComponent) {
        var current = _workInProgress.alternate;
        if (current !== null && current.memoizedState === true) {
          // A parent Timeout already committed in a placeholder state. We
          // need to handle this promise immediately. In other words, we
          // should never suspend inside a tree that already expired.
          earliestTimeoutMs = 0;
          break searchForEarliestTimeout;
        }
        var timeoutPropMs = _workInProgress.pendingProps.ms;
        if (typeof timeoutPropMs === 'number') {
          if (timeoutPropMs <= 0) {
            earliestTimeoutMs = 0;
            break searchForEarliestTimeout;
          } else if (earliestTimeoutMs === -1 || timeoutPropMs < earliestTimeoutMs) {
            earliestTimeoutMs = timeoutPropMs;
          }
        } else if (earliestTimeoutMs === -1) {
          earliestTimeoutMs = remainingTimeMs;
        }
      }
      _workInProgress = _workInProgress.return;
    } while (_workInProgress !== null);

    // Compute the remaining time until the timeout.
    var msUntilTimeout = earliestTimeoutMs - elapsedMs;

    if (renderExpirationTime === Never || msUntilTimeout > 0) {
      // There's still time remaining.
      suspendRoot(root, thenable, msUntilTimeout, renderExpirationTime);
      var onResolveOrReject = function () {
        retrySuspendedRoot(root, renderExpirationTime);
      };
      thenable.then(onResolveOrReject, onResolveOrReject);
      return;
    } else {
      // No time remaining. Need to fallback to placeholder.
      // Find the nearest timeout that can be retried.
      _workInProgress = returnFiber;
      do {
        switch (_workInProgress.tag) {
          case HostRoot:
            {
              // The root expired, but no fallback was provided. Throw a
              // helpful error.
              var message = renderExpirationTime === Sync ? 'A synchronous update was suspended, but no fallback UI ' + 'was provided.' : 'An update was suspended for longer than the timeout, ' + 'but no fallback UI was provided.';
              value = new Error(message);
              break;
            }
          case TimeoutComponent:
            {
              if ((_workInProgress.effectTag & DidCapture) === NoEffect) {
                _workInProgress.effectTag |= ShouldCapture;
                var _onResolveOrReject = schedulePing.bind(null, _workInProgress);
                thenable.then(_onResolveOrReject, _onResolveOrReject);
                return;
              }
              // Already captured during this render. Continue to the next
              // Timeout ancestor.
              break;
            }
        }
        _workInProgress = _workInProgress.return;
      } while (_workInProgress !== null);
    }
  }

  // We didn't find a boundary that could handle this type of exception. Start
  // over and traverse parent path again, this time treating the exception
  // as an error.
  value = createCapturedValue(value, sourceFiber);
  var workInProgress = returnFiber;
  do {
    switch (workInProgress.tag) {
      case HostRoot:
        {
          var _errorInfo = value;
          workInProgress.effectTag |= ShouldCapture;
          var update = createRootErrorUpdate(workInProgress, _errorInfo, renderExpirationTime);
          enqueueCapturedUpdate(workInProgress, update, renderExpirationTime);
          return;
        }
      case ClassComponent:
        // Capture and retry
        var errorInfo = value;
        var ctor = workInProgress.type;
        var instance = workInProgress.stateNode;
        if ((workInProgress.effectTag & DidCapture) === NoEffect && (typeof ctor.getDerivedStateFromCatch === 'function' && enableGetDerivedStateFromCatch || instance !== null && typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))) {
          workInProgress.effectTag |= ShouldCapture;
          // Schedule the error boundary to re-render using updated state
          var _update = createClassErrorUpdate(workInProgress, errorInfo, renderExpirationTime);
          enqueueCapturedUpdate(workInProgress, _update, renderExpirationTime);
          return;
        }
        break;
      default:
        break;
    }
    workInProgress = workInProgress.return;
  } while (workInProgress !== null);
}

function unwindWork(workInProgress, renderIsExpired, renderExpirationTime) {
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      recordElapsedActualRenderTime(workInProgress);
    }
  }

  switch (workInProgress.tag) {
    case ClassComponent:
      {
        popContextProvider(workInProgress);
        var effectTag = workInProgress.effectTag;
        if (effectTag & ShouldCapture) {
          workInProgress.effectTag = effectTag & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostRoot:
      {
        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        var _effectTag = workInProgress.effectTag;
        if (_effectTag & ShouldCapture) {
          workInProgress.effectTag = _effectTag & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostComponent:
      {
        popHostContext(workInProgress);
        return null;
      }
    case TimeoutComponent:
      {
        var _effectTag2 = workInProgress.effectTag;
        if (_effectTag2 & ShouldCapture) {
          workInProgress.effectTag = _effectTag2 & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostPortal:
      popHostContainer(workInProgress);
      return null;
    case ContextProvider:
      popProvider(workInProgress);
      return null;
    default:
      return null;
  }
}

function unwindInterruptedWork(interruptedWork) {
  if (enableProfilerTimer) {
    if (interruptedWork.mode & ProfileMode) {
      // Resume in case we're picking up on work that was paused.
      resumeActualRenderTimerIfPaused();
      recordElapsedActualRenderTime(interruptedWork);
    }
  }

  switch (interruptedWork.tag) {
    case ClassComponent:
      {
        popContextProvider(interruptedWork);
        break;
      }
    case HostRoot:
      {
        popHostContainer(interruptedWork);
        popTopLevelContextObject(interruptedWork);
        break;
      }
    case HostComponent:
      {
        popHostContext(interruptedWork);
        break;
      }
    case HostPortal:
      popHostContainer(interruptedWork);
      break;
    case ContextProvider:
      popProvider(interruptedWork);
      break;
    default:
      break;
  }
}

var invokeGuardedCallback = ReactErrorUtils.invokeGuardedCallback;
var hasCaughtError = ReactErrorUtils.hasCaughtError;
var clearCaughtError = ReactErrorUtils.clearCaughtError;


var didWarnAboutStateTransition = void 0;
var didWarnSetStateChildContext = void 0;
var warnAboutUpdateOnUnmounted = void 0;
var warnAboutInvalidUpdates = void 0;

{
  didWarnAboutStateTransition = false;
  didWarnSetStateChildContext = false;
  var didWarnStateUpdateForUnmountedComponent = {};

  warnAboutUpdateOnUnmounted = function (fiber) {
    // We show the whole stack but dedupe on the top component's name because
    // the problematic code almost always lies inside that component.
    var componentName = getComponentName(fiber) || 'ReactClass';
    if (didWarnStateUpdateForUnmountedComponent[componentName]) {
      return;
    }
    warning(false, "Can't call setState (or forceUpdate) on an unmounted component. This " + 'is a no-op, but it indicates a memory leak in your application. To ' + 'fix, cancel all subscriptions and asynchronous tasks in the ' + 'componentWillUnmount method.%s', getStackAddendumByWorkInProgressFiber(fiber));
    didWarnStateUpdateForUnmountedComponent[componentName] = true;
  };

  warnAboutInvalidUpdates = function (instance) {
    switch (ReactDebugCurrentFiber.phase) {
      case 'getChildContext':
        if (didWarnSetStateChildContext) {
          return;
        }
        warning(false, 'setState(...): Cannot call setState() inside getChildContext()');
        didWarnSetStateChildContext = true;
        break;
      case 'render':
        if (didWarnAboutStateTransition) {
          return;
        }
        warning(false, 'Cannot update during an existing state transition (such as within ' + "`render` or another component's constructor). Render methods should " + 'be a pure function of props and state; constructor side-effects are ' + 'an anti-pattern, but can be moved to `componentWillMount`.');
        didWarnAboutStateTransition = true;
        break;
    }
  };
}

// Represents the current time in ms.
var originalStartTimeMs = now();
var mostRecentCurrentTime = msToExpirationTime(0);
var mostRecentCurrentTimeMs = originalStartTimeMs;

// Used to ensure computeUniqueAsyncExpiration is monotonically increases.
var lastUniqueAsyncExpiration = 0;

// Represents the expiration time that incoming updates should use. (If this
// is NoWork, use the default strategy: async updates in async mode, sync
// updates in sync mode.)
var expirationContext = NoWork;

var isWorking = false;

// The next work in progress fiber that we're currently working on.
var nextUnitOfWork = null;
var nextRoot = null;
// The time at which we're currently rendering work.
var nextRenderExpirationTime = NoWork;
var nextLatestTimeoutMs = -1;
var nextRenderIsExpired = false;

// The next fiber with an effect that we're currently committing.
var nextEffect = null;

var isCommitting$1 = false;

var isRootReadyForCommit = false;

var legacyErrorBoundariesThatAlreadyFailed = null;

// Used for performance tracking.
var interruptedBy = null;

var stashedWorkInProgressProperties = void 0;
var replayUnitOfWork = void 0;
var isReplayingFailedUnitOfWork = void 0;
var originalReplayError = void 0;
var rethrowOriginalError = void 0;
if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
  stashedWorkInProgressProperties = null;
  isReplayingFailedUnitOfWork = false;
  originalReplayError = null;
  replayUnitOfWork = function (failedUnitOfWork, thrownValue, isAsync) {
    if (thrownValue !== null && typeof thrownValue === 'object' && typeof thrownValue.then === 'function') {
      // Don't replay promises. Treat everything else like an error.
      // TODO: Need to figure out a different strategy if/when we add
      // support for catching other types.
      return;
    }

    // Restore the original state of the work-in-progress
    if (stashedWorkInProgressProperties === null) {
      // This should never happen. Don't throw because this code is DEV-only.
      warning(false, 'Could not replay rendering after an error. This is likely a bug in React. ' + 'Please file an issue.');
      return;
    }
    assignFiberPropertiesInDEV(failedUnitOfWork, stashedWorkInProgressProperties);

    switch (failedUnitOfWork.tag) {
      case HostRoot:
        popHostContainer(failedUnitOfWork);
        popTopLevelContextObject(failedUnitOfWork);
        break;
      case HostComponent:
        popHostContext(failedUnitOfWork);
        break;
      case ClassComponent:
        popContextProvider(failedUnitOfWork);
        break;
      case HostPortal:
        popHostContainer(failedUnitOfWork);
        break;
      case ContextProvider:
        popProvider(failedUnitOfWork);
        break;
    }
    // Replay the begin phase.
    isReplayingFailedUnitOfWork = true;
    originalReplayError = thrownValue;
    invokeGuardedCallback(null, workLoop, null, isAsync);
    isReplayingFailedUnitOfWork = false;
    originalReplayError = null;
    if (hasCaughtError()) {
      clearCaughtError();

      if (enableProfilerTimer) {
        if (failedUnitOfWork.mode & ProfileMode) {
          recordElapsedActualRenderTime(failedUnitOfWork);
        }

        // Stop "base" render timer again (after the re-thrown error).
        stopBaseRenderTimerIfRunning();
      }
    } else {
      // If the begin phase did not fail the second time, set this pointer
      // back to the original value.
      nextUnitOfWork = failedUnitOfWork;
    }
  };
  rethrowOriginalError = function () {
    throw originalReplayError;
  };
}

function resetStack() {
  if (nextUnitOfWork !== null) {
    var interruptedWork = nextUnitOfWork.return;
    while (interruptedWork !== null) {
      unwindInterruptedWork(interruptedWork);
      interruptedWork = interruptedWork.return;
    }
  }

  {
    ReactStrictModeWarnings.discardPendingWarnings();
    checkThatStackIsEmpty();
  }

  nextRoot = null;
  nextRenderExpirationTime = NoWork;
  nextLatestTimeoutMs = -1;
  nextRenderIsExpired = false;
  nextUnitOfWork = null;

  isRootReadyForCommit = false;
}

function commitAllHostEffects() {
  while (nextEffect !== null) {
    {
      ReactDebugCurrentFiber.setCurrentFiber(nextEffect);
    }
    recordEffect();

    var effectTag = nextEffect.effectTag;

    if (effectTag & ContentReset) {
      commitResetTextContent(nextEffect);
    }

    if (effectTag & Ref) {
      var current = nextEffect.alternate;
      if (current !== null) {
        commitDetachRef(current);
      }
    }

    // The following switch statement is only concerned about placement,
    // updates, and deletions. To avoid needing to add a case for every
    // possible bitmap value, we remove the secondary effects from the
    // effect tag and switch on that value.
    var primaryEffectTag = effectTag & (Placement | Update | Deletion);
    switch (primaryEffectTag) {
      case Placement:
        {
          commitPlacement(nextEffect);
          // Clear the "placement" from effect tag so that we know that this is inserted, before
          // any life-cycles like componentDidMount gets called.
          // TODO: findDOMNode doesn't rely on this any more but isMounted
          // does and isMounted is deprecated anyway so we should be able
          // to kill this.
          nextEffect.effectTag &= ~Placement;
          break;
        }
      case PlacementAndUpdate:
        {
          // Placement
          commitPlacement(nextEffect);
          // Clear the "placement" from effect tag so that we know that this is inserted, before
          // any life-cycles like componentDidMount gets called.
          nextEffect.effectTag &= ~Placement;

          // Update
          var _current = nextEffect.alternate;
          commitWork(_current, nextEffect);
          break;
        }
      case Update:
        {
          var _current2 = nextEffect.alternate;
          commitWork(_current2, nextEffect);
          break;
        }
      case Deletion:
        {
          commitDeletion(nextEffect);
          break;
        }
    }
    nextEffect = nextEffect.nextEffect;
  }

  {
    ReactDebugCurrentFiber.resetCurrentFiber();
  }
}

function commitBeforeMutationLifecycles() {
  while (nextEffect !== null) {
    var effectTag = nextEffect.effectTag;

    if (effectTag & Snapshot) {
      recordEffect();
      var current = nextEffect.alternate;
      commitBeforeMutationLifeCycles(current, nextEffect);
    }

    // Don't cleanup effects yet;
    // This will be done by commitAllLifeCycles()
    nextEffect = nextEffect.nextEffect;
  }
}

function commitAllLifeCycles(finishedRoot, currentTime, committedExpirationTime) {
  {
    ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();

    if (warnAboutDeprecatedLifecycles) {
      ReactStrictModeWarnings.flushPendingDeprecationWarnings();
    }

    if (warnAboutLegacyContextAPI) {
      ReactStrictModeWarnings.flushLegacyContextWarning();
    }
  }
  while (nextEffect !== null) {
    var effectTag = nextEffect.effectTag;

    if (effectTag & (Update | Callback)) {
      recordEffect();
      var current = nextEffect.alternate;
      commitLifeCycles(finishedRoot, current, nextEffect, currentTime, committedExpirationTime);
    }

    if (effectTag & Ref) {
      recordEffect();
      commitAttachRef(nextEffect);
    }

    var next = nextEffect.nextEffect;
    // Ensure that we clean these up so that we don't accidentally keep them.
    // I'm not actually sure this matters because we can't reset firstEffect
    // and lastEffect since they're on every node, not just the effectful
    // ones. So we have to clean everything as we reuse nodes anyway.
    nextEffect.nextEffect = null;
    // Ensure that we reset the effectTag here so that we can rely on effect
    // tags to reason about the current life-cycle.
    nextEffect = next;
  }
}

function isAlreadyFailedLegacyErrorBoundary(instance) {
  return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
}

function markLegacyErrorBoundaryAsFailed(instance) {
  if (legacyErrorBoundariesThatAlreadyFailed === null) {
    legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
  } else {
    legacyErrorBoundariesThatAlreadyFailed.add(instance);
  }
}

function commitRoot(finishedWork) {
  isWorking = true;
  isCommitting$1 = true;
  startCommitTimer();

  var root = finishedWork.stateNode;
  !(root.current !== finishedWork) ? invariant(false, 'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  var committedExpirationTime = root.pendingCommitExpirationTime;
  !(committedExpirationTime !== NoWork) ? invariant(false, 'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  root.pendingCommitExpirationTime = NoWork;

  var currentTime = recalculateCurrentTime();

  // Reset this to null before calling lifecycles
  ReactCurrentOwner.current = null;

  var firstEffect = void 0;
  if (finishedWork.effectTag > PerformedWork) {
    // A fiber's effect list consists only of its children, not itself. So if
    // the root has an effect, we need to add it to the end of the list. The
    // resulting list is the set that would belong to the root's parent, if
    // it had one; that is, all the effects in the tree including the root.
    if (finishedWork.lastEffect !== null) {
      finishedWork.lastEffect.nextEffect = finishedWork;
      firstEffect = finishedWork.firstEffect;
    } else {
      firstEffect = finishedWork;
    }
  } else {
    // There is no effect on the root.
    firstEffect = finishedWork.firstEffect;
  }

  prepareForCommit(root.containerInfo);

  // Invoke instances of getSnapshotBeforeUpdate before mutation.
  nextEffect = firstEffect;
  startCommitSnapshotEffectsTimer();
  while (nextEffect !== null) {
    var didError = false;
    var error = void 0;
    {
      invokeGuardedCallback(null, commitBeforeMutationLifecycles, null);
      if (hasCaughtError()) {
        didError = true;
        error = clearCaughtError();
      }
    }
    if (didError) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, error);
      // Clean-up
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }
  stopCommitSnapshotEffectsTimer();

  if (enableProfilerTimer) {
    // Mark the current commit time to be shared by all Profilers in this batch.
    // This enables them to be grouped later.
    recordCommitTime();
  }

  // Commit all the side-effects within a tree. We'll do this in two passes.
  // The first pass performs all the host insertions, updates, deletions and
  // ref unmounts.
  nextEffect = firstEffect;
  startCommitHostEffectsTimer();
  while (nextEffect !== null) {
    var _didError = false;
    var _error = void 0;
    {
      invokeGuardedCallback(null, commitAllHostEffects, null);
      if (hasCaughtError()) {
        _didError = true;
        _error = clearCaughtError();
      }
    }
    if (_didError) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, _error);
      // Clean-up
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }
  stopCommitHostEffectsTimer();

  resetAfterCommit(root.containerInfo);

  // The work-in-progress tree is now the current tree. This must come after
  // the first pass of the commit phase, so that the previous tree is still
  // current during componentWillUnmount, but before the second pass, so that
  // the finished work is current during componentDidMount/Update.
  root.current = finishedWork;

  // In the second pass we'll perform all life-cycles and ref callbacks.
  // Life-cycles happen as a separate pass so that all placements, updates,
  // and deletions in the entire tree have already been invoked.
  // This pass also triggers any renderer-specific initial effects.
  nextEffect = firstEffect;
  startCommitLifeCyclesTimer();
  while (nextEffect !== null) {
    var _didError2 = false;
    var _error2 = void 0;
    {
      invokeGuardedCallback(null, commitAllLifeCycles, null, root, currentTime, committedExpirationTime);
      if (hasCaughtError()) {
        _didError2 = true;
        _error2 = clearCaughtError();
      }
    }
    if (_didError2) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, _error2);
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }

  if (enableProfilerTimer) {
    {
      checkActualRenderTimeStackEmpty();
    }
    resetActualRenderTimer();
  }

  isCommitting$1 = false;
  isWorking = false;
  stopCommitLifeCyclesTimer();
  stopCommitTimer();
  if (typeof onCommitRoot === 'function') {
    onCommitRoot(finishedWork.stateNode);
  }
  if (true && ReactFiberInstrumentation_1.debugTool) {
    ReactFiberInstrumentation_1.debugTool.onCommitWork(finishedWork);
  }

  markCommittedPriorityLevels(root, currentTime, root.current.expirationTime);
  var remainingTime = findNextPendingPriorityLevel(root);
  if (remainingTime === NoWork) {
    // If there's no remaining work, we can clear the set of already failed
    // error boundaries.
    legacyErrorBoundariesThatAlreadyFailed = null;
  }
  return remainingTime;
}

function resetExpirationTime(workInProgress, renderTime) {
  if (renderTime !== Never && workInProgress.expirationTime === Never) {
    // The children of this component are hidden. Don't bubble their
    // expiration times.
    return;
  }

  // Check for pending updates.
  var newExpirationTime = NoWork;
  switch (workInProgress.tag) {
    case HostRoot:
    case ClassComponent:
      {
        var updateQueue = workInProgress.updateQueue;
        if (updateQueue !== null) {
          newExpirationTime = updateQueue.expirationTime;
        }
      }
  }

  // TODO: Calls need to visit stateNode

  // Bubble up the earliest expiration time.
  // (And "base" render timers if that feature flag is enabled)
  if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
    var treeBaseTime = workInProgress.selfBaseTime;
    var child = workInProgress.child;
    while (child !== null) {
      treeBaseTime += child.treeBaseTime;
      if (child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > child.expirationTime)) {
        newExpirationTime = child.expirationTime;
      }
      child = child.sibling;
    }
    workInProgress.treeBaseTime = treeBaseTime;
  } else {
    var _child = workInProgress.child;
    while (_child !== null) {
      if (_child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > _child.expirationTime)) {
        newExpirationTime = _child.expirationTime;
      }
      _child = _child.sibling;
    }
  }

  workInProgress.expirationTime = newExpirationTime;
}

function completeUnitOfWork(workInProgress) {
  // Attempt to complete the current unit of work, then move to the
  // next sibling. If there are no more siblings, return to the
  // parent fiber.
  while (true) {
    // The current, flushed, state of this fiber is the alternate.
    // Ideally nothing should rely on this, but relying on it here
    // means that we don't need an additional field on the work in
    // progress.
    var current = workInProgress.alternate;
    {
      ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
    }

    var returnFiber = workInProgress.return;
    var siblingFiber = workInProgress.sibling;

    if ((workInProgress.effectTag & Incomplete) === NoEffect) {
      // This fiber completed.
      var next = completeWork(current, workInProgress, nextRenderExpirationTime);
      stopWorkTimer(workInProgress);
      resetExpirationTime(workInProgress, nextRenderExpirationTime);
      {
        ReactDebugCurrentFiber.resetCurrentFiber();
      }

      if (next !== null) {
        stopWorkTimer(workInProgress);
        if (true && ReactFiberInstrumentation_1.debugTool) {
          ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
        }
        // If completing this work spawned new work, do that next. We'll come
        // back here again.
        return next;
      }

      if (returnFiber !== null &&
      // Do not append effects to parents if a sibling failed to complete
      (returnFiber.effectTag & Incomplete) === NoEffect) {
        // Append all the effects of the subtree and this fiber onto the effect
        // list of the parent. The completion order of the children affects the
        // side-effect order.
        if (returnFiber.firstEffect === null) {
          returnFiber.firstEffect = workInProgress.firstEffect;
        }
        if (workInProgress.lastEffect !== null) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
          }
          returnFiber.lastEffect = workInProgress.lastEffect;
        }

        // If this fiber had side-effects, we append it AFTER the children's
        // side-effects. We can perform certain side-effects earlier if
        // needed, by doing multiple passes over the effect list. We don't want
        // to schedule our own side-effect on our own list because if end up
        // reusing children we'll schedule this effect onto itself since we're
        // at the end.
        var effectTag = workInProgress.effectTag;
        // Skip both NoWork and PerformedWork tags when creating the effect list.
        // PerformedWork effect is read by React DevTools but shouldn't be committed.
        if (effectTag > PerformedWork) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = workInProgress;
          } else {
            returnFiber.firstEffect = workInProgress;
          }
          returnFiber.lastEffect = workInProgress;
        }
      }

      if (true && ReactFiberInstrumentation_1.debugTool) {
        ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
      }

      if (siblingFiber !== null) {
        // If there is more work to do in this returnFiber, do that next.
        return siblingFiber;
      } else if (returnFiber !== null) {
        // If there's no more work in this returnFiber. Complete the returnFiber.
        workInProgress = returnFiber;
        continue;
      } else {
        // We've reached the root.
        isRootReadyForCommit = true;
        return null;
      }
    } else {
      // This fiber did not complete because something threw. Pop values off
      // the stack without entering the complete phase. If this is a boundary,
      // capture values if possible.
      var _next = unwindWork(workInProgress, nextRenderIsExpired, nextRenderExpirationTime);
      // Because this fiber did not complete, don't reset its expiration time.
      if (workInProgress.effectTag & DidCapture) {
        // Restarting an error boundary
        stopFailedWorkTimer(workInProgress);
      } else {
        stopWorkTimer(workInProgress);
      }

      {
        ReactDebugCurrentFiber.resetCurrentFiber();
      }

      if (_next !== null) {
        stopWorkTimer(workInProgress);
        if (true && ReactFiberInstrumentation_1.debugTool) {
          ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
        }
        // If completing this work spawned new work, do that next. We'll come
        // back here again.
        // Since we're restarting, remove anything that is not a host effect
        // from the effect tag.
        _next.effectTag &= HostEffectMask;
        return _next;
      }

      if (returnFiber !== null) {
        // Mark the parent fiber as incomplete and clear its effect list.
        returnFiber.firstEffect = returnFiber.lastEffect = null;
        returnFiber.effectTag |= Incomplete;
      }

      if (true && ReactFiberInstrumentation_1.debugTool) {
        ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
      }

      if (siblingFiber !== null) {
        // If there is more work to do in this returnFiber, do that next.
        return siblingFiber;
      } else if (returnFiber !== null) {
        // If there's no more work in this returnFiber. Complete the returnFiber.
        workInProgress = returnFiber;
        continue;
      } else {
        return null;
      }
    }
  }

  // Without this explicit null return Flow complains of invalid return type
  // TODO Remove the above while(true) loop
  // eslint-disable-next-line no-unreachable
  return null;
}

function performUnitOfWork(workInProgress) {
  // The current, flushed, state of this fiber is the alternate.
  // Ideally nothing should rely on this, but relying on it here
  // means that we don't need an additional field on the work in
  // progress.
  var current = workInProgress.alternate;

  // See if beginning this work spawns more work.
  startWorkTimer(workInProgress);
  {
    ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
  }

  if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
    stashedWorkInProgressProperties = assignFiberPropertiesInDEV(stashedWorkInProgressProperties, workInProgress);
  }

  var next = void 0;
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      startBaseRenderTimer();
    }

    next = beginWork(current, workInProgress, nextRenderExpirationTime);

    if (workInProgress.mode & ProfileMode) {
      // Update "base" time if the render wasn't bailed out on.
      recordElapsedBaseRenderTimeIfRunning(workInProgress);
      stopBaseRenderTimerIfRunning();
    }
  } else {
    next = beginWork(current, workInProgress, nextRenderExpirationTime);
  }

  {
    ReactDebugCurrentFiber.resetCurrentFiber();
    if (isReplayingFailedUnitOfWork) {
      // Currently replaying a failed unit of work. This should be unreachable,
      // because the render phase is meant to be idempotent, and it should
      // have thrown again. Since it didn't, rethrow the original error, so
      // React's internal stack is not misaligned.
      rethrowOriginalError();
    }
  }
  if (true && ReactFiberInstrumentation_1.debugTool) {
    ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);
  }

  if (next === null) {
    // If this doesn't spawn new work, complete the current work.
    next = completeUnitOfWork(workInProgress);
  }

  ReactCurrentOwner.current = null;

  return next;
}

function workLoop(isAsync) {
  if (!isAsync) {
    // Flush all expired work.
    while (nextUnitOfWork !== null) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
  } else {
    // Flush asynchronous work until the deadline runs out of time.
    while (nextUnitOfWork !== null && !shouldYield()) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }

    if (enableProfilerTimer) {
      // If we didn't finish, pause the "actual" render timer.
      // We'll restart it when we resume work.
      pauseActualRenderTimerIfRunning();
    }
  }
}

function renderRoot(root, expirationTime, isAsync) {
  !!isWorking ? invariant(false, 'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  isWorking = true;

  // Check if we're starting from a fresh stack, or if we're resuming from
  // previously yielded work.
  if (expirationTime !== nextRenderExpirationTime || root !== nextRoot || nextUnitOfWork === null) {
    // Reset the stack and start working from the root.
    resetStack();
    nextRoot = root;
    nextRenderExpirationTime = expirationTime;
    nextLatestTimeoutMs = -1;
    nextUnitOfWork = createWorkInProgress(nextRoot.current, null, nextRenderExpirationTime);
    root.pendingCommitExpirationTime = NoWork;
  }

  var didFatal = false;

  nextRenderIsExpired = !isAsync || nextRenderExpirationTime <= mostRecentCurrentTime;

  startWorkLoopTimer(nextUnitOfWork);

  do {
    try {
      workLoop(isAsync);
    } catch (thrownValue) {
      if (enableProfilerTimer) {
        // Stop "base" render timer in the event of an error.
        stopBaseRenderTimerIfRunning();
      }

      if (nextUnitOfWork === null) {
        // This is a fatal error.
        didFatal = true;
        onUncaughtError(thrownValue);
      } else {
        {
          // Reset global debug state
          // We assume this is defined in DEV
          resetCurrentlyProcessingQueue();
        }

        var failedUnitOfWork = nextUnitOfWork;
        if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
          replayUnitOfWork(failedUnitOfWork, thrownValue, isAsync);
        }

        // TODO: we already know this isn't true in some cases.
        // At least this shows a nicer error message until we figure out the cause.
        // https://github.com/facebook/react/issues/12449#issuecomment-386727431
        !(nextUnitOfWork !== null) ? invariant(false, 'Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.') : void 0;

        var sourceFiber = nextUnitOfWork;
        var returnFiber = sourceFiber.return;
        if (returnFiber === null) {
          // This is the root. The root could capture its own errors. However,
          // we don't know if it errors before or after we pushed the host
          // context. This information is needed to avoid a stack mismatch.
          // Because we're not sure, treat this as a fatal error. We could track
          // which phase it fails in, but doesn't seem worth it. At least
          // for now.
          didFatal = true;
          onUncaughtError(thrownValue);
          break;
        }
        throwException(root, returnFiber, sourceFiber, thrownValue, nextRenderIsExpired, nextRenderExpirationTime, mostRecentCurrentTimeMs);
        nextUnitOfWork = completeUnitOfWork(sourceFiber);
      }
    }
    break;
  } while (true);

  // We're done performing work. Time to clean up.
  var didCompleteRoot = false;
  isWorking = false;

  // Yield back to main thread.
  if (didFatal) {
    stopWorkLoopTimer(interruptedBy, didCompleteRoot);
    interruptedBy = null;
    // There was a fatal error.
    {
      resetStackAfterFatalErrorInDev();
    }
    return null;
  } else if (nextUnitOfWork === null) {
    // We reached the root.
    if (isRootReadyForCommit) {
      didCompleteRoot = true;
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
      // The root successfully completed. It's ready for commit.
      root.pendingCommitExpirationTime = expirationTime;
      var finishedWork = root.current.alternate;
      return finishedWork;
    } else {
      // The root did not complete.
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
      !!nextRenderIsExpired ? invariant(false, 'Expired work should have completed. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      markSuspendedPriorityLevel(root, expirationTime);
      if (nextLatestTimeoutMs >= 0) {
        setTimeout(function () {
          retrySuspendedRoot(root, expirationTime);
        }, nextLatestTimeoutMs);
      }
      var firstUnblockedExpirationTime = findNextPendingPriorityLevel(root);
      onBlock(firstUnblockedExpirationTime);
      return null;
    }
  } else {
    stopWorkLoopTimer(interruptedBy, didCompleteRoot);
    interruptedBy = null;
    // There's more work to do, but we ran out of time. Yield back to
    // the renderer.
    return null;
  }
}

function dispatch(sourceFiber, value, expirationTime) {
  !(!isWorking || isCommitting$1) ? invariant(false, 'dispatch: Cannot dispatch during the render phase.') : void 0;

  var fiber = sourceFiber.return;
  while (fiber !== null) {
    switch (fiber.tag) {
      case ClassComponent:
        var ctor = fiber.type;
        var instance = fiber.stateNode;
        if (typeof ctor.getDerivedStateFromCatch === 'function' || typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
          var errorInfo = createCapturedValue(value, sourceFiber);
          var update = createClassErrorUpdate(fiber, errorInfo, expirationTime);
          enqueueUpdate(fiber, update, expirationTime);
          scheduleWork(fiber, expirationTime);
          return;
        }
        break;
      case HostRoot:
        {
          var _errorInfo = createCapturedValue(value, sourceFiber);
          var _update = createRootErrorUpdate(fiber, _errorInfo, expirationTime);
          enqueueUpdate(fiber, _update, expirationTime);
          scheduleWork(fiber, expirationTime);
          return;
        }
    }
    fiber = fiber.return;
  }

  if (sourceFiber.tag === HostRoot) {
    // Error was thrown at the root. There is no parent, so the root
    // itself should capture it.
    var rootFiber = sourceFiber;
    var _errorInfo2 = createCapturedValue(value, rootFiber);
    var _update2 = createRootErrorUpdate(rootFiber, _errorInfo2, expirationTime);
    enqueueUpdate(rootFiber, _update2, expirationTime);
    scheduleWork(rootFiber, expirationTime);
  }
}

function captureCommitPhaseError(fiber, error) {
  return dispatch(fiber, error, Sync);
}

function computeAsyncExpiration(currentTime) {
  // Given the current clock time, returns an expiration time. We use rounding
  // to batch like updates together.
  // Should complete within ~5000ms. 5250ms max.
  var expirationMs = 5000;
  var bucketSizeMs = 250;
  return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
}

function computeInteractiveExpiration(currentTime) {
  var expirationMs = void 0;
  // We intentionally set a higher expiration time for interactive updates in
  // dev than in production.
  // If the main thread is being blocked so long that you hit the expiration,
  // it's a problem that could be solved with better scheduling.
  // People will be more likely to notice this and fix it with the long
  // expiration time in development.
  // In production we opt for better UX at the risk of masking scheduling
  // problems, by expiring fast.
  {
    // Should complete within ~500ms. 600ms max.
    expirationMs = 500;
  }
  var bucketSizeMs = 100;
  return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
}

// Creates a unique async expiration time.
function computeUniqueAsyncExpiration() {
  var currentTime = recalculateCurrentTime();
  var result = computeAsyncExpiration(currentTime);
  if (result <= lastUniqueAsyncExpiration) {
    // Since we assume the current time monotonically increases, we only hit
    // this branch when computeUniqueAsyncExpiration is fired multiple times
    // within a 200ms window (or whatever the async bucket size is).
    result = lastUniqueAsyncExpiration + 1;
  }
  lastUniqueAsyncExpiration = result;
  return lastUniqueAsyncExpiration;
}

function computeExpirationForFiber(currentTime, fiber) {
  var expirationTime = void 0;
  if (expirationContext !== NoWork) {
    // An explicit expiration context was set;
    expirationTime = expirationContext;
  } else if (isWorking) {
    if (isCommitting$1) {
      // Updates that occur during the commit phase should have sync priority
      // by default.
      expirationTime = Sync;
    } else {
      // Updates during the render phase should expire at the same time as
      // the work that is being rendered.
      expirationTime = nextRenderExpirationTime;
    }
  } else {
    // No explicit expiration context was set, and we're not currently
    // performing work. Calculate a new expiration time.
    if (fiber.mode & AsyncMode) {
      if (isBatchingInteractiveUpdates) {
        // This is an interactive update
        expirationTime = computeInteractiveExpiration(currentTime);
      } else {
        // This is an async update
        expirationTime = computeAsyncExpiration(currentTime);
      }
    } else {
      // This is a sync update
      expirationTime = Sync;
    }
  }
  if (isBatchingInteractiveUpdates) {
    // This is an interactive update. Keep track of the lowest pending
    // interactive expiration time. This allows us to synchronously flush
    // all interactive updates when needed.
    if (lowestPendingInteractiveExpirationTime === NoWork || expirationTime > lowestPendingInteractiveExpirationTime) {
      lowestPendingInteractiveExpirationTime = expirationTime;
    }
  }
  return expirationTime;
}

// TODO: Rename this to scheduleTimeout or something
function suspendRoot(root, thenable, timeoutMs, suspendedTime) {
  // Schedule the timeout.
  if (timeoutMs >= 0 && nextLatestTimeoutMs < timeoutMs) {
    nextLatestTimeoutMs = timeoutMs;
  }
}

function retrySuspendedRoot(root, suspendedTime) {
  markPingedPriorityLevel(root, suspendedTime);
  var retryTime = findNextPendingPriorityLevel(root);
  if (retryTime !== NoWork) {
    requestRetry(root, retryTime);
  }
}

function scheduleWork(fiber, expirationTime) {
  recordScheduleUpdate();

  {
    if (fiber.tag === ClassComponent) {
      var instance = fiber.stateNode;
      warnAboutInvalidUpdates(instance);
    }
  }

  var node = fiber;
  while (node !== null) {
    // Walk the parent path to the root and update each node's
    // expiration time.
    if (node.expirationTime === NoWork || node.expirationTime > expirationTime) {
      node.expirationTime = expirationTime;
    }
    if (node.alternate !== null) {
      if (node.alternate.expirationTime === NoWork || node.alternate.expirationTime > expirationTime) {
        node.alternate.expirationTime = expirationTime;
      }
    }
    if (node.return === null) {
      if (node.tag === HostRoot) {
        var root = node.stateNode;
        if (!isWorking && nextRenderExpirationTime !== NoWork && expirationTime < nextRenderExpirationTime) {
          // This is an interruption. (Used for performance tracking.)
          interruptedBy = fiber;
          resetStack();
        }
        markPendingPriorityLevel(root, expirationTime);
        var nextExpirationTimeToWorkOn = findNextPendingPriorityLevel(root);
        if (
        // If we're in the render phase, we don't need to schedule this root
        // for an update, because we'll do it before we exit...
        !isWorking || isCommitting$1 ||
        // ...unless this is a different root than the one we're rendering.
        nextRoot !== root) {
          requestWork(root, nextExpirationTimeToWorkOn);
        }
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
          invariant(false, 'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');
        }
      } else {
        {
          if (fiber.tag === ClassComponent) {
            warnAboutUpdateOnUnmounted(fiber);
          }
        }
        return;
      }
    }
    node = node.return;
  }
}

function recalculateCurrentTime() {
  // Subtract initial time so it fits inside 32bits
  mostRecentCurrentTimeMs = now() - originalStartTimeMs;
  mostRecentCurrentTime = msToExpirationTime(mostRecentCurrentTimeMs);
  return mostRecentCurrentTime;
}

function deferredUpdates(fn) {
  var previousExpirationContext = expirationContext;
  var currentTime = recalculateCurrentTime();
  expirationContext = computeAsyncExpiration(currentTime);
  try {
    return fn();
  } finally {
    expirationContext = previousExpirationContext;
  }
}
function syncUpdates(fn, a, b, c, d) {
  var previousExpirationContext = expirationContext;
  expirationContext = Sync;
  try {
    return fn(a, b, c, d);
  } finally {
    expirationContext = previousExpirationContext;
  }
}

// TODO: Everything below this is written as if it has been lifted to the
// renderers. I'll do this in a follow-up.

// Linked-list of roots
var firstScheduledRoot = null;
var lastScheduledRoot = null;

var callbackExpirationTime = NoWork;
var callbackID = void 0;
var isRendering = false;
var nextFlushedRoot = null;
var nextFlushedExpirationTime = NoWork;
var lowestPendingInteractiveExpirationTime = NoWork;
var deadlineDidExpire = false;
var hasUnhandledError = false;
var unhandledError = null;
var deadline = null;

var isBatchingUpdates = false;
var isUnbatchingUpdates = false;
var isBatchingInteractiveUpdates = false;

var completedBatches = null;

// Use these to prevent an infinite loop of nested updates
var NESTED_UPDATE_LIMIT = 1000;
var nestedUpdateCount = 0;

var timeHeuristicForUnitOfWork = 1;

function scheduleCallbackWithExpiration(expirationTime) {
  if (callbackExpirationTime !== NoWork) {
    // A callback is already scheduled. Check its expiration time (timeout).
    if (expirationTime > callbackExpirationTime) {
      // Existing callback has sufficient timeout. Exit.
      return;
    } else {
      if (callbackID !== null) {
        // Existing callback has insufficient timeout. Cancel and schedule a
        // new one.
        cancelDeferredCallback(callbackID);
      }
    }
    // The request callback timer is already running. Don't start a new one.
  } else {
    startRequestCallbackTimer();
  }

  // Compute a timeout for the given expiration time.
  var currentMs = now() - originalStartTimeMs;
  var expirationMs = expirationTimeToMs(expirationTime);
  var timeout = expirationMs - currentMs;

  callbackExpirationTime = expirationTime;
  callbackID = scheduleDeferredCallback(performAsyncWork, { timeout: timeout });
}

function requestRetry(root, expirationTime) {
  if (root.remainingExpirationTime === NoWork || root.remainingExpirationTime < expirationTime) {
    // For a retry, only update the remaining expiration time if it has a
    // *lower priority* than the existing value. This is because, on a retry,
    // we should attempt to coalesce as much as possible.
    requestWork(root, expirationTime);
  }
}

// requestWork is called by the scheduler whenever a root receives an update.
// It's up to the renderer to call renderRoot at some point in the future.
function requestWork(root, expirationTime) {
  addRootToSchedule(root, expirationTime);

  if (isRendering) {
    // Prevent reentrancy. Remaining work will be scheduled at the end of
    // the currently rendering batch.
    return;
  }

  if (isBatchingUpdates) {
    // Flush work at the end of the batch.
    if (isUnbatchingUpdates) {
      // ...unless we're inside unbatchedUpdates, in which case we should
      // flush it now.
      nextFlushedRoot = root;
      nextFlushedExpirationTime = Sync;
      performWorkOnRoot(root, Sync, false);
    }
    return;
  }

  // TODO: Get rid of Sync and use current time?
  if (expirationTime === Sync) {
    performSyncWork();
  } else {
    scheduleCallbackWithExpiration(expirationTime);
  }
}

function addRootToSchedule(root, expirationTime) {
  // Add the root to the schedule.
  // Check if this root is already part of the schedule.
  if (root.nextScheduledRoot === null) {
    // This root is not already scheduled. Add it.
    root.remainingExpirationTime = expirationTime;
    if (lastScheduledRoot === null) {
      firstScheduledRoot = lastScheduledRoot = root;
      root.nextScheduledRoot = root;
    } else {
      lastScheduledRoot.nextScheduledRoot = root;
      lastScheduledRoot = root;
      lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
    }
  } else {
    // This root is already scheduled, but its priority may have increased.
    var remainingExpirationTime = root.remainingExpirationTime;
    if (remainingExpirationTime === NoWork || expirationTime < remainingExpirationTime) {
      // Update the priority.
      root.remainingExpirationTime = expirationTime;
    }
  }
}

function findHighestPriorityRoot() {
  var highestPriorityWork = NoWork;
  var highestPriorityRoot = null;
  if (lastScheduledRoot !== null) {
    var previousScheduledRoot = lastScheduledRoot;
    var root = firstScheduledRoot;
    while (root !== null) {
      var remainingExpirationTime = root.remainingExpirationTime;
      if (remainingExpirationTime === NoWork) {
        // This root no longer has work. Remove it from the scheduler.

        // TODO: This check is redudant, but Flow is confused by the branch
        // below where we set lastScheduledRoot to null, even though we break
        // from the loop right after.
        !(previousScheduledRoot !== null && lastScheduledRoot !== null) ? invariant(false, 'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        if (root === root.nextScheduledRoot) {
          // This is the only root in the list.
          root.nextScheduledRoot = null;
          firstScheduledRoot = lastScheduledRoot = null;
          break;
        } else if (root === firstScheduledRoot) {
          // This is the first root in the list.
          var next = root.nextScheduledRoot;
          firstScheduledRoot = next;
          lastScheduledRoot.nextScheduledRoot = next;
          root.nextScheduledRoot = null;
        } else if (root === lastScheduledRoot) {
          // This is the last root in the list.
          lastScheduledRoot = previousScheduledRoot;
          lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
          root.nextScheduledRoot = null;
          break;
        } else {
          previousScheduledRoot.nextScheduledRoot = root.nextScheduledRoot;
          root.nextScheduledRoot = null;
        }
        root = previousScheduledRoot.nextScheduledRoot;
      } else {
        if (highestPriorityWork === NoWork || remainingExpirationTime < highestPriorityWork) {
          // Update the priority, if it's higher
          highestPriorityWork = remainingExpirationTime;
          highestPriorityRoot = root;
        }
        if (root === lastScheduledRoot) {
          break;
        }
        previousScheduledRoot = root;
        root = root.nextScheduledRoot;
      }
    }
  }

  // If the next root is the same as the previous root, this is a nested
  // update. To prevent an infinite loop, increment the nested update count.
  var previousFlushedRoot = nextFlushedRoot;
  if (previousFlushedRoot !== null && previousFlushedRoot === highestPriorityRoot && highestPriorityWork === Sync) {
    nestedUpdateCount++;
  } else {
    // Reset whenever we switch roots.
    nestedUpdateCount = 0;
  }
  nextFlushedRoot = highestPriorityRoot;
  nextFlushedExpirationTime = highestPriorityWork;
}

function performAsyncWork(dl) {
  performWork(NoWork, true, dl);
}

function performSyncWork() {
  performWork(Sync, false, null);
}

function performWork(minExpirationTime, isAsync, dl) {
  deadline = dl;

  // Keep working on roots until there's no more work, or until the we reach
  // the deadline.
  findHighestPriorityRoot();

  if (enableProfilerTimer) {
    resumeActualRenderTimerIfPaused();
  }

  if (enableUserTimingAPI && deadline !== null) {
    var didExpire = nextFlushedExpirationTime < recalculateCurrentTime();
    var timeout = expirationTimeToMs(nextFlushedExpirationTime);
    stopRequestCallbackTimer(didExpire, timeout);
  }

  if (isAsync) {
    while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime) && (!deadlineDidExpire || recalculateCurrentTime() >= nextFlushedExpirationTime)) {
      recalculateCurrentTime();
      performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, !deadlineDidExpire);
      findHighestPriorityRoot();
    }
  } else {
    while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime)) {
      performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, false);
      findHighestPriorityRoot();
    }
  }

  // We're done flushing work. Either we ran out of time in this callback,
  // or there's no more work left with sufficient priority.

  // If we're inside a callback, set this to false since we just completed it.
  if (deadline !== null) {
    callbackExpirationTime = NoWork;
    callbackID = null;
  }
  // If there's work left over, schedule a new callback.
  if (nextFlushedExpirationTime !== NoWork) {
    scheduleCallbackWithExpiration(nextFlushedExpirationTime);
  }

  // Clean-up.
  deadline = null;
  deadlineDidExpire = false;

  finishRendering();
}

function flushRoot(root, expirationTime) {
  !!isRendering ? invariant(false, 'work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method.') : void 0;
  // Perform work on root as if the given expiration time is the current time.
  // This has the effect of synchronously flushing all work up to and
  // including the given time.
  nextFlushedRoot = root;
  nextFlushedExpirationTime = expirationTime;
  performWorkOnRoot(root, expirationTime, false);
  // Flush any sync work that was scheduled by lifecycles
  performSyncWork();
  finishRendering();
}

function finishRendering() {
  nestedUpdateCount = 0;

  if (completedBatches !== null) {
    var batches = completedBatches;
    completedBatches = null;
    for (var i = 0; i < batches.length; i++) {
      var batch = batches[i];
      try {
        batch._onComplete();
      } catch (error) {
        if (!hasUnhandledError) {
          hasUnhandledError = true;
          unhandledError = error;
        }
      }
    }
  }

  if (hasUnhandledError) {
    var error = unhandledError;
    unhandledError = null;
    hasUnhandledError = false;
    throw error;
  }
}

function performWorkOnRoot(root, expirationTime, isAsync) {
  !!isRendering ? invariant(false, 'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  isRendering = true;

  // Check if this is async work or sync/expired work.
  if (!isAsync) {
    // Flush sync work.
    var finishedWork = root.finishedWork;
    if (finishedWork !== null) {
      // This root is already complete. We can commit it.
      completeRoot(root, finishedWork, expirationTime);
    } else {
      finishedWork = renderRoot(root, expirationTime, false);
      if (finishedWork !== null) {
        // We've completed the root. Commit it.
        completeRoot(root, finishedWork, expirationTime);
      }
    }
  } else {
    // Flush async work.
    var _finishedWork = root.finishedWork;
    if (_finishedWork !== null) {
      // This root is already complete. We can commit it.
      completeRoot(root, _finishedWork, expirationTime);
    } else {
      _finishedWork = renderRoot(root, expirationTime, true);
      if (_finishedWork !== null) {
        // We've completed the root. Check the deadline one more time
        // before committing.
        if (!shouldYield()) {
          // Still time left. Commit the root.
          completeRoot(root, _finishedWork, expirationTime);
        } else {
          // There's no time left. Mark this root as complete. We'll come
          // back and commit it later.
          root.finishedWork = _finishedWork;

          if (enableProfilerTimer) {
            // If we didn't finish, pause the "actual" render timer.
            // We'll restart it when we resume work.
            pauseActualRenderTimerIfRunning();
          }
        }
      }
    }
  }

  isRendering = false;
}

function completeRoot(root, finishedWork, expirationTime) {
  // Check if there's a batch that matches this expiration time.
  var firstBatch = root.firstBatch;
  if (firstBatch !== null && firstBatch._expirationTime <= expirationTime) {
    if (completedBatches === null) {
      completedBatches = [firstBatch];
    } else {
      completedBatches.push(firstBatch);
    }
    if (firstBatch._defer) {
      // This root is blocked from committing by a batch. Unschedule it until
      // we receive another update.
      root.finishedWork = finishedWork;
      root.remainingExpirationTime = NoWork;
      return;
    }
  }

  // Commit the root.
  root.finishedWork = null;
  root.remainingExpirationTime = commitRoot(finishedWork);
}

// When working on async work, the reconciler asks the renderer if it should
// yield execution. For DOM, we implement this with requestIdleCallback.
function shouldYield() {
  if (deadline === null) {
    return false;
  }
  if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
    // Disregard deadline.didTimeout. Only expired work should be flushed
    // during a timeout. This path is only hit for non-expired work.
    return false;
  }
  deadlineDidExpire = true;
  return true;
}

function onUncaughtError(error) {
  !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  // Unschedule this root so we don't work on it again until there's
  // another update.
  nextFlushedRoot.remainingExpirationTime = NoWork;
  if (!hasUnhandledError) {
    hasUnhandledError = true;
    unhandledError = error;
  }
}

function onBlock(remainingExpirationTime) {
  !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  // This root was blocked. Unschedule it until there's another update.
  nextFlushedRoot.remainingExpirationTime = remainingExpirationTime;
}

// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function batchedUpdates(fn, a) {
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    return fn(a);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performSyncWork();
    }
  }
}

// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function unbatchedUpdates(fn, a) {
  if (isBatchingUpdates && !isUnbatchingUpdates) {
    isUnbatchingUpdates = true;
    try {
      return fn(a);
    } finally {
      isUnbatchingUpdates = false;
    }
  }
  return fn(a);
}

// TODO: Batching should be implemented at the renderer level, not within
// the reconciler.
function flushSync(fn, a) {
  !!isRendering ? invariant(false, 'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.') : void 0;
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    return syncUpdates(fn, a);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    performSyncWork();
  }
}

function interactiveUpdates(fn, a, b) {
  if (isBatchingInteractiveUpdates) {
    return fn(a, b);
  }
  // If there are any pending interactive updates, synchronously flush them.
  // This needs to happen before we read any handlers, because the effect of
  // the previous event may influence which handlers are called during
  // this event.
  if (!isBatchingUpdates && !isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
    // Synchronously flush pending interactive updates.
    performWork(lowestPendingInteractiveExpirationTime, false, null);
    lowestPendingInteractiveExpirationTime = NoWork;
  }
  var previousIsBatchingInteractiveUpdates = isBatchingInteractiveUpdates;
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingInteractiveUpdates = true;
  isBatchingUpdates = true;
  try {
    return fn(a, b);
  } finally {
    isBatchingInteractiveUpdates = previousIsBatchingInteractiveUpdates;
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performSyncWork();
    }
  }
}

function flushInteractiveUpdates() {
  if (!isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
    // Synchronously flush pending interactive updates.
    performWork(lowestPendingInteractiveExpirationTime, false, null);
    lowestPendingInteractiveExpirationTime = NoWork;
  }
}

function flushControlled(fn) {
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    syncUpdates(fn);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performWork(Sync, false, null);
    }
  }
}

// 0 is PROD, 1 is DEV.
// Might add PROFILE later.


var didWarnAboutNestedUpdates = void 0;

{
  didWarnAboutNestedUpdates = false;
}

function getContextForSubtree(parentComponent) {
  if (!parentComponent) {
    return emptyObject;
  }

  var fiber = get(parentComponent);
  var parentContext = findCurrentUnmaskedContext(fiber);
  return isContextProvider(fiber) ? processChildContext(fiber, parentContext) : parentContext;
}

function scheduleRootUpdate(current, element, expirationTime, callback) {
  {
    if (ReactDebugCurrentFiber.phase === 'render' && ReactDebugCurrentFiber.current !== null && !didWarnAboutNestedUpdates) {
      didWarnAboutNestedUpdates = true;
      warning(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(ReactDebugCurrentFiber.current) || 'Unknown');
    }
  }

  var update = createUpdate(expirationTime);
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = { element: element };

  callback = callback === undefined ? null : callback;
  if (callback !== null) {
    !(typeof callback === 'function') ? warning(false, 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback) : void 0;
    update.callback = callback;
  }
  enqueueUpdate(current, update, expirationTime);

  scheduleWork(current, expirationTime);
  return expirationTime;
}

function updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback) {
  // TODO: If this is a nested container, this won't be the root.
  var current = container.current;

  {
    if (ReactFiberInstrumentation_1.debugTool) {
      if (current.alternate === null) {
        ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
      } else if (element === null) {
        ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
      } else {
        ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
      }
    }
  }

  var context = getContextForSubtree(parentComponent);
  if (container.context === null) {
    container.context = context;
  } else {
    container.pendingContext = context;
  }

  return scheduleRootUpdate(current, element, expirationTime, callback);
}

function findHostInstance(component) {
  var fiber = get(component);
  if (fiber === undefined) {
    if (typeof component.render === 'function') {
      invariant(false, 'Unable to find node on an unmounted component.');
    } else {
      invariant(false, 'Argument appears to not be a ReactComponent. Keys: %s', Object.keys(component));
    }
  }
  var hostFiber = findCurrentHostFiber(fiber);
  if (hostFiber === null) {
    return null;
  }
  return hostFiber.stateNode;
}

function createContainer(containerInfo, isAsync, hydrate) {
  return createFiberRoot(containerInfo, isAsync, hydrate);
}

function updateContainer(element, container, parentComponent, callback) {
  var current = container.current;
  var currentTime = recalculateCurrentTime();
  var expirationTime = computeExpirationForFiber(currentTime, current);
  return updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback);
}

function getPublicRootInstance(container) {
  var containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  switch (containerFiber.child.tag) {
    case HostComponent:
      return getPublicInstance(containerFiber.child.stateNode);
    default:
      return containerFiber.child.stateNode;
  }
}

function findHostInstanceWithNoPortals(fiber) {
  var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
  if (hostFiber === null) {
    return null;
  }
  return hostFiber.stateNode;
}

function injectIntoDevTools(devToolsConfig) {
  var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;

  return injectInternals(_assign({}, devToolsConfig, {
    findHostInstanceByFiber: function (fiber) {
      var hostFiber = findCurrentHostFiber(fiber);
      if (hostFiber === null) {
        return null;
      }
      return hostFiber.stateNode;
    },
    findFiberByHostInstance: function (instance) {
      if (!findFiberByHostInstance) {
        // Might not be implemented by the renderer.
        return null;
      }
      return findFiberByHostInstance(instance);
    }
  }));
}

var ReactFiberReconciler = Object.freeze({
	updateContainerAtExpirationTime: updateContainerAtExpirationTime,
	createContainer: createContainer,
	updateContainer: updateContainer,
	flushRoot: flushRoot,
	requestWork: requestWork,
	computeUniqueAsyncExpiration: computeUniqueAsyncExpiration,
	batchedUpdates: batchedUpdates,
	unbatchedUpdates: unbatchedUpdates,
	deferredUpdates: deferredUpdates,
	syncUpdates: syncUpdates,
	interactiveUpdates: interactiveUpdates,
	flushInteractiveUpdates: flushInteractiveUpdates,
	flushControlled: flushControlled,
	flushSync: flushSync,
	getPublicRootInstance: getPublicRootInstance,
	findHostInstance: findHostInstance,
	findHostInstanceWithNoPortals: findHostInstanceWithNoPortals,
	injectIntoDevTools: injectIntoDevTools
});

// This entry point is intentionally not typed. It exists only for third-party
// renderers. The renderers we ship (such as React DOM) instead import a named
// "inline" entry point (for example, `react-reconciler/inline.dom`). It uses
// the same code, but the Flow configuration redirects the host config to its
// real implementation so we can check it against exact intended host types.
//
// Only one renderer (the one you passed to `yarn flow <renderer>`) is fully
// type-checked at any given time. The Flow config maps the
// `react-reconciler/inline.<renderer>` import (which is *not* Flow typed) to
// `react-reconciler/inline-typed` (which *is*) for the current renderer.
// On CI, we run Flow checks for each renderer separately.





// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var reactReconciler = ReactFiberReconciler.default ? ReactFiberReconciler.default : ReactFiberReconciler;

module.exports = reactReconciler;
    var $$$renderer = module.exports;
    module.exports = $$$reconciler;
    return $$$renderer;
  };
}


/***/ }),

/***/ "./node_modules/react-reconciler/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-reconciler/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-reconciler.development.js */ "./node_modules/react-reconciler/cjs/react-reconciler.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/Child.tsx":
/*!**********************************!*\
  !*** ./src/components/Child.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_konva_1 = __webpack_require__(/*! react-konva */ "./node_modules/react-konva/lib/index.js");
var Konva = __webpack_require__(/*! konva */ "./node_modules/konva/konva.js");

var Child = function (_React$Component) {
    _inherits(Child, _React$Component);

    function Child(props) {
        _classCallCheck(this, Child);

        var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, props));

        _this.konvaStage = React.createRef();
        _this.konvaLayer = React.createRef();
        return _this;
    }

    _createClass(Child, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var img = new Konva.Image({
                image: this.props.image,
                width: 300,
                height: 250
            });
            var st = this.konvaLayer.current.getStage();
            this.props.image.onload = function () {
                if (_this2.props.blurred) {
                    img.filters([Konva.Filters.Blur]);
                    img.blurRadius(30);
                    img.cache({ width: _this2.konvaLayer.current.getWidth(), height: _this2.konvaLayer.current.getHeight() });
                }
                _this2.konvaLayer.current.draw();
            };
            this.konvaLayer.current.add(img);
            this.konvaLayer.current.draw();
        }
    }, {
        key: "render",
        value: function render() {
            var stageWithImage = React.createElement(react_konva_1.Stage, { ref: this.konvaStage, width: 300, height: 250 }, React.createElement(react_konva_1.Layer, { ref: this.konvaLayer }));
            return React.createElement("div", null, stageWithImage);
        }
    }]);

    return Child;
}(React.Component);

exports.Child = Child;

/***/ }),

/***/ "./src/components/Parent.tsx":
/*!***********************************!*\
  !*** ./src/components/Parent.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Child_1 = __webpack_require__(/*! ./Child */ "./src/components/Child.tsx");
var img = __webpack_require__(/*! ../../assets/imageFile.jpg */ "./assets/imageFile.jpg");
var imageObj = void 0;

var Parent = function (_React$Component) {
    _inherits(Parent, _React$Component);

    function Parent(props) {
        _classCallCheck(this, Parent);

        var _this = _possibleConstructorReturn(this, (Parent.__proto__ || Object.getPrototypeOf(Parent)).call(this, props));

        imageObj = new Image();
        imageObj.src = img;
        return _this;
    }

    _createClass(Parent, [{
        key: "render",
        value: function render() {
            return React.createElement("div", null, React.createElement(Child_1.Child, { image: imageObj, blurred: false }), React.createElement(Child_1.Child, { image: imageObj, blurred: true }));
        }
    }]);

    return Parent;
}(React.Component);

exports.Parent = Parent;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
//import 'babel-polyfill';
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Parent_1 = __webpack_require__(/*! ./components/Parent */ "./src/components/Parent.tsx");
ReactDOM.render(React.createElement(Parent_1.Parent, null), document.getElementById("example"));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
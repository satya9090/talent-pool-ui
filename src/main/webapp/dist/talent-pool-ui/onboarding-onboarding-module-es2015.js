(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"],{

/***/ "./node_modules/ack-angular-webcam/AckMediaDevices.directive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ack-angular-webcam/AckMediaDevices.directive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var videoHelp_1 = __webpack_require__(/*! ./videoHelp */ "./node_modules/ack-angular-webcam/videoHelp.js");
var AckMediaDevices = /** @class */ (function () {
    function AckMediaDevices() {
        this.array = [];
        this.arrayChange = new core_1.EventEmitter();
        this.errorChange = new core_1.EventEmitter();
        this.catcher = new core_1.EventEmitter();
        this.videoInputsChange = new core_1.EventEmitter();
        this.audioInputsChange = new core_1.EventEmitter();
        this.audioOutputsChange = new core_1.EventEmitter();
    }
    AckMediaDevices.prototype.ngOnInit = function () {
        this.loadDevices();
    };
    AckMediaDevices.prototype.loadDevices = function () {
        var _this = this;
        return videoHelp_1.promiseDevices()
            .then(function (devices) { return _this.onDevices(devices) && devices; })
            .catch(function (e) {
            _this.catcher.emit(e);
            _this.errorChange.emit(_this.error = e);
            return Promise.reject(e);
        });
    };
    AckMediaDevices.prototype.onDevices = function (devices) {
        this.arrayChange.emit(this.array = devices);
        if (this.audioInputsChange.observers.length) {
            this.audioInputs = videoHelp_1.audioInputsByDevices(devices);
            this.audioInputsChange.emit(this.audioInputs);
        }
        if (this.audioOutputsChange.observers.length) {
            this.audioOutputs = videoHelp_1.audioOutputsByDevices(devices);
            this.audioOutputsChange.emit(this.audioOutputs);
        }
        if (this.videoInputsChange.observers.length) {
            this.videoInputs = videoHelp_1.videoInputsByDevices(devices);
            this.videoInputsChange.emit(this.videoInputs);
        }
        return this;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AckMediaDevices.prototype, "array", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckMediaDevices.prototype, "arrayChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Error)
    ], AckMediaDevices.prototype, "error", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckMediaDevices.prototype, "errorChange", void 0);
    __decorate([
        core_1.Output('catch'),
        __metadata("design:type", core_1.EventEmitter)
    ], AckMediaDevices.prototype, "catcher", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AckMediaDevices.prototype, "videoInputs", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckMediaDevices.prototype, "videoInputsChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AckMediaDevices.prototype, "audioInputs", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckMediaDevices.prototype, "audioInputsChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AckMediaDevices.prototype, "audioOutputs", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckMediaDevices.prototype, "audioOutputsChange", void 0);
    AckMediaDevices = __decorate([
        core_1.Directive({
            selector: 'ack-media-devices'
        })
    ], AckMediaDevices);
    return AckMediaDevices;
}());
exports.AckMediaDevices = AckMediaDevices;
//# sourceMappingURL=AckMediaDevices.directive.js.map

/***/ }),

/***/ "./node_modules/ack-angular-webcam/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ack-angular-webcam/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var webcam_component_1 = __webpack_require__(/*! ./webcam.component */ "./node_modules/ack-angular-webcam/webcam.component.js");
exports.WebCamComponent = webcam_component_1.WebCamComponent;
var webcam_module_1 = __webpack_require__(/*! ./webcam.module */ "./node_modules/ack-angular-webcam/webcam.module.js");
exports.WebCamModule = webcam_module_1.WebCamModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ack-angular-webcam/videoHelp.js":
/*!******************************************************!*\
  !*** ./node_modules/ack-angular-webcam/videoHelp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.browser = navigator;
function getMedia() {
    return exports.browser.getUserMedia
        || exports.browser.webkitGetUserMedia
        || exports.browser.mozGetUserMedia
        || exports.browser.msGetUserMedia;
}
exports.getMedia = getMedia;
/*
export interface MediaDevice{
  deviceId: string
  kind: "videoinput" | "audioinput" | string
  label: string
  groupId: string
}*/
function dataUriToBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1]);
    }
    else {
        byteString = window['unescape'](dataURI.split(',')[1]);
    }
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
}
exports.dataUriToBlob = dataUriToBlob;
/** single image to transmittable resource */
function dataUriToFormData(dataURI, options) {
    options = options || {};
    options.form = options.form || new FormData();
    options.form.append('file', dataUriToBlob(dataURI), options.fileName || 'file.jpg');
    return options.form;
}
exports.dataUriToFormData = dataUriToFormData;
function drawImageArrayToCanvas(imgArray) {
    var canvas = document.createElement('canvas');
    // const di = this.getVideoDimensions()
    var ctx = canvas.getContext('2d');
    var width = imgArray[0].split(';').length;
    var height = imgArray.length;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    var externData = {
        imgData: ctx.getImageData(0, 0, width, height),
        pos: 0
    };
    var tmp = null;
    for (var x = 0; x < imgArray.length; ++x) {
        var col = imgArray[x].split(';');
        for (var i = 0; i < width; i++) {
            tmp = parseInt(col[i], 10);
            externData.imgData.data[externData.pos + 0] = (tmp >> 16) & 0xff;
            externData.imgData.data[externData.pos + 1] = (tmp >> 8) & 0xff;
            externData.imgData.data[externData.pos + 2] = tmp & 0xff;
            externData.imgData.data[externData.pos + 3] = 0xff;
            externData.pos += 4;
        }
        /*if (externData.pos >= 4 * width * height) {
          ctx.putImageData(externData.imgData, 0, 0);
          externData.pos = 0;
        }*/
    }
    ctx.putImageData(externData.imgData, 0, 0);
    return canvas;
}
exports.drawImageArrayToCanvas = drawImageArrayToCanvas;
var Fallback = /** @class */ (function () {
    function Fallback(videoObject) {
        var _this = this;
        this.onImage = new core_1.EventEmitter();
        this.videoObject = videoObject;
        var dataImgArray = [];
        //method intended to live within window memory
        this.debug = function (tag, message) {
            if (tag == 'notify' && message == 'Capturing finished.') {
                _this.onImage.emit(drawImageArrayToCanvas(dataImgArray));
            }
        };
        //method intended to live within window memory
        this.onCapture = function () {
            dataImgArray.length = 0;
            videoObject.save();
        };
        //method intended to live within window memory
        this.onSave = function (data) {
            dataImgArray.push(data);
        };
        //Flash swf file expects window.webcam to exist as communication bridge
        window['webcam'] = this;
    }
    Fallback.prototype.captureToCanvas = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            var subscription = _this.onImage.subscribe(function (img) {
                res(img);
                subscription.unsubscribe();
            });
            _this.videoObject.capture();
        });
    };
    Fallback.prototype.captureBase64 = function (mime) {
        return this.captureToCanvas()
            .then(function (canvas) { return canvas.toDataURL(mime || 'image/jpeg'); });
    };
    /**
     * Add <param>'s into fallback object
     * @param cam - Flash web camera instance
     * @returns {void}
     */
    Fallback.prototype.addFallbackParams = function (options) {
        var paramFlashVars = document.createElement('param');
        paramFlashVars.name = 'FlashVars';
        paramFlashVars.value = 'mode=' + options.fallbackMode + '&amp;quality=' + options.fallbackQuality;
        this.videoObject.appendChild(paramFlashVars);
        var paramAllowScriptAccess = document.createElement('param');
        paramAllowScriptAccess.name = 'allowScriptAccess';
        paramAllowScriptAccess.value = 'always';
        this.videoObject.appendChild(paramAllowScriptAccess);
        //is this even needed?
        this.videoObject.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
        var paramMovie = document.createElement('param');
        paramMovie.name = 'movie';
        paramMovie.value = options.fallbackSrc;
        this.videoObject.appendChild(paramMovie);
        this.videoObject.data = options.fallbackSrc;
    };
    return Fallback;
}());
exports.Fallback = Fallback;
function videoInputsByDevices(devices) {
    return devicesByKind(devices, 'videoinput');
}
exports.videoInputsByDevices = videoInputsByDevices;
function audioInputsByDevices(devices) {
    return devicesByKind(devices, 'audioinput');
}
exports.audioInputsByDevices = audioInputsByDevices;
function audioOutputsByDevices(devices) {
    return devicesByKind(devices, 'audiooutput');
}
exports.audioOutputsByDevices = audioOutputsByDevices;
function devicesByKind(devices, kind) {
    return devices.filter(function (device) { return device.kind === kind; });
}
exports.devicesByKind = devicesByKind;
function promiseDeviceById(id) {
    return promiseDevices().then(function (devices) { return devices.find(function (device) { return device.deviceId == id; }); });
}
exports.promiseDeviceById = promiseDeviceById;
function promiseDevices() {
    //const x:Promise<MediaDeviceInfo[]> = browser.mediaDevices.enumerateDevices().then( devices=>devices )
    return exports.browser.mediaDevices.enumerateDevices();
}
exports.promiseDevices = promiseDevices;
function isFacingModeSupported() {
    if (!exports.browser.mediaDevices)
        return false;
    var contraints = exports.browser.mediaDevices.getSupportedConstraints();
    return contraints.facingMode;
}
exports.isFacingModeSupported = isFacingModeSupported;
//# sourceMappingURL=videoHelp.js.map

/***/ }),

/***/ "./node_modules/ack-angular-webcam/webcam.component.js":
/*!*************************************************************!*\
  !*** ./node_modules/ack-angular-webcam/webcam.component.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import * as a from './audioTest'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var videoHelp_1 = __webpack_require__(/*! ./videoHelp */ "./node_modules/ack-angular-webcam/videoHelp.js");
var template = "<video id=\"video\" *ngIf=\"(isSupportUserMedia||isSupportWebRTC)\" autoplay=\"\" playsinline=\"\">Video stream not available</video>";
var WebCamComponent = /** @class */ (function () {
    function WebCamComponent(sanitizer, element) {
        this.sanitizer = sanitizer;
        this.element = element;
        this.sets = { element: { width: 0, height: 0 } };
        this.mime = 'image/jpeg';
        this.useParentWidthHeight = false;
        this.success = new core_1.EventEmitter();
        this.errorChange = new core_1.EventEmitter();
        this.catcher = new core_1.EventEmitter();
        console.log("123");
    }
    WebCamComponent.prototype.ngOnInit = function () {
        this.isSupportUserMedia = videoHelp_1.getMedia() != null ? true : false;
        this.isSupportUserMedia = false;
        this.isSupportWebRTC = !!(videoHelp_1.browser.mediaDevices && videoHelp_1.browser.mediaDevices.getUserMedia);
    };
    WebCamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.applyDefaults();
        setTimeout(function () { return _this.afterInitCycles(); }, 0);
    };
    WebCamComponent.prototype.ngOnChanges = function (changes) {
        if (!this.initComplete)
            return;
        if (changes.facingMode
            || changes.videoDevice
            || changes.videoDeviceId) {
            this.redraw(); //restart
        }
        if (changes.reflect) {
            this.applyReflect();
        }
    };
    WebCamComponent.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
        this.stop();
    };
    WebCamComponent.prototype.play = function () {
        return this.redraw();
    };
    WebCamComponent.prototype.stop = function () {
        var vid = this.getVideoElm();
        if (vid && vid.pause) {
            vid.pause();
        }
        if (this.stream) {
            this.stream.getTracks().forEach(function (track) { return track.stop(); });
        }
    };
    WebCamComponent.prototype.redraw = function () {
        this.stop();
        this.startCapturingVideo();
    };
    WebCamComponent.prototype.afterInitCycles = function () {
        var _this = this;
        var media = videoHelp_1.getMedia();
        // Older browsers might not implement mediaDevices at all, so we set an empty object first
        if ((videoHelp_1.browser.mediaDevices === undefined) && !!media) {
            videoHelp_1.browser.mediaDevices = {};
        }
        // Some browsers partially implement mediaDevices. We can't just assign an object
        // with getUserMedia as it would overwrite existing properties.
        // Here, we will just add the getUserMedia property if it's missing.
        var getUserMediaUndefined = (videoHelp_1.browser.mediaDevices && videoHelp_1.browser.mediaDevices.getUserMedia === undefined) && !!media;
        if (getUserMediaUndefined) {
            videoHelp_1.browser.mediaDevices.getUserMedia = function (constraints) {
                return new Promise(function (resolve, reject) {
                    var userMedia = media.call(videoHelp_1.browser, constraints, resolve, reject);
                    if (userMedia.then) {
                        userMedia.then(function (stream) { return _this.applyStream(stream); });
                    }
                })
                    .catch(function (err) { return _this.catchError(err); });
            };
        }
        this.initComplete = true;
        //deprecated. Use angular hash template referencing and @ViewChild
        //setTimeout(()=>this.refChange.emit(this), 0)
        this.createVideoResizer();
        this.startCapturingVideo()
            .then(function () { return setTimeout(function () { return _this.resize(); }, 10); })
            .catch(function (err) { return _this.catchError(err); });
    };
    WebCamComponent.prototype.applyReflect = function () {
        var videoElm = this.getVideoElm();
        if (!videoElm)
            return;
        if (this.reflect) {
            videoElm.style.transform = "scaleX(-1)";
        }
        else {
            videoElm.style.transform = "scaleX(1)";
        }
    };
    WebCamComponent.prototype.applyStream = function (stream) {
        var videoElm = this.getVideoElm();
        videoElm.srcObject = stream;
        this.applyReflect();
    };
    WebCamComponent.prototype.createVideoResizer = function () {
        var _this = this;
        this.observer = new MutationObserver(function () { return _this.resize(); });
        var config = {
            attributes: true,
            childList: true,
            characterData: true
            //,subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        this.onResize = function () { return _this.resize(); };
        window.addEventListener('resize', this.onResize);
    };
    WebCamComponent.prototype.applyDefaults = function () {
        this.options = this.options || {};
        this.options.fallbackSrc = this.options.fallbackSrc || 'jscam_canvas_only.swf';
        this.options.fallbackMode = this.options.fallbackMode || 'callback';
        this.options.fallbackQuality = this.options.fallbackQuality || 200;
        this.isFallback = this.options.fallback || (!this.isSupportUserMedia && !this.isSupportWebRTC && this.options.fallbackSrc) ? true : false;
        if (!this.options.video && !this.options.audio) {
            this.options.video = true;
        }
    };
    WebCamComponent.prototype.onWebRTC = function () {
        var _this = this;
        var promise = Promise.resolve(null);
        return this.promiseVideoOptions()
            .then(function (options) {
            _this.options.video = options;
            return _this.setWebcam(_this.options);
        });
    };
    WebCamComponent.prototype.promiseVideoOptions = function () {
        var promise = Promise.resolve();
        var videoOptions = {};
        if (this.options.video && isOb(this.options.video)) {
            Object.assign(videoOptions, this.options.video);
            /* attempt to prevent bad videoOptions */
            if (videoOptions.width && isOb(videoOptions.width) && !Object.keys(videoOptions.width).length) {
                delete videoOptions.width;
            }
            if (videoOptions.height && isOb(videoOptions.height) && !Object.keys(videoOptions.height).length) {
                delete videoOptions.height;
            }
            /* end: fix vid options */
        }
        if (this.facingMode) {
            videoOptions.facingMode = this.facingMode; //{exact:this.facingMode}
        }
        if (this.videoDeviceId) {
            //videoOptions.deviceId = {exact:this.videoDeviceId}
            videoOptions.deviceId = this.videoDeviceId;
        }
        else if (this.videoDevice) {
            //videoOptions.deviceId = {exact:this.videoDevice.deviceId}
            videoOptions.deviceId = this.videoDevice.deviceId;
        }
        return promise.then(function () { return videoOptions; });
    };
    //old method name (deprecated)
    WebCamComponent.prototype.resizeVideo = function (maxAttempts) {
        if (maxAttempts === void 0) { maxAttempts = 4; }
        return this.resize(maxAttempts);
    };
    WebCamComponent.prototype.resize = function (maxAttempts) {
        var _this = this;
        if (maxAttempts === void 0) { maxAttempts = 4; }
        var video = this.getVideoElm();
        if (!video)
            return;
        video.style.position = 'absolute';
        var elm = this.useParentWidthHeight ? this.element.nativeElement.parentNode : this.element.nativeElement;
        var width = this.options.width || parseInt(elm.offsetWidth, 10);
        var height = this.options.height || parseInt(elm.offsetHeight, 10);
        if (!width || !height) {
            width = 320;
            height = 240;
        }
        setTimeout(function () {
            video.width = width;
            video.height = height;
            _this.sets.element.width = width;
            _this.sets.element.height = height;
            video.style.position = 'static';
            //now that we set a width and height, it may need another adjustment if it pushed percent based items around
            var resizeAgain = (!_this.options.width && width != parseInt(elm.offsetWidth, 10)) || (!_this.options.height && height != parseInt(elm.offsetHeight, 10));
            if (resizeAgain && maxAttempts) {
                _this.resize(--maxAttempts);
            }
        }, 1);
    };
    WebCamComponent.prototype.getVideoDimensions = function (video) {
        video = video || this.getVideoElm();
        var dim = { width: 0, height: 0 };
        if (video.videoWidth) {
            dim.width = video.videoWidth;
            dim.height = video.videoHeight;
        }
        else {
            dim.width = this.options.width || parseInt(this.element.nativeElement.offsetWidth, 10);
            dim.height = this.options.height || parseInt(this.element.nativeElement.offsetHeight, 10);
        }
        if (!dim.width)
            dim.width = 320;
        if (!dim.height)
            dim.height = 240;
        return dim;
    };
    WebCamComponent.prototype.getVideoElm = function () {
        var native = this.element.nativeElement;
        var elmType = this.isFallback ? 'object' : 'video';
        return native.getElementsByTagName(elmType)[0];
    };
    WebCamComponent.prototype.setWebcam = function (options) {
        var _this = this;
        return this.promiseStreamByVidOptions(options)
            .then(function (stream) {
            _this.applyStream(stream);
            _this.processSuccess(stream);
            _this.stream = stream;
            return stream;
        })
            .catch(function (err) { return _this.catchError(err); });
    };
    WebCamComponent.prototype.catchError = function (err) {
        this.errorChange.emit(this.error = err);
        this.catcher.emit(err);
        if (!this.errorChange.observers.length && !this.catcher.observers.length) {
            return Promise.reject(err); //if no error subscriptions promise need to continue to be Uncaught
        }
    };
    WebCamComponent.prototype.promiseStreamByVidOptions = function (optionObject) {
        return new Promise(function (resolve, reject) {
            try {
                videoHelp_1.browser.mediaDevices.getUserMedia(optionObject)
                    .then(function (stream) { return resolve(stream); })
                    .catch(function (objErr) { return reject(objErr); });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    WebCamComponent.prototype.processSuccess = function (stream) {
        if (this.isFallback) {
            this.setupFallback();
        }
        else {
            this.success.emit(stream);
        }
    };
    /**
     * Start capturing video stream
     * @returns {void}
     */
    WebCamComponent.prototype.startCapturingVideo = function () {
        if (!this.isFallback && this.isSupportWebRTC) {
            return this.onWebRTC();
        }
        return Promise.resolve(this.processSuccess());
    };
    WebCamComponent.prototype.getCanvas = function () {
        var canvas = document.createElement('canvas');
        var video = this.getVideoElm();
        this.setCanvasWidth(canvas, video);
        var ctx = canvas.getContext('2d');
        if (this.reflect) {
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
        }
        ctx.drawImage(video, 0, 0);
        return canvas;
    };
    WebCamComponent.prototype.getBlob = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            var canvas = _this.getCanvas();
            canvas.toBlob(function (file) {
                res(file);
            }, _this.mime, 1);
        });
    };
    WebCamComponent.prototype.getFile = function (fileName) {
        return this.getBlob().then(function (file) { return blobToFile(file, fileName); });
    };
    /** returns promise . @mime - null=png . Also accepts image/jpeg */
    WebCamComponent.prototype.getBase64 = function (mime) {
        if (this.isFallback) {
            return this.flashPlayer.captureBase64(mime || this.mime);
            //return this.getFallbackBase64(mime)
        }
        else {
            var canvas = this.getCanvas();
            return Promise.resolve(canvas.toDataURL(mime));
        }
    };
    WebCamComponent.prototype.setCanvasWidth = function (canvas, video) {
        var di = this.getVideoDimensions(video);
        canvas.width = di.width;
        canvas.height = di.height;
    };
    /** older browsers (IE11) cannot dynamically apply most attribute changes to object elements. Use this method during fallback */
    WebCamComponent.prototype.createVidElmOb = function () {
        var rtnElm = document.createElement('object');
        rtnElm.innerHTML = 'Video stream not available';
        rtnElm.setAttribute('type', 'application/x-shockwave-flash');
        rtnElm.setAttribute('data', this.options.fallbackSrc);
        var paramVar = document.createElement('param');
        paramVar.setAttribute('name', 'FlashVars');
        paramVar.setAttribute('value', 'mode=callback&amp;quality=200');
        rtnElm.appendChild(paramVar);
        paramVar = document.createElement('param');
        paramVar.setAttribute('name', 'allowScriptAccess');
        paramVar.setAttribute('value', 'always');
        rtnElm.appendChild(paramVar);
        paramVar = document.createElement('param');
        paramVar.setAttribute('name', 'movie');
        paramVar.setAttribute('value', this.options.fallbackSrc);
        rtnElm.appendChild(paramVar);
        var obs = this.element.nativeElement.getElementsByTagName('object');
        if (obs.length) {
            this.element.nativeElement.removeChild(obs[0]);
        }
        this.element.nativeElement.appendChild(rtnElm);
        return rtnElm;
    };
    WebCamComponent.prototype.setupFallback = function () {
        this.isFallback = true;
        var vidElm = this.getVideoElm() || this.createVidElmOb();
        this.flashPlayer = new videoHelp_1.Fallback(vidElm);
    };
    /** single image to FormData */
    WebCamComponent.prototype.captureAsFormData = function (options) {
        options = options || {};
        return this.getBase64(options.mime)
            .then(function (base64) { return videoHelp_1.dataUriToFormData(base64, { fileName: options.fileName }); });
    };
    WebCamComponent.prototype.dataUriToFormData = function (base64, options) {
        return videoHelp_1.dataUriToFormData(base64, { fileName: options.fileName });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", MediaDeviceInfo)
    ], WebCamComponent.prototype, "videoDevice", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WebCamComponent.prototype, "videoDeviceId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WebCamComponent.prototype, "reflect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WebCamComponent.prototype, "facingMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WebCamComponent.prototype, "mime", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WebCamComponent.prototype, "useParentWidthHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WebCamComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WebCamComponent.prototype, "success", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Error)
    ], WebCamComponent.prototype, "error", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WebCamComponent.prototype, "errorChange", void 0);
    __decorate([
        core_1.Output('catch'),
        __metadata("design:type", core_1.EventEmitter)
    ], WebCamComponent.prototype, "catcher", void 0);
    WebCamComponent = __decorate([
        core_1.Component({
            selector: 'ack-webcam',
            template: template
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer,
            core_1.ElementRef])
    ], WebCamComponent);
    return WebCamComponent;
}());
exports.WebCamComponent = WebCamComponent;
function isOb(v) {
    return typeof (v) === 'object';
}
function blobToFile(theBlob, fileName) {
    var b = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;
    //Cast to a File() type
    return theBlob;
}
//# sourceMappingURL=webcam.component.js.map

/***/ }),

/***/ "./node_modules/ack-angular-webcam/webcam.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/ack-angular-webcam/webcam.module.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var webcam_component_1 = __webpack_require__(/*! ./webcam.component */ "./node_modules/ack-angular-webcam/webcam.component.js");
var AckMediaDevices_directive_1 = __webpack_require__(/*! ./AckMediaDevices.directive */ "./node_modules/ack-angular-webcam/AckMediaDevices.directive.js");
var declarations = [
    webcam_component_1.WebCamComponent,
    AckMediaDevices_directive_1.AckMediaDevices
];
var WebCamModule = /** @class */ (function () {
    function WebCamModule() {
    }
    WebCamModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: declarations,
            exports: declarations
        })
    ], WebCamModule);
    return WebCamModule;
}());
exports.WebCamModule = WebCamModule;
//# sourceMappingURL=webcam.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/about-me/about-me.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/about-me/about-me.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"text-center\">About Me</h5>\n<hr />\n<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t<ack-webcam\n\t\t\t\t#webcam\n\t\t\t\t[options]=\"options\"\n\t\t\t\t(success)=\"onCamSuccess()\"\n\t\t\t\t(catch)=\"onCamError($event)\"\n\t\t\t></ack-webcam>\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"genBase64(webcam)\">\n\t\t\t\tCapture Image\n\t\t\t</button>\n\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"genPostData(webcam)\">\n\t\t\t\tCapture Video\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/address-information/address-information.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/address-information/address-information.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"text-center\">Address Information</h5>\n<hr />\n\n<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<app-address\n\t\t\ttitle=\"Permanent Address\"\n\t\t\t[address]=\"permanentAddress\"\n\t\t\t[restrictEdit]=\"false\"\n\t\t></app-address>\n\t</div>\n</div>\n<br />\n<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<app-address\n\t\t\ttitle=\"Present Address\"\n\t\t\t[address]=\"presentAddress\"\n\t\t\t[restrictEdit]=\"false\"\n\t\t></app-address>\n\t</div>\n</div>\n<br />\n<div class=\"row\">\n\t<div class=\"col-12 d-flex justify-content-between\">\n\t\t<a class=\"btn btn-secondary\" [routerLink]=\"['../personal-info']\">\n\t\t\tBack\n\t\t</a>\n\t\t<button type=\"button\" (click)=\"proceed()\" class=\"btn btn-success\">\n\t\t\tNext\n\t\t</button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/educational-information/educational-information.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/educational-information/educational-information.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"text-center\">Educational Information</h5>\n<hr />\n\n<form\n\t#educationalDetailsForm=\"ngForm\"\n\t(ngSubmit)=\"proceed(educationalDetailsForm)\"\n>\n\t<div class=\"row\">\n\t\t<div class=\"form-group col-md-6 col-12\">\n\t\t\t<label for=\"schoolName\">School Name</label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tname=\"schoolName\"\n\t\t\t\tngModel\n\t\t\t\t#schoolName=\"ngModel\"\n\t\t\t\trequired\n\t\t\t/>\n\t\t</div>\n\t\t<div class=\"form-group col-12 d-flex justify-content-between\">\n\t\t\t<a class=\"btn btn-secondary\" [routerLink]=\"['../address-info']\">\n\t\t\t\tBack\n\t\t\t</a>\n\t\t\t<input type=\"submit\" value=\"Next\" class=\"btn btn-success\" />\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/payment/payment.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/payment/payment.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"text-center\">Payment</h5>\n<hr />\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/personal-information/personal-information.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/personal-information/personal-information.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"text-center\">Personal Information</h5>\n<hr />\n\n<form [formGroup]=\"personalDetailsForm\" (ngSubmit)=\"proceed()\">\n\t<div class=\"row\">\n\t\t<div class=\"form-group col-md-6 col-12\">\n\t\t\t<label>First Name</label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tformControlName=\"firstName\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n\t\t\t/>\n\t\t\t<div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n\t\t\t\t<div *ngIf=\"f.firstName.errors.required\">\n\t\t\t\t\tFirst Name is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-md-6 col-12\">\n\t\t\t<label>Last Name</label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tformControlName=\"lastName\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n\t\t\t/>\n\t\t\t<div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n\t\t\t\t<div *ngIf=\"f.lastName.errors.required\">\n\t\t\t\t\tLast Name is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-md-6 col-12\">\n\t\t\t<label>Email</label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tformControlName=\"email\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n\t\t\t/>\n\t\t\t<div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n\t\t\t\t<div *ngIf=\"f.email.errors.required\">Email is required</div>\n\t\t\t\t<div *ngIf=\"f.email.errors.email\">\n\t\t\t\t\tEmail must be a valid email address\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-md-6 col-12\">\n\t\t\t<label>Alternate Email</label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tformControlName=\"alternateEmail\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n\t\t\t/>\n\t\t\t<div\n\t\t\t\t*ngIf=\"submitted && f.alternateEmail.errors\"\n\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t>\n\t\t\t\t<div *ngIf=\"f.alternateEmail.errors.alternateEmail\">\n\t\t\t\t\tEmail must be a valid email address\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-md-6 col-12\">\n\t\t\t<label for=\"phone\">Phone</label>\n\t\t\t<input\n\t\t\t\ttype=\"tel\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tformControlName=\"phoneNumber\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors }\"\n\t\t\t/>\n\t\t\t<div *ngIf=\"submitted && f.phoneNumber.errors\" class=\"invalid-feedback\">\n\t\t\t\t<div *ngIf=\"f.phoneNumber.errors.required\">\n\t\t\t\t\tPhone Number is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-md-6 col-12\">\n\t\t\t<label for=\"gender\">Gender</label>\n\t\t\t<select\n\t\t\t\tformControlName=\"gender\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\"\n\t\t\t>\n\t\t\t\t<option [ngValue]=\"undefined\">-- Select Gender --</option>\n\t\t\t\t<option>Male</option>\n\t\t\t\t<option>Female</option>\n\t\t\t\t<option>Others</option>\n\t\t\t</select>\n\t\t\t<div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n\t\t\t\t<div *ngIf=\"f.gender.errors.required\">\n\t\t\t\t\tGender is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-12 d-flex justify-content-end\">\n\t\t\t<input type=\"submit\" value=\"Next\" class=\"btn btn-success\" />\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/professional-information/professional-information.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/professional-information/professional-information.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"text-center\">Professional Information</h5>\n<hr />\n<form\n\t#professionalDetailsForm=\"ngForm\"\n\t(ngSubmit)=\"proceed(professionalDetailsForm)\"\n>\n\t<div class=\"row\">\n\t\t<div class=\"form-group col-md-6 col-12\"></div>\n\t\t<div class=\"form-group col-12 d-flex justify-content-between\">\n\t\t\t<a class=\"btn btn-secondary\" [routerLink]=\"['../educational-info']\">\n\t\t\t\tBack\n\t\t\t</a>\n\t\t\t<input type=\"submit\" value=\"Next\" class=\"btn btn-success\" />\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/profile-information/profile-information.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/profile-information/profile-information.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n\tclass=\"row justify-content-center align-items-center h-100 profile-container\"\n>\n\t<div class=\"col-md-8 col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body h-100\">\n\t\t\t\t<div class=\"row h-100\">\n\t\t\t\t\t<div class=\"col-3 h-100 border-right\">\n\t\t\t\t\t\t<div class=\"list-group\">\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['personal-info']\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t>Personal Information</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['address-info']\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t>Address Information</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['educational-info']\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t>Educational Information</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['professional-info']\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t>Professional Information</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['skills']\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t>Skills</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['about-me']\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t>About Me</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['payment']\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t>Payment</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-9 main-content\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/skills/skills.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/skills/skills.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"text-center\">Skills</h5>\n<hr />\n\n<form [formGroup]=\"skillForm\">\n\t<div class=\"row\" formArrayName=\"skills\">\n\t\t<label class=\"col\">\n\t\t\tSkill\n\t\t</label>\n\t\t<label class=\"col-2\">\n\t\t\tExp in Yrs\n\t\t</label>\n\t\t<label class=\"col-3\">\n\t\t\tLast Used On\n\t\t</label>\n\t\t<label class=\"col-2\">\n\t\t\tAction\n\t\t</label>\n\t\t<div\n\t\t\tclass=\"col-12 mb-1\"\n\t\t\t*ngFor=\"let skillControl of skillControls; let i = index\"\n\t\t\t[formGroupName]=\"i\"\n\t\t>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-5 d-flex\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control mr-1\"\n\t\t\t\t\t\tformControlName=\"major\"\n\t\t\t\t\t/>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"minor\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tformControlName=\"experienceInYears\"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tformControlName=\"lastUsedOn\"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t<button class=\"btn btn-danger mr-1\" (click)=\"removeSkill(i)\">\n\t\t\t\t\t\t-\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"addSkill()\">+</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"form-group col-12 d-flex justify-content-between\">\n\t\t\t<a class=\"btn btn-secondary\" [routerLink]=\"['../professional-info']\">\n\t\t\t\tBack\n\t\t\t</a>\n\t\t\t<input type=\"submit\" value=\"Next\" class=\"btn btn-success\" />\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./src/app/onboarding/about-me/about-me.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/onboarding/about-me/about-me.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/onboarding/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/onboarding/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AboutMeComponent = class AboutMeComponent {
    constructor(http) {
        this.http = http;
        this.options = {
            video: true,
            audio: true
        };
    }
    ngOnInit() { }
    genBase64(webcam) {
        webcam
            .getBase64()
            .then(base => {
            this.base64 = base;
            console.log(base);
        })
            .catch(e => console.error(e));
    }
    //get HTML5 FormData object and pretend to post to server
    genPostData(webcam) {
        webcam
            .captureAsFormData({ fileName: 'file.jpg' })
            .then(formData => this.postFormData(formData))
            .catch(e => console.error(e));
    }
    postFormData(formData) {
        return this.http.post('http://www.abcd.com/', formData);
    }
    onCamError(err) { }
    onCamSuccess() { }
};
AboutMeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/about-me/about-me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.scss */ "./src/app/onboarding/about-me/about-me.component.scss")).default]
    })
], AboutMeComponent);



/***/ }),

/***/ "./src/app/onboarding/address-information/address-information.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/onboarding/address-information/address-information.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvYWRkcmVzcy1pbmZvcm1hdGlvbi9hZGRyZXNzLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/onboarding/address-information/address-information.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/onboarding/address-information/address-information.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddressInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressInformationComponent", function() { return AddressInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AddressInformationComponent = class AddressInformationComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.permanentAddress = {
            country: '',
            state: '',
            zipcode: '',
            address: ''
        };
        this.presentAddress = {
            country: '',
            state: '',
            zipcode: '',
            address: ''
        };
    }
    proceed() {
        this.router.navigate(['../educational-info'], {
            relativeTo: this.activatedRoute
        });
    }
};
AddressInformationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddressInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/address-information/address-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address-information.component.scss */ "./src/app/onboarding/address-information/address-information.component.scss")).default]
    })
], AddressInformationComponent);



/***/ }),

/***/ "./src/app/onboarding/educational-information/educational-information.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/onboarding/educational-information/educational-information.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvZWR1Y2F0aW9uYWwtaW5mb3JtYXRpb24vZWR1Y2F0aW9uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/onboarding/educational-information/educational-information.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/onboarding/educational-information/educational-information.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EducationalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationalInformationComponent", function() { return EducationalInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let EducationalInformationComponent = class EducationalInformationComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() { }
    proceed(educationalDetailsForm) {
        console.log('here');
        this.router.navigate(['../professional-info'], {
            relativeTo: this.activatedRoute
        });
    }
};
EducationalInformationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EducationalInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-educational-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./educational-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/educational-information/educational-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./educational-information.component.scss */ "./src/app/onboarding/educational-information/educational-information.component.scss")).default]
    })
], EducationalInformationComponent);



/***/ }),

/***/ "./src/app/onboarding/onboarding-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingRoutingModule", function() { return OnboardingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-information/profile-information.component */ "./src/app/onboarding/profile-information/profile-information.component.ts");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "./src/app/onboarding/personal-information/personal-information.component.ts");
/* harmony import */ var _professional_information_professional_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./professional-information/professional-information.component */ "./src/app/onboarding/professional-information/professional-information.component.ts");
/* harmony import */ var _educational_information_educational_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./educational-information/educational-information.component */ "./src/app/onboarding/educational-information/educational-information.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/onboarding/about-me/about-me.component.ts");
/* harmony import */ var _address_information_address_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address-information/address-information.component */ "./src/app/onboarding/address-information/address-information.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/onboarding/payment/payment.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/onboarding/skills/skills.component.ts");











const onboardingRoutes = [
    {
        path: '',
        component: _profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_3__["ProfileInformationComponent"],
        children: [
            {
                path: '',
                redirectTo: 'personal-info',
                pathMatch: 'full'
            },
            {
                path: 'personal-info',
                component: _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_4__["PersonalInformationComponent"]
            },
            {
                path: 'address-info',
                component: _address_information_address_information_component__WEBPACK_IMPORTED_MODULE_8__["AddressInformationComponent"]
            },
            {
                path: 'professional-info',
                component: _professional_information_professional_information_component__WEBPACK_IMPORTED_MODULE_5__["ProfessionalInformationComponent"]
            },
            {
                path: 'educational-info',
                component: _educational_information_educational_information_component__WEBPACK_IMPORTED_MODULE_6__["EducationalInformationComponent"]
            },
            {
                path: 'about-me',
                component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"]
            },
            {
                path: 'payment',
                component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"]
            },
            {
                path: 'skills',
                component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"]
            }
        ]
    }
];
let OnboardingRoutingModule = class OnboardingRoutingModule {
};
OnboardingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(onboardingRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OnboardingRoutingModule);



/***/ }),

/***/ "./src/app/onboarding/onboarding.module.ts":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/*! exports provided: OnboardingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingModule", function() { return OnboardingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "./src/app/onboarding/personal-information/personal-information.component.ts");
/* harmony import */ var _professional_information_professional_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professional-information/professional-information.component */ "./src/app/onboarding/professional-information/professional-information.component.ts");
/* harmony import */ var _educational_information_educational_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./educational-information/educational-information.component */ "./src/app/onboarding/educational-information/educational-information.component.ts");
/* harmony import */ var _profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-information/profile-information.component */ "./src/app/onboarding/profile-information/profile-information.component.ts");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./onboarding-routing.module */ "./src/app/onboarding/onboarding-routing.module.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/onboarding/about-me/about-me.component.ts");
/* harmony import */ var ack_angular_webcam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ack-angular-webcam */ "./node_modules/ack-angular-webcam/index.js");
/* harmony import */ var ack_angular_webcam__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ack_angular_webcam__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _address_information_address_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./address-information/address-information.component */ "./src/app/onboarding/address-information/address-information.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/onboarding/payment/payment.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/onboarding/skills/skills.component.ts");
















let OnboardingModule = class OnboardingModule {
};
OnboardingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_5__["PersonalInformationComponent"],
            _professional_information_professional_information_component__WEBPACK_IMPORTED_MODULE_6__["ProfessionalInformationComponent"],
            _educational_information_educational_information_component__WEBPACK_IMPORTED_MODULE_7__["EducationalInformationComponent"],
            _profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__["ProfileInformationComponent"],
            _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_10__["AboutMeComponent"],
            _address_information_address_information_component__WEBPACK_IMPORTED_MODULE_12__["AddressInformationComponent"],
            _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_15__["SkillsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ack_angular_webcam__WEBPACK_IMPORTED_MODULE_11__["WebCamModule"],
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_9__["OnboardingRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"]
        ]
    })
], OnboardingModule);



/***/ }),

/***/ "./src/app/onboarding/payment/payment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/onboarding/payment/payment.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/onboarding/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/onboarding/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentComponent = class PaymentComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.scss */ "./src/app/onboarding/payment/payment.component.scss")).default]
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/onboarding/personal-information/personal-information.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/onboarding/personal-information/personal-information.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvcGVyc29uYWwtaW5mb3JtYXRpb24vcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/onboarding/personal-information/personal-information.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/onboarding/personal-information/personal-information.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationComponent", function() { return PersonalInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PersonalInformationComponent = class PersonalInformationComponent {
    constructor(router, activatedRoute, formBuilder) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.personalDetailsForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            alternateEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    get f() {
        return this.personalDetailsForm.controls;
    }
    proceed() {
        this.submitted = true;
        if (this.personalDetailsForm.invalid) {
            return;
        }
        this.router.navigate(['../address-info'], {
            relativeTo: this.activatedRoute
        });
    }
};
PersonalInformationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PersonalInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/personal-information/personal-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-information.component.scss */ "./src/app/onboarding/personal-information/personal-information.component.scss")).default]
    })
], PersonalInformationComponent);



/***/ }),

/***/ "./src/app/onboarding/professional-information/professional-information.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/onboarding/professional-information/professional-information.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvcHJvZmVzc2lvbmFsLWluZm9ybWF0aW9uL3Byb2Zlc3Npb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/onboarding/professional-information/professional-information.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/onboarding/professional-information/professional-information.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProfessionalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalInformationComponent", function() { return ProfessionalInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let ProfessionalInformationComponent = class ProfessionalInformationComponent {
    constructor(router, activatedRoute, location) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    ngOnInit() { }
    proceed(professionalDetailsForm) {
        this.router.navigate(['../about-me'], {
            relativeTo: this.activatedRoute
        });
    }
};
ProfessionalInformationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
ProfessionalInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professional-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./professional-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/professional-information/professional-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./professional-information.component.scss */ "./src/app/onboarding/professional-information/professional-information.component.scss")).default]
    })
], ProfessionalInformationComponent);



/***/ }),

/***/ "./src/app/onboarding/profile-information/profile-information.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/onboarding/profile-information/profile-information.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-container {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.profile-container .card {\n  min-height: 30rem;\n}\n.profile-container .card .main-content {\n  max-height: 30rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlYmFuYW5kYS9Xb3JrYmVuY2gvdGFsZW50LXBvb2wtdWkvc3JjL21haW4vd2ViYXBwL3NyYy9hcHAvb25ib2FyZGluZy9wcm9maWxlLWluZm9ybWF0aW9uL3Byb2ZpbGUtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29uYm9hcmRpbmcvcHJvZmlsZS1pbmZvcm1hdGlvbi9wcm9maWxlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0NBQUE7QUNDRDtBREFDO0VBQ0MsaUJBQUE7QUNFRjtBRERFO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0FDR0giLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0LmNhcmQge1xuXHRcdG1pbi1oZWlnaHQ6IDMwcmVtO1xuXHRcdC5tYWluLWNvbnRlbnQge1xuXHRcdFx0bWF4LWhlaWdodDogMzByZW07XG5cdFx0XHRvdmVyZmxvdzogYXV0bztcblx0XHR9XG5cdH1cbn1cbiIsIi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAuY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5jYXJkIC5tYWluLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMHJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/onboarding/profile-information/profile-information.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/onboarding/profile-information/profile-information.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationComponent", function() { return ProfileInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileInformationComponent = class ProfileInformationComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/profile-information/profile-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-information.component.scss */ "./src/app/onboarding/profile-information/profile-information.component.scss")).default]
    })
], ProfileInformationComponent);



/***/ }),

/***/ "./src/app/onboarding/skills/skills.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/onboarding/skills/skills.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  max-width: 7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlYmFuYW5kYS9Xb3JrYmVuY2gvdGFsZW50LXBvb2wtdWkvc3JjL21haW4vd2ViYXBwL3NyYy9hcHAvb25ib2FyZGluZy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vbmJvYXJkaW5nL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcblx0bWF4LXdpZHRoOiA3cmVtO1xufVxuIiwiLmZvcm0tY29udHJvbCB7XG4gIG1heC13aWR0aDogN3JlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/onboarding/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/onboarding/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SkillsComponent = class SkillsComponent {
    constructor(formbuilder) {
        this.formbuilder = formbuilder;
    }
    ngOnInit() {
        this.skillForm = this.formbuilder.group({
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.addSkill();
    }
    get skillControls() {
        return this.skillForm.get('skills').controls;
    }
    addSkill() {
        this.skillForm.get('skills').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            major: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            minor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            experienceInYears: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)
            ]),
            lastUsedOn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().getFullYear(), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    }
    removeSkill(index) {
        this.skillForm.get('skills').removeAt(index);
    }
};
SkillsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/onboarding/skills/skills.component.scss")).default]
    })
], SkillsComponent);



/***/ })

}]);
//# sourceMappingURL=onboarding-onboarding-module-es2015.js.map
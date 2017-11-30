"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoIcon = function () {
  function GeoIcon(selector, moving, latLong) {
    _classCallCheck(this, GeoIcon);

    this.selector = document.querySelector(selector);
    this.moving = this.selector.querySelector(moving);
    this.latLong = document.querySelector(latLong);
    this.tl = new TimelineMax();
    this.move();
  }

  GeoIcon.prototype.getLocation = function getLocation() {
    return new Promise(function (resolve, reject) {
      if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(function (geoposition) {
          var coords = {
            lat: geoposition.coords.latitude,
            long: geoposition.coords.longitude
          };
          resolve(coords);
        }, function (error) {
          console.log(error);
          reject(error);
        });
      } else {
        reject("No Geolocation support");
      }
    });
  };

  GeoIcon.prototype.outputCoords = function outputCoords(coords) {
    this.latLong.innerHTML = "Lat: " + coords.lat + "<br/> Long: " + coords.long;
  };

  GeoIcon.prototype.move = function move(coords) {
    var _this = this;

    this.getLocation().then(function (coords) {
      var svgWidth = _this.selector.getAttribute('viewBox').split(' ')[2];
      var long = coords.long / 180 * svgWidth * -1;
      _this.tl.to(_this.moving, 2, {
        x: long + 'px'
      });
      _this.outputCoords(coords);
    }).catch(function (error) {
      var output = "An error occured";
      var errorMessages = ["Permission was denied.<br/>Could not get location.", //1 PERMISSION_DENIED
      "Something went wrong.<br/>Your position is currently unavailable", //2 POSITION_UNAVAILABLE	
      "Things seems to be taking a while.<br/>We'll just leave it for now." //3 TIMEOUT
      ];
      if (typeof error == 'String') {
        output = error;
      } else {
        output = errorMessages[error.code - 1]; //Minus one, because arrays are zero indexed
      }
      _this.tl.fromTo(_this.selector, 0.5, {
        x: -1
      }, {
        x: 1,
        ease: RoughEase.ease.config({
          strength: 10,
          points: 5,
          template: Linear.easeNone,
          randomize: false
        }),
        clearProps: "x"
      }, "+=0.5");

      _this.latLong.innerHTML = output;
    });
  };

  return GeoIcon;
}();

new GeoIcon('#worldmap_icon', '.center-map-group', '.lat-long');
import { Loader } from "@googlemaps/js-api-loader"
import {googleMapKey} from './config';
import * as storage from './storage';

let lat = 43.7181552;
let lng = -79.5184839;
let map, postMap;
let marker;
let geocoder;

export const mapLoader = () => {
	const loader = new Loader({
		apiKey: googleMapKey,
		version: "weekly",
	});

	loader.load().then(() => {
		map = new google.maps.Map(document.querySelector("#map"), {
			zoom: 17,
			center: { lat: lat, lng: lng },
			mapTypeControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControlOptions: {
			position: google.maps.ControlPosition.RIGHT_CENTER
			},
		});

		geocoder = new google.maps.Geocoder();

		const mapInputs = document.createElement("div");
		mapInputs.style.fontSize = "12px";
		mapInputs.style.fontFamily = "'Montserrat', sans-serif";
		mapInputs.style.lineHeight = "16px";

		const inputText = document.createElement("input");

		inputText.type = "text";
		inputText.setAttribute("size", "40");
		inputText.placeholder = "Enter an address in the textbox or click on the map";

		const submitButton = document.createElement("input");

		submitButton.type = "button";
		submitButton.value = "Search";
		submitButton.classList.add("button");
		
		mapInputs.append(inputText, submitButton);

		map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapInputs);

		marker = new google.maps.Marker({
			map,
		});
		map.addListener("click", (e) => {
			geocode({ location: e.latLng });
		});
		submitButton.addEventListener("click", () =>
			geocode({ address: inputText.value })
		);

		clear();
	});
};

export function setPostCoordsMap(postLat, postLng, postCity) {
  let [lat, lng] = [postLat, postLng];
  try {
	postMap = new google.maps.Map(document.querySelector("#post-map-show"), {
		zoom: 15,
		mapTypeControl: false,
		rotateControl: false,
	});
	if (lat && lng) {
		setMarkerToMap(lat, lng, postMap);
	} else {
		geocoder
		.geocode({
			address: postCity
		})
		.then((result) => {
			const {
			results
			} = result;
			lat = +results[0].geometry.location.lat().toFixed(5);
			lng = +results[0].geometry.location.lng().toFixed(5);
			setMarkerToMap(lat, lng, postMap);
			return results;
		})
		.catch((e) => {
			alert("Geocode was not successful for the following reason: " + e);
		});
	}
  } catch (e) {}
};

export const setPositionOnMap = (lat, lng) => {
	setMarkerToMap(lat, lng, map);
};

function clear() {
  marker.setMap(null);
}

function geocode(request) {
  clear();
  geocoder
    .geocode(request)
    .then((result) => {
		const { results } = result;
      lat = +results[0].geometry.location.lat().toFixed(5);
      lng = +results[0].geometry.location.lng().toFixed(5);
	  storage.setAppItem('lat', lat);
	  storage.setAppItem('lng', lng);
	  storage.setAppItem('address', results[0].formatted_address);
	  setPositionOnMap(lat, lng);
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}

export const getPlaceByCoord = async (lat, lng) => {
	let place = await geocoder
    .geocode({
		location: {
			lat: parseFloat(lat),
			lng: parseFloat(lng),
		}
	})
	.then((result) => {
		const { results } = result;
		return results[0].formatted_address;
	})
	.catch((e) => {
		return '';
    });
	return place;
};

// const setLocation = (lat, lng) => {
// 	let locationTrue = 0;
// 	if(!!lat && Math.abs(lat) <= 90 ) {
// 		locationTrue++;
// 		if(!!lng && Math.abs(lng) <= 180 ) {
// 			locationTrue++;
// 		} 
// 	}
// 	if(locationTrue === 2)
// 	{
// 		localStorage.setItem('lat', lat);
// 		localStorage.setItem('lng', lng);
// 	}
// };

function setMarkerToMap(postLat, postLng, mapID) {
  const mapLocation = new google.maps.LatLng(postLat, postLng);
  mapID.setCenter(mapLocation);
  marker.setPosition(mapLocation);
  marker.setMap(mapID);
}

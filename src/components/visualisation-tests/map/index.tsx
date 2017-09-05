import * as React from 'react';
import * as L from 'leaflet';
import data from './data';
const edges: any = data.edges.map((e: any) => {
		const source = data.places.find(p => p.pid === e.source);
		const target = data.places.find(p => p.pid === e.target);
		const sourceLatLng = [source.latitude, source.longitude];
		const targetLatLng = [target.latitude, target.longitude];
		return [sourceLatLng, targetLatLng, e.weight];
});

class Map extends React.Component<any, any> {
	componentDidMount() {
		const map = L.map('mymap').setView([50, 6], 6);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		data.places.forEach(p =>
			L.circle([+p.latitude, +p.longitude], {
				color: 'blue',
				radius: 3,
			}).addTo(map)
		);

		edges.forEach(e => {
			const latlngs = [L.latLng(e[0]), L.latLng(e[1])];
			L.polyline(latlngs, {color: 'red', weight: 1}).addTo(map);
		});
	}

	render() {
		return (
			<div
				id="mymap"
				style={{
					width: '100%',
					height: '100%'
				}}
			/>
		)
	}
}

export default Map;
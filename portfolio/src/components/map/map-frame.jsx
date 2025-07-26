import { useEffect, useRef } from 'react';
import 'ol/ol.css';

import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';

import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';


function MapFrame({ mapFeatures }) {
  const mapRef = useRef(); // DOM element
  const mapInstance = useRef(); // OpenLayers Map
  const vectorSourceRef = useRef(); // Feature source

  // Initialize the map once
  useEffect(() => {
    vectorSourceRef.current = new VectorSource();

    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> &copy; <a href="https://carto.com/">CARTO</a>',
          }),
        }),
        new VectorLayer({
          source: vectorSourceRef.current,
        }),
      ],
      view: new View({
        center: fromLonLat([0, 30]),
        zoom: 2,
      }),
    });

    return () => {
      mapInstance.current.setTarget(null);
    };
  }, []);

  // Update features when mapFeatures changes
  useEffect(() => {
    const source = vectorSourceRef.current;
    if (!source) return;

    // Clear and re-add features
    source.clear();
    if (mapFeatures && mapFeatures.length > 0) {
      source.addFeatures(mapFeatures);
    } else if (mapFeatures.length === 0) {
      // Reset the map zoom and center if the feature have been removed
      resetMapView();
    }
  }, [mapFeatures]);

  const resetMapView = () => {
    const map = mapInstance.current;
    if (!map) return;

    map.getView().setCenter(fromLonLat([0, 30]));
    map.getView().setZoom(2);
  };

  return (
    <div
      ref={mapRef}
      className="w-full aspect-video border border-gray-300"
    />
  );
}

export default MapFrame;

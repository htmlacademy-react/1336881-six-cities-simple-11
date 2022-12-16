import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { UrlMarker } from '../../const';

const defaultCustomIcon = leaflet.icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: UrlMarker.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: City;
  points: Offer[];
  isMainMap: boolean;
  activeOffer?: Offer;
};


function Map({city, points, isMainMap, activeOffer}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const getIcon = (offer:Offer) => {
    if(activeOffer?.id === offer.id) {
      return currentCustomIcon;
    }
    return (activeCard && offer.id === activeCard.id && isMainMap)
      ? currentCustomIcon
      : defaultCustomIcon;
  };

  const { activeCard } = useAppSelector((state) => ({...state.offers}));

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: getIcon(point)
          })
          .addTo(map);
      });
    }
  }, [map, points, activeCard]);


  useEffect(() => {
    if(map && isMainMap){
      map.flyTo({lat: city.lat, lng: city.lng}, 10);
    }
  },[city]);

  return (
    <div
      ref={mapRef}
      className={`map ${isMainMap ? 'cities__map' : 'property__map'}`}
    >
    </div>
  );
}

export default Map;


<script>
  import { getContext, onMount } from 'svelte';
  import 'ol/ol.css';
  import { Feature, Map, View } from 'ol';
  import TileLayer from 'ol/layer/Tile';
  import VectorLayer from 'ol/layer/Vector';
  import { fromLonLat } from 'ol/proj';
  import { OSM } from 'ol/source';
  import VectorSource from 'ol/source/Vector';
  import Point from 'ol/geom/Point';
  import { Style, Circle, Fill, Stroke } from 'ol/style';
  import { derived } from 'svelte/store';

	const landpads = getContext('landpads');
  let map;
  let vectorSource = new VectorSource();
  const updateLandpads = (landpads) => {
    vectorSource.clear();
    landpads.forEach(landpad => {
      const {latitude, longitude} = landpad.location;

      const pointFeature = new Feature({
        geometry: new Point(fromLonLat([longitude, latitude])),
        name: landpad.location.name
      });

      if(landpad.status === 'active'){
        pointFeature.setStyle(new Style({
          image: new Circle({
            radius: 4,
            fill: new Fill({ color: '#31C48D' }),
            stroke: new Stroke({ color: '#31C48D', width: 2 })
          }),
        }))
      }else{
        if(landpad.status === 'retired'){
          pointFeature.setStyle(new Style({
            image: new Circle({
              radius: 4,
              fill: new Fill({ color: '#9b1c1c' }),
              stroke: new Stroke({ color: '#9b1c1c', width: 2 })
            }),
          }))
        }else {
          pointFeature.setStyle(new Style({
            image: new Circle({
              radius: 4,
              fill: new Fill({ color: '#42389d' }),
              stroke: new Stroke({ color: '#42389d', width: 2 })
            }),
          }))
        }
      }
      vectorSource.addFeature(pointFeature);
    });
  }
  onMount(()=>{
    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
            source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([$landpads[0]?.location?.longitude, $landpads[0]?.location?.latitude]),
        zoom: 3
      })
    });
    updateLandpads($landpads);
  })
  $effect(()=>{
    updateLandpads($landpads);
  })
</script>

<div class="rounded-lg drop-shadow bg-white mb-[26px]">
  <h2 class="px-4 py-[15px] font-semibold">
    Map View
  </h2>
  <div id="map" class="w-full h-[301px]"></div>
</div>
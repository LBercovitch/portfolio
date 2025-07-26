import { useEffect } from 'react';

import { GeoJSON } from 'ol/format';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

import MapFrame from '../map/map-frame';
import countries from '../../data/countries.geo.json';

function GameMap({ guess, setGuess, mapFeatures, setMapFeatures, correctCountries, setCorrectCountries, setGuessMessage }) {
  const format = new GeoJSON();
  const features = format.readFeatures(countries, {
    featureProjection: 'EPSG:3857', // Standard Web Mercator projection
  });

  const randomColor = () => {
    const red = (Math.trunc(Math.random() * 255)).toString(16).padStart(2, '0');
    const green = (Math.trunc(Math.random() * 255)).toString(16).padStart(2, '0');
    const blue = (Math.trunc(Math.random() * 255)).toString(16).padStart(2, '0');
    const opacity = 'aa';
    
    return '#' + red + green + blue + opacity;
  };

  useEffect(() => {
    const lowerGuess = guess.toLowerCase();

    // Check if guess is valid. In our dataset, the QUIZ field will sometimes
    // list multiple possible anwsers for countries with alternate names.
    // In these cases, the format will look like this: 'usa; united states'
    // where '; ' is the delineator
    let currentGuess = features.find((f) => {
      const quiz = f.get('QUIZ');
      const quizArray = quiz.split('; ');
      const found = quizArray.find(countryName => countryName === lowerGuess);
      return !!found;
    });

    // Check if guess is duplicate
    let duplicate = currentGuess && correctCountries.find((country) => {
      const quiz = currentGuess.get('QUIZ');
      return country === quiz;
    });

    if (currentGuess && !duplicate) {
      // Clear guess error
      setGuessMessage('');

      // Track existing correct guesses
      setCorrectCountries(prev => [...prev, currentGuess.get('QUIZ')]);

      // Set the style of the feature with a random fill colour
      currentGuess.setStyle(new Style({
        fill: new Fill({
          color: randomColor(),
        }),
        stroke: new Stroke({
          color: '#333333',
          width: 1,
        })
      }));

      // If a guess is found, clear the guess and add the feature to the map
      setGuess('');
      setMapFeatures(prev => [...prev, currentGuess]);
    } else if (currentGuess) {
      setGuessMessage('You already found ' + guess + '.');
    } else if (guess != '') {
      setGuessMessage('Sorry, ' + guess + ' is incorrect.');
    }
  }, [guess]);

  return (
    <div className="border-3 border-[#333] rounded-lg w-full mt-5 bg-violet-100 shadow-[4px_4px_#a684ff]">
      <MapFrame mapFeatures={mapFeatures} />
    </div>
  );
}

export default GameMap;

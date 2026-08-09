import { useState } from "react";
import "./DirectionsButton.css";

import {
  isAppleMobileDevice,
  openAppleMaps,
  openGoogleMaps,
} from "../../utils/maps";

import { maps } from "../../data/content";

function DirectionsButton() {
  const [showOptions, setShowOptions] = useState(false);

  const handleDirections = () => {
    if (isAppleMobileDevice()) {
      setShowOptions(true);
      return;
    }

    openGoogleMaps(maps.googleMapsUrl);
  };

  return (
    <>
      <button
        type="button"
        className="directions-button"
        onClick={handleDirections}
      >
        WYZNACZ TRASĘ
      </button>

      {showOptions && (
        <div
          className="directions-modal-overlay"
          onClick={() => setShowOptions(false)}
        >
          <div
            className="directions-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="directions-modal-eyebrow">
              WYZNACZ TRASĘ
            </p>

            <h3>Wybierz aplikację.</h3>

            <div className="directions-modal-actions">
              <button
                type="button"
                onClick={() => {
                  openGoogleMaps(maps.googleMapsUrl);
                  setShowOptions(false);
                }}
              >
                GOOGLE MAPS
              </button>

              <button
                type="button"
                onClick={() => {
                  openAppleMaps(maps.appleMapsUrl);
                  setShowOptions(false);
                }}
              >
                APPLE MAPS
              </button>
            </div>

            <button
              type="button"
              className="directions-modal-close"
              onClick={() => setShowOptions(false)}
            >
              ANULUJ
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DirectionsButton;
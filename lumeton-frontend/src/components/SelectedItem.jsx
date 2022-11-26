import React from "react";
import { Icon } from "@iconify/react";

const SelectedItem = ({ selectedItem, setSelectedItem }) => {
  const imageUrl =
    "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/655245-jrodav-gettyimages-541575344-72c6bf07c89e03947d92dc69cadd5fa6.jpg";
  return (
    <div className="overflowContainer">
      <h1>Weather Feedback</h1>
      {selectedItem && (
        <div className="itemContainer">
          <div className="wrapper">
            <h2>Feedback</h2>
            <div className="row">
              <div className="itemProperty">
                <p className="propValue">3</p>
                <p className="propTitle">Importance rating</p>
              </div>
              <div className="itemProperty">
                <p className="propValue">3m</p>
                <p className="propTitle">
                  Snow <br /> depth
                </p>
              </div>
              <div className="itemProperty">
                <p className="propValue">Ice</p>
                <p className="propTitle">Black ice</p>
              </div>
            </div>
            <img src={imageUrl} className="image" />
            <p>
              <b>Description</b>
              <br />
              Good pile of snow
            </p>
            <div className="closeContainer" onClick={() => setSelectedItem(null)}>
              <Icon icon="maki:cross" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedItem;

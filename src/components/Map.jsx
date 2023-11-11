import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 300 
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#0000a1"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        //subject={[2.3522, 48.8566]}
        subject={[90.4125, 23.8103]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 1.5,
          strokeLinecap: "round"
        }}
        connectorType="curve" 
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Dhaka"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;



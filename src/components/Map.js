import React, { useEffect } from "react";

function Map(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=c977b17750de7f4137f045b5080bb478";
    document.body.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const container = document.getElementById("map");
              const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3,
              };

              let map = new window.kakao.maps.Map(container, options);

              const positions = [
                {
                  title: "카카오",
                  latlng: new window.kakao.maps.LatLng(
                    latitude + 0.001,
                    longitude
                  ),
                },
                {
                  title: "생태연못",
                  latlng: new window.kakao.maps.LatLng(
                    latitude,
                    longitude + 0.001
                  ),
                },
                {
                  title: "텃밭",
                  latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
                },
                {
                  title: "근린공원",
                  latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
                },
              ];

              const imageSrc =
                "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
              const imageSize = new window.kakao.maps.Size(24, 35);
              const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize
              );

              for (let i = 0; i < positions.length; i++) {
                const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: positions[i].latlng,
                  title: positions[i].title,
                  image: markerImage,
                });
              }
            },
            (error) => {
              console.error("Error getting current position:", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      });
    };
  }, []);

  return (
    <>
      <div
        id="map"
        style={{ width: "500px", height: "400px" }}
        className="map-size"
      ></div>
      <h3>장애 학우를 위한 동선</h3>
    </>
  );
}

export default Map;

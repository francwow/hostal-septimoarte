const GoogleMap = () => {
  return (
    <div className="google-map">
      <iframe
        loading="lazy"
        width="320"
        height="220"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=320&amp;height=220&amp;hl=en&amp;q=Hostal%20S%C3%A9p7imo%20Arte%20Bogota+(Hostal%20S%C3%A9p7imo%20Arte)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

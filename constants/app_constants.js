export const STAR_SYMBOL = "⭐";
export const SITE_LOGO =
  "https://img.freepik.com/premium-vector/delicious-burger-icon-food-beverages_22052-1.jpg";
export const BACKEND_WITH_DYNAMIC_LAT_LONG = ({
  lat = "21.18880",
  lng = "72.82930",
}) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

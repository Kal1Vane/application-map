export const normalaizePointServer = (
  {
    "response": {
      "GeoObjectCollection": {
          "featureMember": [
              {
                  "GeoObject": {
                      "metaDataProperty": {
                          "GeocoderMetaData": {
                              text,
                          }
                      },
                      "Point": point
                  }
              }
          ]
      }
  }
  }) => ({
    adressTitle : text,
    point : point
  });

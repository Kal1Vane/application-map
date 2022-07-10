import { nanoid } from "@reduxjs/toolkit";

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
                      "Point": {
                        "pos": point
                      }
                  }
              }
          ]
      }
  }
  }) => ({
    adressTitle : text,
    point : point.split(' ').reverse(),
    id: nanoid(10),
  });



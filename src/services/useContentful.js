//importando contentful en el proyecto.
import { createClient } from "contentful"; 

//lo siguiente es para poder usar contentful
const client = createClient({
  space: "aqx7lhabvdb2", //space ID - cambialo por el tuyo.
  accessToken: "F6aO_Pe6erWybV8xpQ_8-rkkJmgZrwoG78UeMJ1MnOc", // preview access token - cambialo por la tuya.
  host: "preview.contentful.com" //contentful host
});

//lo siguiente es llamando el modelo y las entradas.
const useContentful = () => {
  const getPlaylists = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "playlist", //cambialo por como se llama tu modelo
        select: "fields"
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };

  const getCanciones = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cancion", //cambialo por como se llama tu modelo
        select: "fields"
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };

  const getArtistas = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "artista", //cambialo por como se llama tu modelo
        select: "fields"
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };

  const getAlbumes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "album", //cambialo por como se llama tu modelo
        select: "fields"
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };
  return { getPlaylists, getCanciones, getArtistas, getAlbumes };
};

export default useContentful;
import { createClient } from "contentful";


const client = createClient({
    space: "aqx7lhabvdb2",
    accessToken: "F6aO_Pe6erWybV8xpQ_8-rkkJmgZrwoG78UeMJ1MnOc", // preview access token
    host: "preview.contentful.com" //contentful host
})

const useContentful = {

   async getData(){
    try {
        const album = await client.getEntries({
          content_type: "album", //cambialo por como se llama tu modelo
          select: "fields"
        });
        const playlist = await client.getEntries({
          content_type: "playlist", //cambialo por como se llama tu modelo
          select: "fields"
          });
        return {album: album.items, playlist: playlist.items};
      } catch (error) {
        console.log(error);
      }
   }
}

export default useContentful;
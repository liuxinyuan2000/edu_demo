import axios from 'axios';

export default async function handler(req, res) {
  console.log("enter handler!!!");
  try {
    const response = await axios.get("http://140.210.197.137:7787/file", {
      responseType: 'arraybuffer'
    });

    res.setHeader('Content-Type', 'video/mp4');
    res.status(200).send(Buffer.from(response.data, 'binary'));
  } catch (error) {
    console.error("Error fetching file:", error);
    res.status(500).json({ error: "Error fetching file" });
  }
}
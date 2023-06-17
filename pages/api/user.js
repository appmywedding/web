import axios from "axios";
import { baseURL } from "../../environment";

const urls = {
  getUser: `${baseURL}/users`,
};

async function handleGetUser(req, res) {
  const uid = req.headers.uid;
  try {
    console.log(urls.getUser);
    const response = await axios.get(urls.getUser, { headers: { uid } });
    res.status(200).json({ user: response.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGetUser(req, res);
      break;
    default:
      res.status(405).end();
  }
}

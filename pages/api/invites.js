import axios from 'axios';
import { baseURL } from '../../environment';

const urls = {
  getAll: `${baseURL}/invites/getAll`,

}

export default function getAll(req, res) {
  axios.get(urls.getAll)
    .then((response) => {
      res.status(200).json({ invites: response })
    }, (error) => {
      res.status(500).json({ error })
    });
}


import axios from "axios";
export async function getCovidList() {
    const res = await axios.get("http://localhost:8080/covids")
    const covids = res.data
    return {
      props: {
        covids: covids
      }
    };
  }
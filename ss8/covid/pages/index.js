import "bootstrap/dist/css/bootstrap.css";

import { getCovidList } from "./services/CovidService";
import { useEffect, useState } from "react";
export default function Home() {
  
  const [service, setService] = useState ([]);

  const showList = () => {
     const getList = async () => {
        const data = await getCovidList();
        setService(data);
     }
     getList();
  }
useEffect(showList)

  return (
    <div>
      <h1>VietNam's COVID-19 Information</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Active</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {service.map((covid) => (
            <tr key={covid.id}>
              <td>{covid.id}</td>
              <td>{covid.confirmed}</td>
              <td>{covid.deaths}</td>
              <td>{covid.recovered}</td>
              <td>{covid.active}</td>
              <td>{covid.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};


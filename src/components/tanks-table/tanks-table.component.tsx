import React, { Component } from 'react';
import axios from 'axios';
import { TankType } from 'types/tank.type';

export class TanksTable extends Component {
  componentDidMount(): void {
    axios.get('/data.json').then((response: any) => {
      this.setState({ tanks: response.data.data });
    });
  }

  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Driver</th>
          <th>Gunner</th>
          <th>Gunner Thermal Res</th>
          <th>Commander</th>
          <th>Tier</th>
        </tr>
        </thead>
        <tbody>
        {
          // @ts-ignore
          this.state !== null && this.state.tanks.map((tank: TankType, index) => {
            return (
              <tr key={index}>
                <td>{tank.name}</td>
                <td>{tank.country}</td>
                <td>{tank.driver ? tank.driver : 'No'}</td>
                <td>{tank.gunner ? tank.gunner : 'No'}</td>
                <td>{tank.gunnerThermalRes ? tank.gunnerThermalRes : 'No'}</td>
                <td>{tank.commander ? tank.commander : 'No'}</td>
                <td>{tank.tier}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

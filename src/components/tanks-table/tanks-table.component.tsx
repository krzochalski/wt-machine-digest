import React, { Component } from 'react';
import axios from 'axios';
import { Commander, Country, Driver, Gunner, GunnerThermalRes, TankType } from 'types/tank.type';
import { EnumsService } from 'services/enums.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class TanksTable extends Component {
  static displayEnumData(key: any, enumToIterate: object) {
    return key !== null
      ? EnumsService.getEnumValue(key, enumToIterate)
      : <FontAwesomeIcon className="text-danger" icon={faTimes}/>;
  }

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
                <td>{TanksTable.displayEnumData(tank.country, Country)}</td>
                <td>{TanksTable.displayEnumData(tank.driver, Driver)}</td>
                <td>{TanksTable.displayEnumData(tank.gunner, Gunner)}</td>
                <td>{TanksTable.displayEnumData(tank.gunnerThermalRes, GunnerThermalRes)}</td>
                <td>{TanksTable.displayEnumData(tank.commander, Commander)}</td>
                <td>{tank.tier}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

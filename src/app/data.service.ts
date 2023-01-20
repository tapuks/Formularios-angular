import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http: any;

  constructor() { }

  getTeam(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve([{ team: 'Real Madrid', idTeam: 1 }, { team: 'Barcelona', idTeam: 2 }])
    })
  }

  getPosition(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const arrayPosition = [
        {
          position: 'Defensa',
          id: 1
        },
        {
          position: 'Medio',
          id: 2
        },
        {
          position: 'Delantero',
          id: 3
        }
      ]
      resolve(arrayPosition)
    })
  }

  getPlayers(idTeam: string, idPosition: string): Promise<any[]> {
    console.log('idTeam', idTeam);

    return new Promise((resolve, reject) => {
      const arrayPlayers = []
      switch (idTeam) {
        case '1': {
          if (idPosition == '1') {
            arrayPlayers.push('Carvajal', 'Militao', 'Rudiguer', 'Alaba', 'Mendy')
            break;
          } else if (idPosition == '2') {
            arrayPlayers.push('Kroos', 'Modric', 'Tchoaumeny', 'Camavinga', 'Valverde')
            break;
          }
          else {
            arrayPlayers.push('Benzema', 'Vinicius', 'Rodrigo', 'Lucas Vazquez')
            break;
          }
        }
        case '2': {
          if (idPosition == '1') {
            arrayPlayers.push('Jordi alba', 'Araujo', 'Cristensen', 'Kounde', 'Balde')
            break;
          } else if (idPosition == '2') {
            arrayPlayers.push('De Jong', 'Busquets', 'Gavi', 'Pedri')
            break;
          }
          else {
            arrayPlayers.push('Dembele', 'Rafinha', 'Lewandosky', 'Ansu fati')
            break;
          }
        }
      }
      resolve(arrayPlayers)
    })
  }
}

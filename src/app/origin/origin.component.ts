import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss']
})
export class OriginComponent implements OnInit {
  @Input() formGroup: any = new FormGroup({
    'team': new FormControl(),
    'position': new FormControl(),
    'player': new FormControl()
  })
  teams: any[] = [];
  positions: any[] = [];
  players: any[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeam().then(data => this.teams = data)
    this.position.disable()
    this.player.disable()

    this.team.valueChanges.subscribe(() => {
      this.dataService.getPosition().then(data => this.positions = data)
      console.log('positions', this.positions);
      this.position.enable()
    })
    this.position.valueChanges.subscribe((value: FormControl) => {
      if (value != null) {
        this.dataService.getPlayers(this.team.value, this.position.value).then(data => this.players = data)
        this.player.enable()
      }
    })
  }

  get team(): FormGroup {
    return this.formGroup.get('team')
  }
  get position(): FormGroup {
    return this.formGroup.get('position')
  }
  get player(): FormGroup {
    return this.formGroup.get('player')
  }
}

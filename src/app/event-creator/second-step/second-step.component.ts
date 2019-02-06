import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApiService } from '../../core/services/api.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


interface AppState {
  name: string;
}


@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondStepComponent implements OnInit {

  locations: Array<any>;
  selectedLocation;
  creatorStore$: Observable<any>;
  state;
  moreInfoForm: FormGroup;

  get venue(): FormControl {
    return this.moreInfoForm.get('venue') as FormControl;
  }

  get address(): FormControl {
    return this.moreInfoForm.get('address') as FormControl;
  }

  get website(): FormControl {
    return this.moreInfoForm.get('website') as FormControl;
  }

  get location(): FormControl {
    return this.moreInfoForm.get('location') as FormControl;
  }


  constructor(private router: Router,
              private lc: Location,
              private api: ApiService,
              private fb: FormBuilder,
              private store: Store<AppState>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.creatorStore$ = this.store.select('event-creator').pipe(
      tap(state => {
        this.state = state;
      })
    );

    this.api.getLocations().subscribe(data => {
      this.locations = data;
    });

    this.moreInfoForm = this.fb.group({
      venue: [],
      address: [],
      website: [],
      location: []
    });
  }

  submit() {

  }

  async onNext() {
    await this.router.navigate(['../third'], {relativeTo: this.route});
  }

  async onBack() {
    this.lc.back();
  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}

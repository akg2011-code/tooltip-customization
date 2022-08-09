import { Implement } from '@angular/cli/lib/config/workspace-schema';
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { MatTooltip } from '@angular/material/tooltip/tooltip';

/**
 * @title Tooltip with a custom position
 */
@Component({
  selector: 'tooltip-position-example',
  templateUrl: 'tooltip-position-example.html',
  styleUrls: ['tooltip-position-example.css'],
  encapsulation: ViewEncapsulation.None,

})
export class TooltipPositionExample implements OnInit{

  @ViewChild('tooltip', { static: true }) public tooltip: MatTooltip;


ngOnInit(): void {
 this.tooltip.show();
}
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
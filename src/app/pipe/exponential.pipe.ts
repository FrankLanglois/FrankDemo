/**
 * Created by flangloi on 10/17/2016.
 */

/* CUSTOM PIPE */
/*
Implement PipeTransform
Remember to add the custom pipe in declarations section in the app.module.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);

    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

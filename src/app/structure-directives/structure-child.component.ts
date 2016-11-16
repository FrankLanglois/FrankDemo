/**
 * Created by flangloi on 10/20/2016.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'struc-child',
  template: '<div class="structChild"><div>Child Structure</div> <div>{{item}}</div></div>',
  styles:['.structChild {border: solid 1px black; margin: 10px;}']
})

export class StructureChildComponent {
  @Input() item: string;
}

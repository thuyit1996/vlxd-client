import { Component, Input, OnChanges, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { MODAL_ACTION_TYPE } from '../../utils/constant';
import { DestroyableDirective } from '../directive/destroyable.directive';
import { modalAction, modalAction$ } from './moda.helper';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends DestroyableDirective implements OnInit, OnDestroy {
  @Input('modalActionType') modalActionType: MODAL_ACTION_TYPE;
  @Input('modalHeader') modalHeader: string = '';
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  ngOnInit() {
    modalAction.pipe(takeUntil(this.destroy$)).subscribe(isOpen => {
      if (isOpen) {
        this.openWindow();
      }
    })
  }

  constructor(private windowService: NbWindowService) {
    super();
  }

  openWindow() {
    this.windowService.open(
      this.contentTemplate,
      {
        title: this.modalHeader,
        context: {
          text: 'some text to pass into template',
        },
      },
    );
  }

  ngOnDestroy() {
    modalAction$.next(false);
  }
}

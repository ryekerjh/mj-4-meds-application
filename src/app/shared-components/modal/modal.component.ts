//Core imports
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
//Models
import { Product } from '../../models/product';
//3rd Party Imports
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
 
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']  
})
export class ModalComponent {
  
  cart: Array<Product> = [];
  constructor(private bsModalRef: BsModalRef) {}

};
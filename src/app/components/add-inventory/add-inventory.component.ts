import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  inventory = {
    name: '',
    description: '',
    price: '' 
  };
  enableSave = false;
  constructor(
    private inventoryService: InventoryService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  updateValidation() {
    if(this.inventory.name && this.inventory.price && this.inventory.description) {
      this.enableSave = true;
    } else {
      this.enableSave = false;
    }
  }

  saveInventory() {
    const data = {
      name: this.inventory.name,
      price: this.inventory.price,
      description: this.inventory.description
    };

    this.inventoryService.create(data)
      .subscribe(
        response => {
          this.snackBar.open('Data Added successfully', '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'end',
            panelClass: 'success'
          })
          this.inventoryService.getAllInventories.emit();
        },
        error => {
          console.log(error);
        });
  }

  cancel() {
    this.inventoryService.cancelAdd.emit();
  }

}

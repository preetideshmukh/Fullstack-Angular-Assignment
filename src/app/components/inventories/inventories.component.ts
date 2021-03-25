import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InventoryService } from 'src/app/services/inventory.service';
import {MatPaginator} from '@angular/material'

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {
  inventories: any;
  currentInventory = null;
  currentIndex = -1;
  name = '';
  isAddClicked = false;
  selectedIndex = '';
  dataSource: MatTableDataSource<object>;
  getAllInventoriesSubscription: Subscription;
  cancelAddSubscription: Subscription;

  displayedColumns: string[] = ['name', 'description', 'price', 'action'];
  constructor(
    private inventoryService: InventoryService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.getAllInventoriesSubscription = this.inventoryService.getAllInventories.subscribe(() => {
      this.getInventories();
    });

    this.cancelAddSubscription = this.inventoryService.cancelAdd.subscribe(() => {
      this.cancel();
    })
  }

  private paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  ngOnInit() {
    this.getInventories();
  }

  edit(index) {
    this.selectedIndex = index;
  }

  getInventories() {
    this.isAddClicked = false;
    this.inventoryService.getAll()
      .subscribe(
        data => {
          this.inventories = data;
          this.dataSource = new MatTableDataSource(this.inventories);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.getInventories();
    this.currentInventory = null;
    this.currentIndex = -1;
  }

  updateInventory(id, element) {
    this.inventoryService.update(id, element)
      .subscribe(
        response => {
          console.log(response);
          this.snackBar.open('Data Updated successfully', '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'end',
            panelClass: 'success'
          })
          this.selectedIndex = '';
        },
        error => {
          console.log(error);
        });
  }

  deleteInventory(id) {
    this.inventoryService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
          this.router.navigate(['/inventories']);
        },
        error => {
          console.log(error);
        });
  }

  setDataSourceAttributes() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  cancel() {
    this.selectedIndex = '';
    this.isAddClicked = false;
  }

  searchName() {
    this.inventoryService.findByName(this.name)
      .subscribe(
        data => {
          this.inventories = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  addInventory() {
    this.isAddClicked = true;
  }

  ngOnDestroy() {
    this.cancelAddSubscription.unsubscribe();
    this.getAllInventoriesSubscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';
import { ProductsDataTransferService } from 'src/app/services/products/products-data-transfer.service';
import { ProductsService } from './../../../../services/products/products.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: []
})
export class DashboardHomeComponent implements OnInit {

  public productsList: Array<GetAllProductsResponse> = []

  constructor(
    private productsService: ProductsService,
    private messageService: MessageService,
    private productsDtService: ProductsDataTransferService
  ) { }

  ngOnInit(): void {
    this.getProductsDatas();
  }

  getProductsDatas(): void {
    this.productsService
      .getAllProducts()
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.productsList = response;
            this.productsDtService.setProductsDatas(this.productsList);
          }
        }, error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar produtos!',
            life: 2500
          })

        }
      })
  }

}


import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit {
  products: any[] = [];


  item: any;
  createMode: any;
  cars: any;



  deptObj: any = {

    "name": "",
    "price": 0,
    "imageUrl": "",
    "imageData": 0,
    "specifications": "",
    "Quantity": 0,
    "CreatedDate": ""


  };


  userList: any[] = [];
  CarList: any[] = [];

  carForm: any;
  result: any;

  constructor(private http: HttpClient) {


    this.getAllUser();
    this.getAllCar();
    this.getAllCar1();
  }
  ngOnInit(): void {
  }

  onGet(data: any) {
    const isDelete = confirm("Are you sure want to See Data");
    if (isDelete) {
      this.http.get("https://localhost:7162/api/Product", this.deptObj).subscribe((result: any) => {
        debugger;
        if (result.result) {
          alert("Department Deleted Success");
          this.getAllCar();


        } else {
          alert(result.meassage)
        }
      })

    }

  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to delete");
    if (isDelete) {
      this.http.delete(`https://localhost:7162/api/Product/${id}`).subscribe((result: any) => {
        debugger;
        if (result.result) {
          alert("Department Deleted Success");
          this.getAllCar();


        } else {
          alert(result.meassage)
        }
      })

    }

  }

  onSave() {
    const isDelete = confirm("Are you sure want to Save");
    if (isDelete) {
      debugger;
      this.http.post(`https://localhost:7162/api/Product}`
        , this.deptObj).subscribe((result: any) => {
          debugger;
          if (result.result) {
            alert("Department Created Success");
            this.getAllCar();


          } else {
            alert(result.meassage)
          }
        })

    }
  }

  onEdit(id: number) {

    this.http.get(`https://localhost:7162/api/Product/${id}`).subscribe((data: any) => {
      this.deptObj = data;
    });

  }

  // onUpdate() {
  //   const id = this.deptObj.id;
  //   this.http.put(`http://localhost:5177/api/Product/${id}`, this.deptObj, {
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .subscribe((result: any) => {
  //     if (result.result) {
  //       alert("Product Updated Successfully");
  //       this.getAllCar();
  //       this.cdr.detectChanges(); // Manually trigger change detection
  //     } else {
  //       alert(result.message);
  //     }
  //   });
  // }
  // test 1

  onUpdate() {

    const id = this.deptObj.id;
    this.http.put(`https://localhost:7162/api/Product/${id}`, JSON.stringify(this.deptObj), {
      headers: { 'Content-Type': 'application/json' }
    })
      .subscribe((result: any) => {
        if (result.result) {
          alert("Product Updated Successfully");
          this.updateProductInList(this.deptObj);

        } else {
          alert(result.message);
        }
      }, error => {
        console.error('Error updating product', error);
        if (error.status === 415) {
          alert('Unsupported Media Type. Please check the Content-Type header and request payload.');
        }
      });

  }

  updateProductInList(updatedProduct: any) {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }







  getAllCar1() {
    this.http.get('https://localhost:7162/api/Product')
      .subscribe((data: any) => {
        // Assuming you have a products array to store the fetched data
        this.products = data;

      }, error => {
        console.error('Error fetching products', error);
      });
  }


  // onUpdate() {
  //   const id = this.deptObj.id;
  //   const fd = new FormData();
  //   fd.append('file', this.deptObj);

  //   this.http.put(`http://localhost:5177/api/Product/${id}`, fd, {

  //   })
  //     .subscribe((result: any) => {
  //       if (result.result) {
  //         alert("Department Updated Success");
  //         this.getAllCar();
  //       } else {
  //         alert(result.message);
  //       }
  //     });
  // }

  onDownload() {
    const isDelete = confirm("Are you sure want to Download File");
    if (isDelete) {
      debugger;
      this.http.get("https://localhost:7162/api/Product/download"

      )
        .subscribe((result: any) => {
          debugger;
          if (result.result) {
            alert("Department Updated  Success");
            this.getAllCar();


          } else {
            alert(result.meassage)
          }
        })
    }


  }



  getAllUser() {

    this.http.get("https://dummyjson.com/products").subscribe((result: any) => {

      this.userList = result.products;

    });

  }

  getAllCar() {


    this.http.get("https://localhost:7162/api/Product").subscribe((result: any) => {

      this.CarList = result;

    });


  }
}
function someMethod() {
  throw new Error('Function not implemented.');
}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  myFunction() {
    var input, filter, table, tr, td, i, n;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    n = document.getElementById("Input").nodeValue;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[n];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  ngOnInit() {
    document.body.classList.remove('bg-img');
    document.body.classList.remove('bg-img');
    document.body.classList.remove('bg-img1');
  }

}

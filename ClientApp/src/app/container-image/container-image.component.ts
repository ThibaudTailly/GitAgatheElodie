import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-container-image',
  templateUrl: './container-image.component.html',
  styleUrls: ['./container-image.component.css']
})
export class ContainerImageComponent implements OnInit {
  prenom: string;
  banner2: string;
  textcadre: string;
  constructor(private route: Router) {

  }

  ngOnInit() {
    this.route.events
      .subscribe(
        (event: any) => {
          console.log(event);
        switch (event.url) {
          case "/blog":
              console.log("testbanner" + event.url);
            this.banner2 = "banner3";
            this.textcadre = "Le blog Alimevo"
            console.log("testbanner2" + this.banner2);
            break;
          case "/accompagnement":
            console.log("testbanner" + event.url);
            this.banner2 = "banner3";
            this.textcadre = "Le blog Alimevo"
            console.log("testbanner2" + this.banner2);
            break;
          case "/":
            this.banner2 = "banner2";
            this.textcadre = "L'expertise des régimes spécifiques au service des pros";
            break;
        defaut:

        break;
        }
      }
      
    );
    /*console.log("test1");
    if (this.route.url.valueOf() == "/blog") {
      console.log("salut");
      this.banner2 = "banner3";
      this.textcadre = "Le blog Alimevo";
    }*/

  
  }
  
 

}

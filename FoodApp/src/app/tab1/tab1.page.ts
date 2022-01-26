import { Component } from '@angular/core';
import { FoodAppiService } from '../api/food-appi.service';
import { LoadingController } from '@ionic/angular'
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myinput:String =''
  myoutput: String;
  myphoto: any;
  myurl: any;
  myPhotenda: any;
  myTime: any;
  loadingDialog: HTMLIonLoadingElement;
  KEY_HISTORY = "search_history"
  KEY_LIBRARY = "my_library"
  constructor(private FoodService: FoodAppiService, public loadingController: LoadingController) 
  {
  }
  public async btnSearchClicked()
  {
    this.FoodService.getRecipe(this.myinput).subscribe( async (data) => 
      {
      this.myoutput = data['results']['0']['title'];
      this.myphoto = data['results']['0']['image'];
      this.myurl= data['results']['0']['sourceUrl'];
      this.myTime = data['results']['0']['readyInMinutes'];
      console.log(data);
      });
      
      var entry = { "input": this.myinput};
      var history = JSON.parse((await Storage.get({key: this.KEY_HISTORY})).value);
      
      if (history == null) {
        history = [];
      }
      history.unshift(entry)
      await Storage.set({
        key: this.KEY_HISTORY,
        value: JSON.stringify(history),
      });
    }
}


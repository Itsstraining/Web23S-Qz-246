import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
   time = 10;

   isShowCountdown = true;
   isShowQuestion = true;
ngOnInit() {
    this.makeIteration();
}

    makeIteration = (): void => {
    console.clear();
    if (this.time > 0) {
        console.log(this.time);
        setTimeout(this.makeIteration, 1000); // 1 second waiting

    }else if(this.time === 0){
        // console.log("Time is over");
        this.isShowCountdown = true;
        this.isShowQuestion = true;
    }
    console.log(this.time);
    this.time -= 1;
};

}

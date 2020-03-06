import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SportsService } from 'src/app/services/sports.service';
import { Router } from '@angular/router';
import { FormData } from 'src/app/models/formData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // #1 two way binding
  newTodosInputValue: string = '';
  // #2 watch child
  @ViewChild('todoItem', { static: false })
  newTodosInput: ElementRef;

  todoItems: any[] = [];

  // to avoid triggeting the event anytime we type a letter
  private newItemSubject = new Subject<KeyboardEvent>();

  // select array options
  selectStuff: string[] = [];

  constructor(private sportsSrv: SportsService,
    private router: Router) { }

  ngOnInit() {
    this.newItemSubject.asObservable()
      .pipe(
        debounceTime(300),
        distinctUntilChanged())
      .subscribe(val => {
        console.log('keyEvent: ', val);
        if (val.keyCode !== 13) return;
        return this.addNewItem2();
      }
      );
    this.selectStuff = this.sportsSrv.getSports();
  }

  addNewItem = (todo: string) => {
    this.todoItems.push({ value: todo, important: false });
    this.newTodosInput.nativeElement.value = '';
  };

  addNewItem2 = () => {
    this.todoItems.push({ value: this.newTodosInputValue, important: false });
    this.newTodosInputValue = '';
  }

  didYouPressEnter(args: KeyboardEvent) {
    // console.log(args);
    // if (args.keyCode !== 13) return;
    // this.addNewItem2();
    this.newItemSubject.next(args);
  }

  doSomethingWithSubmitedStuff(data: FormData) {
    console.log(data);
    this.router.navigate(['/contact', data.email]);
  }

  ngOnDistroy() {
    this.newItemSubject.unsubscribe();
  }

}

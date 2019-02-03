/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskBackpackComponent } from './task-backpack.component';

describe('TaskBackpackComponent', () => {
  let component: TaskBackpackComponent;
  let fixture: ComponentFixture<TaskBackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

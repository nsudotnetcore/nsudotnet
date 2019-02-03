/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GithubManualComponent } from './github-manual.component';

describe('GithubManualComponent', () => {
  let component: GithubManualComponent;
  let fixture: ComponentFixture<GithubManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

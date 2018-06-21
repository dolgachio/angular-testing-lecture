import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWidgetWithTestbedComponent } from './login-widget-with-testbed.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginWidgetWithTestbedComponent', () => {
  let sut: LoginWidgetWithTestbedComponent;
  let fixture: ComponentFixture<LoginWidgetWithTestbedComponent>;

  // Basic configuration start
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWidgetWithTestbedComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWidgetWithTestbedComponent); // abstraction used for test

    sut = fixture.componentInstance;
  });
  // Basic configuration end

  // DOM testing start
  it('should have a default heading', () => {
    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    const h1: HTMLElement = nativeElement.querySelector('h1');

    expect(h1.textContent).toBe('you are logged out!');
  });

  it('should have a default heading with debug element', () => {
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const h1DebugElement = debugElement.query(By.css('h1'));
    const h1 = h1DebugElement.nativeElement;

    expect(h1.textContent).toBe('you are logged out!');
  });

  it('should have a default heading with debug element', () => {
    sut.isLoggedIn = true;
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const h1DebugElement = debugElement.query(By.css('h1'));
    const h1 = h1DebugElement.nativeElement;

    expect(h1.textContent).toBe('you are logged in!');
  });

});

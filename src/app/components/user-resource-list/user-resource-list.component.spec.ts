import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResourceListComponent } from './user-resource-list.component';

describe('UserResourceListComponent', () => {
  let component: UserResourceListComponent;
  let fixture: ComponentFixture<UserResourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserResourceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AboutMeComponent', () => {
	let component: AboutMeComponent;
	let fixture: ComponentFixture<AboutMeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AboutMeComponent],
			imports: [HttpClientTestingModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutMeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

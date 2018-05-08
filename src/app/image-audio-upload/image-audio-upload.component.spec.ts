import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAudioUploadComponent } from './image-audio-upload.component';

describe('ImageAudioUploadComponent', () => {
  let component: ImageAudioUploadComponent;
  let fixture: ComponentFixture<ImageAudioUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAudioUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAudioUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

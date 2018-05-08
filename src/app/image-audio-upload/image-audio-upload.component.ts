import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-image-audio-upload',
  templateUrl: './image-audio-upload.component.html',
  styleUrls: ['./image-audio-upload.component.css']
})
export class ImageAudioUploadComponent implements OnInit {


  imageUrl = '/assets/img/default.png';
  audioUrl  = null;
  uploadImageFile: File = null;
  uploadAudioFile: File = null;
  toeflFiles: Array<File> = [];

  constructor(private http: Http) { }

  ngOnInit() {
  }
  handleImageFileInput(file: FileList) {
    this.uploadImageFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.uploadImageFile);
  }
  handleAudioFileInput(file: FileList) {
    this.uploadAudioFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.audioUrl = event.target.result;
    };
    reader.readAsDataURL(this.uploadAudioFile);
  }
  onSubmit(form: NgForm) {
    const fd = new FormData();
    const toeflDesc = 'this is a update testing documents';
    fd.append('toeflDesc', toeflDesc);
    if ( this.uploadImageFile ) {
      fd.append('toeflFiles', this.uploadImageFile);
    }
    if ( this.uploadAudioFile ) {
      fd.append('toeflFiles', this.uploadAudioFile);
    }

    console.log('form data is ' + fd.toString());

    const token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InByb3ZpZGVyIjoiIiwiYXV0aFRva2VuIjoiIiwidG9lZmxJZCI6WyI1YWVmMjZlZTlmMGY5NjdhYjY5NDI0NWYiLCI1YWVmMjc5NjlmMGY5NjdhYjY5NDI0NjAiLCI1YWVmMjc5ZTlmMGY5NjdhYjY5NDI0NjEiLCI1YWVmMjdhNTlmMGY5NjdhYjY5NDI0NjIiLCI1YWVmMmE2YTFlZWY5NzdiZDdhOTA1NzEiLCI1YWVmMmE3MTFlZWY5NzdiZDdhOTA1NzIiLCI1YWYwMzA2YzU3YjdjNjEyMGRiZDUyNDYiLCI1YWYwMzA3MzU3YjdjNjEyMGRiZDUyNDciLCI1YWYwMzA3ODU3YjdjNjEyMGRiZDUyNDgiLCI1YWYxYjQ3NDVkZTdhYTQzZmFhNjYxNjQiLCI1YWYxYjU5MzVkZTdhYTQzZmFhNjYxNjUiXSwiY3JlYXRlZF9hdCI6IjIwMTgtMDUtMDZUMTY6MDA6MjkuMDgyWiIsInVwZGF0ZWRfYXQiOiIyMDE4LTA1LTA2VDE2OjAwOjI5LjA4MloiLCJfaWQiOiI1YWVmMjY5ZDlmMGY5NjdhYjY5NDI0NWUiLCJlbWFpbCI6InRvbnloYTNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkYUJpOTBxMmtBLmdNSklyL1cuTTVtLmladTZDTThmeUlXVFc4WjdwS1lNWWk0Qm1TbGR4bTYiLCJuYW1lIjoidG9ueSBoYSIsInBlcm1pc3Npb25UYWciOiJ0ZWFjaGVyIiwiX192IjoxNn0sImlhdCI6MTUyNTc5MjgyNiwiZXhwIjoxNTI1Nzk2NDI2fQ.tPCdb8X2WorxNx1WHCjQ9xftdcdOl1dGNGm7KK3TZXw'
    
    this.http.patch('http://192.168.0.3:3000/registerExam/101' + token, fd)
    .subscribe(res => {
      console.log(res);
    });

    // this.http.patch('http://192.168.0.3:3000/registerExam/101' + token, fd)
    // .subscribe(res => {
    //   console.log(res);
    // });

  }
}

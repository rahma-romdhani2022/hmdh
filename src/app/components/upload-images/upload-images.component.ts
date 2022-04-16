import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  selectedFiles: FileList;
  selectedFile : any ; 
  imagee : any ; 
  imageee : any ; 
  progressInfos = [];
  images: any[] = [];
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFilesService) { }

  ngOnInit() {
   // this.fileInfos = this.uploadService.getFiles();
  }
 
  selectFiles(event) {

    const files = event.target.files;
    let isImage = true;
    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
      var reader = new FileReader();
      var reader1 = new FileReader();
      var reader2 = new FileReader();
      var reader3 = new FileReader();
      var reader4 = new FileReader();
      var reader5 = new FileReader();
     for (let i = 0; i < this.selectedFiles.length; i++) {
      this.selectedFile = this.selectedFiles[i];
       if(i==0){
        reader1.readAsDataURL(this.selectedFiles[i]);
        reader1.onload = (event) => {
        this.imagee = reader1.result;
        this.images[i]=this.imagee ;
        console.log( this.images[i])} }
        if(i==1){
        reader2.readAsDataURL(this.selectedFiles[i]);
        reader2.onload = (event) => {
          this.imagee = reader2.result;
          this.images[i]=this.imagee ;
          console.log( this.images[i])}}
        if(i==2){
        reader3.readAsDataURL(this.selectedFiles[i]);
        reader3.onload = (event) => {
          this.imagee = reader3.result;
          this.images[i]=this.imagee ;
          console.log( this.images[i])}}
        if(i==3){
         reader4.readAsDataURL(this.selectedFiles[i]);
         reader4.onload = (event) => {
          this.imagee = reader4.result;
          this.images[i]=this.imagee ;
          console.log( this.images[i])}}
        if(i==4){
        reader5.readAsDataURL(this.selectedFiles[i]);
        reader5.onload = (event) => {
        this.imagee = reader5.result;
        this.images[i]=this.imagee ;
        console.log( this.images[i])}}
      }
    } else {
      this.selectedFiles = undefined;
    }
  }

 
  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
        for (let i = 0; i < this.selectedFiles.length; i++) {
        if(i==0){
        this.uploadService.upload1(1/* id consu */ , file).subscribe(
        event => {

        });}
        if(i==1){
        this.uploadService.upload2(1, file).subscribe(
        event => {

        });}
        if(i==2){
        this.uploadService.upload3(1 , file).subscribe(
        event => {

        });}
        if(i==3){
        this.uploadService.upload4(1, file).subscribe(
        event => {

        });}
        if(i==4){
        this.uploadService.upload5(1 , file).subscribe(
        event => {

        });}}
        }

  uploadFiles() {
    // api consultation  bch tt7at lahneee  , subscribe ttsaker fi commentaire  num2 --> post
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
    // commentaire num2
  
}
}
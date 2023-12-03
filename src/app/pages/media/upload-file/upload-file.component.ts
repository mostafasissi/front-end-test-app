import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MediaService } from 'src/app/data/services/media/media.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  uploadedMedia: Array<any> = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit() {}

  onFileBrowse(event: Event) {
    const target = event.target as HTMLInputElement;
    this.processFiles(target.files);
  }
  processFiles(files : any) {
    for (const file of files) {
      var reader = new FileReader();
      reader.readAsDataURL(file); // read file as data url
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed

        this.uploadedMedia.push({
          FileName: file.name,
          FileSize:
            this.mediaService.getFileSize(file.size) +
            ' ' +
            this.mediaService.getFileSizeUnit(file.size),
          FileType: file.type,
          FileUrl: event.target.result,
          FileProgessSize: 0,
          FileProgress: 0 , 
          ngUnsubscribe: new Subject<any>(),
        });

        this.startProgress(file, this.uploadedMedia.length - 1);
      };
    }
  }

  async startProgress(file : any, index : any) {
    let filteredFile = this.uploadedMedia
      .filter((u, index) => index === index)
      .pop();

    if (filteredFile != null) {
      let fileSize = this.mediaService.getFileSize(file.size);
      let fileSizeInWords = this.mediaService.getFileSizeUnit(file.size);
      if (this.mediaService.isApiSetup) {
        let formData = new FormData();
        formData.append('File', file);

        this.mediaService
          .uploadMedia(formData)
          .pipe(takeUntil(file.ngUnsubscribe))
          .subscribe(
            (res: any) => {
              if (res.status === 'progress') {
                let completedPercentage = parseFloat(res.message);
                filteredFile.FileProgessSize = `${(
                  (fileSize * completedPercentage) /
                  100
                ).toFixed(2)} ${fileSizeInWords}`;
                filteredFile.FileProgress = completedPercentage;
              } else if (res.status === 'completed') {
                filteredFile.Id = res.Id;

                filteredFile.FileProgessSize = fileSize + ' ' + fileSizeInWords;
                filteredFile.FileProgress = 100;
              }
            },
            (error: any) => {
              console.log('file upload error');
              console.log(error);
            }
          );
      } else {
        for (
          var f = 0;
          f < fileSize + fileSize * 0.0001;
          f += fileSize * 0.01
        ) {
          filteredFile.FileProgessSize = f.toFixed(2) + ' ' + fileSizeInWords;
          var percentUploaded = Math.round((f / fileSize) * 100);
          filteredFile.FileProgress = percentUploaded;
          await this.fakeWaiter(Math.floor(Math.random() * 35) + 1);
        }
      }
    }
  }

  fakeWaiter(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  removeImage(idx: number) {
    this.uploadedMedia = this.uploadedMedia.filter((u, index) => index !== idx);
  }
}

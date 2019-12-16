import { Component, OnInit, ViewChild } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
	base64;
	options = {
		video: true,
		audio: true
	};
	constructor(private http: HttpClient) {}
	ngOnInit() {}
	genBase64(webcam: WebCamComponent) {
		webcam
			.getBase64()
			.then(base => {
				this.base64 = base;
				console.log(base);
			})
			.catch(e => console.error(e));
	}

	//get HTML5 FormData object and pretend to post to server
	genPostData(webcam: WebCamComponent) {
		webcam
			.captureAsFormData({ fileName: 'file.jpg' })
			.then(formData => this.postFormData(formData))
			.catch(e => console.error(e));
	}
	postFormData(formData) {
		return this.http.post('http://www.abcd.com/', formData);
	}

	onCamError(err) {}

	onCamSuccess() {}
}

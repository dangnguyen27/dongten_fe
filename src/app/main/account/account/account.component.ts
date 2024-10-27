import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { CmsService } from 'src/app/services/cms.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
	currentUser: any;
	notifications: any;
	paramsNotifications = {
		page: 1,
		page_size: 15
	}
	constructor(
		private readonly authenService: AuthenService,
		private readonly cmsService: CmsService
	) {

	}

	ngOnInit(): void {
		this.currentUser = this.authenService.currentUserValue;
		this.getData();
	}

	getData() {
		this.cmsService.getNotifications(this.paramsNotifications).subscribe(res => {
			this.notifications = res.data.items;
		})
	}

}

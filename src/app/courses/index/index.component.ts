import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'courses-index',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {

    data: any[] = [];
    constructor(private service: DataService) {}

    ngOnInit(): void {
        this.service.getAll('courses').subscribe((res: any[]) => {
            console.log(res);
            this.data = res
        });
    }
}

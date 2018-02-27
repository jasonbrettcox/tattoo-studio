import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';


@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
id: string;
client: Client = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  currentProject: '',
  lastAppt: '',
  
}

  constructor(private afs: AngularFirestore,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
              ) { }

              ngOnInit() {
                // Get id from url
                this.id = this.route.snapshot.params['id'];
                // Get client
                this.clientService.getClient(this.id).subscribe(client => this.client = client);
              }
            
              onSubmit({value, valid}: {value: Client, valid: boolean}) {
                if(!valid) {
                  this.flashMessage.show('Please fill out the form correctly', {
                    cssClass: 'alert-danger', timeout: 4000
                  });
                } else {
                  // Add id to client
                  value.id = this.id;
                  // Update client
                  this.clientService.updateClient(value);
                  this.flashMessage.show('Client updated', {
                    cssClass: 'alert-success', timeout: 4000
                  });
                  this.router.navigate(['/client/'+this.id]);
                }
              }
            }
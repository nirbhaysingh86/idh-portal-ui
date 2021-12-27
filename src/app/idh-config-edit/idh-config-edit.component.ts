import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-idh-edit',
  templateUrl: './idh-config-edit.component.html',
  styleUrls: ['./idh-config-edit.component.scss']
})

export class IdhConfigEditComponent implements OnInit {
  idhConfig = 'Angular';

  configeditForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.configeditForm = this.fb.group({
      idhConfig: '',
      activeBatch: this.fb.array([]),
      vendTopic: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.activeBatch().push(this.newActiveBatch());
    this.vendTopic().push(this.newVendTopic());
  }

  activeBatch(): FormArray {
    return this.configeditForm.get("activeBatch") as FormArray
  }

  newActiveBatch(): FormGroup {
    return this.fb.group({
      planName: '',
      status: '',
    })
  }

  

  addActiveBatch() {
    this.activeBatch().push(this.newActiveBatch());
  }

  removeActiveBatch(i: number) {
    this.activeBatch().removeAt(i);
  }


  newVendTopic(): FormGroup {
    return this.fb.group({
      name: '',
      endpoints: '',
      status:'',
      directlyVendPayload:''
    })
  }

  vendTopic(): FormArray {
    return this.configeditForm.get("vendTopic") as FormArray
  }

  addVendTopic() {
    this.vendTopic().push(this.newVendTopic());
  }

  removeVendTopic(i: number) {
    this.activeBatch().removeAt(i);
  }
   
  
  onSubmit() {
    console.log(this.configeditForm.value);
  }
}

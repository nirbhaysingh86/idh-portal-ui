import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-idh-edit',
  templateUrl: './idh-config-edit.component.html',
  styleUrls: ['./idh-config-edit.component.scss']
})

export class IdhConfigEditComponent implements OnInit {
  idhConfig = 'Angular';
  ingestDisplay: any;
  configeditForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.configeditForm = this.fb.group({
      idhConfig: '',
      errorHandling: '',
      configurationOption: this.fb.group({ ingestTaxonomy: '',copyToSource:'',dataLoadType:'',retainedVersion:'',escalationLevel:'priority1', }),
      projectDetail: this.fb.array([]),
      copyToLowerEnv: this.fb.array([]),
      activeBatch: this.fb.array([]),
      vendTopic: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.projectDetail().push(this.newProjectDetail());
    this.copyToLowerEnv().push(this.newCopyToLowerEnv());
    this.activeBatch().push(this.newActiveBatch());
    this.vendTopic().push(this.newVendTopic());
  }
  /** activeBatch */
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

  /** VendTopic */
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
    this.vendTopic().removeAt(i);
  }

  /** projectDetail */
  newProjectDetail(): FormGroup {
    return this.fb.group({
      keyword: '',
      value: '',
      
    })
  }

  projectDetail(): FormArray {
    return this.configeditForm.get("projectDetail") as FormArray
  }

  addProjectDetail() {
    this.projectDetail().push(this.newProjectDetail());
  }

  removeProjectDetail(i: number) {
    this.projectDetail().removeAt(i);
  }

  /** Copy To LowerEnv */
  newCopyToLowerEnv(): FormGroup {
    return this.fb.group({
      sequence: '',
      sourceEnv: '',
      targetEnv:''
    })
  }

  copyToLowerEnv(): FormArray {
    return this.configeditForm.get("copyToLowerEnv") as FormArray
  }

  addCopyToLowerEnv() {
    this.copyToLowerEnv().push(this.newCopyToLowerEnv());
  }

  removeCopyToLowerEnv(i: number) {
    this.copyToLowerEnv().removeAt(i);
  }
  /** Copy To LowerEnv */
  ingestChange(value: any) {
    this.ingestDisplay = value == 'no';
  }

  onSubmit() {
    console.log(this.configeditForm.value);
  }
}

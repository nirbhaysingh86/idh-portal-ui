import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-idh-edit',
  templateUrl: './idh-config-edit.component.html',
  styleUrls: ['./idh-config-edit.component.scss']
})

export class IdhConfigEditComponent implements OnInit {
  idhConfig = 'Angular';
  setBreadcrumbMenuatext: any;
  ingestDisplay: any;
  targetEnvDisplay: any;
  subAreaDisplay: any;
  configeditForm: FormGroup;
  ingestionSourceTable:any;
  constructor(private fb: FormBuilder) {
    let date = new Date();
    date.setDate(date.getDate() + 30);
    // add a day
    this.setBreadcrumbMenuatext = 'Edit';
    this.configeditForm = this.fb.group({
      idhConfig: '',
      errorHandling: '',
      configurationOption: this.fb.group({ ingestTaxonomy: '', copyToSource: '', dataLoadType: '', retainedVersion: '', escalationLevel: 'Priority 1' }),
      configBasicSetting: this.fb.group({ area:'', subarea:'',systemCode: '', objectCode:'', resource:'', ingestionSource :'Table',objectName:'',contentType:'Json', effectiveDate: new Date(), exipirationDate: date ,configurationStatus: 'Active' }),
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
    this.checkControlsDisplay();
  }

  checkControlsDisplay() {
    let val = this.configeditForm.get("configBasicSetting")?.value;
    this.ingestionSourceTable=val.ingestionSource=='table'
    this.subAreaDisplay = val.area != "";
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
      directlyVendPayload:'No'
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
  /** ingestion Change */
  ingestChange(value: any) {
    this.ingestDisplay = value == 'no';
  }
  /** Area change */
  areaSelection(value: any) {
    this.subAreaDisplay = value != '';
  }
  /** Source Env Selection */
  sourceEnvSelection(value: any) {
    this.targetEnvDisplay = value != '';
  }
  onSubmit() {
    console.log(this.configeditForm.value);
  }
}

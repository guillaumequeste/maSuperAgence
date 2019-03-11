import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from '../../services/properties.service';
import { Property } from '../../models/Property.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.propertyForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: ['']
    });
  }

  onSaveProperty() {
    const title = this.propertyForm.get('title').value;
    const category = this.propertyForm.get('category').value;
    const surface = this.propertyForm.get('surface').value;
    const rooms = this.propertyForm.get('rooms').value;
    const description = this.propertyForm.get('description').value;
    const newProperty = new Property(title, category, surface, rooms, description);
    this.propertiesService.createProperty(newProperty);
    $('#propertiesFormModal').modal('hide');
    this.propertyForm.reset();
  }

}

import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { PasswordStrengthService } from 'src/app/services/password-strength.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MainComponent),
      multi: true,
    },
  ],
})


export class MainComponent implements ControlValueAccessor, OnInit {
  form: FormGroup;
  passwordStrength: string = '';

  private onChange: any = () => {};
  private onTouched: any = () => {};


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: '',
    });
  }


  constructor(
    private passwordStrengthService: PasswordStrengthService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      password: '',
    });
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.form.patchValue({ password: value });
      this.checkPassword();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  checkPassword() {
    const password = this.form.value.password;
    this.passwordStrength =
      this.passwordStrengthService.checkPasswordStrength(password);
    this.onChange(this.passwordStrength);
    this.onTouched();
  }


}

import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatRippleModule,
        MatListModule,
    ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatRippleModule,
        MatListModule,
    ]
})
export class MaterialModule { }
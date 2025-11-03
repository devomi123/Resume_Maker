import { Component, Inject, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  imports: [MatButtonModule, MatDialogActions, MatIconModule, MatDialogContent],
  templateUrl: './delete-confirmation.component.html',
  styleUrl: './delete-confirmation.component.scss'
})
export class DeleteConfirmationComponent implements OnInit {
  // readonly dialogRef = inject(MatDialogRef<DeleteConfirmationComponent>);
  constructor(public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close()
  }
  delete() {
    this.dialogRef.close(true)
  }
}

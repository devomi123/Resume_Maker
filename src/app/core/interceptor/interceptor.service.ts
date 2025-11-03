
import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, finalize } from "rxjs";
import { environment } from '../../../environments/environment';
import { LoaderService } from '../services/loader.service';
import { ToastrAlertService } from '../services/toaster.service';
import { HttpErrorResponse } from '@angular/common/http';

export const InterceptorService: HttpInterceptorFn = (req, next) => {

  const toastrService = inject(ToastrAlertService);
  const loaderService = inject(LoaderService);
  const API_URL = environment.apiUrl;
  const token = "test";


  let clone:HttpRequest<any>;
  clone = req.clone({
    url: API_URL + req.url,
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
  });

  // loaderService.show();

  // return next(clone).pipe(
  //   catchError((err: HttpErrorResponse) => {
  //     if (err.status) {
  //       toastrService.showError(err.error?.message || 'An error occurred');
  //     }
  //     throw err;
  //   }),
  //   finalize(() => {
  //     loaderService.hide();
  //   })
  // );
  loaderService.show();
  return next(clone).pipe(
    catchError(async (err) => {
      console.log(err);

      if (err.status) {
        debugger
        switch (err.status) {
          case 400:
            if (typeof err?.error?.message == "string") {
              toastrService.showError(err?.error?.message);
            } else if (err?.error?.message.length > 0) {
              toastrService.showError(err?.error?.message[0].msg);
            } else {
              toastrService.showError(
                "Internal server error. Please contact your system administrator."
              );
            }
            break;

          case 401:
            if (typeof err?.error?.message == "string") {
              toastrService.showError(err?.error?.message);
            } else if (err?.error?.message.length > 0) {
              toastrService.showError(err?.error?.message[0].msg);
            } else {
              toastrService.showError(
                "Internal server error. Please contact your system administrator."
              );
            }
            break;
          case 404:
            if ( err?.error?.message == "User not found") {
              toastrService.showError(err?.error?.message);
            } else if (err?.error?.message.length > 0) {
              toastrService.showError(err?.error?.message[0].msg);
            } else {
              toastrService.showError(
                "Internal server error. Please contact your system administrator."
              );
            }
            break;

          case 412:
            if (typeof err?.error?.message == "string") {
              toastrService.showError(err?.error?.message);
            } else if (err?.error?.message.length > 0) {
              toastrService.showError(err?.error?.message[0].msg);
            } else {
              toastrService.showError(
                "Internal server error. Please contact your system administrator."
              );
            }
            break;

          case 429:
            toastrService.showError(
              "Too many requests. Please try again later."
            );
            break;

          case 440:
            toastrService.showError("Session Expired");
            break;

          case 500:
            if (typeof err?.error?.message == "string") {
              toastrService.showError(err?.error?.message);
            } else if (err?.error?.message.length > 0) {
              toastrService.showError(err?.error?.message[0].msg);
            } else {
              toastrService.showError(
                "Internal server error. Please contact your system administrator."
              );
            }
            break;

          default:
            if (typeof err?.error?.message == "string") {
              toastrService.showError(err?.error?.message);
            } else if (err?.error?.message.length > 0) {
              toastrService.showError(err?.error?.message[0].msg);
            } else {
              toastrService.showError(
                "Internal server error. Please contact your system administrator."
              );
            }

            break;
        }
      }
      throw err;
    }),
    finalize(() => {
      loaderService.hide();
    })
  );
};

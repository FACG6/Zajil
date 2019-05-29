import React from 'react';
import swal from 'sweetalert2';

function viewPopup(id, viewPopupHtmlString) {
  const span = document.createElement('span');
  const details = viewPopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    closeOnConfirm: true,
    html: span,
  });
}

function editPopup(id, editPopupHtmlString) {
  const span = document.createElement('span');
  const details = editPopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    closeOnConfirm: true,
    html: span,
  });
}

function deletePopup(id, deletePopupHtmlString) {
  const span = document.createElement('span');
  const details = deletePopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    closeOnConfirm: true,
    html: span,
  });
}

export { viewPopup, editPopup, deletePopup };

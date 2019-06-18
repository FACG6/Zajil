//import React from 'react';
import swal from 'sweetalert2';
import './style.css';

const viewPopup = (id, DataToBeDisplayedObject ,viewPopupHtmlString) => {
  const span = document.createElement('span');
  const details = viewPopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'تعديل',
    cancelButtonText: 'إغلاق',
    cancelButtonColor: '#2b2a37',
    closeOnConfirm: true,
    reverseButtons: true,
    html: span,
  });
};

const editPopup = (id, DataToBeDisplayedObject, editPopupHtmlString) => {
  const span = document.createElement('span');
  const details = editPopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#ffc700bd',
    confirmButtonText: 'تعديل',
    cancelButtonText: 'إغلاق',
    cancelButtonColor: '#2b2a37',
    closeOnConfirm: true,
    reverseButtons: true,
    html: span,
  });
};

const deletePopup = (id, DataToBeDisplayedObject, deletePopupHtmlString) => {
  const span = document.createElement('span');
  const details = deletePopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#ff4343',
    confirmButtonText: 'حذف',
    cancelButtonText: 'إغلاق',
    cancelButtonColor: '#2b2a37',
    closeOnConfirm: true,
    reverseButtons: true,
    html: span,
  });
};

export { viewPopup, editPopup, deletePopup };

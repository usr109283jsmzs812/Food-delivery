import { makeAutoObservable } from "mobx";
import { string } from "yup/lib/locale";

// interface UserStoreProps {
//   _isAuth: boolean;
//   _user: any;
// }

export default class CategoriesStore {
  _salads: any;
  _deserts: any;
  _firstDishes: any;
  _secondDishes: any;
  _beverages: any;
  _canning: any;
  _sauces: any;
  _categoryLength: number;
  _perPage: number;
  _currentPage: any;
  _currentCategory: any;
  _modalObject: any;
  _openModal: boolean;
  _filter: string;
  _keyCATEGORY: any;
  _nameCurrentCategory: string;

  constructor() {
    this._salads = [];
    this._deserts = [];
    this._firstDishes = [];
    this._secondDishes = [];
    this._beverages = [];
    this._canning = [];
    this._sauces = [];
    this._modalObject = {};
    this._openModal = false;

    this._nameCurrentCategory = "TEST";
    this._currentCategory = [];
    this._filter = "";
    this._categoryLength = 0;
    this._perPage = 10;
    this._currentPage = 0;
    makeAutoObservable(this);
  }

  setNameCurrentCategory(name) {
    this._nameCurrentCategory = name;
  }

  setOpenModal(bool) {
    this._openModal = bool;
  }

  valFilter() {
    let matchesFilter = new RegExp(this._filter, "i");
    return this._currentCategory.filter((rec) => {
      return matchesFilter.test(rec.header);
    });
  }

  setCurrentCategory(items) {
    this._currentCategory = items;
  }

  setSalads(items) {
    this._salads = items;
  }
  setDeserts(items) {
    this._deserts = items;
  }
  setFirstDishes(items) {
    this._firstDishes = items;
  }
  setSecondDishes(items) {
    this._secondDishes = items;
  }
  setBeverages(items) {
    this._beverages = items;
  }
  setCanning(items) {
    this._canning = items;
  }
  setSauces(items) {
    this._sauces = items;
  }

  setModalObject(obj) {
    this._modalObject = obj;
    // this.valFilter()
  }

  setCategoryLength(num) {
    this._categoryLength = num;
  }

  setCurrentPage(num) {
    this._currentPage = num;
  }

  setPerPage(num) {
    this._perPage = num;
  }

  get nameCurrentCategory() {
    return this._nameCurrentCategory;
  }
  get openModal() {
    return this._openModal;
  }

  get salads() {
    return this._salads;
  }
  get deserts() {
    return this._deserts;
  }
  get firstDishes() {
    return this._firstDishes;
  }
  get secondDishes() {
    return this._secondDishes;
  }
  get beverages() {
    return this._beverages;
  }
  get canning() {
    return this._canning;
  }
  get sauces() {
    return this._sauces;
  }
  get modalObject() {
    return this._modalObject;
  }
  get categoryLength() {
    return this._categoryLength;
  }
  get currentPage() {
    return this._currentPage;
  }
  get currentCategory() {
    return this._currentCategory;
  }
  get filter() {
    return this._filter;
  }
  get perPage() {
    return this._perPage;
  }
}

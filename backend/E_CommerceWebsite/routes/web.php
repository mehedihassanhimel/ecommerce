<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeliveryManController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Employer CRUD
Route::get('/employee/dash', [EmployeeController::class,'home'])->name('employee.home')->middleware('ValidEmployee');

//DeliveryMan CRUD
Route::get('/deliveryMan/create',[DeliveryManController::class,'createDeliveryMan'])->name('deliveryMan.create')->middleware('ValidEmployee');
Route::post('/deliveryMan/create',[DeliveryManController::class,'createSubmit'])->name('deliveryMan.create')->middleware('ValidEmployee');
Route::get('/deliveryMan/list',[DeliveryManController::class,'deliveryManList'])->name('deliveryMan.list')->middleware('ValidEmployee');
Route::get('deliveryMan/edit/{id}/{name}',[DeliveryManController::class,'deliveryManEdit'])->middleware('ValidEmployee');
Route::post('/deliveryMan/edit',[DeliveryManController::class,'editSubmit'])->name('deliveryMan.edit')->middleware('ValidEmployee');
Route::get('/deliveryMan/delete/{id}/{name}',[DeliveryManController::class,'delete'])->middleware('ValidEmployee');

//DeliveryMan search
Route::get('/deliveryMan/search',[DeliveryManController::class,'search'])->name('deliveryMan.search')->middleware('ValidEmployee');

// Category CRUD
Route::get('/category/create',[CategoryController::class,'createCategory'])->name('category.create')->middleware('ValidEmployee');
Route::post('/category/create',[CategoryController::class,'createSubmit'])->name('category.create')->middleware('ValidEmployee');
Route::get('/category/list',[CategoryController::class,'categoryList'])->name('category.list')->middleware('ValidEmployee');
Route::get('category/edit/{id}/{name}',[CategoryController::class,'categoryEdit'])->middleware('ValidEmployee');
Route::post('/category/edit',[CategoryController::class,'editSubmit'])->name('category.edit')->middleware('ValidEmployee');
Route::get('/category/delete/{id}/{name}',[CategoryController::class,'delete'])->middleware('ValidEmployee');

//Category search
Route::get('/category/search',[CategoryController::class,'search'])->name('category.search')->middleware('ValidEmployee');

// Product CRUD
Route::get('/product/create',[ProductController::class,'createProduct'])->name('product.create')->middleware('ValidEmployee');
Route::post('/product/create',[ProductController::class,'createSubmit'])->name('product.create')->middleware('ValidEmployee');
Route::get('/product/list',[ProductController::class,'productList'])->name('product.list')->middleware('ValidEmployee');
Route::get('product/edit/{id}/{name}',[ProductController::class,'productEdit'])->middleware('ValidEmployee');
Route::post('/product/edit',[ProductController::class,'editSubmit'])->name('product.edit')->middleware('ValidEmployee');
Route::get('/product/delete/{id}/{name}',[ProductController::class,'delete'])->middleware('ValidEmployee');

//Product search
Route::get('/product/search',[ProductController::class,'search'])->name('product.search')->middleware('ValidEmployee');

//Manage Customer
Route::get('/customer/list',[CustomerController::class,'customerList'])->name('customer.list')->middleware('ValidEmployee');
Route::get('/customer/deactive/{id}/{name}',[CustomerController::class,'deactive'])->middleware('ValidEmployee');
Route::get('/customer/active/{id}/{name}',[CustomerController::class,'active'])->middleware('ValidEmployee');

//Manage Order
Route::get('/order/list',[OrderController::class,'orderList'])->name('order.list')->middleware('ValidEmployee');
Route::get('/order/delete/{id}',[OrderController::class,'delete'])->middleware('ValidEmployee');
Route::get('/order/confirm/list',[OrderController::class,'orderConfirmList'])->name('order.confirmList')->middleware('ValidEmployee');
Route::get('/order/confirm/{id}',[OrderController::class,'confirm'])->middleware('ValidEmployee');

//Login
Route::get('/',[LoginController::class,'login'])->name('login');
Route::post('/',[LoginController::class,'loginSubmit'])->name('login');
Route::get('/logout',[LoginController::class,'logout'])->name('logout');
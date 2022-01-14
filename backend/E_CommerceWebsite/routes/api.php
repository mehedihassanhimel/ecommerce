<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryApiController;
use App\Http\Controllers\ProductApiController;
use App\Http\Controllers\DeliveryManApiController;
use App\Http\Controllers\LoginApiController;
use App\Http\Controllers\LogoutApiController;
use App\Http\Controllers\CustomerApiControlle;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Category
Route::get('/category/list',[CategoryApiController::class,'CategoryApiList'])->middleware('APIAuth');
Route::get('/category/delete/{id}',[CategoryApiController::class,'CategoryAPIdelete'])->middleware('APIAuth');
Route::post('/add/category',[CategoryApiController::class,'CategoryAPICreate'])->middleware('APIAuth');
Route::get('/edit/category/{id}/{name}',[CategoryApiController::class,'CategoryApiEdit'])->middleware('APIAuth');
Route::post('/edit/category',[CategoryApiController::class,'CategoryApiEditSubmit'])->middleware('APIAuth');

//Product
Route::get('/product/list',[ProductApiController::class,'ProductApiList'])->middleware('APIAuth');
Route::post('/add/product',[ProductApiController::class,'ProductAPICreate'])->middleware('APIAuth');
Route::get('/edit/product/{id}',[ProductApiController::class,'ProductApiEdit'])->middleware('APIAuth');
Route::post('/edit/product',[ProductApiController::class,'ProductApiEditSubmit'])->middleware('APIAuth');
Route::get('/product/delete/{id}',[ProductApiController::class,'ProductAPIdelete'])->middleware('APIAuth');
Route::get('/product/details/{id}/{name}',[ProductApiController::class,'ProductAPIDetails'])->middleware('APIAuth');

//Employee
Route::get('/deliveryMan/list',[DeliveryManApiController::class,'DeliveryManApiList'])->middleware('APIAuth');
Route::get('/deliveryMan/details/{id}/{name}',[DeliveryManApiController::class,'DeliveryManAPIDetails'])->middleware('APIAuth');
Route::post('/add/deliveryMan',[DeliveryManApiController::class,'DeliveryManAPICreate'])->middleware('APIAuth');
Route::get('/deliveryMan/delete/{id}',[DeliveryManApiController::class,'DeliveryManAPIdelete'])->middleware('APIAuth');
Route::get('/edit/deliveryMan/{id}',[DeliveryManApiController::class,'DeliveryManApiEdit'])->middleware('APIAuth');
Route::post('/edit/deliveryMan',[DeliveryManApiController::class,'DeliveryManApiEditSubmit'])->middleware('APIAuth');


//login
Route::get('/logout/{tokenkey}',[LogoutApiController::class,'logout']);
Route::post('/login',[LoginApiController::class,'loginApiSubmit'])->name('login');

//Manage Customer
Route::get('/customer/list',[CustomerApiControlle::class,'customerList']);
Route::get('/deactive/customer/{id}',[CustomerApiControlle::class,'deactive']);
Route::get('/active/customer/{id}',[CustomerApiControlle::class,'active']);


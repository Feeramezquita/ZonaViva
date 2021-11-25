<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ItemController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

{/*Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function () {

    Route::get('/checkingAuthenticated', function (){
        return response()->json(['message'=>'You are in', 'status'=>200], 200);
    });
});


Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('logout', [AuthController::class, 'logout']);
});*/}
// Products
Route::get('/admin/productos', [ItemController::class, 'index']);
Route::post('/admin/anadirProductos', [ItemController::class, 'store']);
Route::delete('/admin/deleteProduct/{id}', [ItemController::class, 'destroy']);
Route::get('/admin/editProduct/{id}', [ItemController::class, 'edit']);
Route::post('/admin/updateProduct/{id}', [ItemController::class, 'update']);


<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\UserController;
use App\Models\User;

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

// Products
Route::get('/admin/productos', [ItemController::class, 'index']);
Route::post('/admin/anadirProductos', [ItemController::class, 'store']);
Route::delete('/admin/deleteProduct/{id}', [ItemController::class, 'destroy']);
Route::get('/admin/editProduct/{id}', [ItemController::class, 'edit']);
Route::post('/admin/updateProduct/{id}', [ItemController::class, 'update']);

// Usuarios
Route::get('/admin/usuarios', [UserController::class, 'index']);
Route::post('/admin/anadirUsuarios', [UserController::class, 'store']);
Route::delete('/admin/deleteUsuario/{id}', [UserController::class, 'destroy']);
Route::get('/admin/editUsuario/{id}', [UserController::class, 'edit']);
Route::post('/admin/updateUsuario/{id}', [UserController::class, 'update']);




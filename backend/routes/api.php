<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\InscriptionController;

Route::middleware('api')->group(function () {
    Route::post('/register', [InscriptionController::class, 'register']);
    // ...autres routes d'API
});

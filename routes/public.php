<?php

use App\Http\Controllers\PublicUrlController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/gen-1/{url}', [PublicUrlController::class, 'index'])->name('public_url.index');
<?php

use App\Http\Controllers\PublicUrlController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/guestbook/{event_id}', [PublicUrlController::class, 'data'])->name('public_url.data');
Route::get('/{version}/{url}', [PublicUrlController::class, 'index'])->name('public_url.index');

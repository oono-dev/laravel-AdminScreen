<?php

use App\Http\Controllers\Admin\App\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::middleware(['auth:admin', 'verified:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('dashboard', DashboardController::class)->only('index');
});

require __DIR__.'/auth.php';

Route::prefix('admin')->name('admin.')->group(function() {
    require __DIR__.'/admin.php';
});
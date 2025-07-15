<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', 'dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('project', ProjectController::class)->names('project');
    Route::resource('task', TaskController::class)->names('task');
    Route::resource('profile', ProfileController::class)->names('profile');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

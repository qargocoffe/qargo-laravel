<?php

use App\Http\Controllers\AboutController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FranchisesController;
use App\Http\Controllers\SustainabilityController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\VisitUsController;
use Inertia\Inertia;

Route::get('/sustainabilities', [SustainabilityController::class, 'index']);
Route::get('/teams', [TeamController::class, 'index']);
Route::get('/visit-us', [VisitUsController::class, 'index']);
Route::get('/our-menus', [CategoryController::class, 'index']);
Route::get('/abouts', [AboutController::class, 'index']);
Route::get('/campaign/summer-campaign', [CampaignController::class, 'summerIndex'])->name('campaign.summer');
Route::get('/campaign/lotus-campaign', [CampaignController::class, 'lotusIndex'])->name('campaign.lotus');

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('blogs', BlogController::class);
Route::resource('franchises', FranchisesController::class);

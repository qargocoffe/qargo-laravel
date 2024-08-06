<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SustainabilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Sustainability/Sustainability');
    }
}

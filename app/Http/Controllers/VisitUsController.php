<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VisitUsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('VisitUs/VisitUs');
    }
}

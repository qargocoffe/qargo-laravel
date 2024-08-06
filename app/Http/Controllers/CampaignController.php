<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function lotusIndex()
    {
        return inertia('Campaign/Lotus');
    }


    public function summerIndex()
    {
        return inertia('Campaign/Summer');
    }
}

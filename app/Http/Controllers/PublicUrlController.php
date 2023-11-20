<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicUrlController extends Controller
{
    //index
    public function index(Request $request)
    {
        $url = $request->url;
        $cardData = \App\Models\CardData::where('url', $url)->first();
        if ($cardData) {
            $template = $cardData->card_type;
            return view('public_url.' . $template, compact('cardData'));
        } else {
            return redirect()->route('home');
        }
    }
}

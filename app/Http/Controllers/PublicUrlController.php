<?php

namespace App\Http\Controllers;

use App\Models\CardData;
use Illuminate\Http\Request;

class PublicUrlController extends Controller
{
    //index
    public function index(Request $request)
    {
        $url = $request->url;
        $version = $request->version;
        $cardData = CardData::where('url', $url)->where('version', $version)->first();

        $viewData = [
            'cardData' => $cardData,
            'contacts' => [
                [
                    'name' => $cardData->contact_1_name ?? '',
                    'number' => $cardData->contact_1_number ?? '',
                ],
                [
                    'name' => $cardData->contact_2_name ?? '',
                    'number' => $cardData->contact_2_number ?? '',
                ],
                [
                    'name' => $cardData->contact_3_name ?? '',
                    'number' => $cardData->contact_3_number ?? '',
                ],
                [
                    'name' => $cardData->contact_4_name ?? '',
                    'number' => $cardData->contact_4_number ?? '',
                ],
            ],
        ];

        if ($cardData) {
            $template = $cardData->card_type;
            return view('ecard.' . $template, $viewData);
        } else {
            dd('tiada data');
            return redirect()->route('home');
        }
    }
}

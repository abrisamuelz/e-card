<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardData extends Model
{
    use HasFactory;

    const TABLE_NAME = 'card_data';
    protected $table = self::TABLE_NAME;
}

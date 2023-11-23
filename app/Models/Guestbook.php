<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guestbook extends Model
{
    use HasFactory;

    const TABLE_NAME = 'guestbook';
    protected $table = self::TABLE_NAME;

    protected $guarded = [];

    public function cardData()
    {
        return $this->belongsTo(CardData::class, 'event_id', 'event_id');
    }
}

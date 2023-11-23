<?php

namespace Database\Seeders;

use App\Models\Guestbook;
use Illuminate\Database\Seeder;

class GuestbookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guestbook = new Guestbook();
        $guestbook->event_id = 'NQnIg2LnY1';
        $guestbook->nama = 'John Doe';
        $guestbook->ucapan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nisl.';
        $guestbook->save();

        $guestbook = new Guestbook();
        $guestbook->event_id = 'NQnIg2LnY1';
        $guestbook->nama = 'Ricky';
        $guestbook->ucapan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nisl.';
        $guestbook->save();
    }
}

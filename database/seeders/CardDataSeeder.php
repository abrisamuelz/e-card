<?php

namespace Database\Seeders;

use App\Models\CardData;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CardDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $card_1 = new CardData();
        $card_1->url = 'Allyn-Abrisam-Wedding';
        $card_1->author = 'abrisam (admin)';
        $card_1->nama_pengantin = 'nurfazlin binti mohd fauzi';
        $card_1->nama_pasangan = 'abrisam bin zahari';
        $card_1->nama_samaran_pengantin = 'Allyn';
        $card_1->nama_samaran_pasangan = 'Abrisam';
        $card_1->nama_ayah_pengantin = 'mohd fauzi bin yunus';
        $card_1->nama_ibu_pengantin = 'azlinda binti kasim';
        $card_1->ucapan_pembukaan = 'Assalamualaikum wbt. Dengan nama Allah yang Maha Pemurah lagi Maha Penyayang, kami memohon kehadiran Tuan/Puan/Encik/Cik/Dr/Prof untuk menghadiri majlis perkahwinan anakananda kesayangan kami.';
        $card_1->lokasi = 'Emerald Wedding Hall, Alliyah Castle, Level 3, Anggun City 1, Rawang';
        $card_1->link_map_google = 'https://maps.app.goo.gl/oAMFT1DDExrGLsFU8';
        $card_1->link_map_waze = 'https://ul.waze.com/ul?place=ChIJZa7k8QFdzDERy53ftY0Eilw&ll=3.31842160%2C101.53633090&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location';
        $card_1->tarikh_majlis = '2021-12-24';
        $card_1->masa_mula = '11:00:00';
        $card_1->masa_akhir = '16:00:00';
        $card_1->masa_bersanding = '12:00:00';
        $card_1->tarikh_nikah = '2021-12-24 09:00:00';
        $card_1->contact_1_name = 'norsyawaki nawi';
        $card_1->contact_1_number = '012-3406 309';
        $card_1->contact_2_name = 'fauzi';
        $card_1->contact_2_number = '011-5887 2950';
        $card_1->contact_3_name = 'linda';
        $card_1->contact_3_number = '019-3030 250';
        $card_1->contact_4_name = 'ashykeen';
        $card_1->contact_4_number = '011-6054 959';
        $card_1->nama_bank = 'CIMB Bank';
        $card_1->no_akaun = '7014595771';
        $card_1->atas_nama = 'abrisam bin zahari';
        $card_1->qr_img_url = 'nope';

        $card_1->save();


    }
}

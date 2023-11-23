<?php

namespace Database\Seeders;

use App\Models\CardData;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
        // random text and number generator for event_id 
        $card_1->event_id = 'NQnIg2LnY1';
        $card_1->nama_pengantin = 'nurfazlin binti mohd fauzi';
        $card_1->nama_pasangan = 'abrisam bin zahari';
        $card_1->nama_samaran_pengantin = 'Allyn';
        $card_1->nama_samaran_pasangan = 'Abrisam';
        $card_1->nama_ayah_pengantin = 'mohd fauzi bin yunus';
        $card_1->nama_ibu_pengantin = 'azlinda binti kasim';
        $card_1->ucapan_pembukaan = "Dengan penuh kesyukuran kehadrat Illahi, kami mempersilakan Dato'/Datin/Dr/Tuan/Puan/Encik/Cik ke walimatulurus anakanda kesayangan kami";
        $card_1->lokasi = 'Emerald Wedding Hall, Alliyah Castle, Level 3, Anggun City 1, Rawang';
        $card_1->link_map_google = 'https://maps.app.goo.gl/oAMFT1DDExrGLsFU8';
        $card_1->embed_map = '<iframe class="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.128421069584!2d101.5363309!3d3.3184215999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc5d01f1e4ae65%3A0x5c8a048db5df9dcb!2sALIYYAH%20CASTLE%20WEDDING%20%26%20EVENT!5e0!3m2!1sen!2smy!4v1700590967539!5m2!1sen!2smy" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        $card_1->link_map_waze = 'https://ul.waze.com/ul?place=ChIJZa7k8QFdzDERy53ftY0Eilw&ll=3.31842160%2C101.53633090&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location';
        $card_1->tarikh_majlis = '2023-12-24';
        $card_1->masa_mula = '11:00:00';
        $card_1->masa_akhir = '16:00:00';
        $card_1->masa_bersanding = '12:00:00';
        $card_1->tarikh_nikah = '2023-12-24 09:00:00';
        $card_1->contact_1_name = 'norsyawaki nawi';
        $card_1->contact_1_number = '0123406309';
        $card_1->contact_2_name = 'fauzi';
        $card_1->contact_2_number = '01158872950';
        $card_1->contact_3_name = 'linda';
        $card_1->contact_3_number = '0193030250';
        $card_1->contact_4_name = 'ashykeen';
        $card_1->contact_4_number = '0116054959';
        $card_1->nama_bank = 'CIMB Bank';
        $card_1->no_akaun = '7014595771';
        $card_1->atas_nama = 'abrisam bin zahari';
        $card_1->qr_img_url = 'nope';
        $card_1->hashtag = 'AllynAbriWedding';

        $card_1->save();


    }
}

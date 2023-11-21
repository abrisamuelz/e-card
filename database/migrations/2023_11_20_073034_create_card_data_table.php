<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('card_data', function (Blueprint $table) {
            $table->id();

            $table->string('version')->default('v1');
            $table->string('url');
            $table->string('author')->nullable();

            $table->string('nama_pengantin')->nullable();
            $table->string('nama_pasangan')->nullable();

            $table->string('nama_samaran_pengantin')->nullable();
            $table->string('nama_samaran_pasangan')->nullable();

            $table->string('nama_ayah_pengantin')->nullable();
            $table->string('nama_ibu_pengantin')->nullable();

            $table->longText('ucapan_pembukaan')->nullable();

            $table->string('lokasi')->nullable();
            $table->string('link_map_google')->nullable();
            $table->mediumText('embed_map')->nullable();
            $table->string('link_map_waze')->nullable();

            $table->date('tarikh_majlis')->nullable();
            $table->time('masa_mula')->nullable();
            $table->time('masa_akhir')->nullable();
            $table->time('masa_bersanding')->nullable();

            $table->dateTime('tarikh_nikah')->nullable();

            $table->string('contact_1_name')->nullable();
            $table->string('contact_1_number')->nullable();

            $table->string('contact_2_name')->nullable();
            $table->string('contact_2_number')->nullable();

            $table->string('contact_3_name')->nullable();
            $table->string('contact_3_number')->nullable();

            $table->string('contact_4_name')->nullable();
            $table->string('contact_4_number')->nullable();

            $table->string('nama_bank')->nullable();
            $table->string('no_akaun')->nullable();
            $table->string('atas_nama')->nullable();
            $table->string('qr_img_url')->nullable();

            $table->string('hashtag')->nullable();

            $table->string('card_type')->default('floral_1');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card_data');
    }
};

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
        Schema::create('invitation_media', function (Blueprint $table) {
            $table->id("invitation_media_id");
            $table->foreignId("invitation_id")->constrained("invitations")->references("invitation_id")->onDelete('cascade');
            $table->foreignId("media_id")->constrained("media")->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};

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
        Schema::create('invitations', function (Blueprint $table) {
            $table->id("invitation_id");
            $table->foreignId("cover_image")->nullable()->constrained("media")->nullOnDelete();
            $table->foreignId("template_id")->nullable()->constrained("templates")->references('template_id')->nullOnDelete();
            $table->foreignId("groom_id")->nullable()->constrained("bridegrooms")->references('bridegroom_id')->nullOnDelete();
            $table->foreignId("bride_id")->nullable()->constrained("bridegrooms")->references('bridegroom_id')->nullOnDelete();
            $table->unsignedBigInteger("music_id")->nullable()->default(null);
            $table->foreign('music_id')->references('music_id')->on('musics')->nullOnDelete();
            $table->string("slug")->unique();
            $table->json("love_story")->nullable();
            $table->json("events");
            $table->boolean("muslim");
            $table->json("gift")->nullable();
            $table->boolean("isActive");
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

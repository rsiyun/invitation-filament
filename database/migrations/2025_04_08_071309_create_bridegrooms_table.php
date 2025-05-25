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
        Schema::create('bridegrooms', function (Blueprint $table) {
            $table->id("bridegroom_id");
            $table->foreignId("media_id")->nullable()->constrained("media")->nullOnDelete("cascade");
            $table->string("full_name");
            $table->string("nick_name");
            $table->string("mother_name");
            $table->string("father_name");
            $table->string("which_child");
            $table->string("instagram");
            $table->boolean("gender");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bridegrooms');
    }
};

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    use HasFactory;
    protected $table = "musics";
    protected $primaryKey = "music_id";
    protected $guarded = ["music_id"];
}

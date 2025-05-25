<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Template extends Model
{
    use HasFactory;
    protected $table = "templates";
    protected $primaryKey = "template_id";
    protected $guarded = ["template_id"];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($template) {
            $template->slug = Str::slug($template->name . '-' . Str::random(5));
        });
    }
}

<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;
    protected $table = "invitations";
    protected $primaryKey = "invitation_id";
    protected $guarded = ["invitation_id"];

    protected $casts = [
        'events' => 'array',
        'love_story' => 'array',
        'gift' => 'array',
    ];

    public function bridegrooms(){
        return $this->hasMany(Bridegroom::class, 'invitation_id', 'invitation_id');
    }
    public function music()
    {
        return $this->belongsTo(Music::class, 'music_id', 'music_id');
    }
    public function media()
    {
        return $this->belongsToMany(Media::class, 'invitation_media', 'invitation_id', 'media_id')->using(InvitationMedia::class)->withTimestamps();
    }

}

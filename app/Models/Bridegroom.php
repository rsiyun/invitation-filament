<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bridegroom extends Model
{
    use HasFactory;
    protected $primaryKey = "bridegroom_id";
    protected $guarded = ["bridegroom_id"];
    public function invitation()
    {
        return $this->belongsTo(Invitation::class, 'invitation_id', 'invitation_id');
    }
}

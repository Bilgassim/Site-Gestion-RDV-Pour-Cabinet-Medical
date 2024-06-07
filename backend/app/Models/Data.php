<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;

    protected $fillable = [
        'field1', // Ajouter les champs qui peuvent être remplis
        'field2',
        // etc.
    ];
}
